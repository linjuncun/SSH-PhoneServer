package com.ssh.oa.test;

import javax.annotation.Resource;

import org.springframework.context.annotation.Scope;
import org.springframework.stereotype.Controller;

import com.opensymphony.xwork2.ActionSupport;
//注解是声明bean
@Controller("testAction")
@Scope("prototype")
public class TestAction  extends ActionSupport{

	@Resource
	private TestService testService;
	
	@Override
	public String execute() throws Exception {
	
		testService.saveUser();
		
		return SUCCESS;
	}
}