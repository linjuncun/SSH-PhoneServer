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
import com.ssh.oa.po.Personage;
import com.ssh.oa.po.PhoneList;
import com.ssh.oa.po.User;
import com.ssh.oa.service.PhoneListService;
import com.ssh.oa.service.UserService;

@Controller
@Scope("prototype")
public class PersonageAction extends BaseAction<Personage>{
			
			/**
			 * 查看个人信息
			 * @return
			 * @throws Exception
			 */
			public String find() throws Exception {
				
				//获取外键
				User user =(User)	ActionContext.getContext().getSession().get("user");
			    String FK_ID = user.getUsername();
				
				 Personage personage = personageService.findPersonByFKId(FK_ID);
				 ActionContext.getContext().put("personage", personage);
				 
				 return "toPersonage";
			}
			
			/**
			 * 保存个人信息
			 * @return
			 * @throws Exception
			 */
           public String save() throws Exception {
			     if(model.getId() != 0){//如果已经有记录了就修改信息记录
				    personageService.update(model);
			     }else {//如果还没有记录就保存新信息
			    	 personageService.save(model);
				}
				 return "toMore";
			}
}
