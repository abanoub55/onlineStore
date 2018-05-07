package com.OnlineStore.Entities;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

@Entity
public class NormalUser{
	@Id
	@GeneratedValue(strategy=GenerationType.AUTO)
	int id;	
	String name;
	String password;
	int userID;
	boolean firstPurchase;
	
	public  NormalUser()
		{
			
		}
	
	public boolean isFirstPurchase() {
		return firstPurchase;
	}

	public void setFirstPurchase(boolean firstPurchase) {
		this.firstPurchase = firstPurchase;
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
	public String getPassword() {
		return password;
	}
	public void setPassword(String password) {
		this.password = password;
	}
	public int getUserID() {
		return userID;
	}
	public void setUserID(int userID) {
		this.userID = userID;
	}
	public NormalUser(int id, String name, String password, int userID) {
		super();
		this.id = id;
		this.name = name;
		this.password = password;
		this.userID = userID;
	}
	
}
