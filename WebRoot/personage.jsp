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
<title>个人信息界面</title>
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
		<div id="personPage" data-role="page">
			<div data-role="header" data-theme="f" data-position="fixed" style="position:fixed;">
					<a data-role="none" class="goback" href="more.jsp" data-transition="none"><img src="images/index.png" /></a>
					<h1>个人信息</h1>
			</div>
			
			<div  data-role="content" data-theme="h" style="background: ghostwhite; " data-iscroll>
			        <div  class="headPor" id="personImg" style="height: 20%;text-align: center;">
						<a href="photoUpload.jsp" data-transition="none" style="min-height: 2em;">
						 <img id="photo" height="30%" style="margin: auto;border:1px solid #00C5CD" src="/photograph/${personage.photoName}"/>
						 </a>
						<p style="color: red;">
						 <s:if test="#personage.photoName == ''">
						     您还没有头像，点击上传
						 </s:if><s:else>
						    点击修改头像
						 </s:else>
                        </p>
					</div>
                    <form action="personage_save.action" method="post">
                      <input type="hidden" name="id" value="${personage.id}">
                     <%--<input type="hidden" name="photoName" value="${personage.photoName}"> --%> 
					<div class="info">
						<ul data-role="listview" data-theme="g" >							    
							<li style="background:#D1EEEE">
								<label style="font-weight:bold;">姓名 <i id="action-hint-name" class="fa fa-circle action-hint"></i></label>
								<input style="background:#D1EEEE" type="text" name="name" value="${personage.name }">
							</li>
							<li class="selsex" style="background: #EEE0E5">
								<label for="sex" class="select" style="font-weight:bold;">性别 <i id="action-hint-sex" class="fa fa-circle action-hint"></i></label>
								<select style="background: #EEE0E5" name="sex" id="sex" data-native-menu="false">
									    <option value="${personage.sex }">${personage.sex }</option>
									    <option value="帅哥">帅哥</option>
									    <option value="美女">美女</option>
								</select>
							</li>
							<li style="background: #D1EEEE;">
								<label style="font-weight:bold;">公司 <i id="action-hint-company" class="fa fa-circle action-hint"></i></label>
								<input style="background: #D1EEEE;" type="text" name="company" value="${personage.company }">
							</li>
							<li style="border-top:1px solid #ddd;background: #EEE0E5;" data-icon="false">
								<label style="font-weight:bold;">账号</label>
								<input style="background: #EEE0E5;" type="text" name="number" value="${user.username}" readonly="readonly">
							</li>
							<li style="border-top:1px solid #ddd;background: #D1EEEE">
								<label style="font-weight:bold;">推荐人账号</label>
								<input style="background: #D1EEEE" type="text" name="inviter" value="${personage.inviter }">
							</li>
						</ul>
						<div class="btnDiv"  style="margin: 1px;" >
							<input type="submit" style="padding-top: 6px;" value="保存" id="logoOut" data-role="none" class="btn" />
						</div>
					</div>
				   </form>
				</div>				
		</div>
	</div>
	<%-- <script src="js/underscore-min.js"></script>
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
	<script src="js/xxj.js"></script>--%>

</body>

</html>