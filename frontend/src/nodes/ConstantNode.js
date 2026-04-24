import BaseNode from "./BaseNode";

export default function ConstantNode({ id, data }) {
  return (
    <BaseNode
      id={id}
      title="Constant"
      inputs={[]}
      outputs={[
        { id: "value", label: "value" }
      ]}
    >
      <div style={{ fontSize: 12 }}>
        Value: {data?.value ?? 42}
      </div>
    </BaseNode>
  );
}
