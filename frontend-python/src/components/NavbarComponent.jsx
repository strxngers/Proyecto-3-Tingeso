import React, { useState } from "react";
import styled from "styled-components";


function NavbarComponent() {
  return (
    <>
      <NavStyle>
        <nav className="sticky"></nav>
        <header class="header">
          <div class="logo">
            <h1>P de Python</h1>
          </div>
          <nav></nav>
          <a class="btn" href="/">
            <button>Volver al menú principal</button>
          </a>
        </header>
      </NavStyle>
    </>
  );
}

export default NavbarComponent;



const NavStyle = styled.nav`
  .header {
    background-color: #312466;
    display: flex;
    justify-content: flex-end;
    align-items: center;
    height: 85px;
    padding: 5px 10%;
  }

  .header .logo {
    margin-right: auto;
    color: white;
    font-family: 'Montserrat', cursive; /* Cambia la fuente a Montserrat */
    font-size: 25px;
  }

  .header .btn button {
    margin-left: 20px;
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

  .header .btn button:hover {
    background-color: #e2f1f8;
    color: #ffbc0e;
    transform: scale(1.1);
  }



  .header .puntaje {
    margin-left: 80px;
    font-weight: 700;
    text-align: center;
    color: #eceff1;
  }
`