package com.OnlineStore.Controller;

import java.util.ArrayList;
import java.util.List;

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

import com.OnlineStore.Entities.Product;
import com.OnlineStore.Entities.Store;
import com.OnlineStore.Entities.User;
import com.OnlineStore.Repositories.StoreRepository;

@RestController
@CrossOrigin(origins = "http://localhost:4200",allowedHeaders="*")
@RequestMapping("/api")
public class StoreController {
	  @Autowired
	  private StoreRepository repo;
	  
	  @GetMapping("/stores")
	  public List<Store> getstores()
	  {
		  
		  return repo.findAll();
		  
	  }
	  @GetMapping("/astores")
	  public ArrayList<Store> getApprovedStores()
	  {
		  
		  List<Store> list= repo.findAll();
		  ArrayList<Store> approvedList=new ArrayList<>();
		  for(Store s:list)
		  {
			  if(s.isApproved())
			  {
				  approvedList.add(s);
			  }
		  }
		  return approvedList;
	  }
	  @GetMapping("/ustores")
	  public ArrayList<Store> getUnapprovedStores()
	  {
		  
		  List<Store> list= repo.findAll();
		  ArrayList<Store> unapprovedList = new ArrayList<>();
		  for(Store s:list)
		  {
			  if(!s.isApproved())
			  {
				  unapprovedList.add(s);
			  }
		  }
		  return unapprovedList;
	  }
	  
		@GetMapping("/store/{storeID}")
	  public Store getstore(@PathVariable int storeID)
		{
			Iterable<Store> list=repo.findAll();
			Store wantedStore= new Store();
			for(Store us:list)
			{
				if(us.getStoreID()==storeID)
				{
					wantedStore=us;break;
				}
			}
			return wantedStore;
			
		}
		@PutMapping("/store")
		public Store updateStore(@RequestBody Store store)
		{
			store.setNumOfVisits(store.getNumOfVisits()+1);
			return repo.save(store);
		}
		@PutMapping("/storeaccept")
		public Store acceptStore(@RequestBody Store store)
		{
			store.setApproved(true);
			return repo.save(store);
		}
		@DeleteMapping("/storeDel/{storeID}")
		public boolean deleteUser(@PathVariable int storeID)
		{
			Iterable<Store> list=repo.findAll();
			Store deletedStore= new Store();
			for(Store us:list)
			{
				if(us.getStoreID()==storeID)
				{
					deletedStore=us;break;
				}
			}
			repo.delete(deletedStore);
			 return true;
		}
		@PutMapping("/storevisit/{storeID}")
		  public void visit(@PathVariable int storeID)
			{
				Iterable<Store> list=repo.findAll();
				Store wantedStore= new Store();
				for(Store us:list)
				{
					if(us.getStoreID()==storeID)
					{
						wantedStore=us;wantedStore.setNumOfVisits(wantedStore.getNumOfVisits()+1);
						break;
					}
				}
				repo.save(wantedStore);
			}
		
		@PostMapping("/store")
		public Store createStore(@RequestBody Store store)
		{
			return repo.save(store);
		}
	  
	  
	  
	    @GetMapping("/liststores")
	    public String printStores(Model model){
	    	
	    	Iterable<Store> storesIterable=repo.findAll();
	    	ArrayList<Store> storeslist = new ArrayList<Store>();
	    	for(Store storee : storesIterable){
	    		storeslist.add(storee);
	    	}
	    	model.addAttribute("stores", storeslist);
	    	for(Store s:storeslist)
	    	{
	    		System.out.println(s.getName());
	    	}
	    	return "userHome";
	    }
	    
	    @GetMapping("/showStatistics")
	    public String showStats(Model model){
	    	
	    	Iterable<Store> statsIterable=repo.findAll();
	    	ArrayList<Store> statslist = new ArrayList<Store>();
	    	for(Store storee : statsIterable){
	    		statslist.add(storee);
	    	}
	    	model.addAttribute("stores", statsIterable);
	    	for(Store s:statslist)
	    	{
	    		System.out.println(s.getName());
	    	}
	    	return "storeOwnerHome";
	    }
		
	  @GetMapping("/addStore")
	    public String showAddStore(Model model) 
	    {
	    	model.addAttribute("store",new Store());
	    	return "addStore";
	    }
	    @PostMapping("/addStore")
	    public String addStore(Model model,@ModelAttribute Store store)
	    {
	    	
	    	repo.save(store);
	    	model.addAttribute("store",new Store());
	    	return "addStore";
	    }
}