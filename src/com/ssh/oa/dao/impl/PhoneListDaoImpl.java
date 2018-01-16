package com.ssh.oa.dao.impl;

import java.util.List;

import org.apache.commons.codec.digest.DigestUtils;
import org.springframework.stereotype.Repository;
import org.springframework.stereotype.Service;

import com.ssh.oa.base.BaseDaoImpl;
import com.ssh.oa.dao.PhoneListDao;
import com.ssh.oa.dao.UserDao;
import com.ssh.oa.po.PhoneList;
import com.ssh.oa.po.User;

@SuppressWarnings("unchecked")
@Repository
public class PhoneListDaoImpl extends BaseDaoImpl<PhoneList> implements PhoneListDao{


	public List<PhoneList> findAllUser(User user){
		
	    String username = user.getUsername();
	    
	    List<PhoneList> userList =  getSession().createQuery(//
	    		"FROM PhoneList p WHERE p.user_pass_id=?")
	    		.setParameter(0, username)
	    		.list();
	        return userList;
	     }

	public List<PhoneList> findUserByName(PhoneList phoneList) {
		
		String userName = phoneList.getPhoneName();
		String user_id = phoneList.getUser_pass_id();
		
		 List<PhoneList> phoneNameList = getSession().createQuery(//
				"FROM PhoneList p WHERE p.user_pass_id=? AND p.phoneName LIKE ?")
				.setParameter(0, user_id)
				.setParameter(1, "%" + userName +  "%")
				.list();
		 
		     return phoneNameList;
	}

	
	public boolean saveAndroidUsers(List<PhoneList> phoneLists) {
		
		for(PhoneList pList : phoneLists){
			
			try {
				getSession().save(pList);
			} catch (Exception e) {
				return false;
			}
		}
		return true;
	}
}
