"""empty message

Revision ID: 67dd631e970e
Revises: 
Create Date: 2024-05-21 12:32:20.436599

"""
from alembic import op
import sqlalchemy as sa


# revision identifiers, used by Alembic.
revision = '67dd631e970e'
down_revision = None
branch_labels = None
depends_on = None


def upgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    with op.batch_alter_table('blog_post', schema=None) as batch_op:
        batch_op.add_column(sa.Column('date', sa.DateTime(), nullable=False))

    # ### end Alembic commands ###


def downgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    with op.batch_alter_table('blog_post', schema=None) as batch_op:
        batch_op.drop_column('date')

    # ### end Alembic commands ###