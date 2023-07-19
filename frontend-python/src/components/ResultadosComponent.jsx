import React, { useState } from "react";
import styled from "styled-components";
import { createGlobalStyle } from "styled-components";

export default function ResultadosComponent() {
  const ComenzarFacil = () => {
    localStorage.setItem("puntaje", 0);
    localStorage.setItem("restantes", 4);
    console.log()
    window.location.href = "/basico";
  };
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

  const [puntaje, setPuntaje] = useState(
    localStorage.getItem("puntaje") ? localStorage.getItem("puntaje") : 0
  );

  const [segundos, setSegundos] = useState(
    localStorage.getItem("segundos") ? localStorage.getItem("segundos") : 0
  );

  const [minutos, setMinutos] = useState(
    localStorage.getItem("minutos") ? localStorage.getItem("minutos") : 0
  );

  const [horas, setHoras] = useState(
    localStorage.getItem("horas") ? localStorage.getItem("horas") : 0
  );

  return (
    <>
      <GlobalStyle />
      <HomeStyle>
        <br></br>
        <div className="resultados">
          <h1>
            <b>
              <u>Tu calificación es: {puntaje}.0/ 7.0</u>
            </b>
          </h1>
          <h1>Tu tiempo fue de:</h1>
          <h1>
            <b>
              {horas} horas, {minutos} minutos y {segundos} segundos.
            </b>
          </h1>
          {puntaje == 7 ? (
            <h1>¡Felicidades! Has completado el desafio con éxito.</h1>
          ) : (
            <h1>¡Puedes mejorar! Sigue intentandolo.</h1>
          )}
        </div>
        <br></br>
        <div className="texto-resultados">
          <h1>
            <b>
              ¿Buscas otros desafios? Intentalo denuevo, aumenta la dificultad o
              crea tu propio desafio.
            </b>
          </h1>
        </div>
        <div className="facil">
          <h2>
            <b>Modo Básico 🙂</b>
          </h2>
          <h3>
            ¡Descubre el emocionante mundo de la programación con Python! Este es el lugar 
            perfecto para principiantes que desean sumergirse en el fascinante universo de la codificación. 
            </h3>
          <button type="button" class="btn btn-primary" onClick={ComenzarBasico}>
            Comenzar
          </button>
        </div>
        <br></br>
        <div className="medio">
          <h2>
            <b>Modo Intermedio 🤔</b>
          </h2>
          <h3>
            ¡Desafía tus habilidades en Python con desafíos de dificultad media! Si ya 
            tienes conocimientos en este lenguaje de programación y estás buscando llevar 
            tus habilidades al siguiente nivel, este es el lugar ideal para ti.
            </h3>
          <button type="button" class="btn btn-primary" onClick={ComenzarIntermedio}>
            Comenzar
          </button>
        </div>
        <br></br>
        <div className="dificil">
          <h2>
            <b>Modo Avanzado 😈</b>
          </h2>
          <h3>
              ¡Sumérgete en el mundo de los desafíos épicos de Python! Si eres un experto en este 
              lenguaje de programación y buscas los retos más desafiantes, has llegado al lugar indicado
            </h3>
          <button type="button" class="btn btn-primary" onClick={ComenzarAvanzado}>
            Comenzar
          </button>
        </div>

        <br></br>
        <div className="nueva-pregunta">
          <h2>
            <b>Agregar un nuevo desafio 🐍 </b>
          </h2>
          <h3>
            ¡Prepárate para poner a prueba tus habilidades y enfrentar el desafío definitivo! 
            Si has creado un desafío en Python y estás ansioso por ver cómo otros programadores se enfrentan a él, esta es tu oportunidad.
          </h3>
          <button type="button" class="btn btn-primary" onClick={CrearPregunta}>
            Acceder
          </button>
        </div>
        <br></br>
      </HomeStyle>
    </>
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

.facil{
    justify-content: center;
    display: flex;
    flex-direction: column;
    align-items: center;
    color: #FDFEFE;
    background-color: #1F618D;
    border-radius: 25px;
    padding: 20px;
    width: 60%;
    margin: auto;
    font-family: 'Montserrat', cursive; 
}

.resultados{
    padding-top: 20px;
    justify-content: center;
    display: flex;
    flex-direction: column;
    align-items: center;
    color: #FDFEFE;
    background-color: #0F889E;
    border-radius: 25px;
    padding: 20px;
    width: 60%;
    margin: auto;
    font-family: 'Montserrat', cursive; 
}

.dificil{
    justify-content: center;
    display: flex;
    flex-direction: column;
    align-items: center;
    color: #FDFEFE;
    background-color: #1F618D;
    border-radius: 25px;
    padding: 20px;
    width: 60%;
    margin: auto;
    font-family: 'Montserrat', cursive;
}

.medio{
    justify-content: center;
    display: flex;
    flex-direction: column;
    align-items: center;
    color: #FDFEFE;
    background-color: #1F618D;
    border-radius: 25px;
    padding: 20px;
    width: 60%;
    margin: auto;
    font-family: 'Montserrat', cursive;
}

.nueva-pregunta{
    justify-content: center;
    display: flex;
    flex-direction: column;
    align-items: center;
    color: #FDFEFE;
    background-color: #1F618D;
    border-radius: 25px;
    padding: 20px;
    width: 60%;
    margin: auto;
    font-family: 'Montserrat', cursive;
}
.texto-resultados{
    justify-content: center;
    display: flex;
    flex-direction: column;
    align-items: center;
    color: #FDFEFE;
    width: 80%;
    margin: auto;
    padding: 20px;
    font-family: 'Montserrat', cursive;
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
    font-family: 'Montserrat', cursive;
  }
  
  .btn:hover {
    background-color: #e2f1f8;
    color: #ffbc0e;
    transform: scale(1.1);
  }
`;