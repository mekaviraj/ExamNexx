"""Seed script for local development.

Run with:

python apps/api/app/scripts/seed_db.py

This creates a demo user, subject, topic, exam, question, and a mistake record.
"""
from datetime import datetime
from app.db import engine, SessionLocal, Base
from app import models


def seed():
    # ensure tables exist
    Base.metadata.create_all(bind=engine)

    db = SessionLocal()
    try:
        # Demo user
        user = db.query(models.User).filter(models.User.email == "demo@examnexx.test").first()
        if not user:
            user = models.User(email="demo@examnexx.test", full_name="Demo User")
            db.add(user)
            db.commit()
            db.refresh(user)

        # Subject & topic
        subject = db.query(models.Subject).filter(models.Subject.name == "Chemistry").first()
        if not subject:
            subject = models.Subject(name="Chemistry")
            db.add(subject)
            db.commit()
            db.refresh(subject)

        topic = db.query(models.Topic).filter(models.Topic.name == "Organic Chemistry").first()
        if not topic:
            topic = models.Topic(name="Organic Chemistry", subject_id=subject.id)
            db.add(topic)
            db.commit()
            db.refresh(topic)

        # Exam and Question
        exam = db.query(models.Exam).filter(models.Exam.title == "Demo Exam").first()
        if not exam:
            exam = models.Exam(title="Demo Exam")
            db.add(exam)
            db.commit()
            db.refresh(exam)

        question = db.query(models.Question).filter(models.Question.text.ilike("%SN1 vs SN2%"))
        question = question.first() if question is not None else None
        if not question:
            question = models.Question(
                exam_id=exam.id,
                text="Which mechanism (SN1 or SN2) is favored for tertiary alkyl halides?",
                correct_answer="SN1",
                explanation="Tertiary centers favor SN1 due to carbocation stability.",
                subject_id=subject.id,
                topic_id=topic.id,
                difficulty="medium",
            )
            db.add(question)
            db.commit()
            db.refresh(question)

        # Mistake
        existing = db.query(models.Mistake).filter(
            models.Mistake.user_id == user.id,
            models.Mistake.question_id == question.id,
        ).first()
        if not existing:
            m = models.Mistake(
                user_id=user.id,
                exam_id=exam.id,
                question_id=question.id,
                selected_answer="SN2",
                correct_answer=question.correct_answer,
                subject=subject.name,
                topic=topic.name,
                difficulty=question.difficulty,
                explanation=question.explanation,
                timestamp=datetime.utcnow(),
            )
            db.add(m)
            db.commit()
            db.refresh(m)
            print(f"Created mistake id={m.id} for user id={user.id}")
        else:
            print("Demo mistake already exists")

    finally:
        db.close()


if __name__ == "__main__":
    seed()
