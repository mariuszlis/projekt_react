import React from "react";
import MemeList from "../components/MemeList";

const Hot = ({ memes, onVote, onStar }) => {
  const hotMemes = memes.filter((meme) => meme.upvote - meme.downvote > 5);
  return <MemeList memes={hotMemes} onVote={onVote} onStar={onStar} />;
};

export default Hot;
