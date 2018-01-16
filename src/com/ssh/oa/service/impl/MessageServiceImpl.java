package com.ssh.oa.service.impl;

import javax.annotation.Resource;

import org.apache.commons.codec.digest.DigestUtils;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.ssh.oa.dao.MessageDao;
import com.ssh.oa.dao.UserDao;
import com.ssh.oa.po.Message;
import com.ssh.oa.po.User;
import com.ssh.oa.service.MessageService;
import com.ssh.oa.service.UserService;

@Service
@Transactional
public class MessageServiceImpl implements MessageService {
 
	@Resource
	private MessageDao messageDao;

	/**
	 * 保存用户反馈信息
	 */
	public void save(Message model) {
		try {
			messageDao.save(model);
		} catch (Exception e) {
			e.printStackTrace();
		}
	}
	
}
