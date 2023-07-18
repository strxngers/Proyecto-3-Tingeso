import React, { useEffect, useState } from 'react';
import PreguntasService from '../services/PreguntasService';

function Preguntas() {
  const [preguntas, setPreguntas] = useState([]);

  useEffect(() => {
    const fetchPreguntas = async () => {
      try {
        const response = await PreguntasService.basicQuestions();
        setPreguntas(response.data);
      } catch (error) {
        console.log(error);
      }
    };

    fetchPreguntas();
  }, []);

  return (
    <div>
      <h1>Preguntas</h1>
      <ul>
        {preguntas.map((pregunta) => (
          <li key={pregunta.id}>{pregunta.texto}</li>
        ))}
      </ul>
    </div>
  );
}

export default Preguntas;
