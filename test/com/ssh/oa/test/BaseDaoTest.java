package com.ssh.oa.test;

import static org.junit.Assert.*;

import org.junit.Test;

import com.ssh.oa.dao.UserDao;
import com.ssh.oa.dao.impl.UserDaoImpl;

public class BaseDaoTest {

	@Test
	public void testSave() {
		UserDao userDao = new UserDaoImpl();
	}

}
