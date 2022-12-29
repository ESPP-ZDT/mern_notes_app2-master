import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { likeNote } from "../../actions/noteActions";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faThumbsUp, faThumbsDown } from "@fortawesome/free-solid-svg-icons";

const LikeButton = ({isLike, handleLike,handleUnlike,noteId, userId }) => {
  // Use useSelector to get the likes for the given note from the state
  const likes = useSelector((state) => state.noteLike.likes[noteId]); // Access likes for specific note using the noteId
  const dispatch = useDispatch();

  

  return (
    <>

    {
        isLike
        ? <FontAwesomeIcon icon={faThumbsUp} onClick={handleUnlike}/>
        : <FontAwesomeIcon icon={faThumbsDown} onClick={handleLike}/>
    }

    {/*
    <button onClick={handleLike}>
      {likes.includes(userId) ? (
        <FontAwesomeIcon icon={faThumbsUp} />
      ) : (
        <FontAwesomeIcon icon={faThumbsDown} />
      )}
    </button>
  );
};
*/}</>)}
export default LikeButton;
