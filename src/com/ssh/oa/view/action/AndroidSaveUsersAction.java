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

import com.opensymphony.xwork2.ActionContext;
import com.opensymphony.xwork2.ActionSupport;
import com.opensymphony.xwork2.ModelDriven;
import com.ssh.oa.base.BaseAction;
import com.ssh.oa.po.PhoneList;
import com.ssh.oa.po.User;
import com.ssh.oa.service.UserService;
import com.ssh.oa.util.AndroidSplit;

/**
 * 手机助手把联系人导入到服务器
 * @author Administrator
 *
 */
@Controller
@Scope("prototype")
public class AndroidSaveUsersAction extends BaseAction<PhoneList>{
	
	        private  List<String> params;
	        private String username;
	        
			public String getUsername() {
				return username;
			}

			public void setUsername(String username) {
				this.username = username;
			}

			public List<String> getParams() {
				return params;
			}

			public void setParams(List<String> params) {
				this.params = params;
			}

			public void androidSave() throws Exception {
				
//				model.setUser_pass_id(username);
//				boolean b = phoneListService.saveAndroidUsers(params,model);
				
				List<PhoneList> phoneLists = AndroidSplit.usersSplit(params, username); 
				boolean result= phoneListService.saveAndroidUsers(phoneLists);
				
				Map<String,String> json=new HashMap<String,String>();
				HttpServletResponse  response  = ServletActionContext.getResponse();
				
				try {
					if(result){
						 json.put("message", "导出成功");
					
					}else{
						json.put("message", "导出失败");
					}
					
				   //返回给手机端
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
