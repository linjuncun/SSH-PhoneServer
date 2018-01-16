package com.ssh.oa.dao.impl;

import org.apache.commons.codec.digest.DigestUtils;
import org.hibernate.*;
import org.springframework.stereotype.Repository;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.ssh.oa.base.BaseDaoImpl;
import com.ssh.oa.dao.PersonageDao;
import com.ssh.oa.dao.UserDao;
import com.ssh.oa.po.Personage;
import com.ssh.oa.po.User;

@Repository
@Transactional
public class PersonageDaoImpl extends BaseDaoImpl<Personage> implements PersonageDao{

	public Personage findPersonByFKId(String fK_ID) {
		/**
		 * 查找个人信息
		 * 返回界面显示
		 */
		return (Personage)	getSession().createQuery(//
				"FROM Personage p WHERE p.number=?")//
				.setParameter(0, fK_ID)
				.uniqueResult();
	}
    /**
     * 重新构造update方法
     * 用户信息修改
     */
	public void saveUpdate(Personage model) throws Exception {
		   try {
		    	   getSession().update(model);	
			} catch (Exception e) {
				e.printStackTrace();
			}
	}
	
	
}
