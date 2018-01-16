package com.ssh.oa.dao;

import com.ssh.oa.base.BaseDao;
import com.ssh.oa.po.Personage;
import com.ssh.oa.po.User;

public interface PersonageDao extends BaseDao<Personage>{

	Personage findPersonByFKId(String fK_ID);

	void saveUpdate(Personage model) throws Exception;

}
