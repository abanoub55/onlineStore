package com.OnlineStore.Controller;
import java.util.ArrayList;
import java.util.Iterator;
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

import com.OnlineStore.Entities.Brand;
import com.OnlineStore.Entities.Product;
import com.OnlineStore.Entities.Store;
import com.OnlineStore.Repositories.ProductRepository;

@RestController
@CrossOrigin(origins = "http://localhost:4200",allowedHeaders="*")
@RequestMapping("/api")
public class ProductController {
	
	  @Autowired
	  private ProductRepository repo;

	  
	  @GetMapping("/products")
	  public List<Product> getproducts()
	  {
		  
		  return repo.findAll();
	  }
	  @GetMapping("/availproducts")
	  public List<Product> getavailproducts()
	  {
		  
		  List<Product> list=repo.findAll();
		  List<Product> returned=new ArrayList();
		  for (Product product : list) {
			if(product.getOwningStore()==0)
			{
				returned.add(product);
			}
		}
		  return returned;
	  }
	  
		@GetMapping("/product/{id}")
	  public Product getproduct(@PathVariable int id)
		{
			Iterable<Product> list=repo.findAll();
			Product wantedProduct= new Product();
			for(Product us:list)
			{
				if(us.getProductID()==id)
				{
					wantedProduct=us;break;
				}
			}
			return wantedProduct;
			
		}
		@GetMapping("/products/{owningStore}")
		  public ArrayList<Product> getStoreproducts(@PathVariable int owningStore)
			{
				Iterable<Product> list=repo.findAll();
				ArrayList<Product> wantedProducts= new ArrayList<>();
				for(Product us:list)
				{
					if(us.getOwningStore() ==owningStore)
					{
						wantedProducts.add(us);
					}
				}
				return wantedProducts;
				
			}
		
		@PostMapping("/product")
		public Product createProduct(@RequestBody Product product)
		{
			
			return repo.save(product);
			 
		}
		@PutMapping("/product")
		public Product visitProduct(@RequestBody Product product)
		{
			product.setNumOfVisits(product.getNumOfVisits()+1);
			System.out.println("function works!");
			return repo.save(product);
		}
		@PutMapping("/deleteStoreProduct")
		public Product deleteStoreProduct(@RequestBody Product product)
		{
			product.setOwningStore(0);
			return repo.save(product);
		}
		@PutMapping("/updateProduct")
		public Product updateProduct(@RequestBody Product product)
		{
			
			return repo.save(product);
		}
		@PutMapping("/addProduct/{p}")
		public Product addProductToStore(@PathVariable Product p)
		{
			Iterable<Product> list=repo.findAll();
			Product prod= new Product();
			for(Product us:list)
			{
				if(us.getProductID()==p.getProductID())
				{
					prod=us;break;
				}
			}
			prod.setOwningStore(p.getOwningStore());
			return repo.save(prod);
		}
		@DeleteMapping("/productDel/{productID}")
		public boolean deleteUser(@PathVariable int productID)
		{
			Iterable<Product> list=repo.findAll();
			Product deletedProduct= new Product();
			for(Product us:list)
			{
				if(us.getProductID()==productID)
				{
					deletedProduct=us;break;
				}
			}
			repo.delete(deletedProduct);
			 return true;
		}

	
	  
//	  @GetMapping("/AddProduct")
//	    public String showAddProduct(Model model) 
//	    {
//	    	model.addAttribute("product",new Product());
//	    	return "AddProduct";
//	    }
//	    @PostMapping("/AddProduct")
//	    public String addProcuct(Model model,@ModelAttribute Product product)
//	    {
//	    	
//	    	repo.save(product);
//	    	model.addAttribute("product",new Product());
//	    	return "AddProduct";
//	    }
//	    
//	    
//	    @GetMapping("/HomePage")
//	    public String HomePage()
//	    {
//	    	return "HomePage";
//	    }
	    
}