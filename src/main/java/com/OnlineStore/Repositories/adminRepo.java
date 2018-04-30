package com.OnlineStore.Repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import com.OnlineStore.Entities.Admin;

public interface adminRepo  extends JpaRepository<Admin,Integer>{

}
