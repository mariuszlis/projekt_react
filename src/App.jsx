import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import MemesList from "./routes/MemesList";
import { vote, star, addMeme } from "./store/memesSlice";
import "./styles/App.css";
import Navigation from "./components/Navigation";
import AddMemeForm from "./components/AddMemeForm";
import ErrorPage from "./components/ErrorPage";

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
            <MemesList
              memes={memes}
              onVote={handleVote}
              onStar={handleStar}
              type="hot"
            />
          }
        />
        <Route
          path="/regular"
          element={
            <MemesList
              memes={memes}
              onVote={handleVote}
              onStar={handleStar}
              type="regular"
            />
          }
        />
        <Route path="/add" element={<AddMemeForm onAdd={handleAddMeme} />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </Router>
  );
}

export default App;
