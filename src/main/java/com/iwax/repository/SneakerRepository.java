package com.iwax.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.iwax.model.Sneaker;

public interface SneakerRepository extends JpaRepository<Sneaker, Long> {

}
