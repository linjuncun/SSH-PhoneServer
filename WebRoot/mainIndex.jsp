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
<meta name="format-detection" content="telephone=no">
<meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0, user-scalable=no">
<meta name="apple-mobile-web-app-capable" content="yes">
<meta name="apple-touch-fullscreen" content="yes">
<meta http-equiv="Access-Control-Allow-Origin" content="*">
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
<script type="text/javascript">
           function delConfirm(){
           
			    var message = "您确定要删除本记录吗？";
			   
			    return window.confirm(message);
			}
</script> 

</head>
<body>
  
	<div id="container">
		<!-- /page -->
		<div id="xxjPage" data-role="page">
			<div data-role="header" data-theme="f" data-position="fixed"
				style="position: fixed; ">
				<h1 id="headerTitle" style="display:none;">随时通主界面</h1>
				<form action="findUserAction.action" method="post">
			     <input type="hidden" value="${phoneLists[0].user_pass_id }" name="user_pass_id"> 
				<table style="width:100%;">
					<tr>
						<td style="max-width: 30%;">
							<div id="divCity" >
								<a data-role="button" 
									class="selCity"><span id="spanCity" data-code="110000"
									data-id="1">主人好 </span> <i class="fa  fa-male"></i></a>
							</div>
						</td>
						<td><input  name="phoneName" placeholder="请输入联系人姓名"
							title="请输入联系人姓名" type="text"/></td>
						<td>
							<div style="size: 1.5em;"> 
								<input type="submit" style="width: 3.5em;size: 1.5em;"   
								   class="btn" value="搜索"/>  
							</div>
						</td>
					</tr>
				</table>
				</form>
				<div style="background: ghostwhite;">
					<ul id="ulSearchKeywordHistory" data-role="listview"
						data-inset="true"
						style="margin: 0em 1em 0px; box-shadow: 0 1px 3px green;"></ul>
				</div>
				
				<div style="background: ghostwhite;width: 100%;overflow: hidden;">
				
				</div>
			</div>
			
		<div id="content" data-role="content" data-iscroll> 
				<div class="iscroll-pulldown">
					<span class="iscroll-pull-icon"></span><span
						class="iscroll-pull-label"
						data-iscroll-loading-text="正在重新显示联系人......"
						data-iscroll-pulled-text="马上开始重新加载联系人......">下拉刷新......</span>
				</div>
		<%-- 	<ul id="ulMaterial" data-role="listview" data-icon='false'
					iscroll-scroller>
				</ul>--%>  
			   <div class="iscroll-content" style="padding: 16px;"> 
			     <s:iterator value="phoneLists">
					<ul class="ui-listview"  data-icon="false" data-role="listview">
					   <li class="ui-first-child" data-materialid="539912" data-citycode="110000" data-loginhint="false">
						    <div style="float: left; width:30%;">
							  <p style="white-space: pre-wrap;font-weight: bold; font-size: 1.2em;">${ phoneName}</p>
						    </div>
							<div style="float: left; max-width: 50%; margin-left: 1em; font-size: 1.5em">
							   <p id="mat_spec" >${phoneNumber}</p>
							</div>
							<div style="text-align: right; float: right;width: 40%; ">
							   <p style="color: darkorange; font-weight: bold;font-size: 1.2em;">
							     <s:a action="user_delete?id=%{id}" onclick="return delConfirm()">删除</s:a>
                               </p>
							</div>
							<div style="text-align: right; float: right;width: 30%; "> 
							   <p style="color: blue; font-weight: bold;font-size: 1.2em;">
							      <s:a action="goto_update?id=%{id}&phoneName=%{phoneName}&phoneNumber=%{phoneNumber}">编辑</s:a>
							   </p>
							</div> 
					    </li>
					</ul>
				 </s:iterator>
				 <div align="center">
				   <s:if test="#phoneLists.size()==0">
				     <p></p>
				     <p></p>
				     <h3 style="size: 1.8em;" align="center">没有找到相关联系人!</h3>
				   </s:if>
				</div>
				</div>
				<div class="iscroll-pullup">
					<span class="iscroll-pull-icon"></span><span
						class="iscroll-pull-label"
						data-iscroll-loading-text="正在加载联系人......"
						data-iscroll-pulled-text="马上开始加载联系人......">上拉加载......</span>
				</div>
				
			</div>  
			
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
    <%-- <script src="js/underscore-min.js"></script>
	<script src="js/backbone-min.js"></script>
	<script src="js/jqm-windows.mdialog.js"></script>--%>
	<script src="js/iscroll.js"></script>
	<script src="js/jquery.mobile.iscrollview.js"></script>
	<%-- <script src="js/ion.rangeSlider.min.js"></script>
	<script src="js/dhtmlxchart.js"></script>
	<script src="js/jquery.poshytip.min.js"></script>
	<script src="js/countUp.min.js"></script>
	<script src="js/oridomi.min.js"></script>
	<script src="js/snabbt.min.js"></script>
	<script src="js/progress.min.js"></script> 
	<script src="js/cordova.js"></script>
	<script src="js/cordova_plugins.js"></script>
	<script src="js/fastclick.js"></script> --%>
    <script src="js/app.js"></script>
	
	<script src="js/utils.js"></script> 
	<script src="js/tj.js"></script>
	<script src="js/xxj.js"></script> 
 
</body>

</html>
