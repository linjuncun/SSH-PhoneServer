package com.ssh.oa.view.action;

import javax.annotation.Resource;

import org.apache.commons.codec.digest.DigestUtils;
import org.springframework.context.annotation.Scope;
import org.springframework.stereotype.Controller;

import com.opensymphony.xwork2.ActionContext;
import com.opensymphony.xwork2.ActionSupport;
import com.opensymphony.xwork2.ModelDriven;
import com.ssh.oa.base.BaseAction;
import com.ssh.oa.po.PhoneList;
import com.ssh.oa.po.User;
import com.ssh.oa.service.PhoneListService;
import com.ssh.oa.service.UserService;
import java.util.*;
@Controller
@Scope("prototype")
public class UserMainAction extends ActionSupport{
	
			@Resource
			protected PhoneListService phoneListService;
			
			public String userMain() throws Exception {
			
				User user = (User)ActionContext.getContext().getSession().get("user");
				
				List<PhoneList>phoneLists =  phoneListService.findAllUser(user);
				
				ActionContext.getContext().put("phoneLists", phoneLists);
				
				return "toMainIndex";
			}
}
