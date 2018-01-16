<%@ page language="java" import="java.util.*" pageEncoding="UTF-8"%>
<%@ page contentType="text/html;charset=UTF-8" %>
<%@ taglib prefix="s" uri="/struts-tags" %>
<%
String path = request.getContextPath();
String basePath = request.getScheme()+"://"+request.getServerName()+":"+request.getServerPort()+path+"/";
%>

<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN">
<html>
    <head>
        <title>注册页面</title>
        <meta name="format-detection" content="telephone=no">
        <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0, user-scalable=no">
        <meta name="apple-mobile-web-app-capable" content="yes">
        <meta name="apple-touch-fullscreen" content="yes">
        <meta http-equiv="Access-Control-Allow-Origin" content="*">
        <link href="css/register.css" type="text/css" rel="stylesheet">
        <link href="css/global.css" type="text/css" rel="stylesheet">
        <script type="text/javascript" src="jquery/jquery2.1.0.js"></script>
        <script type="text/javascript" src="js/register.js"></script>
        
    </head>
    <body>
        <div id="layout">
            <span>网络随时通</span>
            <form  method="post" action="register.action" onsubmit="return valid()">
            <ul>
                <p id="err_msg">${register}</p>
                <li><i class="un"><img src="images/user_name.png"></i><input id="inputUsername" class="username" type="text" name="username" placeholder="请输入您的手机号码" /></li>
                <li><i class="yz"><img src="images/msg.png"></i><input class="yzm" type="text"  placeholder="手机验证码" /><input type="button" id="send" value="获取验证码" /></li>
                <li><i class="pw"><img src="images/pwd.png"></i><input class="pwd" id="inputPassword" type="password" name="password" placeholder="请输入密码" /></li>
                <li><i class="pw2"><img src="images/pwd.png"></i><input class="pwd2" id="inputRePassword" type="password" name="repassword" placeholder="请输入确认密码" /></li>
                <div class="queren"><input class="fx" type="checkbox" id="checkbox1"/><p>我已阅读并同意<a href="#">《用户协议》</a></p></div>
            </ul>
                <div class="reg_btn">
                    <button class="submit" type="submit">注册</button>
                    <a href="index.jsp"><div class="reg-login"><p>已有帐号，立即登录</p></div></a>
                </div>
            </form>
        </div>
    </body>
</html>
