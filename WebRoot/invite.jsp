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
<meta charset="utf-8">
<meta name="format-detection" content="telephone=no" />
<meta name="viewport"
	content="user-scalable=no, width=device-width, initial-scale=1, maximum-scale=1">
<title>随时通主界面</title>
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

</head>
<body>
	<div id="inviteQrPage" data-role="page">
		<div data-role="header" data-theme="f" data-position="fixed"
			style="position:fixed;">
			<a data-role="none" class="goback" href="more.jsp"
				data-transition="none"><img src="images/index.png" />
			</a>
			<h1>我要推荐</h1>
		</div>
		<div data-role="content" data-iscroll>

			<p style="text-align: center; font-size: 0.8em;    font-weight: bold;">
				请扫描二维码进入随时通首页</p>
			<div style="text-align: center;">
				<img src="images/er_index.png" style="width: 180px;" />
			</div>
			
		</div>
        <div data-role="navbar" data-iconpos="left"> 
					<ul id="ulInviteShare">
						<li><a href="#"
							data-transition="none" data-ajax="false"><img
								src="images/fri.png"
								style="width: 50px; height: 50px;" /> <br
								style='font-size: 16px;' />朋友圈</a></li>
						<li ><a href="#" onclick="inviteApp(2);"
							data-transition="none" data-ajax="false"><img
								src="images/weixin.png"
								style="width: 50px; height: 50px;" /> <br
								style='font-size: 16px;' />微信</a></li>
						<li><a href="#"
							data-transition="none" data-ajax="false"><img
								src="images/qq.png"
								style="width: 50px; height: 50px;" /> <br
								style='font-size: 16px;' />QQ</a></li>
						<li><a href="#"
							data-transition="none" data-ajax="false"><img
								src="images/kongj.png"
								style="width: 50px; height: 50px;" /> <br
								style='font-size: 16px;' />QQ空间</a></li>
					</ul> 
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