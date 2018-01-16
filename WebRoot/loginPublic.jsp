<%@ page language="java" import="java.util.*" pageEncoding="UTF-8"%>
<%@ taglib prefix="s" uri="/struts-tags" %>
<%
String path = request.getContextPath();
String basePath = request.getScheme()+"://"+request.getServerName()+":"+request.getServerPort()+path+"/";
%>

<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN">
<html>
  <head>
    <base href="<%=basePath%>">
    
    <title>页面跳转</title>
    
	<meta http-equiv="pragma" content="no-cache">
	<meta http-equiv="cache-control" content="no-cache">
	<meta http-equiv="expires" content="0">    
	<meta http-equiv="keywords" content="keyword1,keyword2,keyword3">
	<meta http-equiv="description" content="This is my page">
	<!--
	<link rel="stylesheet" type="text/css" href="styles.css">
	-->
    <script type="text/javascript" src="jquery/jquery2.1.0.js"></script>
  </head>
  <body>
  
    <input type="hidden" name="IntercepMessage" id="IntercepMessage" value="${IntercepMessage }">
    
    <script type="text/javascript" charset="UTF-8">
       
       var IntercepMessage = $("input[id=IntercepMessage]").val();
       if(IntercepMessage != null){
          window.location.href="${pageContext.request.contextPath}/index.jsp?IntercepMessage=" + IntercepMessage; 
       }else{
          window.location.href="${pageContext.request.contextPath}/index.jsp";
       }
    </script>
  </body>
</html>
