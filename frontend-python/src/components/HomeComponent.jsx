import React, { Component } from "react";
import styled from "styled-components";
import { createGlobalStyle } from 'styled-components'
import Navbar from "./PdePythonNavbar";


export default function HomeComponent() {
  
  const ComenzarBasico = () => {
    localStorage.setItem("puntaje", 0);
    localStorage.setItem("restantes", 4);
    window.location.href = "/basico";
  };

  const ComenzarIntermedio = () => {
    localStorage.setItem("puntaje", 0);
    localStorage.setItem("restantes", 4);
    window.location.href = "/intermedio";
  };

  const ComenzarAvanzado = () => {
    localStorage.setItem("puntaje", 0);
    localStorage.setItem("restantes", 4);
    window.location.href = "/avanzado";
  };

  const CrearPregunta = () => {
    window.location.href = "/crear-pregunta";
  };

  return (
    <div>
      <GlobalStyle />
      <HomeStyle>
        <Navbar />
        <h3 className="text-center">
          {" "}
          <b>
            Selecciona tu nivel de dificultad para empezar a responder preguntas.{" "}
          </b>
        </h3>
        <br />

        <div className="card-container">
          <div className="card">
            <h2>
              <b>Nivel Básico</b>
            </h2>
            <h3>
              ¡Descubre el emocionante mundo de la programación con Python! Este es el lugar 
              perfecto para principiantes que desean sumergirse en el fascinante universo de la codificación. 
            </h3>
            <button type="button" className="btn" onClick={ComenzarBasico}>
              Comenzar
            </button>
          </div>
          <div className="card">
            <h2>
              <b>Modo Intermedio</b>
            </h2>
            <h3>
              ¡Desafía tus habilidades en Python con desafíos de dificultad media! Si ya 
              tienes conocimientos en este lenguaje de programación y estás buscando llevar 
              tus habilidades al siguiente nivel, este es el lugar ideal para ti.
            </h3>
            <button type="button" className="btn" onClick={ComenzarIntermedio}>
              Comenzar
            </button>
          </div>
          <div className="card">
            <h2>
              <b>Modo Avanzado</b>
            </h2>
            <h3>
              ¡Sumérgete en el mundo de los desafíos épicos de Python! Si eres un experto en este 
              lenguaje de programación y buscas los retos más desafiantes, has llegado al lugar indicado
            </h3>
            <button type="button" className="btn" onClick={ComenzarAvanzado}>
              Comenzar
            </button>
          </div>
        </div>

        <br />
        <div className="card">
          <h2>
            <b>¡Agregar un nuevo desafío! </b>
          </h2>
          <h3>
            ¡Prepárate para poner a prueba tus habilidades y enfrentar el desafío definitivo! 
            Si has creado un desafío en Python y estás ansioso por ver cómo otros programadores se enfrentan a él, esta es tu oportunidad.
          </h3>
          <button type="button" className="btn" onClick={CrearPregunta}>
            Acceder
          </button>
        </div>
        <br />
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
  .text-center {
    justify-content: center;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 20px;
    color: #fff;
    font-family: 'Montserrat', cursive;
  }

  .card-container {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 25px;
    justify-content: center;
    align-items: center;
    padding: 20px; /* Añadir el padding para establecer la distancia del borde de la pantalla */
  }

  .card {
    background-color: #312466;
    border-radius: 25px;
    border: 10px ;
    padding: 25px;
    text-align: center;
    font-family: 'Montserrat', cursive;
  }

  .card-crear {
    grid-column: span 3;
    font-family: 'Montserrat', cursive;
    padding: 20px; /* Añadir el mismo padding que a las otras cards */
  }

  .card h2 {
    color: #FDFEFE;
  }

  .card h3 {
    color: #FDFEFE;
    margin-bottom: 20px;
  }

  .btn {
    font-weight: 700;
    color: #1b3039;
    padding: 9px 25px;
    background: #eceff1;
    border: none;
    border-radius: 50px;
    cursor: pointer;
    transition: all 0.3s ease 0s;
  }

  .btn:hover {
    background-color: #e2f1f8;
    color: #ffbc0e;
    transform: scale(1.1);
  }

  h1 {
    font-size: 36px; /* Tamaño del título más grande */
    margin-bottom: 20px; /* Espacio inferior entre el título y el contenido */
    font-family: 'Montserrat', cursive;
  }

`;