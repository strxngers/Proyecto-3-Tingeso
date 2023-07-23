import React, { Component } from "react";
import { Navigate } from "react-router-dom"; // Paso 1: Importar Redirect
import Preguntas from "./PreguntasComponent";
import styled from "styled-components";
import Navbar from "./NavbarComponent";
import Cronometro from "./Cronometro";

class NivelAvanzado extends Component {
  constructor(props) {
    super(props);
    this.state = {
      datas: [],
      currentQuestion: 0, // Inicialmente mostramos la primera pregunta
      showResults: false, // Estado para controlar si se muestran las preguntas o los resultados
      redirectToResults: false, // Estado para redirigir a la página de resultados
    };
  }

  componentDidMount() {
    fetch("http://localhost:8080/preguntas/4qa")
      .then((response) => response.json())
      .then((data) => this.setState({ datas: data }))
      .catch((error) => console.log(error));
  }

  handleNextQuestion = () => {
    const { datas, currentQuestion } = this.state;
    if (currentQuestion < datas.length - 1) {
      this.setState((prevState) => ({
        currentQuestion: prevState.currentQuestion + 1,
      }));
    } else {
      // Si se responde la última pregunta, cambiamos el estado para mostrar los resultados
      this.setState({ redirectToResults: true });
    }
  };
  render() {
    const { datas, currentQuestion, showResults, redirectToResults } = this.state;
    if (redirectToResults) {
      // Si redirectToResults es true, redirige a la página de resultados
      return <Navigate to="/resultados" />;
    }
    return (
      <HomeStyle>
        <Navbar />
        <div className="text-center">
          <h1 className="asd">
            <b>🐍 Prueba de nivel avanzado 🐍</b>
          </h1>
          <div className="clock">
            <Cronometro showResults={showResults} /> {/* Pasar showResults al componente Cronometro */}
            <h1></h1>
          </div>
          {!showResults && datas.length > 0 && currentQuestion < datas.length && (
            <Preguntas
              key={datas[currentQuestion].id}
              id={datas[currentQuestion].id}
              enunciado={datas[currentQuestion].enunciado}
              pregunta_python={datas[currentQuestion].preguntaPython}
              respuesta={datas[currentQuestion].respuesta}
              onNextQuestion={this.handleNextQuestion}
            />
          )}
        </div>
      </HomeStyle>
    );
  }
}

export default NivelAvanzado;

const HomeStyle = styled.nav`
  .clock {
    margin-top: 20px;
    margin-left: auto; /* Alinea el elemento a la derecha */
    font-weight: 700;
    text-align: right;
    color: #eceff1;
    font-family: 'Montserrat', cursive;
    width: 100%; /* Asegura que el contenido ocupe todo el ancho disponible */
  }
  .text-center {
    justify-content: center;
    display: flex;
    flex-direction: column;
    align-items: center;
    color: #fdfefe;
    font-family: 'Montserrat', cursive; 
  }
  .asd {
    padding-top: 10px;
    padding-bottom: 30px;
    font-size: 30px;
    font-family: 'Montserrat', cursive;
  }
`;