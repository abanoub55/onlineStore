package com.OnlineStore.Controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import com.OnlineStore.Entities.Product;
import com.OnlineStore.Entities.Statistics;
import com.OnlineStore.Repositories.StatisticsRepository;

@RestController
@CrossOrigin(origins = "http://localhost:4200",allowedHeaders="*")
@RequestMapping("/api")
public class StatisticsController {
	@Autowired
	StatisticsRepository repo;
		
	
	@PostMapping("/stat")
	public Statistics createStat(@RequestBody Statistics stat)
	{
		return repo.save(stat);
	}
	
	@GetMapping("/stats")
	  public List<Statistics> getstats()
	  {
		  
		  return repo.findAll();
	  }
	
}
