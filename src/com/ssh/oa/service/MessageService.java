package com.ssh.oa.service;

import com.ssh.oa.base.BaseDao;
import com.ssh.oa.po.Message;
import com.ssh.oa.po.User;

public interface MessageService {

	//保存用户反馈信息
	void save(Message model);


}
