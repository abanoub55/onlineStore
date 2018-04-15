package com.OnlineStore.Controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.OnlineStore.Entities.Brand;
import com.OnlineStore.Entities.Product;
import com.OnlineStore.Entities.Store;
import com.OnlineStore.Repositories.BrandRepository;

@RestController
@CrossOrigin(origins = "http://localhost:4200", allowedHeaders = "*")
@RequestMapping("/api")
public class BrandController {
	@Autowired
	private BrandRepository repo;

	@GetMapping("/brands")
	public List<Brand> getbrands() {

		return repo.findAll();
	}

	@GetMapping("/brand/{name}")
	public Brand getbrand(@PathVariable String name) {
		Iterable<Brand> list = repo.findAll();
		Brand wantedBrand = new Brand();
		for (Brand us : list) {
			if (us.getBrandName() == name) {
				wantedBrand = us;
				break;
			}
		}
		return wantedBrand;

	}

	@PostMapping("/brand")
	public Brand createBrand(@RequestBody Brand brand) {
		return repo.save(brand);
	}

	@GetMapping("/addBrand")
	public String showAddBrand(Model model) {
		model.addAttribute("brand", new Brand());
		return "addBrand";
	}

	@PostMapping("/addBrand")
	public String addBrand(Model model, @ModelAttribute Brand brand) {

		repo.save(brand);
		model.addAttribute("brand", new Brand());
		return "addBrand";
	}

}