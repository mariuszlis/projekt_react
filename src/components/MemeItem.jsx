import React from 'react';

const MemeItem = ({ meme }) => {
    return (
        <div className="meme-item">
            <img src={meme.imageUrl} alt={meme.title} />
            <p>{meme.title}</p>
        </div>
    );
};

export default MemeItem;