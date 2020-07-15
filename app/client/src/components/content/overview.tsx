import React from "react";
import ExibeSaldo from "./exibeSaldo";
import AcessoRapido from "./acessoRapido";
const Overview: React.FC<{ saldo: number }> = ({ saldo }) => {
  return (
    <div>
      <div className="row">
        <ExibeSaldo saldo={0} />
        <AcessoRapido />
      </div>
    </div>
  );
};

export default Overview;
