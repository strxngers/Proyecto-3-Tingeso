import React, { useState } from "react";
import styled, { createGlobalStyle } from "styled-components";
import swal from "sweetalert";
import JustNavbar from "./JustNavbar";

const CrearPregunta = () => {
  const [archivoTxt, setArchivoTxt] = useState(null);
  const [dificultad, setDificultad] = useState("");
  const [respuesta, setRespuesta] = useState("");
  const [enunciado, setEnunciado] = useState("");

  const handleArchivoTxtChange = (event) => {
    const file = event.target.files[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = (e) => {
      setArchivoTxt(e.target.result);
    };
    reader.readAsDataURL(file);
  };

  const handleDificultadChange = (event) => {
    setDificultad(event.target.value);
  };

  const handleRespuestaChange = (event) => {
    setRespuesta(event.target.value);
  };

  const handleEnunciadoChange = (event) => {
    setEnunciado(event.target.value);
  };

  const handleEnviarPregunta = () => {
    if (!archivoTxt || dificultad === "" || respuesta.trim() === "" || enunciado.trim() === "") {
      swal("Error", "Por favor, completa todos los campos antes de enviar la pregunta.", "error");
      return;
    }

    // You can now use `archivoTxt` in the request payload
    const requestData = {
      archivo: archivoTxt,
      dificultad,
      respuesta,
      enunciado,
    };

    fetch("http://localhost:8080/preguntas", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(requestData),
    })
      .then((response) => response.json())
      .then((data) => {
        swal("¡Pregunta enviada!", "La pregunta se ha enviado correctamente.", "success");
        // Reset the form after successful submission
        setArchivoTxt(null);
        setDificultad("");
        setRespuesta("");
        setEnunciado("");
      })
      .catch((error) => {
        swal("Error", "Ha ocurrido un error al enviar la pregunta.", "error");
      });
  };

  return (
    <>
      <JustNavbar />
      <Container>
        <GlobalStyle />
        <Card>
          <h3>Crear Pregunta</h3>
          <div>
            <label htmlFor="archivoTxt">Archivo de texto:</label>
            <input type="file" id="archivoTxt" name="archivoTxt" accept=".txt" onChange={handleArchivoTxtChange} />
          </div>
          <div>
            <label htmlFor="dificultad">Dificultad:</label>
            <input type="number" id="dificultad" name="dificultad" value={dificultad} onChange={handleDificultadChange} />
          </div>
          <div>
            <label htmlFor="respuesta">Respuesta:</label>
            <input type="text" id="respuesta" name="respuesta" value={respuesta} onChange={handleRespuestaChange} />
          </div>
          <div>
            <label htmlFor="enunciado">Enunciado:</label>
            <textarea id="enunciado" name="enunciado" rows="4" value={enunciado} onChange={handleEnunciadoChange}></textarea>
          </div>
          <button onClick={handleEnviarPregunta}>Enviar Pregunta</button>
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
  justify-content: center;
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
  textarea {
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

  button {
    font-weight: 700;
    color: #1b3039;
    padding: 9px 25px;
    background: #eceff1;
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
