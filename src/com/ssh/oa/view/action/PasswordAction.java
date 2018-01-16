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

/**
 * 忘记密码
 * @return
 * @throws Exception
 */

@Controller
@Scope("prototype")
public class PasswordAction extends BaseAction<User>{
		  
			public String password() throws Exception {
				
				/**
				 * 获取用户的id
				 */
				User user =	userService.findByUserName(model);
				model.setId(user.getId());			
				
				/**
				 * 修改用户密码
				 */
				userService.updatePass(model);
				ActionContext.getContext().put("nameString", model.getUsername());
				ActionContext.getContext().put("pass", "密码修改成功，请返回登陆");
				 return "toPassword";
				 
			}
			
}
