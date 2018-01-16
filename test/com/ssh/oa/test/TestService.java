package com.ssh.oa.test;

import javax.annotation.Resource;


import org.hibernate.Session;
import org.hibernate.SessionFactory;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.ssh.oa.po.User;

@Service("testService")
public class TestService {

	@Resource
	private SessionFactory sessionFactory;
	
	@Transactional
	public void saveUser()throws Exception{
		 Session session = sessionFactory.getCurrentSession();
		 session.save(new User());
		 session.save(new User());
	}
}
