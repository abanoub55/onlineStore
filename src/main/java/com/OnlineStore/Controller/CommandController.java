package com.OnlineStore.Controller;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.OnlineStore.Entities.Command;
import com.OnlineStore.Entities.Product;
import com.OnlineStore.Repositories.commandRepo;

@RestController
@CrossOrigin(origins = "http://localhost:4200", allowedHeaders = "*")
@RequestMapping("/api")
public class CommandController {
	@Autowired
	commandRepo repo;
		
	
	@GetMapping("/commands/{id}")
	  public List<Command> getcommands(@PathVariable int id)
	  {
		  
		  List<Command> list= repo.findAll();
		  List<Command> returned = new ArrayList();
		  for(Command cmd:list)
		  {
			  if(cmd.getStore().getStoreID()==id)
			  {
				  returned.add(cmd);
			  }
		  }
		  return returned;
	  }
	@PostMapping("/command")
	public Command createCommand(@RequestBody Command command)
	{
		return repo.save(command);
	}
	
	
	@DeleteMapping("/commandDel/{prod}")
	public boolean deleteUser(@PathVariable Product prod)
	{
		Iterable<Command> list=repo.findAll();
		Command deletedCommand= new Command();
		for(Command us:list)
		{
			if(us.getProd().getId()==prod.getId())
			{
				deletedCommand=us;break;
			}
		}
		repo.delete(deletedCommand);
		 return true;
	}
	
	
}
