# Full Stack Internship Assessment

This is a full-stack mini project built as part of my internship technical assessment. The application consists of a Django backend that serves data via a REST API and a React frontend that fetches and displays this data.

## Project Description
The goal of this project was to demonstrate the ability to set up a full-stack environment, create a robust API using Django Rest Framework, and consume that API using a modern React frontend. The app displays a list of interesting programming facts fetched directly from the backend.

## Tech Stack
*   **Backend:** Python, Django, Django Rest Framework (DRF)
*   **Frontend:** React.js (Create React App), CSS3
*   **Deployment:** Render (Backend), Netlify (Frontend)
*   **Version Control:** Git & GitHub

## Folder Structure
```
Intern_task_pyspiders/
├── backend/            # Django Project
│   ├── api/            # App containing views and urls
│   ├── project_core/   # Main settings and configuration
│   ├── venv/           # Virtual environment
│   ├── manage.py
│   └── requirements.txt
└── frontend/           # React Application
    ├── public/
    ├── src/
    │   ├── App.js      # Main component fetching API data
    │   └── App.css     # Styling
    └── package.json
```

## How I Developed This
I built this application in three main steps:

1.  **Backend Setup:**
    - I started by setting up a Python virtual environment and installing Django and Django Rest Framework.
    - I created a Django project and a specific app called `api`.
    - I built a strictly defined API endpoint (`/api/facts/`) that returns a JSON list of hardcoded facts.
    - I configured CORS to allow the frontend to communicate with the backend.

2.  **Frontend Development:**
    - I initialized a React app using `create-react-app`.
    - I used the `useEffect` and `useState` hooks to fetch data from the Django API when the page loads.
    - I styled the UI to be clean and responsive, ensuring the data is presented clearly.

3.  **Integration & Deployment:**
    - I verified that the React app could successfully fetch data from the Django server running locally.
    - I prepared the project for deployment by separating the frontend and backend logic.

## How to Run Locally

### Backend
1.  Navigate to the backend folder:
    ```bash
    cd backend
    ```
2.  Create and activate a virtual environment:
    ```bash
    python -m venv venv
    .\venv\Scripts\activate  # Windows
    # source venv/bin/activate  # Mac/Linux
    ```
3.  Install dependencies:
    ```bash
    pip install -r requirements.txt
    ```
4.  Run the server:
    ```bash
    python manage.py runserver
    ```
    The API will be available at: `http://127.0.0.1:8000/api/facts/`

### Frontend
1.  Open a new terminal and navigate to the frontend folder:
    ```bash
    cd frontend
    ```
2.  Install dependencies:
    ```bash
    npm install
    ```
3.  Start the development server:
    ```bash
    npm start
    ```
    The app will open at: `http://localhost:3000/`

## Deployment Details
*   **Backend URL:** [Link to Render App]
*   **Frontend URL:** [Link to Netlify Site]
*   **GitHub Repository:** [Link to GitHub Repo]

## What I Learned
*   How to structure a full-stack application with separate backend and frontend directories.
*   How to build a RESTful API using Django Rest Framework functions (`@api_view`).
*   How to handle Cross-Origin Resource Sharing (CORS) between different local servers.
*   How to use React Hooks (`useEffect`) to handle asynchronous API calls.
*   The importance of environment isolation using virtual environments.
