package com.tingeso.preguntasservice.repositories;

import com.tingeso.preguntasservice.entities.PreguntasEntity;
import org.springframework.data.jpa.repository.JpaRepository;

public interface PreguntasRepository extends JpaRepository<PreguntasEntity,Integer> {
}
