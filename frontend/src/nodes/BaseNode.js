import { Handle, Position } from "reactflow";

export default function BaseNode({
  title,
  inputs = [],
  outputs = [],
  children,
}) {
  return (
    <div
      style={{
        border: "1px solid #333",
        borderRadius: 6,
        padding: 10,
        minWidth: 180,
        background: "#fff",
      }}
    >
      {/* Node Title */}
      <div style={{ fontWeight: "bold", marginBottom: 8 }}>
        {title}
      </div>

      {/* Input Handles */}
      {inputs.map((id, index) => (
        <Handle
          key={id}
          type="target"
          position={Position.Left}
          id={id}
          style={{ top: 40 + index * 20 }}
        />
      ))}

      {/* Node Content */}
      <div>{children}</div>

      {/* Output Handles */}
      {outputs.map((id, index) => (
        <Handle
          key={id}
          type="source"
          position={Position.Right}
          id={id}
          style={{ top: 40 + index * 20 }}
        />
      ))}
    </div>
  );
}
