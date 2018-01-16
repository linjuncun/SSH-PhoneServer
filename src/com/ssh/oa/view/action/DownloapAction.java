package com.ssh.oa.view.action;

import java.io.InputStream;

import org.apache.struts2.ServletActionContext;

import com.opensymphony.xwork2.ActionSupport;

public class DownloapAction extends ActionSupport {
	
	public InputStream getDownloadFile()throws Exception{
		
		return ServletActionContext.getServletContext().getResourceAsStream("/app/PhoneHelper.apk");
		
	}
	

	 @Override
	public String execute() throws Exception {
		return SUCCESS;
	}
	
}
