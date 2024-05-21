from flask import Flask, request, jsonify
from flask_sqlalchemy import SQLAlchemy
from datetime import datetime, timezone
from flask_migrate import Migrate



app = Flask(__name__)
app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///blog.db'
app.config['SQLACLHEMY_TRACK_MODIFICATIONS'] = False
db = SQLAlchemy(app)
migrate = Migrate(app, db)


class BlogPost(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    title =db.Column(db.String(100), nullable=False)
    content = db.Column(db.Text, nullable=False)
    date = db.Column(db.DateTime, nullable=False, default=datetime.now(timezone.utc))

class Comment(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    post_id = db.Column(db.Integer, db.ForeignKey('blog_post.id'), nullable=False)
    content = db.Column(db.Text, nullable=False)

@app.route('/')
def home():
    return 'Hello, Flask'

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