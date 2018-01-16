<%@ page language="java" import="java.util.*" pageEncoding="UTF-8"%>
<%
String path = request.getContextPath();
String basePath = request.getScheme()+"://"+request.getServerName()+":"+request.getServerPort()+path+"/";
%>

<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN">
<html>
  <head>
    <base href="<%=basePath%>">
    
    <title>My JSP 'indext.jsp' starting page</title>
    
	<meta http-equiv="pragma" content="no-cache">
	<meta http-equiv="cache-control" content="no-cache">
	<meta http-equiv="expires" content="0">    
	<meta http-equiv="keywords" content="keyword1,keyword2,keyword3">
	<meta http-equiv="description" content="This is my page">
	<!--
	<link rel="stylesheet" type="text/css" href="styles.css">
	-->
    <link href="${pageContext.request.contextPath}/css/success.css" type="text/css" rel="stylesheet">
    <style type="text/css">
        ul,li{ float:left; margin-left:20px; list-style-type:none; font-size: 18px;} 
    </style>
  </head>
  
  
  <body>
   
   <div id="nav">
      <ul >
        	<li><a href="findAllUser.action">查询</a></li>
        	<li><a href="toSave.action">添加</a></li>
            <li><a href="#">导入</a></li>
            <li><a href="#">导出</a></li>
            <li><a href="">更多</a></li>
      </ul>
    </div>
    
  </body>
</html>
