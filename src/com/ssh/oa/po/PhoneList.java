package com.ssh.oa.po;

import java.io.Serializable;

public class PhoneList implements Serializable {

	private int id;                                                //主键id
	
	private String phoneName;                           //联系人姓名
	
	private String phoneNumber;                       //联系人电话

	private String user_pass_id;                          //外键id

	public int getId() {
		return id;
	}

	public void setId(int id) {
		this.id = id;
	}

	public String getPhoneName() {
		return phoneName;
	}

	public void setPhoneName(String phoneName) {
		this.phoneName = phoneName;
	}

	public String getPhoneNumber() {
		return phoneNumber;
	}

	public void setPhoneNumber(String phoneNumber) {
		this.phoneNumber = phoneNumber;
	}

	public String getUser_pass_id() {
		return user_pass_id;
	}

	public void setUser_pass_id(String user_pass_id) {
		this.user_pass_id = user_pass_id;
	}
	
	
}
