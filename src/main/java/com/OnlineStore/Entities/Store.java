package com.OnlineStore.Entities;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

@Entity
public class Store {
	
	@Id
	@GeneratedValue(strategy=GenerationType.AUTO)
	int id;
	int storeID;
	String name;
	String location;
	String type;
	int numOfVisits;
	int productsSold;
	int numOfBuyers;
	boolean approved;
	public Store()
	{
		
	}
	
	


	public Store(int id, int storeID, String name, String location, String type, int numOfVisits, int productsSold,
			int numOfBuyers, boolean approved) {
		super();
		this.id = id;
		this.storeID = storeID;
		this.name = name;
		this.location = location;
		this.type = type;
		this.numOfVisits = numOfVisits;
		this.productsSold = productsSold;
		this.numOfBuyers = numOfBuyers;
		this.approved = approved;
	}




	public boolean isApproved() {
		return approved;
	}

	public void setApproved(boolean approved) {
		this.approved = approved;
	}

	public int getStoreID() {
		return storeID;
	}



	public void setStoreID(int storeID) {
		this.storeID = storeID;
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
	public int getId() {
		return id;
	}
	public void setId(int id) {
		this.id = id;
	}
	public String getName() {
		return name;
	}
	public void setName(String name) {
		this.name = name;
	}
	public String getLocation() {
		return location;
	}
	public void setLocation(String location) {
		this.location = location;
	}
	public String getType() {
		return type;
	}
	public void setType(String type) {
		this.type = type;
	}
	
}
