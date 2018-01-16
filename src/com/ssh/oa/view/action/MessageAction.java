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
import com.ssh.oa.po.Message;
import com.ssh.oa.po.PhoneList;
import com.ssh.oa.po.User;
import com.ssh.oa.service.PhoneListService;
import com.ssh.oa.service.UserService;

@Controller
@Scope("prototype")
public class MessageAction extends BaseAction<Message>{
	
			public String svaeMessage() throws Exception {
			
				 User user = (User) ActionContext.getContext().getSession().get("user");
				 String user_id = user.getUsername();
				 if("".equals(model.getUser_message())){
					 ActionContext.getContext().put("message","反馈内容不能为空" );
					 return "toMessage";
				 }
				 model.setUser_id(user_id);
				 messageService.save(model);
				 
				 ActionContext.getContext().put("message","您的意见我们已经收到，感谢您的支持" );
				 
				 return "toMessage";
			}
}
