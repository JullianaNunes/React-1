import React, { Component } from "react";
import CardNota from "../CardNota";

import "./estilo.css";
class ListaDeNotas extends Component {
  render() {
    return (
      <ul className="lista-notas">
        {Array.of("Trabalho", "Trabalho", "Estudos").map((categoria, index) => {
          return (
            <li className="lista-notas_item" key={index}>
              <CardNota />
            </li>
          );
        })}
      </ul>
    );
  }
}

export default ListaDeNotas;
//Usando js no react dentro do html 
//Cria um array com as categorias dos cards, o map chama outra função passando cada categoria que cria e inclui a cat no html
// {Array.of("Trabalho", "Trabalho", "Estudos").map(categoria => {
//   return (
//     <li>
//   <div> {categoria} </div>
//   <CardNotas />
// </li>
//   )
// })}