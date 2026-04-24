from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel
from typing import List, Dict

app = FastAPI()

# -----------------------------
# CORS (REQUIRED)
# -----------------------------
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],  # OK for local dev / assessment
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# -----------------------------
# Data models
# -----------------------------
class Edge(BaseModel):
    source: str
    target: str

class PipelineRequest(BaseModel):
    nodes: List[Dict]
    edges: List[Edge]

# -----------------------------
# DAG check (Kahn’s Algorithm)
# -----------------------------
def is_dag(nodes, edges):
    graph = {}
    indegree = {}

    for node in nodes:
        node_id = node["id"]
        graph[node_id] = []
        indegree[node_id] = 0

    for edge in edges:
        graph[edge.source].append(edge.target)
        indegree[edge.target] += 1

    queue = [n for n in indegree if indegree[n] == 0]
    visited = 0

    while queue:
        current = queue.pop(0)
        visited += 1
        for neighbor in graph[current]:
            indegree[neighbor] -= 1
            if indegree[neighbor] == 0:
                queue.append(neighbor)

    return visited == len(nodes)

# -----------------------------
# Routes
# -----------------------------
@app.get("/")
def root():
    return {"status": "Backend running"}

@app.post("/pipeline")
def submit_pipeline(data: PipelineRequest):
    return {
        "num_nodes": len(data.nodes),
        "num_edges": len(data.edges),
        "is_dag": is_dag(data.nodes, data.edges),
    }
