import React, { useState } from "react";
import styled from "styled-components";
import { createGlobalStyle } from "styled-components";
import { CodeBlock, shadesOfPurple } from "react-code-blocks";
import Form from "react-bootstrap/Form";
import add_to_puntaje from "./Puntaje";

export default function PreguntasComponent({
  id,
  dificultad,
  enunciado,
  pregunta_python,
  respuesta,
  onNextQuestion,
}) {
  const initialState = {
    answer: "",
  };

  const [puntaje, setPuntaje] = useState(
    localStorage.getItem("puntaje") ? localStorage.getItem("puntaje") : 0
  );

  const [trueAnswer, setTrueAnswer] = useState(-1);
  const [showNextButton, setShowNextButton] = useState(false);

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

    setShowNextButton(true); // Mostramos el botón "Siguiente"
  };

  const handleNext = () => {
    setInput(initialState); // Reiniciamos el estado del input de respuesta
    setTrueAnswer(-1); // Reiniciamos el estado de trueAnswer
    setShowNextButton(false); // Ocultamos el botón "Siguiente" nuevamente
    onNextQuestion(); // Llamamos a la función de avance a la siguiente pregunta en el componente padre
  };

  return (
    <div>
      <GlobalStyle />
      <HomeStyle>
        <h3 className="text-enunciado">
          <b>Pregunta : {enunciado}</b>
        </h3>
        <div className="code-box">
          {pregunta_python ? (
            <CodeBlock
              text={pregunta_python}
              language="python"
              theme={shadesOfPurple}
              codeBlock={{ lineNumbers: true }}
              align="left"
            />
          ) : (
            <p>Cargando pregunta...</p>
          )}
        </div>
        <div className="respuesta" style={{ marginBottom: "20px" }}>
          <Form onSubmit={compararRespuestas}>
            <Form.Group
              className="mb-3"
              controlId="respuesta"
              value={input.answer}
              onChange={changeAnswerHandler}
            >
              <br />
              <Form.Control
                as="textarea"
                rows={2}
                cols={60}
                placeholder=""
              />
            </Form.Group>
            {trueAnswer === 1 ? (
              <h3>¡Respuesta Correcta!</h3>
            ) : trueAnswer === 0 ? (
              <h3>Respuesta Incorrecta:c </h3>
            ) : (
              // Mostramos el botón "Verificar Respuesta" si no se ha verificado
              <button type="submit" variant="primary" style={{ marginTop: "20px" }}>
                Verificar Respuesta
              </button>
            )}
          </Form>
          {showNextButton && trueAnswer !== -1 && (
            // Mostramos el botón "Siguiente" si la respuesta fue verificada y es correcta o incorrecta
            <NextButton onClick={handleNext}>Siguiente</NextButton>
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
    font-size: 25px;
    font-family: 'Montserrat', cursive;
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
    
}
  

  button {
    font-weight: 700;
    color: #1b3039;
    padding: 9px 25px;
    background: #e2f1f8;
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
const NextButton = styled.button`
  /* Estilos para que el botón "Siguiente" se vea como el de "Verificar Respuesta" */
  font-weight: 700;
  color: #1b3039;
  padding: 9px 25px;
  background: #e2f1f8;
  border: none;
  border-radius: 50px;
  cursor: pointer;
  transition: all 0.3s ease 0s;
  font-family: 'Montserrat', cursive;

  &:hover {
    background-color: #e2f1f8;
    color: #ffbc0e;
    transform: scale(1.1);
  }
  
`;
