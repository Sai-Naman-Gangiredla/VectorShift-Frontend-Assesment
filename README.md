# VectorShift Frontend Technical Assessment

This project is a node-based pipeline editor built using React (React Flow) and FastAPI.

## Features

- Reusable BaseNode abstraction for scalable node creation
- 5 additional node types demonstrating extensibility
- Dynamic TextNode:
  - Parses `{{variables}}`
  - Creates dynamic input handles
- Backend integration:
  - Counts nodes and edges
  - Validates DAG structure

## Tech Stack

- Frontend: React, React Flow
- Backend: FastAPI (Python)

## How to Run

### Frontend
```bash
cd frontend
npm install
npm start
```

### Backend
```bash
cd backend
uvicorn main:app --reload
```
