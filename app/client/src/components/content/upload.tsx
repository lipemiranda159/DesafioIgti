import React from "react";
import CloudUploadIcon from "@material-ui/icons/CloudUpload";

const Upload = () => {
  return (
    <div className="fastAccess">
      <div className="box">
        <CloudUploadIcon className="uploadIcon" fontSize="large" />
      </div>
      <span className="span">IMPORTAR</span>
    </div>
  );
};

export default Upload;
