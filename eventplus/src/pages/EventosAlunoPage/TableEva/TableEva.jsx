import React from "react";
import { dateFormatDbToView } from "../../../Utils/stringFuctions";

import ToggleSwitch from "../../../components/Toggle/Toggle";

// importa a biblioteca de tootips ()
import "react-tooltip/dist/react-tooltip.css";
import { Tooltip } from "react-tooltip";

import comentaryIcon from "../../../assets/images/comentary-icon.svg";
import trashDelete from "../../../assets/images/trash-delete.svg";

import "./TableEva.css";

const Table = ({ dados, fnConnect = null, fnShowModal = null }) => {
  return (
    <table className="tbal-data">
      <thead className="tbal-data__head">
        <tr className="tbal-data__head-row tbal-data__head-row--red-color">
          <th className="tbal-data__head-title tbal-data__head-title--big">
            Evento
          </th>
          {/* <th className="tbal-data__head-title tbal-data__head-title--big">
            Descrição
          </th> */}
          {/* <th className="tbal-data__head-title tbal-data__head-title--big">
            Tipo
          </th> */}
          <th className="tbal-data__head-title tbal-data__head-title--big">
            Data
          </th>
          <th className="tbal-data__head-title tbal-data__head-title--big">
            Ações
          </th>
        </tr>
      </thead>
      <tbody>
        {dados.map((e) => {
          return (
            <tr className="tbal-data__head-row" key={Math.random()}>
              <td className="tbal-data__data tbal-data__data--big">
                {e.nomeEvento}
              </td>
              <td className="tbal-data__data tbal-data__data--big tbal-data__btn-actions">
                {/* {e.dataEvento} */}
                {dateFormatDbToView(e.dataEvento)}
              </td>

              <td className="tbal-data__data tbal-data__data--big tbal-data__btn-actions">
                {/**Imagem do comentario - abre o modal */}
                <img
                  className="tbal-data__icon"
                  idevento={e.idEvento}
                  src={comentaryIcon}
                  alt=""
                  onClick={() => {fnShowModal(e.idEvento)}}
                />
                {/**toogle que é ativado a partir da situacao  */}
                <ToggleSwitch toggleActive={e.situacao} manipulationFunction={() => { 
                  fnConnect(
                    e.idEvento,
                    e.situacao ? "unconnect" : "connect",
                    e.situacao ? e.idPresencaEvento : null//parâmetro opcional
                    
                    )
                   }} />
              </td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

export default Table;
