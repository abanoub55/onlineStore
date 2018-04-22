package com.OnlineStore.Repositories;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.repository.CrudRepository;

import com.OnlineStore.Entities.Product;
import com.OnlineStore.Entities.Statistics;

public interface StatisticsRepository extends JpaRepository<Statistics,Integer> {

}
