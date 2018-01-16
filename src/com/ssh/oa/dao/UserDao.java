package com.ssh.oa.dao;

import com.ssh.oa.base.BaseDao;
import com.ssh.oa.po.User;

public interface UserDao extends BaseDao<User>{

	 public User findByUsernamePass(User user);

	public User findByUserName(User model);
}
