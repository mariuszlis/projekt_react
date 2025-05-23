import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const AddMemeForm = ({ onAdd }) => {
  const [title, setTitle] = useState("");
  const [url, setUrl] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title.trim() || !url.trim()) return;
    onAdd({
      id: Date.now(),
      title,
      url,
      upvote: 0,
      downvote: 0,
      starred: false,
    });
    setTitle("");
    setUrl("");
    navigate(-1);
  };

  return (
    <form className="add-meme-form" onSubmit={handleSubmit}>
      <h2>Meme Adding</h2>
      <div>
        <label>
          Title:
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </label>
      </div>
      <div>
        <label>
          URL:
          <input
            type="text"
            value={url}
            onChange={(e) => setUrl(e.target.value)}
          />
        </label>
      </div>
      <button type="submit">Submit</button>
    </form>
  );
};

export default AddMemeForm;
