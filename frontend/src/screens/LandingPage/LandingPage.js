import React, { useEffect, useState } from "react";
import MainScreen from "../../components/MainScreen";
import { Link, useNavigate } from "react-router-dom";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Loading from "../../components/Loading";
import ErrorMessage from "../../components/ErrorMessage";
import { useDispatch, useSelector } from "react-redux";
import { deleteNoteAction, listAllNotes } from "../../actions/noteActions";

const LandingPage = () => {
  let navigate = useNavigate();
  const dispatch = useDispatch();

  const noteList = useSelector((state) => state.noteList);
  const { loading, error, notes } = noteList;

  useEffect(() => {
    dispatch(listAllNotes());

    navigate("/");
  }, [dispatch, navigate]);
  //HERE, WHERE IM FILTERING THE NOTES, IF IM GOING TO MAKE REWIERS, THEN I COULD ADD THE CONTENT OF THE REWIEVS OR OTHER SCHEMA ELEMENTS TO MAKE THE SEARCHING MORE ACCESIBLE
  //
  return (
    <div>
      <MainScreen title={`Welcome`}>
        {notes?.reverse().map((note) => (
          <Card key={note._id}>
            <Card.Header style={{ display: "flex" }}>
              <span className="reviewtitle">{note.title}</span>
              <div>{note.likes.length} likes</div>
            </Card.Header>
            <Card.Body>
              <h4>
                <bg>Category = {note.category}</bg>
              </h4>

              <blockquote className="blockquote mb-0">
                <p> {note.content}</p>
                <footer className="blockquote-footer">
                  Created on{" "}
                  <cite title="Source Title">
                    {note.createdAt.substring(0, 10)}
                  </cite>
                </footer>
              </blockquote>
            </Card.Body>
          </Card>
        ))}
      </MainScreen>
    </div>
  );
};

export default LandingPage;
