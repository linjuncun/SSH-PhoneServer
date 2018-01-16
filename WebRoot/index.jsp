<%@ page language="java" import="java.util.*" pageEncoding="UTF-8"%>
<%@ page contentType="text/html;charset=UTF-8" %>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c" %>
<%@ taglib uri="http://java.sun.com/jsp/jstl/fmt" prefix="fmt" %>
<%@ taglib prefix="s" uri="/struts-tags" %>
<%
String path = request.getContextPath();
String basePath = request.getScheme()+"://"+request.getServerName()+":"+request.getServerPort()+path+"/";
%>

<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN">
<html>
    <head>
        <title>随时通登录页面</title>
        <c:set value="${pageContext.request.contextPath}" var="path" scope="page"/> 
        <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
        <meta http-equiv="pragma" content="no-cache">
	    <meta http-equiv="cache-control" content="no-cache">
	    <meta http-equiv="expires" content="0">    
	    <meta http-equiv="keywords" content="keyword1,keyword2,keyword3">
	    <meta http-equiv="description" content="This is my page">
        <meta name="format-detection" content="telephone=no">
        <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0, user-scalable=no">
        <meta name="apple-mobile-web-app-capable" content="yes">
        <meta name="apple-touch-fullscreen" content="yes">
        <meta http-equiv="Access-Control-Allow-Origin" content="*">
        <link href="css/login.css" type="text/css" rel="stylesheet">
        <link href="css/global.css" type="text/css" rel="stylesheet">
        <script type="text/javascript" src="js/login.js" charset="UTF-8"></script>
        <script type="text/javascript" src="jquery/jquery2.1.0.js"></script>
       
    </head>
    <body>
        <div class="login">
            <div class="login-title"><p>网络随时通</p>
                
            </div>
            <form action="loginAction.action" method="post" >
            <div class="login-bar">
               
                <ul>
                    <li><img src="images/login_user.png"><input type="text" id="phone" class="text" name="username" placeholder="请输入手机号码" value="${nameString}"/></li>
                    <li><img src="images/login_pwd.png"><input type="password" id="password" class="psd" name="password" placeholder="请输入确认密码" /></li>
                </ul>
	                <i style="text-align: center;" class="err_l" id="result">${loginMessage} </i>
	                <i style="color: red; size: 10px; text-align: center;">${param.IntercepMessage}</i>
            </div> 
            <div class="login-btn">
                <button class="submit" type="submit" id="button1">登录</button>
                <a href="register.jsp"><div class="login-reg"><p>快速注册</p></div></a>
				<a href="password.jsp"><div class="login-reg"><p>忘记密码</p></div></a>  
            </div> 
            </form>
        </div>
		<div style="text-align:center;">
            
        </div>
    </body>
</html>
