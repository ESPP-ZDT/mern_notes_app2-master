import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchComments } from "../../actions/commentsActions";

const CommentList = ( {noteId} ) => {
    
  const dispatch = useDispatch();
  const comments = useSelector((state) => state.commentsList.comments);

  useEffect(() => {
    //console.log('Fetching comments for note', noteId);
    dispatch(fetchComments(noteId));
  }, [dispatch]);
  
  console.log(comments);
  //console.log(noteId)

  return (
    <div>
      {comments && comments.length > 0 ? (
        comments.map((comment) => (
          <div key={comment._id}>
            <p>{comment.content}</p>
            <p>By {comment.user.name}</p>
          </div>
        ))
      ) : (
        <p>No comments found</p>
      )}
    </div>
  );
};

export default CommentList;
