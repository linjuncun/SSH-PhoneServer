package com.ssh.oa.service.impl;

import javax.annotation.Resource;

import org.apache.commons.codec.digest.DigestUtils;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.ssh.oa.dao.UserDao;
import com.ssh.oa.po.User;
import com.ssh.oa.service.UserService;

@Service
@Transactional
public class UserServiceImpl implements UserService {
 
	@Resource
	private UserDao userDao;

	/**
	 * 保存联系人
	 */
	public void save(User user) {	
		try {
			String md5password = DigestUtils.md5Hex(user.getPassword());
			user.setPassword(md5password);
			userDao.save(user);
		} catch (Exception e) {
			e.printStackTrace();
		}
		
	}

	/**
	 * 注册操作
	 * 根据用户名密码查询用户是否已经存在
	 */
	public User findByUsernamePass(User model) {
	     return   userDao.findByUsernamePass(model);
	}

	/**
	 * 模糊查询操作
	 */
	public User findByUserName(User model) {
		
		return 	userDao.findByUserName(model);
		
	}
	
	/**
	 * 用户忘记密码操作
	 * 修改原来密码
	 */
	public void updatePass(User model) {
		
		String md5password = DigestUtils.md5Hex(model.getPassword());
		model.setPassword(md5password);
		
		try {
			userDao.update(model);
		} catch (Exception e) {
			e.printStackTrace();
		}
	}

}
