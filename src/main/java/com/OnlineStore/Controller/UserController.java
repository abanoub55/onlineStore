package com.OnlineStore.Controller;

import java.util.ArrayList;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.OnlineStore.Entities.User;
import com.OnlineStore.Repositories.UserRepository;
import java.util.List;
import java.util.Optional;

@RestController
@CrossOrigin(origins = "http://localhost:4200",allowedHeaders="*")
@RequestMapping("/api")
public class UserController {
	@Autowired
	private UserRepository userrepo;
	
	@GetMapping("/users")
	public List<User> getusers()
	{
		
		return userrepo.findAll();
		
	}
	@PostMapping("/userlogin")
	public User login(@RequestBody User user)
	{
		Iterable<User> list=userrepo.findAll();
		for(User us:list)
		{
			if(us.getName()==user.getName() && us.getPassword()==user.getPassword())
			{
				return user;
			}
		}
		return null;
	}
	
	@GetMapping("/user/{userID}")
	public User getuser(@PathVariable int userID)
	{
		Iterable<User> list=userrepo.findAll();
		User wantedUser= new User();
		for(User us:list)
		{
			if(us.getUserID()==userID)
			{
				wantedUser=us;break;
			}
		}
		return wantedUser;
	}
	@PostMapping("/user")
	public User createUser(@RequestBody User user)
	{
		return userrepo.save(user);
	}
	@PutMapping("/user")
	public User updateUser(@RequestBody User user)
	{
		return userrepo.save(user);
	}
	@DeleteMapping("/user/{userID}")
	public boolean deleteUser(@PathVariable int userID)
	{
		Iterable<User> list=userrepo.findAll();
		User deletedUser= new User();
		for(User us:list)
		{
			if(us.getUserID()==userID)
			{
				deletedUser=us;break;
			}
		}
		
		userrepo.delete(deletedUser);
		 return true;
	}
	@GetMapping("/userHome")
	public String showHome(Model model)
	{
    	model.addAttribute("user",new User());
		return "userHome";
	}
	
	@GetMapping("/Register")
    public String showRegister(Model model)
    {
    	model.addAttribute("user",new User());
		return "Register";
    }
	
	@PostMapping("/Register")
    public String Register(Model model,@ModelAttribute User user)
    {
    	
    	userrepo.save(user);
    	model.addAttribute("user",new User());
    	return "Register";
    }
	
    @GetMapping("/Login")
    
    public String showLogin(Model model)
    {
    	model.addAttribute("user",new User());
    	return "Login";
    }
    @PostMapping("Login")
    public String Login(Model model,@ModelAttribute User user)
    {
    	Iterable<User> usersIterable=userrepo.findAll();
    	ArrayList<User> userslist = new ArrayList<User>();
    	for(User userr : usersIterable){
    		userslist.add(userr);
    	}
    	model.addAttribute("users", usersIterable);
    	boolean flag=false;
    	for(User u:userslist)
    	{
    		
    		if(user.getName().equals(u.getName()) && user.getEmail().equals(u.getEmail()) &&
    				user.getPassword().equals(u.getPassword()))
    		{
    			flag=true;
    		}
    	}
    	if(flag==false){return "Login";}
    	return "userHome";
    }
}
