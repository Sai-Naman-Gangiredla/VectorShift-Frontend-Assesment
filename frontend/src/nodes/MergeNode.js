import BaseNode from "./BaseNode";

export default function MergeNode({ id }) {
  return (
    <BaseNode
      id={id}
      title="Merge"
      inputs={[
        { id: "in1", label: "Input 1" },
        { id: "in2", label: "Input 2" }
      ]}
      outputs={[
        { id: "out", label: "Output" }
      ]}
    >
      <div style={{ fontSize: 12 }}>
        Merge inputs
      </div>
    </BaseNode>
  );
}
