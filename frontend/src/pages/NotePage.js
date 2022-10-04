import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

const NotePage = () => {
  let params = useParams();
  let { id } = params;
  let [note, setNote] = useState([]);

  useEffect(() => {
    getNote();
  }, []);

  let getNote = async () => {
    let response = await fetch(`/api/notes/${id}`);
    let data = await response.json();
    setNote(data);
  };

  return (
    <div>
      <p>{note.body}</p>
    </div>
  );
};

export default NotePage;
