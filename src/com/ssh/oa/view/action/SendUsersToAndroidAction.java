package com.ssh.oa.view.action;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import javax.annotation.Resource;
import javax.servlet.http.HttpServletResponse;

import org.apache.commons.codec.digest.DigestUtils;
import org.apache.struts2.ServletActionContext;
import org.springframework.context.annotation.Scope;
import org.springframework.stereotype.Controller;

import com.google.gson.Gson;
import com.opensymphony.xwork2.ActionContext;
import com.opensymphony.xwork2.ActionSupport;
import com.opensymphony.xwork2.ModelDriven;
import com.ssh.oa.base.BaseAction;
import com.ssh.oa.po.PhoneList;
import com.ssh.oa.po.User;
import com.ssh.oa.service.UserService;

/**
 * andtoid助手登陆验证
 * @author Administrator
 *
 */
@Controller
@Scope("prototype")
public class SendUsersToAndroidAction extends BaseAction<User>{
	
			public void androidSend() throws Exception {
				int i = 0;
				Map<String,Object> json=new HashMap<String,Object>();
				List<PhoneList>phoneLists =  phoneListService.findAllUser(model);
				HttpServletResponse  response  = ServletActionContext.getResponse();
				for(PhoneList pList : phoneLists){
					String temp = pList.getPhoneName().replaceAll(" ", "")+ "-" + pList.getPhoneNumber().replaceAll(" ", "");
					json.put("'"+String.valueOf(i)+"'", temp);
					i++;
				}
			  
				try {
					
					   //返回给客户端
					   byte[] jsonBytes = json.toString().getBytes("utf-8");
					   response.setContentLength(jsonBytes.length);
			           response.getOutputStream().write(jsonBytes);
			           response.getOutputStream().flush();
			           response.getOutputStream().close();
				   
				} catch (Exception e) {
					e.printStackTrace();
				}
			}
}
