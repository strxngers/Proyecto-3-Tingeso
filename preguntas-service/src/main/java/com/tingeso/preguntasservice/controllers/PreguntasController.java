package com.tingeso.preguntasservice.controllers;

import com.tingeso.preguntasservice.entities.PreguntasEntity;
import com.tingeso.preguntasservice.services.PreguntasService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.util.List;

@RestController
@RequestMapping("/preguntas")
public class PreguntasController {

    @Autowired
    PreguntasService preguntasService;

    @GetMapping
    public ResponseEntity<List<PreguntasEntity>> getQuestions(){
        List<PreguntasEntity> preguntas = preguntasService.getAllQuestions();
        if(preguntas.isEmpty()){
            return ResponseEntity.noContent().build();
        }
        return ResponseEntity.ok(preguntas);
    }

    @GetMapping("/4qb")
    public ResponseEntity<List<PreguntasEntity>> get4B() {
        Integer dificultad = 1;
        List<PreguntasEntity> preguntas = preguntasService.getFourQuestions(dificultad);
        return ResponseEntity.ok(preguntas);
    }

    @GetMapping("/4qi")
    public ResponseEntity<List<PreguntasEntity>> get4i() {
        Integer dificultad = 2;
        List<PreguntasEntity> preguntas = preguntasService.getFourQuestions(dificultad);
        return ResponseEntity.ok(preguntas);
    }
    @GetMapping("/4qa")
    public ResponseEntity<List<PreguntasEntity>> get4a() {
        Integer dificultad = 3;
        List<PreguntasEntity> preguntas = preguntasService.getFourQuestions(dificultad);
        return ResponseEntity.ok(preguntas);
    }
    @PostMapping
    public ResponseEntity<String> crearPregunta(
            @RequestParam("archivo") MultipartFile archivo,
            @RequestParam("dificultad") int dificultad,
            @RequestParam("respuesta") String respuesta,
            @RequestParam("enunciado") String enunciado) {
        try {
            PreguntasEntity pregunta = preguntasService.crearPregunta(archivo, enunciado, dificultad, respuesta);
            return ResponseEntity.ok("Pregunta creada con éxito.");
        } catch (RuntimeException e) {
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body(e.getMessage());
        }
    }
}
