import React, { useState } from "react";

function CreateArea(props) {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  function handleChange(event) {
    const newValue = event.target.value;
    if (event.target.name === "title") {
      setTitle(newValue);
    } else {
      setContent(newValue);
    }
  }

  return (
    <div>
      <form>
        <input
          onChange={handleChange}
          name="title"
          placeholder="Title"
          value={title}
        />
        <textarea
          onChange={handleChange}
          name="content"
          placeholder="Take a note..."
          rows="3"
          value={content}
        />
        <button
          onClick={() => {
            props.onAdd(title, content);
            setTitle("");
            setContent("");
          }}
        >
          Add
        </button>
      </form>
    </div>
  );
}

export default CreateArea;
