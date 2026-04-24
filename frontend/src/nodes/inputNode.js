import BaseNode from "./BaseNode";

export default function InputNode({ id, data }) {
  return (
    <BaseNode
      title="Input"
      outputs={[`${id}-output`]}
    >
      <label>Name:</label>
      <input
        value={data.name || ""}
        onChange={(e) =>
          data.onChange(id, { name: e.target.value })
        }
      />

      <label style={{ marginTop: 6 }}>Type:</label>
      <select
        value={data.type || "Text"}
        onChange={(e) =>
          data.onChange(id, { type: e.target.value })
        }
      >
        <option>Text</option>
      </select>
    </BaseNode>
  );
}
