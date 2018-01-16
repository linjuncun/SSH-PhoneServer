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
<meta name="format-detection" content="telephone=no" />
<meta name="viewport"
	content="user-scalable=no, width=device-width, initial-scale=1, maximum-scale=1">
<title>图片上传界面</title>
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
	<div id="container">
		<!-- /page -->
		<div id="morePage" data-role="page">
			<div data-role="header" data-theme="f" data-position="fixed"
				style="position:fixed;">
				<a data-role="none" class="goback" href="personage_find.action"
					data-transition="none"><img src="images/index.png" />
				</a>
				<h1>头像上传</h1>
				<a data-role="none" href="#" data-transition="none"
					data-ajax="false" class="ui-btn-right" href="#"><i
					id="iCollect"
					style="color: white; margin: 10px; padding-left: 30px; font-size: 24px;">
						<i id="action-hint-message" class="fa fa-bell"
						style="display: none;"> </i> </i> </a>
			</div>
			<form action="uploadAction.action" method="post" enctype="multipart/form-data">
			    <input type="hidden" id="ctx" value="${user.username}" name="filename">
			<!-- /header -->
				<div data-role="content">
				    <div>
				            <h3> 选择图片：</h3><br>
				    </div> 
					<div>
					  <ul> 
					    <li>
					    <li><input type="file" name="file" id="file"></li>
					    <li style="background-color: red;">${eroorMessage}</li>
					    <li><input type="submit" value="保存"></li>
					    <li ><p></p></li>
					  </ul>
					</div>
				</div>
		 </form>
		</div>
	</div>
 <%-- 	<script src="js/underscore-min.js"></script>
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
