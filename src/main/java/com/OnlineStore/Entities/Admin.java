package com.OnlineStore.Entities;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

@Entity
public class Admin{
	@Id
	@GeneratedValue(strategy=GenerationType.AUTO)
	int id;
	String name;
	String password;
	int userID;
	static  int  masterPassword=9999;

		public Admin(int id, String name, String password, int userID) {
		super();
		this.id = id;
		this.name = name;
		this.password = password;
		this.userID = userID;
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

		public static int getMasterPassword() {
			return masterPassword;
		}

		public static void setMasterPassword(int masterPassword) {
			Admin.masterPassword = masterPassword;
		}
		public Admin()
		{
			
		}
}
