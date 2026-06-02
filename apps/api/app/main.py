from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

from app.api.health import router as health_router
from app.api.mistakes import router as mistakes_router
from app.db import Base, engine


app = FastAPI(title="ExamNexx API", version="0.1.0")

# Minimal CORS for local development (Next.js dev server)
app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:3000", "http://127.0.0.1:3000"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

app.include_router(health_router, prefix="/api")
app.include_router(mistakes_router, prefix="/api")


@app.on_event("startup")
def on_startup():
    # create DB tables for development/testing environments
    Base.metadata.create_all(bind=engine)


@app.get("/")
async def root() -> dict[str, str]:
    return {"service": "examnexx-api", "status": "ok"}
