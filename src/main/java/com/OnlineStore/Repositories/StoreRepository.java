package com.OnlineStore.Repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.repository.CrudRepository;

import com.OnlineStore.Entities.Store;


public interface StoreRepository extends JpaRepository<Store,Integer>{

}
