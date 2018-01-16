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
<script type="text/javascript">
        
           function validUP(){
            
              if($("input[id=input1]").val() == ""){
				    $("#show").html("你还未输入旧密码");
				    return false;
				}
			  if($("input[id=input2]").val() == ""){
				     $("#show").html("新密码不能为空");
				     return false;
				}
				  
				 return true;
           }
</script>

</head>
<body>
	<div id="container">
		<!-- /page -->
			<div id="morePage" data-role="page">
				<div data-role="header" data-theme="f" data-position="fixed"
					style="position:fixed;">
					<a data-role="none" class="goback" href="more.jsp" data-transition="none"><img src="images/index.png" /></a>
					<h1>密码修改</h1>
					<a data-role="none" href="#" data-transition="none"
						data-ajax="false" class="ui-btn-right" href="#"><i
						id="iCollect"
						style="color: white; margin: 10px; padding-left: 30px; font-size: 24px;">
							<i id="action-hint-message" class="fa fa-bell"
							style="display: none;"> </i>
					</i>
					</a>
				</div>
				<div>
				<form action="updatePass.action" method="post" onsubmit="return validUP();">
					<div>
						<ul>
							<li>
								<p>
									<input id="input1" type="password" name="password"
										placeholder="请输入旧密码">
								</p></li>
							<li>
								<p>
									<input id="input2" type="password" name="newPassword"
										placeholder="请输入新密码">
								</p></li>
							<li id="show" style="color: red; size: 1.2em;">${updateError}</li>
							<li>
							   <p></p>
							   <p></p>
							   <p></p></li>
							<li>
							   <div class="btnDiv"  style="margin: 10px;" >
							       <input type="submit" value="确认提交" id="logoOut" data-role="none" class="btn" />
			                   </div>
							</li>
						</ul>

					</div>
				</form>
			</div>
			 
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