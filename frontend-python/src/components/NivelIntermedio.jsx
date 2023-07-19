import React, { Component } from "react";
import Preguntas from "./PreguntasComponent";
import styled from "styled-components";
import Navbar from "./NavbarComponent";

class NivelIntermedio extends Component {
  constructor(props) {
    super(props);
    this.state = {
      datas: [],
    };
  }

  componentDidMount() {
    fetch("http://localhost:8080/preguntas/4qi")
      .then((response) => response.json())
      .then((data) => this.setState({ datas: data }))
      .catch((error) => console.log(error));
  }

  render() {
    console.log(this.state.datas);
    return (
      <HomeStyle>
        <Navbar />

        <div className="text-center">
          <h1 className="asd">
            <b>
              <u>Prueba: Modo Intermedio</u>
            </b>
          </h1>
          {this.state.datas.map((data) => (
            <Preguntas
              key={data.id}
              id={data.id}
              enunciado={data.enunciado}
              pregunta_python={data.preguntaPython}
              respuesta={data.respuesta}
            />
          ))}
        </div>
      </HomeStyle>
    );
  }
}
export default NivelIntermedio;

const HomeStyle = styled.nav`
  .text-center {
    justify-content: center;
    display: flex;
    flex-direction: column;
    align-items: center;
    color: #fdfefe;
  }
  .asd {
    padding-top: 10px;
    padding-bottom: 30px;
  }
`;