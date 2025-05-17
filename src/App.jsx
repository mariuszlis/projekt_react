import React, { useState } from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
  Link,
  useLocation,
  useNavigate,
} from "react-router-dom";
import Hot from "./routes/Hot";
import Regular from "./routes/Regular";
import memesData from "./data/memesData";
import "./styles/App.css";

function AddMemeForm({ onAdd }) {
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
}

function Navigation() {
  const location = useLocation();
  return (
    <nav className="navigation">
      <Link to="/hot" className={location.pathname === "/hot" ? "active" : ""}>
        Hot
      </Link>
      <Link
        to="/regular"
        className={location.pathname === "/regular" ? "active" : ""}
      >
        Regular
      </Link>
      <Link to="/add" className={location.pathname === "/add" ? "active" : ""}>
        Add Meme
      </Link>
    </nav>
  );
}

function App() {
  const [memes, setMemes] = useState(memesData);

  const handleVote = (id, type) => {
    setMemes((prev) =>
      prev.map((meme) =>
        meme.id === id
          ? {
              ...meme,
              upvote: type === "up" ? meme.upvote + 1 : meme.upvote,
              downvote: type === "down" ? meme.downvote + 1 : meme.downvote,
            }
          : meme
      )
    );
  };

  const handleStar = (id) => {
    setMemes((prev) =>
      prev.map((meme) =>
        meme.id === id ? { ...meme, starred: !meme.starred } : meme
      )
    );
  };

  const handleAddMeme = (newMeme) => {
    setMemes((prev) => [newMeme, ...prev]);
  };

  return (
    <Router>
      <Navigation />
      <Routes>
        <Route path="/" element={<Navigate to="/hot" replace />} />
        <Route
          path="/hot"
          element={
            <Hot memes={memes} onVote={handleVote} onStar={handleStar} />
          }
        />
        <Route
          path="/regular"
          element={
            <Regular memes={memes} onVote={handleVote} onStar={handleStar} />
          }
        />
        <Route path="/add" element={<AddMemeForm onAdd={handleAddMeme} />} />
      </Routes>
    </Router>
  );
}

export default App;
