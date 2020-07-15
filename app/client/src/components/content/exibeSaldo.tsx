import React from "react";
import FormatterService from "../../services/FormatterService";
import "./content.css";

const ExibeSaldo: React.FC<{ saldo: number }> = ({ saldo }) => {
  return (
    <div className="col s12 m4">
      <div className="cardOverview">
        <div className="card-content">
          <p>
            <div className="contentOverview">
              <h3>Bem vindo!</h3>
            </div>
            <p>
              <div className="contentOverview">
                <h4>Seu saldo total é:</h4>
              </div>
            </p>
            <p>
              <div className="contentOverview">
                <h5>{FormatterService.FormatValue(saldo)}</h5>
              </div>
            </p>
          </p>
        </div>
      </div>
    </div>
  );
};

export default ExibeSaldo;
