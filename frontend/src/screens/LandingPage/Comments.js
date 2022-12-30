import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { createComment } from "../../actions/commentsActions";

function Comments({}) {
  const dispatch = useDispatch();
  const comments = useSelector((state) => state.commentsList.comments);
  const [content, setContent] = useState("");

  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(createComment(content));
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


/*
import React, { useEffect, useState } from "react";
import { Button, Card, Form } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { createComment } from "../../actions/commentActions";
import Loading from "../../components/Loading";
import { Link, useNavigate } from "react-router-dom";
import ErrorMessage from "../../components/ErrorMessage";
import ReactMarkdown from "react-markdown";

function Comments({}) {
  let navigate = useNavigate();
  const [content, setContent] = useState("");
  
  const dispatch = useDispatch();

  

  //console.log(note);

  const resetHandler = () => {
    setContent("");
  };

  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(createComment(content));
    if (!content) return;

    resetHandler();
    navigate("/");
  };

  useEffect(() => {}, []);

  return (
    
      <Card>
        <Card.Header>Create a new Note</Card.Header>
        <Card.Body>
          <Form onSubmit={submitHandler}>
            {error && <ErrorMessage variant="danger">{error}</ErrorMessage>}
            <Form.Group controlId="title">
              <Form.Label>Title</Form.Label>
              <Form.Control
                type="title"
                value={title}
                placeholder="Enter the title"
                onChange={(e) => setTitle(e.target.value)}
              />
            </Form.Group>

            <Form.Group controlId="content">
              <Form.Label>Content</Form.Label>
              <Form.Control
                as="textarea"
                value={content}
                placeholder="Enter the content"
                rows={4}
                onChange={(e) => setContent(e.target.value)}
              />
            </Form.Group>
            
            {loading && <Loading size={50} />}
            <Button type="submit" variant="primary">
              Create Note
            </Button>
            <Button className="mx-2" onClick={resetHandler} variant="danger">
              Reset Feilds
            </Button>
          </Form>
        </Card.Body>

        <Card.Footer className="text-muted">
          Creating on - {new Date().toLocaleDateString()}
        </Card.Footer>
      </Card>

  );
}

export default Comments;





*/