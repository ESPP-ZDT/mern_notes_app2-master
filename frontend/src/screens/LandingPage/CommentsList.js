import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchComments } from "../../actions/commentsActions";
import { Card, ListGroup } from "react-bootstrap";

const CommentList = ({ noteId }) => {
  const dispatch = useDispatch();
  const comments = useSelector((state) => state.commentsList.comments);

  useEffect(() => {
    dispatch(fetchComments(noteId));
  }, [dispatch]);
//zrobic kolowrotek ktory co 15 sek odczytuje na nowo liste komentarzy
  return (
    <Card>
      <Card.Header>Comments</Card.Header>
      {comments && comments.length > 0 ? (
        <ListGroup variant="flush">
          {comments
            .filter((comment) => comment.note.toString() === noteId.toString())
            .map((comment) => (
              <ListGroup.Item key={comment._id}>
                <p>{comment.content}</p>
                <p>By {comment.name}</p>
              </ListGroup.Item>
            ))}
        </ListGroup>
      ) : (
        <Card.Body>No comments found</Card.Body>
      )}
    </Card>
  );
};

export default CommentList;
