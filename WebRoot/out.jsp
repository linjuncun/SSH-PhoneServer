<%@ page language="java" import="java.util.*" pageEncoding="UTF-8"%>
<%@ page contentType="text/html;charset=UTF-8" %>
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
<title>导出界面</title>
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
<script type="text/javascript">
    
    function download(){
        window.location.href="${pageContext.request.contextPath}/download.action"; 
    }
    
</script>

</head>
<body>
	<div id="container"> 
		<!-- /page -->
		<div id="xxjPage" data-role="page">
			<div data-role="header" data-theme="f" data-position="fixed" style="position:fixed;" >
					<h1>随时通<i class="fa fa-arrow-right"></i><i class="fa fa-arrow-right"></i><i class="fa fa-arrow-right"></i>手机</h1>
					<a data-role="none" href="#" data-transition="none" data-ajax="false"
						class="ui-btn-right" href="#" ><i
						id="iCollect" 
						style="color: white; margin: 10px; padding-left: 30px; font-size: 24px;">
						<i id="action-hint-message" class="fa fa-bell" style="display: none;"> </i></i></a>					
		   </div>
		   <form action="" method="post">
		   <div>
			   <ul>
			     <li style="font-weight:bold; color: red;">
			               温馨提示：扫一扫下方二维码或点击下载按钮下载随时通小助手进行导出到手机电话本<br>
			     </li>
			   </ul>
			</div>
			
			<div data-role="content" data-iscroll>
				<div style="text-align: center;">
					<img src="images/download.png" style="width: 180px;" />
				</div>
		   </div>
		   
		   <div>
		        <input style="background:#00EE00;" type="button" value="下载" onclick="download()">
		   </div>
		   </form>
			<!-- /content -->
			<div id="footer" data-role="footer" data-theme="a"
				data-position="fixed" style="position:fixed;">
				<div data-role="navbar" data-iconpos="left">
					<ul>
						<li><a href="findAllUser.action" 
							class="ui-btn-active" data-transition="none" data-ajax="false"><i
								class="fa fa-search-minus" style="font-size: 24px;"></i> <br
								style='font-size: 16px;' /> 查询</a></li>
						<li><a href="save.jsp" 
							data-transition="none" data-ajax="false"><i class="fa  fa-plus"
								style="font-size: 24px;"></i> <br style='font-size: 16px;' />
								添加</a></li>
						<li><a href="into.jsp" 
							data-transition="none" data-ajax="false"><i
								class="fa fa-reply-all" style="font-size: 24px;"></i> <br
								style='font-size: 16px;' /> 导入</a></li>
						<li><a href="out.jsp" 
							data-transition="none" data-ajax="false"><i
								class="fa fa-share" style="font-size: 24px;"></i> <br
								style='font-size: 16px;' /> 导出</a></li>
						<li><a href="more.jsp"
							data-transition="none" data-ajax="false"><i
								class="fa fa-navicon (alias)" style="font-size: 24px;"></i> <br
								style='font-size: 16px;' /> 更多</a></li>
					</ul>
				</div>
			</div>
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
