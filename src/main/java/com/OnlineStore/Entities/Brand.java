package com.OnlineStore.Entities;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

@Entity
public class Brand {
	@Id
	@GeneratedValue(strategy=GenerationType.AUTO)
	int id;
	
	String brandName;
	String brandCategory;
	public Brand()
	{
		
	}
	
	public Brand(int id, String brandName, String brandCategory) {
		super();
		this.id = id;
		this.brandName = brandName;
		this.brandCategory = brandCategory;
	}

	public String getBrandName() {
		return brandName;
	}
	public void setBrandName(String brandName) {
		this.brandName = brandName;
	}
	public String getBrandCategory() {
		return brandCategory;
	}
	public void setBrandCategory(String brandCategory) {
		this.brandCategory = brandCategory;
	}
	
}