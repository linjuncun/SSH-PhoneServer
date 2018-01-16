<%@ page language="java" import="java.util.*" pageEncoding="UTF-8"%>
<%@ page contentType="text/html;charset=UTF-8" %>
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
        <script type="text/javascript" src="${pageContext.request.contextPath}/jquery/jquery2.1.0.js"></script>
        <script type="text/javascript">
        
           function valid(){
              if($("input[id=input1]").val() == ""){
				    alert("联系人姓名不能为空");
				    return false;
				}
			  if($("input[id=input2]").val() == ""){
				    alert("联系人号码不能为空");
				     return false;
				}
				
				 return true;
           }
        </script>
    </head>
    <body>
        <form action="saveAction.action" method="post" onsubmit="return valid()">
         <div class="success">
            
            <div class="select_1">
	              <table>
	                <tr>
	                 <td>联系人姓名 :</td><td><input id="input1" type="text" name="phoneName"></td>
	                </tr>
	                <tr>
	                <td>联系人电话 :</td><td><input id="input2" type="text" name="phoneNumber"></td>
	                </tr>
	                <tr>
	                <td><input type="submit" value="保存"></td>
	                <td><input type="reset" value="取消" ></td>
	                </tr>
	              </table>
            </div>
            
             <div class="indext">
             <jsp:include page="/WEB-INF/jsp/public/public.jsp"></jsp:include>
            </div> 
        </div>

        </form>
    </body>
</html>
