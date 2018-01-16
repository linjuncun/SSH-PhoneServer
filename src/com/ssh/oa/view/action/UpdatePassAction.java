package com.ssh.oa.view.action;

import javax.annotation.Resource;

import org.apache.commons.codec.digest.DigestUtils;
import org.springframework.context.annotation.Scope;
import org.springframework.stereotype.Controller;

import com.opensymphony.xwork2.ActionContext;
import com.opensymphony.xwork2.ActionSupport;
import com.opensymphony.xwork2.ModelDriven;
import com.ssh.oa.base.BaseAction;
import com.ssh.oa.po.User;
import com.ssh.oa.service.UserService;

/**
 * 密码修改
 * @author Administrator
 *
 */
@Controller
@Scope("prototype")
public class UpdatePassAction extends BaseAction<User>{
	
		    private  String newPassword;
		       
			public String getNewPassword() {
				return newPassword;
			  }
	
			 public void setNewPassword(String newPassword) {
				 this.newPassword = newPassword;
			 }

			public String updatePass() throws Exception {
				
				User user =(User) ActionContext.getContext().getSession().get("user");
				
			    /**
			     * 如果输入的旧密码不匹配，则返回修改密码页面
			     */
				
				if(!(user.getPassword().equals(DigestUtils.md5Hex(model.getPassword())))){
					
					ActionContext.getContext().put("updateError", "旧密码错误，重新输入");
					return "toUpdatePass";
					
				}else{//设置新密码，返回登陆界面
					
				   user.setPassword(newPassword);
				   userService.updatePass(user);
				   
				   ActionContext.getContext().put("IntercepMessage", "密码已修改，请重新登陆");
				   
				   return "toLogin";
				}
		}
}
