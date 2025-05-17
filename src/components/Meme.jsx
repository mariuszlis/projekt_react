import React from "react";
import "../styles/Meme.css";

const Meme = ({ meme, onVote, onStar }) => {
  return (
    <div className="meme-container">
      <button
        onClick={() => onStar(meme.id)}
        className={`meme-star-btn${meme.starred ? " starred" : ""}`}
        title={meme.starred ? "Usuń gwiazdkę" : "Oznacz gwiazdką"}
        aria-label="Oznacz jako ulubiony"
      >
        {meme.starred ? "★" : "☆"}
      </button>
      <h3>{meme.title}</h3>
      <img src={meme.url} alt={meme.title} className="meme-img" />
      <div className="meme-votes">
        <button onClick={() => onVote(meme.id, "up")}>Vote Up</button>
        <button onClick={() => onVote(meme.id, "down")}>Vote Down</button>
        <p>Up: {meme.upvote}</p>
        <p>Down: {meme.downvote}</p>
      </div>
    </div>
  );
};

export default Meme;
