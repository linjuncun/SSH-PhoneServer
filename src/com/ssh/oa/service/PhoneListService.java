package com.ssh.oa.service;

import java.util.List;

import com.ssh.oa.base.BaseDao;
import com.ssh.oa.po.PhoneList;
import com.ssh.oa.po.User;

public interface PhoneListService {

	List<PhoneList> findAllUser(User user);

	List<PhoneList> findUserByName(PhoneList model);

	void save(PhoneList model);

	void delete(Integer id);

	void update(PhoneList model);

	boolean saveAndroidUsers(List<PhoneList> phoneLists);

}
