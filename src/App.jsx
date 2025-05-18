import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
  Link,
  useLocation,
  useNavigate,
} from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import Hot from "./routes/Hot";
import Regular from "./routes/Regular";
import { vote, star, addMeme } from "./store/memesSlice";
import "./styles/App.css";

function AddMemeForm({ onAdd }) {
  const [title, setTitle] = React.useState("");
  const [url, setUrl] = React.useState("");
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
  const memes = useSelector((state) => state.memes);
  const dispatch = useDispatch();

  const handleVote = (id, type) => {
    dispatch(vote({ id, type }));
  };

  const handleStar = (id) => {
    dispatch(star(id));
  };

  const handleAddMeme = (newMeme) => {
    dispatch(addMeme(newMeme));
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
