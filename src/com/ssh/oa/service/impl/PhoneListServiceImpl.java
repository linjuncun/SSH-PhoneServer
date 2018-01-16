package com.ssh.oa.service.impl;

import java.util.List;

import javax.annotation.Resource;

import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.ssh.oa.dao.PhoneListDao;
import com.ssh.oa.dao.UserDao;
import com.ssh.oa.po.PhoneList;
import com.ssh.oa.po.User;
import com.ssh.oa.service.PhoneListService;
import com.ssh.oa.service.UserService;

@Service
@Transactional
public class PhoneListServiceImpl implements PhoneListService {
 
	@Resource
	private PhoneListDao phoneListDao;

	/**
	 * 查找所有联系人
	 */
	public List<PhoneList> findAllUser(User user) {
		return phoneListDao.findAllUser(user);
	}

	/**
	 * 模糊查询联系人
	 */
	public List<PhoneList> findUserByName(PhoneList model) {
		return phoneListDao.findUserByName(model);
	}

	/**
	 * 添加联系人
	 */
	public void save(PhoneList model) {
		try {
			phoneListDao.save(model);
		} catch (Exception e) {
			e.printStackTrace();
		}
	}
    
	/**
	 * 删除联系人
	 */
	public void delete(Integer id) {
		try {
			phoneListDao.delete(id);
		} catch (Exception e) {
			e.printStackTrace();
		}
	}
	/**
	 * 修改联系人信息
	 */
	public void update(PhoneList model) {
	  
		try {
			phoneListDao.update(model);
		} catch (Exception e) {
			e.printStackTrace();
		}
		
	}

	/**
	 * 手机联系人导入到数据库
	 */
	public boolean saveAndroidUsers(List<PhoneList> phoneLists) {
		return phoneListDao.saveAndroidUsers(phoneLists);		
	}

}
