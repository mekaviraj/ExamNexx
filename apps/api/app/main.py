from fastapi import FastAPI

from app.api.health import router as health_router

app = FastAPI(title="ExamNexx API", version="0.1.0")

app.include_router(health_router, prefix="/api")


@app.get("/")
async def root() -> dict[str, str]:
    return {"service": "examnexx-api", "status": "ok"}
