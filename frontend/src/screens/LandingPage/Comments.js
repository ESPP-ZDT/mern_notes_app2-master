import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { createComment } from "../../actions/commentsActions";

function Comments({ noteId }) {
  const dispatch = useDispatch();
  const comments = useSelector((state) => state.commentsList.comments);
  const [content, setContent] = useState("");

  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(createComment(content, noteId));
    if (!content) return;
  };

  return (
    <form onSubmit={submitHandler}>
      <input
        type="text"
        value={content}
        onChange={(e) => setContent(e.target.value)}
      />
      <button type="submit">Submit</button>
    </form>
  );
}

export default Comments;
