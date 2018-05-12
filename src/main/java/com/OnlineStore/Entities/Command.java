package com.OnlineStore.Entities;


import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;


@Entity
public  class Command {
	@Id
	@GeneratedValue(strategy=GenerationType.AUTO)
	int id;
	String oprationName;
	int operationID;
	int productID;
	String name;
	double price;
	String category;
	String brandName;
	int numOfVisits;
	int productsSold;
	int numOfBuyers;
	int owningStore;
	int amount;
	String shippingAddress;
	
	
	public int getOperationID() {
		return operationID;
	}
	public void setOperationID(int operationID) {
		this.operationID = operationID;
	}
	public int getId() {
		return id;
	}
	public void setId(int id) {
		this.id = id;
	}
	public String getOprationName() {
		return oprationName;
	}
	public void setOprationName(String oprationName) {
		this.oprationName = oprationName;
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
	public int getOwningStore() {
		return owningStore;
	}
	public void setOwningStore(int owningStore) {
		this.owningStore = owningStore;
	}
	public int getAmount() {
		return amount;
	}
	public void setAmount(int amount) {
		this.amount = amount;
	}
	public String getShippingAddress() {
		return shippingAddress;
	}
	public void setShippingAddress(String shippingAddress) {
		this.shippingAddress = shippingAddress;
	}
	
}
