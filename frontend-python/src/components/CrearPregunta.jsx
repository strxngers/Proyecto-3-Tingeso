import React, { useState } from "react";
import styled, { createGlobalStyle } from "styled-components";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import JustNavbar from "./JustNavbar";

const CrearPregunta = () => {
  const [archivoTxt, setArchivoTxt] = useState(null);
  const [dificultad, setDificultad] = useState("");
  const [respuesta, setRespuesta] = useState("");
  const [enunciado, setEnunciado] = useState("");
  const [mensaje, setMensaje] = useState({ text: "", tipo: "" });

  const handleArchivoTxtChange = (event) => {
    const file = event.target.files[0];
    if (!file) return;

    setArchivoTxt(file);
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
      setMensaje({ text: "Error: Por favor, completa todos los campos antes de enviar la pregunta.", tipo: "error" });
      return;
    }

    setMensaje({ text: "Enviando...", tipo: "info" }); // Mostrar un mensaje mientras se envía el formulario

    const formData = new FormData();
    formData.append("archivo", archivoTxt);
    formData.append("dificultad", dificultad);
    formData.append("respuesta", respuesta);
    formData.append("enunciado", enunciado);

    fetch("http://localhost:8080/preguntas", {
      method: "POST",
      body: formData,
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data); // Agregar esta línea para ver qué datos está devolviendo el servidor
        if (data.message === "Pregunta creada con éxito.") {
          setMensaje({ text: data.message, tipo: "success" });
          // Reseteamos el formulario después del envío exitoso
          setArchivoTxt(null);
          setDificultad("");
          setRespuesta("");
          setEnunciado("");
        } else {
          setMensaje({ text: data.message, tipo: "error" });
        }
      })
      .catch((error) => {
        setMensaje({ text: "Error: Ha ocurrido un error al enviar la pregunta. Por favor, inténtalo nuevamente más tarde.", tipo: "error" });
        console.error("Error al enviar la pregunta:", error);
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
          {mensaje.text && <Mensaje tipo={mensaje.tipo}>{mensaje.text}</Mensaje>}
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

const Mensaje = styled.p`
  color: ${({ tipo }) => (tipo === "error" ? "red" : "green")};
  font-weight: bold;
  margin: 10px 0;
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
