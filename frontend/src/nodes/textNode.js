import { useMemo } from "react";
import { Handle, Position, useReactFlow } from "reactflow";
import BaseNode from "./BaseNode";

export default function TextNode({ id, data }) {
  const { setNodes } = useReactFlow();
  const text = data.text || "";

  const variables = useMemo(() => {
    const matches = text.match(/{{\s*([\w]+)\s*}}/g) || [];
    return Array.from(
      new Set(matches.map(v => v.replace(/[{}]/g, "").trim()))
    );
  }, [text]);

  const onTextChange = (value) => {
    setNodes((nodes) =>
      nodes.map((node) =>
        node.id === id
          ? { ...node, data: { ...node.data, text: value } }
          : node
      )
    );
  };

  return (
    <BaseNode title="Text">
      <textarea
        value={text}
        onChange={(e) => onTextChange(e.target.value)}
        placeholder="Type text with {{variables}}"
        style={{ width: "100%", minHeight: 60 }}
      />

      <div style={{ fontSize: 12, marginTop: 6 }}>
        {variables.length > 0 ? `Variables: ${variables.join(", ")}` : ""}
      </div>

      {variables.map((variable, index) => (
        <Handle
          key={variable}
          id={`var-${variable}`}
          type="target"
          position={Position.Left}
          style={{ top: 70 + index * 20 }}
        />
      ))}

      <Handle
        id="output"
        type="source"
        position={Position.Right}
      />
    </BaseNode>
  );
}
