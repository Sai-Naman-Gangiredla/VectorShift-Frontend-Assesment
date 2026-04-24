import BaseNode from "./BaseNode";

export default function DelayNode({ id }) {
  return (
    <BaseNode
      id={id}
      title="Delay"
      inputs={[
        { id: "in", label: "Input" }
      ]}
      outputs={[
        { id: "out", label: "Output" }
      ]}
    >
      <div style={{ fontSize: 12 }}>
        Delay
      </div>
    </BaseNode>
  );
}
