import React from "react";
import RemoveIcon from "@material-ui/icons/Remove";
import "./content.css";
const Remove = () => {
  return (
    <div className="fastAccess">
      <div className="box">
        <RemoveIcon className="removeIcon" fontSize="large" />
      </div>
      <span className="span">DESPESA</span>
    </div>
  );
};

export default Remove;
