import React from "react";
import MemeList from "../components/MemeList";

const MemesList = ({ memes = [], onVote, onStar, type }) => {
  // Ensure type is either "hot" or "regular"
  const filteredMemes =
    type === "hot"
      ? memes.filter((meme) => meme.upvote - meme.downvote > 5)
      : type === "regular"
      ? memes.filter((meme) => meme.upvote - meme.downvote <= 5)
      : memes;

  return (
    <div>
      <h2>
        {type === "hot"
          ? "Hot Memes"
          : type === "regular"
          ? "Regular Memes"
          : "All Memes"}
      </h2>
      <MemeList memes={filteredMemes} onVote={onVote} onStar={onStar} />
    </div>
  );
};

export default MemesList;
