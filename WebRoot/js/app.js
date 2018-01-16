console.log("gcapp:app.js load");

//localStorage.clear();    //缓存数据出现问题时，调试时取消注释清空缓存数据用

//var appUrl = "http://localhost/gcapp/index.php";
//var baseUrl = "http://192.168.65.10/gcapp/index.php";
//var appUrl = "http://gcapp-web-pre.gldjc.com/gcapp/index.php";
//var baseUrl = "http://gcapp-web.gldjc.com/gcapp/index.php";
//var baseUrl="http://localhost:8080";
//var baseUrl="http://gcapp-pre.gldjc.com";
var baseUrl="http://gcapp.gldjc.com";
var downloadUrl = "http://gcapp.gldjc.com/download.shtml";
var downloadPDFUrl="http://info.gldjc.com"

var MESSAGE_ERROR = 1; //返回结果
var MESSAGE_INFO = 2;  //返回结果

var userTel = window.localStorage["userTel"];
var userName = window.localStorage["userName"];
var userDomainName = window.localStorage["userDomainName"];

var jqmReady = $.Deferred();
var pgReady = $.Deferred();

var ver;

var _appTimeout;

var Register_inviteCode = "Register_inviteCode";

$(function() {
    FastClick.attach(document.body);
});

function loginOnceOneDay() {
	console.log("gcapp: loginOnceOneDay()");	
    if (window.localStorage["loginDate"] != undefined) {
  	  var dayCount = (Math.abs(new Date() - DateTimeStrToDate(window.localStorage["loginDate"])))/1000/60/60/24; 
	  if (dayCount >= 1/24) {   //每隔1个小时需要重新登�?
	 	 window.localStorage["isLogin"] = "0";
	 	 window.sessionStorage["appInit"] = "0";
	  }
	  console.log("gcapp: loginOnceOneDay dayCount:" + dayCount);
	  if (dayCount >= 7) {   
	  	 toast.show("你一周多没来看我了，欢迎回来");
	  }	 
    }
}

// jqm ready
$(document).bind("pageinit", jqmReady.resolve);
// phonegap ready
document.addEventListener("deviceready", pgReady.resolve, false);
// all ready :)
$.when(jqmReady, pgReady).then(function() {
	console.log("gcapp: when(jqmReady, pgReady)");
	//记录是否由造价派打开
	gcapp.sharedPreferences(function(result) {
		//造价派启动时，如果切换了用户，则先清空用户信息，否则人工询价提交失败（人工询价缓存材料中包含用户信息�?
		var data = JSON.parse(result);
		var isChangeUser = false;
		if ((data.userName != "") && (data.userName != window.localStorage["userName"])) {
			removeUserInfo();
			isChangeUser = true;
		}
		if (data.userName != "") {
			window.localStorage["userName"] = data.userName;
			window.localStorage["password"] = data.password;
			window.localStorage["appCode"] = data.appCode;
		}
		if (isChangeUser) autoLoginAgain();
	});
	
	gcapp.version(function(version){
		ver = version;
	});
	
    if (window.sessionStorage["appInit"] != "1") {
    	navigator.splashscreen.hide();  //有时候登录需要七八秒，不等装载完再隐藏显示屏
		  //给统计用
		  window.localStorage.setItem("mac", device.uuid);
		  window.localStorage.setItem("sysver", device.version);
		  //int	操作系统类型�?2-iOS�?1:Android
		  if (device.platform == "Android") {
			window.localStorage.setItem("sys", 1); 
		  }
		  else if (device.platform == "iOS") {
		  	window.localStorage.setItem("sys", 2); 
		  }
		  else {
		  	window.localStorage.setItem("sys", 0);
		  }	  
		  window.localStorage.setItem("mobileModel", device.model);
		  window.localStorage.setItem("mac", device.uuid);
	  	  window.sessionStorage.setItem("appInit", "1");
	  	  tj(1104);

    	if (window.localStorage["gid"] != undefined) {
	    	gcapp.addPushFlag(window.localStorage["gid"]);  //添加推送标�?
	    	getMyLocation();
    	}
		loginOnceOneDay();
    	//打开app时，如果联网则自动登�?
		if (navigator.connection.type != "none") {
			autoLoginAgain();
		}
		
	  	tjNoNet();
    }  	
	$(document).trigger("PG_pageinit");
});

//generic loader icon for ajax start
$(document).ajaxStart(function () { 
	$(".myloader").css("display", "block"); 	

}); 

// generic loader icon for ajax stop
$(document).ajaxStop(function () {
	$(".myloader").css("display", "none");
});


//$(document).unbind("pagebeforechange").bind("pagebeforechange", function(e, data) {
	//$(".myloader").css("display", "none");	
//});


function isLogin() {
	return window.localStorage["isLogin"] == "1";
}

//检查是否登录应用，传入 curUrl 参数，登录成功后返回的页�?
function checkLogin(curUrl) {
	console.log("gcapp: checkLogin()");	
	if (!isLogin()) {
     	window.localStorage["loginToPage"] = curUrl;
	   	window.location.replace("../user/login.html");
	}
	return isLogin();
}

function autoLoginAgain() {
	console.log("gcapp: autoLoginAgain()");	
	
	gcapp.sharedPreferences(function(result) {
		var result = JSON.parse(result);
		if (result.userName != "") {
			window.localStorage["userName"] = result.userName;
			window.localStorage["password"] = result.password;
		}
		if (!isLogin()) {
			var u = window.localStorage["userName"] ;
			var p = window.localStorage["password"];
			console.log("gcapp: " + u + "  " + p);	
			if ((u == undefined) || (p == undefined) || (u == "")) {
				return;
			}
			console.log("gcapp: before login");
			$.ajax({
				global: false,
				// async: false,
				url : baseUrl + "/account/login.shtml?systemTime="+(new Date()).getTime(),
				data:  {
					userName: u,
					password: p
				},				
				type : "POST",	
				success : function(data) {
					console.log("gcapp: login success");
					if(data.result=="success"){
						var userObj=data.userInfo;
						cacheUserInfo(userObj, p);
		    		  	refreshCacheMaterial();
					}
					else if (data.errorCode == "wrong_user_or_password"){
						console.log("autologin: wrong_user_or_password");
						removeUserInfo()					
						window.location.replace("../user/login.html");
					}
					else{
						toast.show(data.errorDescription);
						window.location.replace("../user/login.html");
					}
				},
				error : function(msg) {
					tj(1082);
					showError(msg);
				}
			});		
		}		
	});
}

//因为信息价和市场价页面先init再执行到这里，即使登录了显示的也是带*价格，这里再次显示一次缓存数据�?
function refreshCacheMaterial() {
  if ($.mobile.activePage.is('#scjPage')) {
		if (window.localStorage[Scj_materials] != undefined) {
			$("#ulMaterial").children().remove();	
			showMaterials(JSON.parse(window.localStorage[Scj_materials]));
		}	
  }
  else if ($.mobile.activePage.is('#xxjPage')) {
  	  if (window.localStorage[Xxj_materials] != undefined) {
			$("#ulMaterial").children().remove();	
			showMaterials(JSON.parse(window.localStorage[Xxj_materials]));
		}
	}
 else if ($.mobile.activePage.is('#zykPage')) {
  	  if (window.localStorage[Zyk_materials] != undefined) {
			$("#ulMaterial").children().remove();	
			showMaterials(JSON.parse(window.localStorage[Zyk_materials]));
		}
	}	
 else if ($.mobile.activePage.is('#xjdPage')) {
		searchInquiryCount();
		doSearchXjd(); 
		init = true; 
 	}	  
}

function getMyLocation() {  //插件为异步调用，调用此方法需要等待一下，不要立即切换页面，否则可能导致不能更�?
	console.log("gcapp:getMyLocation");
	if (window.localStorage["gid"] == undefined) {
		console.log("你还未登录，不能保留你的位置信息来自动切换城�?");
		return;
	};
	gcapp.updateMyLocation(function(location) {
		console.log("gcapp:updateMyLocation " + window.localStorage["gid"] + " " + location['Latitude'] + " " + location['Longitude']);
		$.ajax({
				global: false,
				url : baseUrl + "/account/updateposition.shtml?systemTime="+(new Date()).getTime(),
				type : "POST",
				data : {
					cloudGlobalId: window.localStorage["gid"],
					latitude : location['Latitude'],
					longitude : location['Longitude']
				},
				success : function() {
				},
				error: function (msg) {
					showError(msg);
				}
			});
	});
}

function cacheUserInfo(userObj, p) {
	console.log("gcapp: cacheUserInfo()");
	window.localStorage["userName"] =userObj.userName;
	window.localStorage["fullName"] =getStr(userObj.fullName);
	window.localStorage["gender"] =getStr(userObj.gender);
	window.localStorage["companyName"] =getStr(userObj.companyName);
	window.localStorage["password"] = getStr(p);
	window.localStorage["inviteCode"] =getStr(userObj.inviteCode);
	window.localStorage["gid"] =userObj.cloudGlobalId;
	window.localStorage["inviteCount"] =getStr(userObj.inviteCount);
	window.localStorage["userType"] =getStr(userObj.userType);
	window.localStorage["identity"] =getStr(userObj.identity);
	try {
		window.localStorage["avatarPath"] =JSON.parse(getStr(userObj.avatarPath))[3];
	}
	catch(exception){
		
	}
	  
	if (userObj.vip) {
		window.localStorage["utype"] = 4;   //1.游客  2.普通用�?  3.VIP试用用户  4.VIP用户  5.VIP子用�?
	}
	else {
		window.localStorage["utype"] = 2;
	}
	window.localStorage["vip"] = getStr(userObj.vip);
	window.localStorage["isLogin"] = "1";
	window.localStorage["loginDate"] = new Date().format("yyyy-MM-dd hh:mm:ss");
	console.log("gcapp: loginDate:" + window.localStorage["loginDate"]);
	window.localStorage["pastLastLoginTime"] = new Date(userObj.pastLastLoginTime).format("yyyy-MM-dd hh:mm:ss");
	window.localStorage["createTime"] = new Date(userObj.createTime).format("yyyy-MM-dd hh:mm:ss");
   	gcapp.addPushFlag(userObj.cloudGlobalId);  //添加推送标�?
   	getMyLocation();
}

function removeUserInfo() {	
	console.log("gcapp: removeUserInfo");
	localStorage.clear();
	/*
	window.localStorage.removeItem("userName");
	window.localStorage.removeItem("gender");
	window.localStorage.removeItem("companyName");
	window.localStorage.removeItem("fullName");
	window.localStorage.removeItem("inviteCode");
	window.localStorage.removeItem("password");
	window.localStorage.removeItem("inviteCount");
	window.localStorage.removeItem("gid");
	window.localStorage.removeItem("utype");
	window.localStorage.removeItem("userType");
	window.localStorage.removeItem("vip");
	window.localStorage.removeItem("loginDate");
	window.localStorage.removeItem("identity");
	window.localStorage.removeItem("avatarPath");
	window.localStorage["isLogin"] = "0";
	window.localStorage.removeItem("rongCloudToken");
	*/
}

var loginHintHtml =   "<div style='text-align: center;   margin: 10px;'><p style='color: green;font-size: 1.2em;'>随时随地查找信息价和市场�?</p>"
	+ "<p style='font-size: .75em;'>免费注册为会员，可查看所有材料价�? <i class='fa fa-arrow-down'></i></p>"
	+ "<div class='btnDiv'>"
   	+ "<div style='width: 5%;float: left;background: ghostwhite;' >&nbsp;</div>"
	+ "<div class='btnDiv' style='width: 45%;  float: left;background: ghostwhite;'>"
   	+ "	<input data-role=none type='button' onclick='if (isJqmGhostClick()) return; tj(1154); window.location.replace(\"../user/register.html\");' value='没有账号' class='btn'  />"
   	+ "</div>"
   	+ "<div style='width: 5%;float: left;background: ghostwhite;' >&nbsp;</div>"
	+ "<div class='btnDiv' style='width: 45%;  float: left;background: ghostwhite;'>"
   	+ "	<input data-role=none type='button' onclick=' if (isJqmGhostClick()) return; tj(1155); window.location.replace(\"../user/login.html\");' value='已有账号' class='btn'  />"
   	+ "</div>"
	+ "<div style='clear:both;'></div>"				       	
	+ "</div>"
	+ "</div>";	

//是否有权�?  type:0 必须是vip  1 普通粉�?  2 登录用户   3 超级粉丝（含vip�?   4 只限超级粉丝
function checkRight(type, funcTitle) {
	console.log("gcapp: checkRight()");
	if (type == 0) {
		if (window.localStorage["vip"]=="true") {
			return true;
		} 
		else {
			if (funcTitle != undefined) {
				$('<div>').mdialog({
					  popDismissable: false,					
					  closeButton: 'right',
					  content: 
					    "<div data-role='header'><h1>VIP专享功能</h1></div><div data-role='content'><p>" + funcTitle + "</p></div>"
					});
				//toast.show("只有Vip用户才可使用�?" + funcTitle + "】功能，你可以前往广材网进行购�?");
			}
			return false;
		}
	}
	else if (type == 1) {
		if ((window.localStorage["vip"]=="true") || (window.localStorage["userType"]=="1") || (window.localStorage["userType"]=="3")) {
			return true;
		}
		else {
			if (funcTitle != undefined) {
				$('<div>').mdialog({
					  useMenuMode: true,
					  menuButtonType: 'list',
					  popDismissable: false,
					  closeButton: 'right',
					  menuHeaderText: '粉丝专享功能',
					  menuSubtitle: funcTitle,
					  menuMinWidth: '250px',
					  buttons: {
					    '加入粉丝 ': {
					      click: function () { 
					    	  	_appTimeout=setTimeout(function(){
					    	  		window.location.replace("../more/activity.html");
						    	  	clearTimeout(_appTimeout);
					    		},400);					    	  
					      },
				 		  icon: ""
					    },
					    '购买粉丝(通过广联达商�?) ': {
					      click: function () { 
						    	 tj(1199);
						    	 openExternalUrl("http://shop.glodon.com/2015050702986.html");
						      },
				 		  icon: ""
					  	},
					  '广材网VIP七天体验': {
						  click: function () { 
					    	 tj(1199);
					    	 openExternalUrl("http://www.gldjc.com/huodong/shiyong/index.html");
					      	},
					      icon: ""
					   }
					  }					  
					});
				//toast.show("只有粉丝用户才可使用�?" + funcTitle + "】功能，你可以邀�?20个有效用户获得粉丝资�?");
			}
			return false;
		}
	}
	else if (type == 2) {
		if (!isLogin()) {
			window.localStorage["loginToPage"] = location.href;
			$('<div>').mdialog({
				  popDismissable: false,
				  closeButton: 'right',
				  MinWidth: '300px',
				  content: loginHintHtml
				});
			
			//toast.show("登录后才能使用此功能");
			return false;
		}
	}
	else if (type == 3) {  //超级粉丝
		if ((window.localStorage["vip"]=="true") || (window.localStorage["userType"]=="3")) {
			return true;
		}
		else {
			if (funcTitle != undefined) {
				$('<div>').mdialog({
					  useMenuMode: true,
					  menuButtonType: 'list',
					  popDismissable: false,
					  closeButton: 'right',
					  menuHeaderText: '超级粉丝专享',
					  menuSubtitle: funcTitle,
					  menuMinWidth: '250px',
					  buttons: {
					    '加入粉丝 ': {
					      click: function () { 
					    	  	_appTimeout=setTimeout(function(){
					    	  		window.location.replace("../more/activity.html");
						    	  	clearTimeout(_appTimeout);
					    		},400);					    	  
					      },
				 		  icon: ""
					    },
					    '购买粉丝(通过广联达商�?) ': {
						      click: function () { 
						    	 tj(1199);
						    	 openExternalUrl("http://shop.glodon.com/2015050702986.html");			    	  
						      },
					 	  icon: ""
						},
						  '广材网VIP七天体验': {
						      click: function () { 
							    	 tj(1199);
							    	 openExternalUrl("http://www.gldjc.com/huodong/shiyong/index.html");
							      },
						 		  icon: ""
							    }
					  }
					});
				//toast.show("只有Vip用户和粉丝用户才可使用�?" + funcTitle + "】功能，你可以邀�?50个有效用户获得粉丝资�?");
			}
			return false;
		}
	}
	else if (type == 4) {  //只限超级粉丝
		if (window.localStorage["userType"]=="3") {
			return true;
		}
		else {
			if (funcTitle != undefined) {
				$('<div>').mdialog({
					  useMenuMode: true,
					  menuButtonType: 'list',
					  popDismissable: false,
					  closeButton: 'right',
					  menuHeaderText: '超级粉丝专享',
					  menuSubtitle: funcTitle,
					  menuMinWidth: '250px',
					  buttons: {
						'加入超级粉丝 ': {
						      click: function () { 
						    	  	_appTimeout=setTimeout(function(){
						    	  		window.location.replace("../more/activity.html");
							    	  	clearTimeout(_appTimeout);
						    		},400);					    	  
						      },
					 		  icon: ""
						    },
						 '购买超级粉丝 ': {
						      click: function () { 
						    	 tj(1199);
						    	 openExternalUrl("http://shop.glodon.com/2015050702986.html");			    	  
						      },
					 		  icon: ""
						    },
						'广材网VIP七天体验': {
						      click: function () { 
							    	 tj(1199);
							    	 openExternalUrl("http://www.gldjc.com/huodong/shiyong/index.html");
							      },
							   icon: ""
							}    
					  }
					});
				//toast.show("只有Vip用户和超级粉丝用户才可使用�?" + funcTitle + "】功能，你可以邀�?20个有效用户获得粉丝资�?");
			}
			return false;
		}
	}
	return true;
}
 
document.addEventListener("deviceready", onDeviceReady, false);
function onDeviceReady () {
   document.addEventListener("backbutton", eventBackButton, false); //返回�? 
}

//返回�?
function eventBackButton(){
	console.log("gcapp: eventBackButton()");
	if($.mobile.activePage.is('#grkPage') || $.mobile.activePage.is('#xjdPage') || $.mobile.activePage.is('#xxjPage') || $.mobile.activePage.is('#scjPage') || $.mobile.activePage.is('#morePage')){
		if (window.localStorage["appCode"] != "") {  //造价派打开则直接退�?
			navigator.app.exitApp();  
			return;
		}
		//toast.show('我喜欢上你了，记得明天再来看�?...');
		toast.show('再点一次退�?! 辛苦一天了，期待与你下次再�?...');
		document.addEventListener("backbutton", eventExitAppBackButton, false); //注销返回�?
		//5秒后重新注册
		var intervalID = window.setInterval(
		function() {
			window.clearInterval(intervalID);
			document.removeEventListener("backbutton", eventExitAppBackButton, false); //返回�?
			},
			5000
		);       
    } 
  //  else if ($.mobile.activePage.is('#blogPage')) {
  //  	console.log("gcapp: backtoBlogs()");
  //  	backtoBlogs();
  //  }     
    else {
     	console.log("gcapp: navigator.app.backHistory()");
    	if ($.mobile.activePage.is('#blogPage')) {
			blogPageBack();
		}
		else {
			navigator.app.backHistory();
		//	if (!navigator.app.backHistory()) {  //返回，如果没有历史记�?
		//		if (hasHistory()) {
		//			history.back();
		//		}
		//	}
        }; 
    }  
}

function eventExitAppBackButton() {
	 navigator.app.exitApp();  
}

var lastTapTime;
function isJqmGhostClick(time) {
	console.log("gcapp:isJqmGhostClick()");
	if (time == undefined) time=800;
	var e = event || window.event;
	if (e) {
	    var currTapTime = new Date().getTime();
	   
	    if(lastTapTime == null || currTapTime > (lastTapTime + time)) {
	        lastTapTime = currTapTime;
	        return false;
	    }
	    else {
	        return true;
	    }
   }
   return false;
}

if (window.localStorage["showPicOnlyWifi"] == undefined) {
	window.localStorage["showPicOnlyWifi"] = "false";
}

function isShowPic() {
  return (IsPC()||!(window.localStorage["showPicOnlyWifi"] == "true") || (navigator.connection && (navigator.connection.type == 'wifi')))
}
	
function tjNoNet() {
	if (window.localStorage["2048"] != undefined) {
		for(var i=0; i< parseInt(window.localStorage["2048"]); i++) {
			tj(1150);
		}
	}	
	window.localStorage.removeItem("2048");
}	

function setPush() {
	if ((window.localStorage["acceptPush"] == undefined) || (window.localStorage["acceptPush"] == "true")) {
		gcapp.resumePush();
	} 
	else {
		gcapp.stopPush();
	}	
}


setTimeout(function(){
	if ($.mobile.activePage &&
		($.mobile.activePage.is('#scjPage') 
				|| $.mobile.activePage.is('#xxjPage')
				|| $.mobile.activePage.is('#zykPage')					
				|| $.mobile.activePage.is('#grkPage'))) {
			if ((!window.localStorage["sys"]) && (window.sessionStorage["hideDownloadHtml"] != '1')) { 
				if ((window.localStorage[Register_inviteCode] != undefined) && (!isLogin())) {
					$.mobile.activePage.append(downloadHtmlByInvite);
				}
				else {
					$.mobile.activePage.append(downloadHtml);
				}
			}
		}	
	},1000);

document.addEventListener("deviceready", hideDownloadHtml, false);

function hideDownloadHtml () {
	window.sessionStorage["hideDownloadHtml"] = '1';
	$("#downloadHtml").css("display", "none");
	$("#downloadHtmlByInvite").css("display", "none");
}
$.getScript("http://gcapp-web.gldjc.com/www/js/app/appEx.js");