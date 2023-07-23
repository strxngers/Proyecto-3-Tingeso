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
        </header>
      </NavStyle>
    </>
  );
}

export default NavbarComponent;



const NavStyle = styled.nav`
  .header {
    display: flex;
    background-color: #312466;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 85px;
    padding: 5px 10%;
  }

  .logo {;
    color: white;
    font-family: 'Montserrat', cursive;
    font-size: 25px;
  }


  .header .puntaje {
    margin-left: 80px;
    font-weight: 700;
    text-align: center;
    color: #eceff1;
  }
`