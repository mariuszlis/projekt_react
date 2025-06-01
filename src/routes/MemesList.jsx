import React from "react";
import Meme from "../components/Meme";

const MemesList = ({ memes = [], onVote, onStar, type }) => {
  // Ensure type is either "hot" or "regular"
  const filteredMemes =
    type === "hot"
      ? memes.filter((meme) => meme.upvote - meme.downvote > 5)
      : type === "regular"
      ? memes.filter((meme) => meme.upvote - meme.downvote <= 5)
      : memes;

  if (!filteredMemes || filteredMemes.length === 0) {
    return (
      <div>
        <h2>
          {type === "hot"
            ? "Hot Memes"
            : type === "regular"
            ? "Regular Memes"
            : "All Memes"}
        </h2>
      </div>
    );
  }

  return (
    <div>
      <h2>
        {type === "hot"
          ? "Hot Memes"
          : type === "regular"
          ? "Regular Memes"
          : "All Memes"}
      </h2>
      <div className="meme-list-container">
        {filteredMemes.map((meme) => (
          <Meme key={meme.id} meme={meme} onVote={onVote} onStar={onStar} />
        ))}
      </div>
    </div>
  );
};

export default MemesList;
