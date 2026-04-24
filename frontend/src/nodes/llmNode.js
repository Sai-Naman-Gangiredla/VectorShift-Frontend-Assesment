import BaseNode from "./BaseNode";

export default function LLMNode({ id }) {
  return (
    <BaseNode
      title="LLM"
      inputs={[`${id}-input`]}
      outputs={[`${id}-output`]}
    >
      <div>This is a LLM.</div>
    </BaseNode>
  );
}
