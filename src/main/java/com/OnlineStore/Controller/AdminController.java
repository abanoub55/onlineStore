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
import com.OnlineStore.Entities.Admin;
import com.OnlineStore.Repositories.adminRepo;


@RestController
@CrossOrigin(origins = "http://localhost:4200", allowedHeaders = "*")
@RequestMapping("/api")
public class AdminController {
	@Autowired
	adminRepo userrepo;
	@GetMapping("/ausers")
	public List<Admin> getusers()
	{
		
		return userrepo.findAll();
		
	}
	@PostMapping("/auserlogin")
	public Admin login(@RequestBody Admin user)
	{
		Iterable<Admin> list=userrepo.findAll();
		for(Admin us:list)
		{
			if(us.getName().equals(user.getName()) && us.getPassword().equals(user.getPassword()))
			{
				return us;
			}
		}
		return new Admin();
	}
	
	@GetMapping("/auser/{userID}")
	public Admin getuser(@PathVariable int userID)
	{
		Iterable<Admin> list=userrepo.findAll();
		Admin wantedUser= new Admin();
		for(Admin us:list)
		{
			if(us.getUserID()==userID)
			{
				wantedUser=us;break;
			}
		}
		return wantedUser;
	}
	@PostMapping("/auser")
	public Admin createUser(@RequestBody Admin user)
	{
		return userrepo.save(user);
	}
	@PutMapping("/auser")
	public Admin updateUser(@RequestBody Admin user)
	{
		return userrepo.save(user);
	}
	@DeleteMapping("/auser/{userID}")
	public boolean deleteUser(@PathVariable int userID)
	{
		Iterable<Admin> list=userrepo.findAll();
		Admin deletedUser= new Admin();
		for(Admin us:list)
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
