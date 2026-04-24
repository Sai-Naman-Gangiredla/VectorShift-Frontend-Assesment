import { useStore } from "./store";

export function SubmitButton() {
  const nodes = useStore((state) => state.nodes);
  const edges = useStore((state) => state.edges);

  const handleSubmit = async () => {
    try {
      const response = await fetch("http://127.0.0.1:8000/pipeline", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ nodes, edges }),
      });

      if (!response.ok) {
        throw new Error("Request failed");
      }

      const data = await response.json();
      console.log("Backend response:", data);

      alert(
        `Pipeline submitted!\nNodes: ${data.num_nodes}\nEdges: ${data.num_edges}\nDAG: ${data.is_dag}`
      );
    } catch (err) {
      console.error(err);
      alert("Failed to submit pipeline");
    }
  };

  return <button onClick={handleSubmit}>Submit</button>;
}
