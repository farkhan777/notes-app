import React from "react";
import NoteAddIcon from '@material-ui/icons/NoteAdd';

function Header() {
  return (
    <header>
      <h1><NoteAddIcon style={{ fontSize: 40, position: "relative", top: 5 }} /> Keeper</h1>
    </header>
  );
}

export default Header;
