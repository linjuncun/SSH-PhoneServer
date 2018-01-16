package com.ssh.oa.util;

import java.util.ArrayList;
import java.util.List;

import com.ssh.oa.po.PhoneList;

/**
 * 解析手机导入的联系人
 * @author Administrator
 *
 */
public class AndroidSplit {

	 public static List<PhoneList> usersSplit( List<String> params, String username){
		 List<PhoneList> usersList  = new ArrayList<PhoneList>();
		 String[] temp;
		 for (String string : params) {
			 
			 PhoneList phoneList = new PhoneList();
			 temp = string.split(":");
			 phoneList.setUser_pass_id(username);
			 phoneList.setPhoneName(temp[0]);
			 phoneList.setPhoneNumber(temp[1]);
			 
			 usersList.add(phoneList);
		}
		 return usersList;
	 }
}
