package com.ssh.oa.service;

import com.ssh.oa.base.BaseDao;
import com.ssh.oa.po.User;

public interface UserService {

	void save(User user);

	User findByUsernamePass(User model);

	User findByUserName(User model);

	void updatePass(User model);

}
