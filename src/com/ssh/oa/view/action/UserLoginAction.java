package com.ssh.oa.view.action;

import javax.annotation.Resource;

import org.apache.commons.codec.digest.DigestUtils;
import org.apache.struts2.ServletActionContext;
import org.springframework.context.annotation.Scope;
import org.springframework.stereotype.Controller;

import com.opensymphony.xwork2.ActionContext;
import com.opensymphony.xwork2.ActionSupport;
import com.opensymphony.xwork2.ModelDriven;
import com.ssh.oa.base.BaseAction;
import com.ssh.oa.po.User;
import com.ssh.oa.service.UserService;

@Controller
@Scope("prototype")
public class UserLoginAction extends BaseAction<User>{
	
			public String userLogin() throws Exception {
				
				User user = userService.findByUsernamePass(model);
				if(user == null ){
					ActionContext.getContext().put("nameString",model.getUsername() );
					ActionContext.getContext().put("loginMessage", "用户名或密码不正确");
					return "loginUI";
				}else{
					ActionContext.getContext().getSession().put("user", user);
					return "toIndex";
				}
			}
}
