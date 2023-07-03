import React, { useState } from 'react';
import { createUseStyles } from 'react-jss';

const useStyles = createUseStyles({
  likeButtonContainer: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    margin: '20px',
  },
  likeButton: {
    outline: 'none',
    backgroundColor: 'transparent',
    fontSize: '18px',
    fontWeight: 'bold',
    color: '#05375f',
    cursor: 'pointer',
    transition: 'all 0.2s ease-in-out',
    padding: '10px 20px',
    border: '2px solid #05375f',
    '&:hover': {
      color: '#05375f',
      backgroundColor: '#CC9DF5',
    },
    '&.liked': {
      color: '#05375f',
      borderColor: '#05375f',
    },
  },
});

function LikeButton() {
  const classes = useStyles();
  const [likes, setLikes] = useState(0);
  const handleLike = () => {
    setLikes(likes + 1);
  };

  return (
    <div className={classes.likeButtonContainer}>
      <button
        className={`${classes.likeButton} ${likes > 0 ? 'liked' : ''}`}
        onClick={handleLike}
      >
        {likes} Likes
      </button>
    </div>
  );
}

export default LikeButton;