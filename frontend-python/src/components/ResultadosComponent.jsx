import React, { useState } from "react";
import styled from "styled-components";
import { createGlobalStyle } from "styled-components";

export default function ResultadosComponent() {
  const VolverAlMenu = () => {
    window.location.href = "/"; // Redirige al menú principal
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
              Tu nota es: {puntaje}.0/ 7.0
            </b>
          </h1>
          <h1>Tu tiempo fue de:</h1>
          <h1>
            <b>
              {minutos} minutos y {segundos} segundos.
            </b>
          </h1>
          {puntaje == 7 ? (
            <h1>¡Felicidades! Has respondido correctamente.</h1>
          ) : (
            <h1>Puedes seguir practicando para mejorar tus puntajes, ¡No te rindas!</h1>
          )}
          <h1>
            <b>
              Puedes intentalo nuevamente, hasta que te sientas seguro/a para aumenta la dificultad o
              puedes crear tu propio desafio. 
            </b>
            <div className="text-center">
        <button className="btn" onClick={VolverAlMenu}>
          Intentar otro desafio
        </button>
        </div>
        
        <br></br>
        <div className="texto-resultados">
          
      </div>
          </h1>
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
    background-color: #312466;
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