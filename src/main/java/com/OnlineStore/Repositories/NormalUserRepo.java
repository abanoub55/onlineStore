package com.OnlineStore.Repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import com.OnlineStore.Entities.NormalUser;

public interface NormalUserRepo extends JpaRepository<NormalUser,Integer>{

}
