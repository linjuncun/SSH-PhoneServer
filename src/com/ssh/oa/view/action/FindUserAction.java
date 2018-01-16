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
public class FindUserAction extends BaseAction<PhoneList>{
	
			public String findUserByName() throws Exception {
				
				if("".equals(model.getPhoneName())){
					 return "allUser";
				}
				 List<PhoneList> phoneLists = phoneListService.findUserByName(model);
				 ActionContext.getContext().put("phoneLists", phoneLists);
				 
				 return "toMainIndex";
			}
}
