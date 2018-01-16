package com.ssh.oa.service.impl;

import javax.annotation.Resource;

import org.apache.commons.codec.digest.DigestUtils;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.ssh.oa.dao.PersonageDao;
import com.ssh.oa.dao.UserDao;
import com.ssh.oa.po.Personage;
import com.ssh.oa.po.User;
import com.ssh.oa.service.PersonageService;
import com.ssh.oa.service.UserService;

@Service
@Transactional
public class PersonageServiceImpl implements PersonageService {
 
	@Resource
	private PersonageDao personageDao;

	public Personage findPersonByFKId(String fK_ID) {
		return  personageDao.findPersonByFKId(fK_ID);
	}

	public void update(Personage model) {
		try {
			personageDao.saveUpdate(model);
		} catch (Exception e) {
			e.printStackTrace();
		}
	}

	public void save(Personage model) {
		try {
			personageDao.save(model);
		} catch (Exception e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
		
	}

	

}
