package com.ssh.oa.util;


import com.opensymphony.xwork2.ActionContext;
import com.opensymphony.xwork2.ActionInvocation;
import com.opensymphony.xwork2.interceptor.AbstractInterceptor;
import com.ssh.oa.po.User;

public class UserInterceptor extends AbstractInterceptor{

	public String intercept(ActionInvocation invocation) throws Exception {
		// System.out.println("---------> 之前");
		// String result = invocation.invoke(); // 放行
		// System.out.println("---------> 之后");
		// return result;

		// 获取信息
		User user = (User) ActionContext.getContext().getSession().get("user"); // 当前登录用户
		String namespace = invocation.getProxy().getNamespace();
		String actionName = invocation.getProxy().getActionName();
		String privUrl = namespace + actionName; // 对应的权限URL

		// 如果未登录
		if (user == null) {
			if (privUrl.startsWith("/loginAction") || privUrl.startsWith("/register") || privUrl.startsWith("/password") || privUrl.startsWith("/download") || privUrl.startsWith("/androidLogin")){
				// "/loginAction.action" ， "/password.action" ,"/register.action","download.action","/androidLogin.action"
				// 如果是去登录，注册，忘记密码操作，助手下载和登陆就放行
				return invocation.invoke();
			} else {
				// 如果不是，就转到登录页面
				ActionContext.getContext().put("IntercepMessage", "您还没有登录，请先登录");
				return "toLogin";
			}
		}else{//已经登陆就放行
			return invocation.invoke();
		}
	}

}
