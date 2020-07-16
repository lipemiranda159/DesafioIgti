import React from "react";
import Fab from "@material-ui/core/Fab";
import AddIcon from "@material-ui/icons/Add";

const Action = () => {
  return (
    <div className="container-action">
      <div className="action">
        <header className="header">
          <div className="divHeader">
            <h4>Lançamentos</h4>
            <Fab color="secondary" aria-label="edit" className="button">
              <AddIcon />
            </Fab>
          </div>
          <hr />
        </header>
      </div>
    </div>
  );
};

export default Action;
