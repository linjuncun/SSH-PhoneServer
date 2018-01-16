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
        <title>登录成功</title>
        <meta name="format-detection" content="telephone=no">
        <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0, user-scalable=no">
        <meta name="apple-mobile-web-app-capable" content="yes">
        <meta name="apple-touch-fullscreen" content="yes">
        <meta http-equiv="Access-Control-Allow-Origin" content="*">
        <link href="${pageContext.request.contextPath}/css/success.css" type="text/css" rel="stylesheet">
        <link href="${pageContext.request.contextPath}/css/global.css" type="text/css" rel="stylesheet">
        <script type="text/javascript">
           function delConfirm(){
           
			    var message = "您确定要删除本记录吗？";
			   
			    return window.confirm(message);
			}
        </script> 
    </head>
    <body>
        <s:form action="findUserAction.action" method="post">
          <input type="hidden" value="${phoneLists[0].user_pass_id }" name="user_pass_id"> 
         <div class="success">
            <div class="query_1">
             <ul> 
               <li> <input type="text" name="phoneName" placeholder="联系人姓名"/> <input type="submit" name="submit" value="搜索"/></li>
             </ul>
            </div>
            
            <div class="select_1">
               <table border="1" width="100%" height="50%">  
                 <tr>
                   <td>姓名</td><td>电话号码</td>
                 </tr>
               <s:iterator value="phoneLists">
                  <tr>
                   <td>${ phoneName}</td><td>${phoneNumber}</td>
                   <td><s:a action="user_delete?id=%{id}" onclick="return delConfirm()">删除</s:a></td>
                   <td><s:a action="goto_update?id=%{id}&phoneName=%{phoneName}&phoneNumber=%{phoneNumber}">修改</s:a></td>
                 </tr>
               </s:iterator>
               </table>
            </div>
            
            <div class="indext">
             <jsp:include page="/WEB-INF/jsp/public/public.jsp"></jsp:include>
            </div> 
        </div>

        </s:form>
    </body>
</html>
