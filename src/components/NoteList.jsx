import React from "react";

function NoteList({ notes, deleteNote }) {
  return (
    <div style={{ marginTop: "20px", textAlign: "center" }}>
      {notes.map((note) => (
        <div 
          key={note.id} 
          style={{
            margin: "10px auto",
            padding: "10px",
            width: "300px",
            background: "#f4f4f4",
            borderRadius: "8px",
            display: "flex",
            justifyContent: "space-between"
          }}
        >
          <span>{note.text}</span>
          <button onClick={() => deleteNote(note.id)}>❌</button>
        </div>
      ))}
    </div>
  );
}

export default NoteList;