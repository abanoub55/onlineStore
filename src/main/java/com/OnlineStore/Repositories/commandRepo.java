package com.OnlineStore.Repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import com.OnlineStore.Entities.Command;

public interface commandRepo extends JpaRepository<Command,Integer> {

}
