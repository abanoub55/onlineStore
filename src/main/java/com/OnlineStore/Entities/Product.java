package com.OnlineStore.Entities;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

@Entity
public class Product {

	@Id
	@GeneratedValue(strategy=GenerationType.AUTO)
	int id;
	
	int productID;
	String name;
	double price;
	String category;
	String brandName;
	int numOfVisits;
	int productsSold;
	int numOfBuyers;
	int owningStore;
	public Product()
	{
		
	}
	
	public int getOwningStore() {
		return owningStore;
	}

	public void setOwningStore(int owningStore) {
		this.owningStore = owningStore;
	}

	public int getId() {
		return id;
	}
	public void setId(int id) {
		this.id = id;
	}
	public int getProductID() {
		return productID;
	}
	public void setProductID(int productID) {
		this.productID = productID;
	}
	public String getName() {
		return name;
	}
	public void setName(String name) {
		this.name = name;
	}
	public double getPrice() {
		return price;
	}
	public void setPrice(double price) {
		this.price = price;
	}
	public String getCategory() {
		return category;
	}
	public void setCategory(String category) {
		this.category = category;
	}
	public String getBrandName() {
		return brandName;
	}
	public void setBrandName(String brandName) {
		this.brandName = brandName;
	}
	public int getNumOfVisits() {
		return numOfVisits;
	}
	public void setNumOfVisits(int numOfVisits) {
		this.numOfVisits = numOfVisits;
	}
	public int getProductsSold() {
		return productsSold;
	}
	public void setProductsSold(int productsSold) {
		this.productsSold = productsSold;
	}
	public int getNumOfBuyers() {
		return numOfBuyers;
	}
	public void setNumOfBuyers(int numOfBuyers) {
		this.numOfBuyers = numOfBuyers;
	}

	public Product(int id, int productID, String name, double price, String category, String brandName, int numOfVisits,
			int productsSold, int numOfBuyers, int owningStore) {
		super();
		this.id = id;
		this.productID = productID;
		this.name = name;
		this.price = price;
		this.category = category;
		this.brandName = brandName;
		this.numOfVisits = numOfVisits;
		this.productsSold = productsSold;
		this.numOfBuyers = numOfBuyers;
		this.owningStore = owningStore;
	}
	
	
	

	
}
