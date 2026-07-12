from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from database import create_tables,get_connection
from dashboard import router as dashboard_router
from assets import router as assets_router

# ============================
# Create FastAPI Application
# ============================

app = FastAPI(
    title="AssetFlow API",
    description="Enterprise Asset & Resource Management System",
    version="1.0.0"
)
app.include_router(dashboard_router)
app.include_router(assets_router)

# ============================
# Create SQLite Database Tables
# ============================

create_tables()

# ============================
# Enable CORS (React Frontend)
# ============================

app.add_middleware(
    CORSMiddleware,
    allow_origins=[
        "http://localhost:3000",  # React (CRA)
        "http://localhost:5173",  # React (Vite)
    ],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# ============================
# Import API Routers
# (Uncomment as you create them)
# ============================

# from auth import router as auth_router
# from routes.dashboard import router as dashboard_router
# from routes.assets import router as assets_router
# from routes.allocation import router as allocation_router
# from routes.maintenance import router as maintenance_router
# from routes.resource import router as resource_router
# from routes.audit import router as audit_router

# ============================
# Register Routers
# ============================

# app.include_router(auth_router)
# app.include_router(dashboard_router)
# app.include_router(assets_router)
# app.include_router(allocation_router)
# app.include_router(maintenance_router)
# app.include_router(resource_router)
# app.include_router(audit_router)

# ============================
# Root API
# ============================

@app.get("/")
def home():
    return {
        "status": "success",
        "message": "AssetFlow Backend Running 🚀",
        "version": "1.0.0"
    }

# ============================
# Health Check
# ============================

@app.get("/health")
def health():
    return {
        "status": "healthy"
    }