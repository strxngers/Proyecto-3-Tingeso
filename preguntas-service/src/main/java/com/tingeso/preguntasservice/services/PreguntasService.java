package com.tingeso.preguntasservice.services;

import com.tingeso.preguntasservice.entities.PreguntasEntity;
import com.tingeso.preguntasservice.repositories.PreguntasRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.util.ArrayList;
import java.util.Collections;
import java.util.List;

@Service
public class PreguntasService {

    @Autowired
    PreguntasRepository preguntasRepository;

    public List<PreguntasEntity> getAllQuestions(){
        return preguntasRepository.findAll();
    }

    public PreguntasEntity saveQuestion(PreguntasEntity pregunta){
        return preguntasRepository.save(pregunta);
    }
    public List<PreguntasEntity> getByDificultad(int dificultad){
        List<PreguntasEntity> aux = preguntasRepository.findAll();
        List<PreguntasEntity> preguntas = new ArrayList<>();
        for(int i = 0; i < aux.size(); i++){
            if(aux.get(i).getDificultad() == dificultad){
                preguntas.add(aux.get(i));
            }
        }
        return preguntas;
    }

    public List<PreguntasEntity> getFourQuestions(Integer dificultad){
        List<PreguntasEntity> preguntas = getByDificultad(dificultad);
        Collections.shuffle(preguntas);
        List<PreguntasEntity> preguntasAleatorias = new ArrayList<>(preguntas.subList(0, 4));
        return preguntasAleatorias;
    }
    public PreguntasEntity crearPregunta(MultipartFile archivo, int dificultad, String respuesta) {
        try {
            String preguntaPython = new String(archivo.getBytes());

            PreguntasEntity pregunta = new PreguntasEntity();
            pregunta.setPreguntaPython(preguntaPython);
            pregunta.setDificultad(dificultad);
            pregunta.setRespuesta(respuesta);

            return preguntasRepository.save(pregunta);
        } catch (IOException e) {
            throw new RuntimeException("Error al leer el archivo adjunto", e);
        }
    }



}
