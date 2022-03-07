import { FileUploader } from "react-drag-drop-files";
import React, { useState } from "react";
import "../App.css"

const fileTypes = ["CSV"];

function Dropzone() {
  const [file, setFile] = useState(null);
  const handleChange = (file) => {
    setFile(file);
  };
  return (
    <div className="drag-drop-zone">
      <FileUploader handleChange={handleChange} name="file" types={fileTypes} />
      { console.log(file)}
    </div>
  );
}

export default Dropzone;
