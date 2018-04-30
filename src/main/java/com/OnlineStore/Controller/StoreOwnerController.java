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

import com.OnlineStore.Entities.StoreOwner;
import com.OnlineStore.Repositories.StoreOwnerRepo;

@RestController
@CrossOrigin(origins = "http://localhost:4200", allowedHeaders = "*")
@RequestMapping("/api")
public class StoreOwnerController {
	@Autowired
	StoreOwnerRepo userrepo;
	@GetMapping("/susers")
	public List<StoreOwner> getusers()
	{
		
		return userrepo.findAll();
		
	}
	@PostMapping("/suserlogin")
	public StoreOwner login(@RequestBody StoreOwner user)
	{
		Iterable<StoreOwner> list=userrepo.findAll();
		for(StoreOwner us:list)
		{
			if(us.getName().equals(user.getName()) && us.getPassword().equals(user.getPassword()))
			{
				return us;
			}
		}
		return new StoreOwner();
	}
	
	@GetMapping("/suser/{userID}")
	public StoreOwner getuser(@PathVariable int userID)
	{
		Iterable<StoreOwner> list=userrepo.findAll();
		StoreOwner wantedUser= new StoreOwner();
		for(StoreOwner us:list)
		{
			if(us.getUserID()==userID)
			{
				wantedUser=us;break;
			}
		}
		return wantedUser;
	}
	@PostMapping("/suser")
	public StoreOwner createUser(@RequestBody StoreOwner user)
	{
		return userrepo.save(user);
	}
	@PutMapping("/suser")
	public StoreOwner updateUser(@RequestBody StoreOwner user)
	{
		return userrepo.save(user);
	}
	@DeleteMapping("/suser/{userID}")
	public boolean deleteUser(@PathVariable int userID)
	{
		Iterable<StoreOwner> list=userrepo.findAll();
		StoreOwner deletedUser= new StoreOwner();
		for(StoreOwner us:list)
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
