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

import com.OnlineStore.Entities.NormalUser;
import com.OnlineStore.Entities.User;
import com.OnlineStore.Repositories.NormalUserRepo;

@RestController
@CrossOrigin(origins = "http://localhost:4200", allowedHeaders = "*")
@RequestMapping("/api")
public class NormalUserController {
	@Autowired
	NormalUserRepo userrepo;
	
	
	
	@GetMapping("/nusers")
	public List<NormalUser> getusers()
	{
		
		return userrepo.findAll();
		
	}
	@PostMapping("/nuserlogin")
	public NormalUser login(@RequestBody NormalUser user)
	{
		Iterable<NormalUser> list=userrepo.findAll();
		for(NormalUser us:list)
		{
			if(us.getName().equals(user.getName()) && us.getPassword().equals(user.getPassword()))
			{
				return us;
			}
		}
		return new NormalUser();
	}
	
	@GetMapping("/nuser/{userID}")
	public NormalUser getuser(@PathVariable int userID)
	{
		Iterable<NormalUser> list=userrepo.findAll();
		NormalUser wantedUser= new NormalUser();
		for(NormalUser us:list)
		{
			if(us.getUserID()==userID)
			{
				wantedUser=us;break;
			}
		}
		return wantedUser;
	}
	@PostMapping("/nuser")
	public NormalUser createUser(@RequestBody NormalUser user)
	{
		return userrepo.save(user);
	}
	@PutMapping("/nuser")
	public NormalUser updateUser(@RequestBody NormalUser user)
	{
		return userrepo.save(user);
	}
	@DeleteMapping("/nuser/{userID}")
	public boolean deleteUser(@PathVariable int userID)
	{
		Iterable<NormalUser> list=userrepo.findAll();
		NormalUser deletedUser= new NormalUser();
		for(NormalUser us:list)
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
