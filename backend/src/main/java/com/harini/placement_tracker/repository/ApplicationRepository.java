package com.harini.placement_tracker.repository;

import com.harini.placement_tracker.Application;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ApplicationRepository
        extends JpaRepository<Application, Long> {
}