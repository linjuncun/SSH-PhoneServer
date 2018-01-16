<%@ page language="java" import="java.util.*" pageEncoding="UTF-8"%>
<%@ page contentType="text/html;charset=UTF-8" %>
<%@ taglib prefix="s" uri="/struts-tags" %>
<%@ taglib prefix="fmt" uri="http://java.sun.com/jsp/jstl/fmt"%>
<%
String path = request.getContextPath();
String basePath = request.getScheme()+"://"+request.getServerName()+":"+request.getServerPort()+path+"/";
%>

<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN">
<html>
<head>
<meta charset="utf-8">
<meta name="format-detection" content="telephone=no" />
<meta name="viewport"
	content="user-scalable=no, width=device-width, initial-scale=1, maximum-scale=1">
<title>随时通</title>
<link rel="stylesheet" href="css/jquery.mobile-1.4.5.min.css" />
<link href="css/font-awesome.min.css" rel="stylesheet" />
<link rel="stylesheet" href="css/jquery.mobile.iscrollview.css" />
<link rel="stylesheet"
	href="css/jquery.mobile.iscrollview-pull.css" />
<link rel="stylesheet" href="css/ion.rangeSlider.css" />
<link rel="stylesheet" href="css/ion.rangeSlider.skinHTML5.css" />
<link rel="stylesheet" href="css/dhtmlxchart.css" />
<link rel="stylesheet"
	href="css/tip-yellowsimple.css" />
<link rel="stylesheet" href="cssprogressjs.min.css" />
<link rel="stylesheet" href="css/app.css" />
<link rel="stylesheet" href="css/common.css" />

<script src="js/jquery-2.1.3.min.js"></script>
<script src="js/appMobileInit.js"></script>
<script src="js/jquery.mobile-1.4.5.min.js"></script>
<script type="text/javascript" src="jquery/jquery2.1.0.js"></script>
<script type="text/javascript">
        
           function validMessage(){
            
              if($("#message").val() == ""){
                 
				   $("#show").html("反馈内容不能为空");
				    return false;
				}
				
				 return true; 
           }
</script>

</head>
<body>
	<div id="container" >
		<!-- /page -->
			<div id="morePage" data-role="page">
				<div data-role="header" data-theme="f" data-position="fixed"
					style="position:fixed;">
					<a data-role="none" class="goback" href="more.jsp" data-transition="none"><img src="images/index.png" /></a>
					<h1>用户反馈</h1>
					<a data-role="none" href="#" data-transition="none"
						data-ajax="false" class="ui-btn-right" href="#"><i
						id="iCollect"
						style="color: white; margin: 10px; padding-left: 30px; font-size: 24px;">
							<i id="action-hint-message" class="fa fa-bell"
							style="display: none;"> </i>
					</i>
					</a>
				</div>
				  <form action="message.action" method="post" onsubmit="return validMessage();">
				  
				    <jsp:useBean id="now" class="java.util.Date" />
                    <fmt:formatDate value="${now}" type="both" var="date" pattern="yyyy-MM-dd HH:mm:ss" />
                    <input type="hidden" name="date" value="${date}">
					<div>
					  <ul style="color: teal;">
					     <li style="size: 30px; font-weight:bold;">用户账号：[${user.username}]</li>
					     <li><p></p></li>
					     <li style="size: 30px;font-weight:bold;">发表时间：[${date}]</li>
					     <li><p></p></li>
					     <li style="size: 30px;font-weight:bold;">内&nbsp;&nbsp;容：</li>
					     <li>
					       <textarea cols="50%" rows="100%" name="user_message" id="message" placeholder="请输入反馈内容"></textarea>
					     </li>
					     <li id="show" style="color: red; size: 5px">${message}</li>
					     <li ><input type="submit" value="提交"  style="background-color: teal;"></li>
					  </ul>
				   </div>
				</form>
			</div>
	</div>
	<%--  	<script src="js/underscore-min.js"></script>
	<script src="js/backbone-min.js"></script>
	<script src="js/jqm-windows.mdialog.js"></script>
	<script src="js/iscroll.js"></script>
	<script src="js/jquery.mobile.iscrollview.js"></script>
	<script src="js/ion.rangeSlider.min.js"></script>
	<script src="js/dhtmlxchart.js"></script>
	<script src="js/jquery.poshytip.min.js"></script>
	<script src="js/countUp.min.js"></script>
	<script src="js/oridomi.min.js"></script>
	<script src="js/snabbt.min.js"></script>
	<script src="js/progress.min.js"></script>
	<script src="js/cordova.js"></script>
	<script src="js/cordova_plugins.js"></script>
	<script src="js/fastclick.js"></script>
    <script src="js/app.js"></script>
	
	<script src="js/utils.js"></script>
	<script src="js/tj.js"></script>
	<script src="js/xxj.js"></script> --%>

</body>

</html>