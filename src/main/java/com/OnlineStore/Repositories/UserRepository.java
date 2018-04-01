package com.OnlineStore.Repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import com.OnlineStore.Entities.User;

public interface UserRepository extends JpaRepository<User,Integer> {

}
