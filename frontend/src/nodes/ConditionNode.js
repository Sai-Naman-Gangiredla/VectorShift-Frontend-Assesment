import BaseNode from "./BaseNode";

export default function ConditionNode({ id }) {
  return (
    <BaseNode
      id={id}
      title="Condition"
      inputs={[
        { id: "a", label: "a" },
        { id: "b", label: "b" }
      ]}
      outputs={[
        { id: "true", label: "true" },
        { id: "false", label: "false" }
      ]}
    >
      <div style={{ fontSize: 12 }}>
        a &gt; b ?
      </div>
    </BaseNode>
  );
}
