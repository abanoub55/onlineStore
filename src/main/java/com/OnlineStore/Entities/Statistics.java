package com.OnlineStore.Entities;
import java.util.ArrayList;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

@Entity
public class Statistics {
	@Id
	@GeneratedValue(strategy=GenerationType.AUTO)
	int id;
	
	String entityName;
	
	public Statistics(int id, String entityName) {
		super();
		this.id = id;
		this.entityName = entityName;
	}

	public int getId() {
		return id;
	}

	public void setId(int id) {
		this.id = id;
	}

	public String getEntityName() {
		return entityName;
	}

	public void setEntityName(String entityName) {
		this.entityName = entityName;
	}

	public Statistics() {
		
	}
	
}
