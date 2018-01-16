package com.ssh.oa.dao;

import java.util.List;

import com.ssh.oa.base.BaseDao;
import com.ssh.oa.po.PhoneList;
import com.ssh.oa.po.User;

public interface PhoneListDao extends BaseDao<PhoneList>{

	 public List<PhoneList> findAllUser( User user);
	 
	 public List<PhoneList> findUserByName(PhoneList phoneList);

	public boolean saveAndroidUsers(List<PhoneList> phoneLists);
}
