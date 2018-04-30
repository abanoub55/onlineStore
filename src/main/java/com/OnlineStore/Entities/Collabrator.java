package com.OnlineStore.Entities;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

@Entity
public class Collabrator{
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
	@Id
	@GeneratedValue(strategy=GenerationType.AUTO)
	int id;
		int storeID;
		String name;
		String password;
		int userID;

		public Collabrator(int id, int storeID, String name, String password, int userID) {
			super();
			this.id = id;
			this.storeID = storeID;
			this.name = name;
			this.password = password;
			this.userID = userID;
		}

		public int getStoreID() {
			return storeID;
		}

		public void setStoreID(int storeID) {
			this.storeID = storeID;
		}

		public Collabrator(int storeID) {
			super();
			this.storeID = storeID;
		}
		public Collabrator()
		{
			
		}
}
