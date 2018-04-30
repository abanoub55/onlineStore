package com.OnlineStore.Controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.OnlineStore.Entities.Collabrator;
import com.OnlineStore.Repositories.CollabratorRepo;



@RestController
@CrossOrigin(origins = "http://localhost:4200", allowedHeaders = "*")
@RequestMapping("/api")
public class CollabratorController {
	@Autowired
	CollabratorRepo userrepo;
	@GetMapping("/cusers")
	public List<Collabrator> getusers()
	{
		
		return userrepo.findAll();
		
	}
	@PostMapping("/cuserlogin")
	public Collabrator login(@RequestBody Collabrator user)
	{
		Iterable<Collabrator> list=userrepo.findAll();
		for(Collabrator us:list)
		{
			if(us.getName().equals(user.getName()) && us.getPassword().equals(user.getPassword()))
			{
				return us;
			}
		}
		return new Collabrator();
	}
	
	@GetMapping("/cuser/{userID}")
	public Collabrator getuser(@PathVariable int userID)
	{
		Iterable<Collabrator> list=userrepo.findAll();
		Collabrator wantedUser= new Collabrator();
		for(Collabrator us:list)
		{
			if(us.getUserID()==userID)
			{
				wantedUser=us;break;
			}
		}
		return wantedUser;
	}
	@PostMapping("/cuser")
	public Collabrator createUser(@RequestBody Collabrator user)
	{
		return userrepo.save(user);
	}
	@PutMapping("/cuser")
	public Collabrator updateUser(@RequestBody Collabrator user)
	{
		return userrepo.save(user);
	}
	@DeleteMapping("/cuser/{userID}")
	public boolean deleteUser(@PathVariable int userID)
	{
		Iterable<Collabrator> list=userrepo.findAll();
		Collabrator deletedUser= new Collabrator();
		for(Collabrator us:list)
		{
			if(us.getUserID()==userID)
			{
				deletedUser=us;break;
			}
		}
		
		userrepo.delete(deletedUser);
		 return true;
	}
}
