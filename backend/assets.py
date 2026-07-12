from fastapi import APIRouter, Body
from database import get_connection

router = APIRouter()

# Get all assets
@router.get("/assets")
def get_assets():

    conn = get_connection()
    cursor = conn.cursor()

    cursor.execute("""
        SELECT
            a.asset_id,
            a.asset_code,
            a.asset_name,
            c.category_name,
            a.location,
            a.status,
            a.purchase_date
        FROM assets a
        LEFT JOIN asset_categories c
        ON a.category_id = c.category_id
        ORDER BY a.asset_id DESC
    """)

    data = [dict(row) for row in cursor.fetchall()]
    conn.close()

    return data


# Add new asset
@router.post("/assets")
def add_asset(asset: dict = Body(...)):

    conn = get_connection()
    cursor = conn.cursor()

    cursor.execute("""
        INSERT INTO assets(
            asset_code,
            asset_name,
            category_id,
            status,
            purchase_date,
            location
        )
        VALUES(?,?,?,?,?,?)
    """,(
        asset["asset_code"],
        asset["asset_name"],
        asset["category_id"],
        asset["status"],
        asset["purchase_date"],
        asset["location"]
    ))

    conn.commit()
    conn.close()

    return {"message":"Asset Added Successfully"}