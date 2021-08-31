import React, { useState } from "react";
import AddIcon from '@material-ui/icons/Add';
import { Fab, Zoom } from "@material-ui/core";

function CreateArea(props) {
  const [note, setNote] = useState({
    title: "",
    content: ""
  });

  function handleChange(event) {
    const { name, value } = event.target;

    setNote(prevNote => {
      return {
        ...prevNote,
        [name]: value
      };
    });
  }

  function submitNote(event) {
    props.onAdd(note);
    setNote({
      title: "",
      content: ""
    });
    event.preventDefault();
  }

  const [text, setText] = useState(false);

  function handleClick(){
    setText(true);
  }

  return (
    <div>
      <form className="create-note">
        {text ? 
          <input
            name="title"
            onChange={handleChange}
            value={note.title}
            placeholder="Title"
            autocomplete="off"
            onClick={handleClick}
          />
          :
          null
        }
        <textarea
          name="content"
          onClick={handleClick}
          onChange={handleChange}
          value={note.content}
          placeholder="Take a note..."
          rows={text ? 3 : 1}
          // style={{ display: text ? null : "none" }}
        />
        {/* <button onClick={submitNote}><AddIcon /></button> */}
        <Zoom in={text ? true : false}>
          <Fab onClick={submitNote} size="medium" aria-label="add">
            <AddIcon />
          </Fab>
        </Zoom>
      </form>
    </div>
  );
}

export default CreateArea;
