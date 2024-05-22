from flask import Flask, render_template, request, jsonify, redirect, url_for, flash
from flask_sqlalchemy import SQLAlchemy
from datetime import datetime, timezone
from flask_migrate import Migrate
from flask_cors import CORS
from forms import BlogPostForm



app = Flask(__name__)
CORS(app, resources={r"/*": {"origins": "http://localhost:3000"}})
app.config['SECRET_KEY'] = '\x96\xfb\xdb\xe1\xf4\x91\xc0\xd0\x90\x01\xae\xa8'
app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///blog.db'
app.config['SQLACLHEMY_TRACK_MODIFICATIONS'] = False
db = SQLAlchemy(app)
migrate = Migrate(app, db)


class BlogPost(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    title = db.Column(db.String(100), nullable=False)
    content = db.Column(db.Text, nullable=False)
    date = db.Column(db.DateTime, nullable=False, default=datetime.now(timezone.utc))

class Comment(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    post_id = db.Column(db.Integer, db.ForeignKey('blog_post.id'), nullable=False)
    content = db.Column(db.Text, nullable=False)

@app.route('/')
def home():
    posts = BlogPost.query.order_by(BlogPost.date.desc()).all()
    return render_template('home.html', posts=posts)

@app.route('/new_post', methods=['GET', 'POST'])
def new_post():
    form = BlogPostForm()
    if form.validate_on_submit():
        post = BlogPost(title=form.title.data, content=form.content.data)
        db.session.add(post)
        db.session.commit()
        flash('Your post has been created!', 'success')
        return redirect(url_for('home'))
    return render_template('create_post.html', form=form)

@app.route('/posts', methods=['GET', 'POST'])
def handle_posts():
    if request.method == 'POST':
        data = request.get_json()
        new_post = BlogPost(title=data['title'], content=data['content'])
        db.session.add(new_post)
        db.session.commit()
        return jsonify({'message': 'Post created!'}), 201
    elif request.method == 'GET':
        posts = BlogPost.query.all()
        formatted_posts = ([{'id': post.id, 'title': post.title, 'content': post.content, 'date': post.date.strftime("%A %d.%m.%Y")} for post in posts])
        return jsonify(formatted_posts)


if __name__ == '__main__':
    with app.app_context():
        db.create_all()
    app.run(debug=True)