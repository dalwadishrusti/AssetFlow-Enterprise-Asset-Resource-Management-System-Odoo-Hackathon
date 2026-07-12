# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh


# AssetFlow  
## Enterprise Asset & Resource Management System

AssetFlow is a centralized **Enterprise Asset & Resource Management Platform** designed to help organizations digitally manage their physical assets, shared resources, maintenance workflows, audits, and operational activities.

The system replaces traditional spreadsheets and manual tracking methods with a structured ERP-style solution that provides real-time visibility into:

- What assets exist
- Who is using them
- Where assets are located
- Current asset condition
- Maintenance status
- Resource availability
- Organizational activity history

AssetFlow is designed to be industry-independent and can be used by organizations such as offices, schools, hospitals, factories, government agencies, and enterprises.

---

# Project Vision

Organizations often struggle with:

- Manual asset tracking
- Spreadsheet dependency
- Lost asset records
- Allocation conflicts
- Poor maintenance visibility
- Lack of accountability

AssetFlow solves these challenges by providing a complete digital lifecycle management system for assets and resources.

The platform focuses on:

Centralized asset management  
Role-based access control  
Automated workflows  
Conflict prevention  
Maintenance tracking  
Audit management  
Real-time dashboards and reporting  

---

# Mission

The mission of AssetFlow is to build a user-friendly ERP solution that simplifies how organizations manage their resources.

The system enables organizations to:

- Manage departments and employees
- Register and track assets
- Allocate assets securely
- Manage shared resources
- Handle maintenance approvals
- Perform asset audits
- Generate operational insights
- Maintain complete activity history

---

# Key Features

## 1. Authentication & User Management

### Login / Signup

Features:

- Secure email and password authentication
- Employee-based signup system
- No self-assigned admin roles
- Session validation
- Password recovery support

Role assignment is controlled only by administrators through the employee directory.

---

# 2. Operational Dashboard

The dashboard provides real-time business visibility through KPI cards.

### Dashboard Metrics

- Total Assets Available
- Allocated Assets
- Maintenance Requests
- Active Bookings
- Pending Transfers
- Upcoming Returns
- Overdue Returns

### Quick Actions

- Register Asset
- Book Resource
- Raise Maintenance Request

---

# 3. Organization Setup (Admin Module)

Admin manages the foundation data required by the ERP system.

## Department Management

Capabilities:

- Create departments
- Edit departments
- Activate/deactivate departments
- Assign department heads
- Support department hierarchy

---

## Asset Category Management

Examples:

- Electronics
- Furniture
- Vehicles
- Equipment

Supports:

- Category creation
- Category modification
- Custom category attributes

---

## Employee Directory

Admin can:

- View employees
- Assign departments
- Change account status
- Promote employees to:

  - Department Head
  - Asset Manager

---

# 4. Asset Registration & Directory

Complete asset lifecycle tracking.

## Asset Registration

Each asset contains:

- Asset Name
- Category
- Auto-generated Asset Tag
- Serial Number
- Acquisition Date
- Acquisition Cost
- Condition
- Location
- Documents / Images
- Shared Resource Flag


Example Asset Tag:

```
AF-0001
AF-0002
AF-0003
```

---

## Asset Lifecycle States

Assets move through different states:

```
Available
    ↓
Allocated
    ↓
Reserved
    ↓
Under Maintenance
    ↓
Lost
    ↓
Retired
    ↓
Disposed
```

---

# 5. Asset Allocation & Transfer

Manages ownership and movement of assets.

Features:

- Allocate assets to employees/departments
- Prevent duplicate allocation
- Track allocation history
- Transfer requests
- Return management
- Overdue return detection


Example:

```
Laptop AF-0114

Current Holder:
Priya Patel

Raj requests same laptop

System Response:
Allocation blocked

Available Action:
Create Transfer Request
```

---

# 6. Resource Booking System

Designed for shared resources:

Examples:

- Meeting rooms
- Vehicles
- Equipment

Features:

- Calendar-based booking
- Time-slot management
- Conflict prevention
- Cancel booking
- Reschedule booking
- Booking reminders


Overlap Prevention:

```
Existing Booking:
09:00 - 10:00


New Request:
09:30 - 10:30

Result:
Rejected
```

---

# 7. Maintenance Management

Complete repair workflow management.

## Maintenance Workflow

```
Pending

↓

Approved / Rejected

↓

Technician Assigned

↓

In Progress

↓

Resolved
```

Features:

- Raise maintenance requests
- Attach issue images
- Set priority
- Approval workflow
- Maintenance history
- Automatic asset status update


Example:

```
Before Approval:

Asset Status:
Available


After Approval:

Asset Status:
Under Maintenance
```

---

# 8. Asset Audit Management

Provides structured asset verification.

Features:

- Create audit cycles
- Assign auditors
- Verify assets
- Generate discrepancy reports
- Lock completed audits
- Maintain audit history


Audit Results:

```
Verified
Missing
Damaged
```

---

# 9. Reports & Analytics

Provides operational insights.

Reports include:

- Asset utilization trends
- Idle assets
- Maintenance frequency
- Department allocation summary
- Retirement prediction
- Booking heatmap
- Exportable reports

---

# 10. Notifications & Activity Logs

Tracks every important system action.

Notifications:

- Asset Assigned
- Maintenance Approved
- Maintenance Rejected
- Booking Confirmation
- Transfer Approval
- Return Reminder
- Audit Discrepancy


Activity logs record:

```
User
Action
Date & Time
Module
Changes
```

---

# User Roles

## Admin

Responsibilities:

- Manage organization setup
- Manage employees
- Assign roles
- Create audit cycles
- View analytics


---

## Asset Manager

Responsibilities:

- Register assets
- Allocate assets
- Approve transfers
- Approve maintenance
- Manage asset lifecycle


---

## Department Head

Responsibilities:

- View department assets
- Approve department requests
- Manage department resources


---

## Employee

Responsibilities:

- View assigned assets
- Book resources
- Raise maintenance requests
- Request returns/transfers

---

# System Workflow

```
Admin Setup

        ↓

Create Departments
Create Categories
Add Employees

        ↓

Assign Roles

        ↓

Asset Manager Registers Assets

        ↓

Assets Become Available

        ↓

Allocation / Booking

        ↓

Maintenance / Audit

        ↓

Reports & Notifications
```

---

# Technology Stack

## Frontend

- React.js
- Node.js
- JavaScript
- CSS
- Responsive UI Design


## Backend

- FastAPI
- Python


## Database

- SQLite


## Development Tools

- Git
- GitHub
- VS Code

---

# Installation & Setup

# Backend Setup

Navigate to backend:

```bash
cd backend
```

Run backend:

```bash
uvicorn main:app --reload
```

Backend runs on:

```
http://localhost:8000
```

---

# Frontend Setup

Navigate to frontend:

Install packages:

```bash
npm install
```

Start application:

```bash
npm run dev
```

Frontend runs on:

```
http://localhost:5173
```

---

# Detailed Folder Structure

```
AssetFlow
│
├── backend
│   │
│   ├── main.py
│   ├── database.py
│   ├── assets.py
│   ├── dashboad.py
│
│
└── frontend
    │
    └── src
        │
        ├── pages
        │   │
        │   ├── Login
        │   ├── Dashboard
        │   ├── AssetManagement
        │   ├── Allocation
        │   ├── Booking
        │   ├── Maintenance
        │   ├── Audit
        │   ├── Reports
        │   └── Notifications
        │
        ├── CSS
        │
        ├── Components
        │
        └── Assets
```

---

# Security & Access Control

AssetFlow follows ERP security principles:

- Role-based permissions
- Controlled privilege escalation
- Secure authentication
- Activity tracking
- Workflow approvals

---

# Future Enhancements

Possible improvements:

- QR Code asset scanning
- Mobile application
- AI-based maintenance prediction
- Advanced analytics dashboard
- Email and SMS notifications
- Multi-organization support

---

# Hackathon Project

**Project Name:** AssetFlow  
**Category:** Enterprise Asset & Resource Management ERP  
**Goal:** Digitize asset operations and improve organizational efficiency through automation.

---

# admin email
admin@assetflow.com
