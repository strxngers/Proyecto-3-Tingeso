import React, { useState } from "react";
import styled from "styled-components";
import { createGlobalStyle } from "styled-components";
import { CodeBlock, dracula } from "react-code-blocks";
import Form from "react-bootstrap/Form";
import add_to_puntaje from "./Puntaje";

export default function PreguntasComponent({
  id,
  dificultad,
  enunciado,
  pregunta_python,
  respuesta,
}) {
  const initialState = {
    answer: "",
  };

  const [puntaje, setPuntaje] = useState(
    localStorage.getItem("puntaje") ? localStorage.getItem("puntaje") : 0
  );

  const [trueAnswer, setTrueAnswer] = useState(-1);

  const [input, setInput] = useState(initialState);

  const changeAnswerHandler = (event) => {
    setInput({ ...input, answer: event.target.value });
  };

  const compararRespuestas = (e) => {
    e.preventDefault();
    if (input.answer === respuesta) {
      setPuntaje(add_to_puntaje(7));
      setTrueAnswer(1);
    } else {
      setPuntaje(add_to_puntaje(1));
      setTrueAnswer(0);
    }

    if (localStorage.getItem("restantes") === "0") {
      window.location.href = "/resultados";
    }
  };

  return (
    <div>
      <GlobalStyle />
      <HomeStyle>
        <h3 className="text-enunciado">
          <b>
            Pregunta {id}: {enunciado}
          </b>
        </h3>
        <div className="code-box">
          <CodeBlock
            text={pregunta_python}
            language="python"
            theme={dracula}
            codeBlock={{ lineNumbers: true }}
            align="left"
          />
        </div>
        <div className="respuesta" style={{ marginBottom: "20px" }}>
          <Form>
            <Form.Group
              className="mb-3"
              controlId="respuesta"
              value={input.answer}
              onChange={changeAnswerHandler}
            >
              <Form.Label>
                <h3>Ingrese su respuesta aquí: </h3>
              </Form.Label>
              <br />
              <Form.Control type="text" placeholder="" />
            </Form.Group>
          </Form>
          {trueAnswer === 1 ? (
            <h3>¡Respuesta Correcta!</h3>
          ) : trueAnswer === 0 ? (
            <h3>Respuesta Incorrecta:c </h3>
          ) : (
            <button variant="primary" onClick={compararRespuestas} style={{ marginTop: "20px" }}>
              Verificar Respuesta
            </button>
          )}
        </div>
        <hr />
      </HomeStyle>
    </div>
  );
}

const GlobalStyle = createGlobalStyle`
  body { 
    background-color: #154360;
  }
`;
const HomeStyle = styled.nav`
  .text-enunciado {
    justify-content: center;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  .code-box {
    justify-content: center;
    display: flex;
    flex-direction: column;
    text-align: left;
    padding-bottom: 20px;
  }
  .respuesta {
    justify-content: center;
    padding-bottom: 50px;
    border: none;
    border-radius: 50px;
  }

  button {
    font-weight: 700;
    color: #1b3039;
    padding: 9px 25px;
    background: #7dcea0;
    border: none;
    border-radius: 50px;
    cursor: pointer;
    transition: all 0.3s ease 0s;
    font-family: 'Montserrat', cursive;
  }
  button:hover {
    background-color: #e2f1f8;
    color: #ffbc0e;
    transform: scale(1.1);
  }
`;
