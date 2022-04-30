import React, { useState } from "react";
import SearchIcon from '@mui/icons-material/Search';

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

  return (
    <div>
      <form>
       
        <textarea
          name="content"
          onChange={handleChange}
          value={note.content}
          placeholder="Search here"
        //   rows="3"
        />
        <button onClick={submitNote}><SearchIcon></SearchIcon></button>
        
      </form>
      <h3>Recent Searches</h3>

    </div>
  );
}

export default CreateArea;
