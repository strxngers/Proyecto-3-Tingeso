import axios from "axios";
const PREGUNTAS_URL= "http://localhost:8082/preguntas";

class PreguntasService {
  basicQuestions() {
    return axios.get(PREGUNTAS_URL + "/4qb");
  }
}

export default new PreguntasService();
