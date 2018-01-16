package com.ssh.oa.dao.impl;

import org.apache.commons.codec.digest.DigestUtils;
import org.hibernate.*;
import org.springframework.stereotype.Repository;
import org.springframework.stereotype.Service;

import com.ssh.oa.base.BaseDaoImpl;
import com.ssh.oa.dao.MessageDao;
import com.ssh.oa.dao.UserDao;
import com.ssh.oa.po.Message;
import com.ssh.oa.po.User;

@Repository
public class MessageDaoImpl extends BaseDaoImpl<Message > implements MessageDao {


}
