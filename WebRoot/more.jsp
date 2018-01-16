<%@ page language="java" import="java.util.*" pageEncoding="UTF-8"%>
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
		<meta name="viewport" content="user-scalable=no, width=device-width, initial-scale=1, maximum-scale=1">
		<title>网络随时通</title>
		<link rel="stylesheet" href="css/jquery.mobile-1.4.5.min.css" />
		<link href="css/font-awesome.min.css" rel="stylesheet" />
		<link rel="stylesheet" href="css/jquery.mobile.iscrollview.css"/>
		<link rel="stylesheet" href="css/jquery.mobile.iscrollview-pull.css"/>
		<link rel="stylesheet" href="js/photoswipe.css"> 
		<link rel="stylesheet" href="js/default-skin.css">		
		<link rel="stylesheet" href="css/progressjs.min.css"/>
		<link rel="stylesheet" href="css/inappbrowser.css"/>
		<link rel="stylesheet" href="css/user.css" />
		<link rel="stylesheet" href="css/common.css" />
		<link rel="stylesheet" href="css/app.css" />
		<script src="js/jquery-2.1.3.min.js"></script>
		<script src="js/appMobileInit.js"></script>
		<script src="js/jquery.mobile-1.4.5.min.js"></script>		
	</head>
	<body>
		<div id="container">
			<!-- more page -->
			<div id="morePage" data-role="page" >
				<div data-role="header" data-theme="f" data-position="fixed" style="position:fixed;" >
					<h1>个人中心</h1>
					<a data-role="none" href="#" data-transition="none" data-ajax="false"
						class="ui-btn-right" href="#" ><i
						id="iCollect" 
						style="color: white; margin: 10px; padding-left: 30px; font-size: 24px;">
						<i id="action-hint-message" class="fa fa-bell" style="display: none;"> </i></i></a>					
				</div>
				<!-- /header -->
				<div data-role="content" data-theme="g" style="  background: ghostwhite;" data-iscroll>
					<ul data-role="listview" data-inset="true" class="ui-icon-alt personUl" data-theme="f" data-shadow="false" data-icon='false'>
						<li data-icon='false'>
							<a id="perCF" href="personage_find.action" data-transition="none" style="min-height: 2em;"><img id="imgAvatar" src="images\person1.png" style="  padding-left: 10px;
  								padding-top: 10px;"/><span id="lblName">${user.username}</span> <i id="action-hint-personInfo" class="fa fa-circle action-hint"> </i> 
  								<p id="lblUserName">
  								点击进入个人信息</p></a>
						</li>
					</ul>
					<a  href="logout.action"  data-transition="none" data-role="button" style="background: #307adb; color: #FFF;text-shadow:none" data-shadow="false">退出当前账号</a>				

					<ul data-role="listview" data-inset="true" class="ui-icon-alt personUl" data-theme="f" data-shadow="false" data-icon='false'>
						<li >
							<a href="userFeedBack.jsp" data-transition="none" data-ajax="false"><i class="fa  fa-edit (alias)" style="color: #2471db;"></i> 意见反馈</span></a>
						</li>
					</ul> 
					<p></p>
					
					<ul data-role="listview" data-inset="true" class="ui-icon-alt personUl" data-theme="f" data-shadow="false" data-icon='false'>
						<li >
							<a href="invite.jsp" data-transition="none" data-ajax="false"><i class="fa fa-external-link"  style="color: #2471db;"></i> 推荐给好友</a>
						</li>
					</ul>
					<p></p>
					<ul data-role="listview" data-inset="true" class="ui-icon-alt personUl" data-theme="f" data-shadow="false" data-icon='false'>
						<li>
							<a href="contactUs.jsp" data-transition="none" data-ajax="false"><i class="fa fa-phone"  style="color: #2471db;"></i> 联系我们</a>
						</li>
					</ul>
					<p></p>
					<ul data-role="listview" data-inset="true" class="ui-icon-alt personUl" data-theme="f" data-shadow="false" data-icon='false'>
						<li>
							<a href="updatePass.jsp" data-transition="none" data-ajax="false"><i class="fa fa-unlock"  style="color: #2471db;"></i> 修改密码</a>
						</li>
					</ul>
					<p></p>
					
					<p></p>
					<ul data-role="listview" data-inset="true" data-inset="true" class="ui-icon-alt personUl" data-theme="f" data-shadow="false" data-icon='false'>		
						<li>
							<a href="setting.jsp" data-transition="none"><i class="fa fa-cog fa-fw"  style="color: #2471db;"></i> 设置</a>
						</li>
					</ul>
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
			
			<!-- Root element of PhotoSwipe. Must have class pswp. -->
			<div class="pswp" tabindex="-1" role="dialog" aria-hidden="true">
			
			    <!-- Background of PhotoSwipe. 
			         It's a separate element as animating opacity is faster than rgba(). -->
			    <div class="pswp__bg"></div>
			
			    <!-- Slides wrapper with overflow:hidden. -->
			    <div class="pswp__scroll-wrap">
			
			        <!-- Container that holds slides. 
			            PhotoSwipe keeps only 3 of them in the DOM to save memory.
			            Don't modify these 3 pswp__item elements, data is added later on. -->
			        <div class="pswp__container">
			            <div class="pswp__item"></div>
			            <div class="pswp__item"></div>
			            <div class="pswp__item"></div>
			        </div>
			
			        <!-- Default (PhotoSwipeUI_Default) interface on top of sliding area. Can be changed. -->
			        <div class="pswp__ui pswp__ui--hidden">
			
			            <div class="pswp__top-bar">
			
			                <!--  Controls are self-explanatory. Order can be changed. -->
			
			                <div class="pswp__counter"></div>
			
			                <button class="pswp__button pswp__button--close" title="Close (Esc)"></button>
			
			                <button class="pswp__button pswp__button--share" title="Share"></button>
			
			                <button class="pswp__button pswp__button--fs" title="Toggle fullscreen"></button>
			
			                <button class="pswp__button pswp__button--zoom" title="Zoom in/out"></button>
			
			                <!-- Preloader demo http://codepen.io/dimsemenov/pen/yyBWoR -->
			                <!-- element will get class pswp__preloader--active when preloader is running -->
			                <div class="pswp__preloader">
			                    <div class="pswp__preloader__icn">
			                      <div class="pswp__preloader__cut">
			                        <div class="pswp__preloader__donut"></div>
			                      </div>
			                    </div>
			                </div>
			            </div>
			
			            <div class="pswp__share-modal pswp__share-modal--hidden pswp__single-tap">
			                <div class="pswp__share-tooltip"></div> 
			            </div>
			
			            <button class="pswp__button pswp__button--arrow--left" title="Previous (arrow left)">
			            </button>
			
			            <button class="pswp__button pswp__button--arrow--right" title="Next (arrow right)">
			            </button>
			
			            <div class="pswp__caption">
			                <div class="pswp__caption__center"></div>
			            </div>
			
			        </div>
			
			    </div>
			
			</div>											
		  
		</div>
		
	<%--	<script type="text/javascript" src="http://v3.jiathis.com/code/jia.js" charset="utf-8"></script>		
		<script src="js/jqm-windows.mdialog.js"></script>
		<script src="js/photoswipe/photoswipe.min.js"></script> 
		<script src="js/photoswipe-ui-default.min.js"></script> 
		<script src="js/jquery/iscroll.js"></script>
		<script src="js/jquery.mobile.iscrollview.js"></script>
		<script src="js/jquery.qrcode.min.js"></script>
		<script src="js/countUp.min.js"></script>
		<script src="js/progress.min.js"></script>
		<script src="js/snabbt.min.js"></script>		
		<script src="js/cordova.js"></script>
		<script src="js/cordova_plugins.js"></script>
		<script src='js/fastclick.js'></script>
		
		<script src="js/utils.js"></script>
		 <script src="js/app.js"></script>
		<script src="js/tj.js"></script>
		<script src="js/person.js"></script>
		<script src="js/app/more.js"></script>--%> 
	</body>
</html>