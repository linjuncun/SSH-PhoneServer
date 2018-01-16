package com.ssh.oa.view.action;

import java.util.List;

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

@Controller
@Scope("prototype")
public class RegisterAction extends BaseAction<User>{
	
		   /**
		    * 用户注册
		    * @return
		    * @throws Exception
		    */
			public String register() throws Exception {
				/**
				 * 根据用户名查询用户是否存在
				 */
				User user = userService.findByUserName(model);
				if(user != null){
					ActionContext.getContext().put("register", "用户已存在，可直接登陆");
					 return "toRegister";
				}else{
					userService.save(model);
				}
				 return "toLogin";
			}
			
}
