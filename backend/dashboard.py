from fastapi import APIRouter
from database import get_connection


router = APIRouter(
    prefix="/dashboard",
    tags=["Dashboard"]
)



@router.get("/")
def dashboard_data():

    conn = get_connection()

    cursor = conn.cursor()


    # Available Assets

    cursor.execute("""
        SELECT COUNT(*) 
        FROM assets
        WHERE status='Available'
    """)

    assets_available = cursor.fetchone()[0]



    # Allocated Assets

    cursor.execute("""
        SELECT COUNT(*)
        FROM asset_allocations
        WHERE status='Active'
    """)

    assets_allocated = cursor.fetchone()[0]



    # Maintenance Today

    cursor.execute("""
        SELECT COUNT(*)
        FROM maintenance_requests
        WHERE DATE(created_at)=DATE('now')
    """)

    maintenance_today = cursor.fetchone()[0]



    # Active Bookings

    cursor.execute("""
        SELECT COUNT(*)
        FROM resource_bookings
        WHERE status='Active'
    """)

    active_bookings = cursor.fetchone()[0]



    # Pending Transfers

    cursor.execute("""
        SELECT COUNT(*)
        FROM asset_transfers
        WHERE status='Pending'
    """)

    pending_transfers = cursor.fetchone()[0]



    # Upcoming Returns

    cursor.execute("""
        SELECT COUNT(*)
        FROM asset_allocations
        WHERE expected_return_date
        BETWEEN DATE('now')
        AND DATE('now','+7 day')
    """)

    upcoming_returns = cursor.fetchone()[0]



    # Overdue Returns

    cursor.execute("""
        SELECT COUNT(*)
        FROM asset_allocations
        WHERE expected_return_date < DATE('now')
        AND returned_date IS NULL
    """)

    overdue_returns = cursor.fetchone()[0]



    # Recent Activity

    cursor.execute("""
        SELECT description
        FROM activity_logs
        ORDER BY created_at DESC
        LIMIT 5
    """)


    activities = [
        row[0]
        for row in cursor.fetchall()
    ]



    conn.close()



    return {

        "assetsAvailable":assets_available,

        "assetsAllocated":assets_allocated,

        "maintenanceToday":maintenance_today,

        "activeBookings":active_bookings,

        "pendingTransfers":pending_transfers,

        "upcomingReturns":upcoming_returns,

        "overdueReturns":overdue_returns,

        "recentActivity":activities

    }