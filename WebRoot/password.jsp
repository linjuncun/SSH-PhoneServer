<%@ page language="java" import="java.util.*" pageEncoding="UTF-8"%>
<%@ page contentType="text/html;charset=UTF-8" %>
<%
String path = request.getContextPath();
String basePath = request.getScheme()+"://"+request.getServerName()+":"+request.getServerPort()+path+"/";
%>

<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN">
<html>
    <head>
        <title>重置密码</title>
		<meta http-equiv="Content-Type" content="text/html; charset=utf-8" /> 
        <meta name="format-detection" content="telephone=no">
        <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0, user-scalable=no">
        <meta name="apple-mobile-web-app-capable" content="yes">
        <meta name="apple-touch-fullscreen" content="yes">
        <meta http-equiv="Access-Control-Allow-Origin" content="*">
        <link href="css/password.css" type="text/css" rel="stylesheet">
        <link href="css/global.css" type="text/css" rel="stylesheet">
        <script type="text/javascript" src="jquery/jquery2.1.0.js"></script>
        <script type="text/javascript" src="js/password.js"></script>
    </head>
    <body>
        <div id="layout">
            <span>重置密码</span>
            <form  action="password.action" method="post" onsubmit="return valid()">
            <ul>
                <p id="err_msg"></p>
                <li><i class="un"><img src="images/user_name.png"></i><input class="username" name="username" id="inputUsername" type="text" placeholder="请输入您的手机号码" /></li>
                <li><i class="yz"><img src="images/msg.png"></i><input class="yzm" type="text"  placeholder="手机验证码"/><input type="button" id="send" value="获取验证码" /></li>
                <li><i class="pw"><img src="images/pwd.png"></i><input class="pwd" name="password" id="inputPassword" type="password" placeholder="请输入您的新密码" /></li>
                <li><i class="pw2"><img src="images/pwd.png"></i><input class="pwd2" name="repassword" id="inputRePassword" type="password" placeholder="重复输入您的新密码" /></li>
                <li style="color: red; size: 13px;">${pass}</li>
            </ul>
                <div class="reg_btn">
                    <button class="submit" type="submit">完成</button>
                    <a href="index.jsp"><div class="reg-login"><p>返回登录</p></div></a>
                </div>
            </form>
        </div>
    </body>
</html>
