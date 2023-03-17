import React, { useState } from "react";
import { createEditor } from "slate";
import { Slate, Editable, withReact } from "slate-react";
const initialValue = [
  {
    type: "paragraph",
    children: [{ text: "A line of text in a paragraph." }],
  },
];
const TextArea = () => {
  const [editor] = useState(() => withReact(createEditor()));
  return (
    <Slate editor={editor} value={initialValue}>
      <Editable
        style={{
          cursor: "text",
          width: "100%",
          height: "100%",
          border: "black solid 1px",
        }}
      />
    </Slate>
  );
};

export default TextArea;
