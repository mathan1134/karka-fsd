"""task

Revision ID: 804f3e578624
Revises: 
Create Date: 2024-02-06 11:44:40.654189

"""
from typing import Sequence, Union

from alembic import op
import sqlalchemy as sa


# revision identifiers, used by Alembic.
revision: str = '804f3e578624'
down_revision: Union[str, None] = None
branch_labels: Union[str, Sequence[str], None] = None
depends_on: Union[str, Sequence[str], None] = None


def upgrade() -> None:
     op.create_table(
        'staffs',
        sa.Column('id', sa.Integer, primary_key=True, autoincrement = True),
        sa.Column('name', sa.String(50), nullable=True),
        sa.Column('place', sa.String(50), nullable=True),
        sa.Column('mobile_num', sa.Integer, nullable=True),
        sa.Column('course', sa.String(50), nullable=True),
        
    )


def downgrade() -> None:
    pass
