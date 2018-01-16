package com.ssh.oa.dao.impl;

import org.apache.commons.codec.digest.DigestUtils;
import org.hibernate.*;
import org.springframework.stereotype.Repository;
import org.springframework.stereotype.Service;

import com.ssh.oa.base.BaseDaoImpl;
import com.ssh.oa.dao.UserDao;
import com.ssh.oa.po.User;

@Repository
public class UserDaoImpl extends BaseDaoImpl<User> implements UserDao{

	/**
	 * 登陆验证
	 */
	public User findByUsernamePass(User user) {
		
		String username = user.getUsername();
		//System.out.println("--------------------" + user.getPassword());
		String password = DigestUtils.md5Hex(user.getPassword());
		
		return (User)	getSession().createQuery(//
				"FROM User u WHERE u.username=? AND u.password=?")//
				.setParameter(0, username)
				.setParameter(1, password)
				.uniqueResult();
	}

	/**
	 * 查找唯一的用户
	 */
	public User findByUserName(User model) {
		
		  Session session =  getSession();
		  User user =(User)session.createQuery(//
				"FROM User u WHERE u.username=?")//
				.setParameter(0, model.getUsername())
				.uniqueResult();
		  return user;
	}

}
