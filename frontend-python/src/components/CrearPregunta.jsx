import React, { useState } from "react";
import styled, { createGlobalStyle } from "styled-components";
import Navbar from "./NavbarComponent";

const CrearPregunta = () => {
  const [dificultad, setDificultad] = useState("");
  const [respuesta, setRespuesta] = useState("");
  const [enunciado, setEnunciado] = useState("");
  const [preguntaPython, setPreguntaPython] = useState("");
  const [enviando, setEnviando] = useState(false);

  const handleDificultadChange = (event) => {
    setDificultad(event.target.value);
  };

  const handleRespuestaChange = (event) => {
    setRespuesta(event.target.value);
  };

  const handleEnunciadoChange = (event) => {
    setEnunciado(event.target.value);
  };

  const handlePreguntaPythonChange = (event) => {
    setPreguntaPython(event.target.value);
  };

  const handleEnviarPregunta = () => {
    if (dificultad === "" || respuesta.trim() === "" || preguntaPython.trim() === "" || enunciado.trim() === "") {
      alert("Error: Por favor, completa todos los campos antes de enviar la pregunta.");
      return;
    }

    setEnviando(true);

    const formData = new FormData();
    formData.append("enunciado", enunciado);
    formData.append("preguntaPython", preguntaPython);
    formData.append("dificultad", dificultad);
    formData.append("respuesta", respuesta);

    fetch("http://localhost:8080/preguntas", {
      method: "POST",
      body: formData,
    })
      .then((response) => {
        if (response.ok) {
          alert("Pregunta creada con éxito.");
          window.location.reload();
        } else {
          alert("Error al enviar la pregunta. Por favor, inténtalo nuevamente más tarde.");
        }
      })
      .catch((error) => {
        alert("Error al enviar la pregunta. Por favor, inténtalo nuevamente más tarde.");
        console.error("Error al enviar la pregunta:", error);
      })
      .finally(() => {
        setEnviando(false);
      });
  };

  return (
    <>
      <Navbar />
      <Container>
        <GlobalStyle />
        <Card>
          <h3>Crear Pregunta</h3>
          <div>
            <label htmlFor="enunciado">Enunciado:</label>
            <textarea id="enunciado" name="enunciado" value={enunciado} onChange={handleEnunciadoChange}></textarea>
            {enunciado.trim() === "" && <ErrorMessage>Ingresa el enunciado de tu pregunta ¿Qué hace el código?</ErrorMessage>}
          </div>
          <div>
            <label htmlFor="preguntaPython">Pregunta en Python:</label>
            <textarea id="preguntaPython" name="preguntaPython" value={preguntaPython} onChange={handlePreguntaPythonChange}></textarea>
            {preguntaPython.trim() === "" && <ErrorMessage>Ingresa el enunciado de tu pregunta en Python</ErrorMessage>}
          </div>
          <div>
            <label htmlFor="dificultad">Dificultad:</label>
            <select id="dificultad" name="dificultad" value={dificultad} onChange={handleDificultadChange}>
              <option value="">Selecciona la dificultad</option>
              <option value="1">Básico</option>
              <option value="2">Intermedio</option>
              <option value="3">Avanzado</option>
            </select>
            {dificultad === "" && <ErrorMessage>Selecciona la dificultad de tu pregunta</ErrorMessage>}
          </div>
          <div>
            <label htmlFor="respuesta">Respuesta:</label>
            <input type="text" id="respuesta" name="respuesta" value={respuesta} onChange={handleRespuestaChange} />
            {respuesta.trim() === "" && <ErrorMessage>¡No olvides ingresar la respuesta a tu pregunta!</ErrorMessage>}
          </div>

          <ButtonWrapper>
            <Button onClick={handleEnviarPregunta} disabled={enviando}>
              {enviando ? "Enviando..." : "Enviar Pregunta"}
            </Button>
          </ButtonWrapper>
        </Card>
      </Container>
    </>
  );
};

export default CrearPregunta;

const GlobalStyle = createGlobalStyle`
  body {
    background-color: #154360;
    margin: 0;
    padding: 0;
  }
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: 100vh;
`;

const Card = styled.div`
  background-color: #154360;
  border-radius: 25px;
  border: 2px solid #fff;
  padding: 20px;
  color: #fff;
  font-family: 'Montserrat', cursive;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  max-width: 400px;
  width: 80%;
  text-align: center;
  margin-top: 30px;

  h3 {
    margin-bottom: 20px;
  }

  div {
    margin-bottom: 10px;
    text-align: left;
  }

  label {
    font-weight: bold;
    margin-right: 10px;
  }

  input,
  textarea,
  select {
    width: 100%;
    padding: 8px;
    border-radius: 5px;
    border: none;
    background-color: #fff;
    margin-top: 5px;
  }

  textarea {
    resize: vertical;
  }
`;

const ButtonWrapper = styled.div`
  margin-top: 15px;
`;

const Button = styled.button`
  font-weight: 700;
  color: #1b3039;
  padding: 9px 25px;
  background: #eceff1;
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

const ErrorMessage = styled.span`
  color: white;
  font-size: 14px;
  margin-left: 10px;
`;
