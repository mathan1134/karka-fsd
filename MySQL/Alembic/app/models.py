from sqlalchemy import Column, BigInteger, String, create_engine
from sqlalchemy.ext.declarative import declarative_base
from sqlalchemy.orm import sessionmaker

Base = declarative_base()

class Student(Base):
    __tablename__ = 'student_ver'

    id = Column(BigInteger, primary_key=True, index=True)
    name = Column(String(100), index=True) 
    place = Column(String(100))  
    mobile_num = Column(BigInteger)  
    course = Column(String(100))  

# Create the engine
engine = create_engine('mysql://root:Ma1026%40@localhost:3306/karka')

# Create the database tables
Base.metadata.create_all(bind=engine)

# Create a session
Session = sessionmaker(bind=engine)

# Use a context manager to ensure proper session handling
with Session() as session:
    try:
        # Perform database operations here
        pass  # Placeholder for your database operations
        
        # Commit the transaction
        session.commit()
    except Exception as e:
        # Handle exceptions
        session.rollback()
        print(f"An error occurred: {e}")
