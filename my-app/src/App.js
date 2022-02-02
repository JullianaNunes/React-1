import React, { Component } from "react";
import ListaDeNotas from "./components/ListaDeNotas/ListaDeNotas";
import FormularioCadastro from "./components/FormularioCadastro/FormularioCadastro";
import "./assets/App.css";
import './assets/index.css';
class App extends Component {

  criarNota(titulo, texto){
    console.log('Uma nova nota foi criada ' + titulo + ' ' + texto)
  }

  render() {
    return (
      <section className="conteudo">
        <FormularioCadastro criarNota={this.criarNota}/>
        <ListaDeNotas />
      </section>
    );
  }
}


// tag pra exportar pra outros arquivos
export default App;

// react (com a letra minuscula) -> lib
// React (com a primeira maiuscula) -> ecossistema
// Precisa encapsular (<section>) o código em uma quadro, pode ser div ou section
// Tudo que estiver dentro de {} no html é uma tag javascript