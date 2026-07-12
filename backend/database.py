import sqlite3
DATABASE_NAME = "assetflow.db"

def get_connection():
    conn = sqlite3.connect(DATABASE_NAME)
    conn.row_factory = sqlite3.Row
    return conn



def create_tables():

    conn = get_connection()
    cursor = conn.cursor()


    # ==========================
    # USERS TABLE
    # ==========================

    cursor.execute("""
    CREATE TABLE IF NOT EXISTS users(
        user_id INTEGER PRIMARY KEY AUTOINCREMENT,
        name TEXT NOT NULL,
        email TEXT UNIQUE NOT NULL,
        password TEXT NOT NULL,
        role TEXT DEFAULT 'Employee',
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
    )
    """)


    # ==========================
    # ORGANIZATION TABLE
    # ==========================

    cursor.execute("""
    CREATE TABLE IF NOT EXISTS organizations(
        organization_id INTEGER PRIMARY KEY AUTOINCREMENT,
        name TEXT NOT NULL,
        address TEXT,
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
    )
    """)



    # ==========================
    # DEPARTMENTS
    # ==========================

    cursor.execute("""
    CREATE TABLE IF NOT EXISTS departments(
        department_id INTEGER PRIMARY KEY AUTOINCREMENT,
        name TEXT NOT NULL,
        organization_id INTEGER,

        FOREIGN KEY(organization_id)
        REFERENCES organizations(organization_id)
    )
    """)

    default_departments = [
    ("IT",),
    ("HR",),
    ("Finance",),
    ("Admin",),
    ("Asset Manager",),
    ("Training",)]

    cursor.executemany("""INSERT OR IGNORE INTO departments(name)VALUES(?)""", default_departments)



    # ==========================
    # EMPLOYEES
    # ==========================

    cursor.execute("""
    CREATE TABLE IF NOT EXISTS employees(

        employee_id INTEGER PRIMARY KEY AUTOINCREMENT,

        name TEXT NOT NULL,

        email TEXT UNIQUE,

        department_id INTEGER,

        designation TEXT,

        phone TEXT,


        FOREIGN KEY(department_id)
        REFERENCES departments(department_id)

    )
    """)



    # ==========================
    # ASSET CATEGORY
    # ==========================

    cursor.execute("""
    CREATE TABLE IF NOT EXISTS asset_categories(

        category_id INTEGER PRIMARY KEY AUTOINCREMENT,

        category_name TEXT NOT NULL

    )
    """)



    # ==========================
    # ASSETS
    # ==========================

    cursor.execute("""
    CREATE TABLE IF NOT EXISTS assets(

        asset_id INTEGER PRIMARY KEY AUTOINCREMENT,

        asset_code TEXT UNIQUE NOT NULL,

        asset_name TEXT NOT NULL,

        category_id INTEGER,


        status TEXT DEFAULT 'Available',
       
        
        purchase_date DATE,

        location TEXT,


        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,


        FOREIGN KEY(category_id)
        REFERENCES asset_categories(category_id)

    )
    """)



    # ==========================
    # ASSET ALLOCATION
    # ==========================

    cursor.execute("""
    CREATE TABLE IF NOT EXISTS asset_allocations(

        allocation_id INTEGER PRIMARY KEY AUTOINCREMENT,


        asset_id INTEGER,


        employee_id INTEGER,


        allocated_date DATE,


        expected_return_date DATE,


        returned_date DATE,


        status TEXT DEFAULT 'Active',


        FOREIGN KEY(asset_id)
        REFERENCES assets(asset_id),


        FOREIGN KEY(employee_id)
        REFERENCES employees(employee_id)

    )
    """)



    # ==========================
    # ASSET TRANSFER
    # ==========================

    cursor.execute("""
    CREATE TABLE IF NOT EXISTS asset_transfers(

        transfer_id INTEGER PRIMARY KEY AUTOINCREMENT,


        asset_id INTEGER,


        from_employee INTEGER,


        to_employee INTEGER,


        requested_by INTEGER,


        status TEXT DEFAULT 'Pending',


        request_date TIMESTAMP DEFAULT CURRENT_TIMESTAMP,


        FOREIGN KEY(asset_id)
        REFERENCES assets(asset_id)

    )
    """)



    # ==========================
    # MAINTENANCE REQUEST
    # ==========================

    cursor.execute("""
    CREATE TABLE IF NOT EXISTS maintenance_requests(

        request_id INTEGER PRIMARY KEY AUTOINCREMENT,


        asset_id INTEGER,


        raised_by INTEGER,


        issue_description TEXT,


        priority TEXT DEFAULT 'Medium',


        image TEXT,


        status TEXT DEFAULT 'Pending',


        technician_id INTEGER,


        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,


        FOREIGN KEY(asset_id)
        REFERENCES assets(asset_id)

    )
    """)



    # ==========================
    # RESOURCES
    # ==========================

    cursor.execute("""
    CREATE TABLE IF NOT EXISTS resources(

        resource_id INTEGER PRIMARY KEY AUTOINCREMENT,


        resource_name TEXT NOT NULL,


        resource_type TEXT,


        status TEXT DEFAULT 'Available'

    )
    """)



    # ==========================
    # RESOURCE BOOKINGS
    # ==========================

    cursor.execute("""
    CREATE TABLE IF NOT EXISTS resource_bookings(

        booking_id INTEGER PRIMARY KEY AUTOINCREMENT,


        resource_id INTEGER,


        booked_by INTEGER,


        start_time DATETIME,


        end_time DATETIME,


        status TEXT DEFAULT 'Active',


        FOREIGN KEY(resource_id)
        REFERENCES resources(resource_id)

    )
    """)



    # ==========================
    # AUDIT LOGS
    # ==========================

    cursor.execute("""
    CREATE TABLE IF NOT EXISTS audit_logs(

        audit_id INTEGER PRIMARY KEY AUTOINCREMENT,


        user_id INTEGER,


        action TEXT,


        module TEXT,


        timestamp TIMESTAMP DEFAULT CURRENT_TIMESTAMP

    )
    """)



    # ==========================
    # ACTIVITY LOGS
    # ==========================

    cursor.execute("""
    CREATE TABLE IF NOT EXISTS activity_logs(

        log_id INTEGER PRIMARY KEY AUTOINCREMENT,


        user_id INTEGER,


        action TEXT,


        module TEXT,


        description TEXT,


        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP

    )
    """)



    # ==========================
    # NOTIFICATIONS
    # ==========================

    cursor.execute("""
    CREATE TABLE IF NOT EXISTS notifications(

        notification_id INTEGER PRIMARY KEY AUTOINCREMENT,


        user_id INTEGER,


        message TEXT,


        status TEXT DEFAULT 'Unread',


        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP

    )
    """)



    conn.commit()
    conn.close()


    print("Database tables created successfully!")



if __name__ == "__main__":
    create_tables()