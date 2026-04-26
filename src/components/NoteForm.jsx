import React, { useState } from "react";

function NoteForm({ addNote }) {
  const [input, setInput] = useState("");

  const handleSubmit = () => {
    if (input.trim() === "") return;

    addNote(input);
    setInput("");
  };

  return (
    <div style={{ textAlign: "center", marginTop: "20px" }}>
      <input
          type="text"
          placeholder="Enter note..."
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              handleSubmit();
            }
          }}
        />
      <button onClick={handleSubmit}>Add</button>
    </div>
  );
}

export default NoteForm;