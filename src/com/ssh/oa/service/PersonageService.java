package com.ssh.oa.service;

import com.ssh.oa.base.BaseDao;
import com.ssh.oa.po.Personage;
import com.ssh.oa.po.User;

public interface PersonageService {

	Personage findPersonByFKId(String fK_ID);

	void update(Personage model);

	void save(Personage model);
	
}
