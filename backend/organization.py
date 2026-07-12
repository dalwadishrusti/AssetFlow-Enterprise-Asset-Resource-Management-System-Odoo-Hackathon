from fastapi import APIRouter, HTTPException
from database import get_all_departments

router = APIRouter(prefix="/api", tags=["Organization"])


@router.get("/departments")
def list_departments():
    try:
        departments = get_all_departments()
        return departments
    except Exception as exc:
        raise HTTPException(status_code=500, detail=str(exc))