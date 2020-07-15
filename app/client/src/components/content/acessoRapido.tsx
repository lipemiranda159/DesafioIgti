import React from "react";
import Remove from "./remove";
import Add from "./add";
const AcessoRapido = () => {
  return (
    <div className="col s12 m5">
      <div className="card horizontal column">
        <h3 className="header">Acesso Rápido</h3>
        <div className="card-stacked">
          <div className="card-content">
            <div className="content">
              <Remove />
              <Add />
              <Add />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AcessoRapido;
