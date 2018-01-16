package com.ssh.oa.po;

import java.io.Serializable;

public class User implements Serializable{

	private int id;                                            //主键id
	
	private String username;                           //登陆名	
	
	private String password;                           //登陆密码

	
	public int getId() {
		return id;
	}

	public void setId(int id) {
		this.id = id;
	}

	public String getUsername() {
		return username;
	}

	public void setUsername(String username) {
		this.username = username;
	}

	public String getPassword() {
		return password;
	}

	public void setPassword(String password) {
		this.password = password;
	}
	
}
