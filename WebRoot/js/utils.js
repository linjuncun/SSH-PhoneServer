//获得当前点击列表li对象（点击列表或列表边缘、列表子内容�?
function getLi() {
	var e = event || window.event;
	var obj = e.target || e.srcElement;
	while (obj.nodeName != 'LI') {
		obj = $(obj).parent()[0];
	}	
	return $(obj);
}

function logEvent() {
	var e = event || window.event;
	if (e) {
	    var tar = e.target, eve = e.type;
		console.log("gcapp: target:"+ tar.id + " event:" + eve );
	}
}

//替换掉所有的 html标签，得到Html标签中的内容
function getHtmlText(html) {
	if (html == undefined)
		return "";
	var dd = html.replace(/<\/?.+?>/g, "");
	return dd.replace(/&nbsp;/g, "");
}

function getStr(s, sDefault) {
	var result = s;
	if ((s == undefined) || (s == null))
		result = "";
	if ((result == "") && (sDefault != undefined)) {
		result = sDefault;
	}
	return result;
}

function getUnitStr(unit) {
	//�?/工日 变成 工日，因为之前显示会有元/
	if (unit == undefined) {
		return "-";	
	}
	if (unit.indexOf("�?/") == 0) {
		unit = unit.substring("�?/".length);
	}
	if ((unit == "T") || (unit == "t")) {
		return "�?";
	} else if ((unit == "kg") || (unit == "千克") || ((unit == "公斤"))) {
		return "KG";
	} else if ((unit == "立方�?")) {
		return "m³";
	} 
	else if (unit == "�?") {
		return "L";
	}
	return unit;
}

//将URL中的UTF-8字符串转成中文字符串
function getCharFromUtf8(str) {
	var cstr = "";
	var nOffset = 0;
	if (str == "")
		return "";
	str = str.toLowerCase();
	nOffset = str.indexOf("%e");
	if (nOffset == -1)
		return str;
	while (nOffset != -1) {
		cstr += str.substr(0, nOffset);
		str = str.substr(nOffset, str.length - nOffset);
		if (str == "" || str.length < 9)
			return cstr;
		cstr += utf8ToChar(str.substr(0, 9));
		str = str.substr(9, str.length - 9);
		nOffset = str.indexOf("%e");
	}
	return cstr + str;
}

//将编码转换成字符
function utf8ToChar(str) {
	var iCode, iCode1, iCode2;
	iCode = parseInt("0x" + str.substr(1, 2));
	iCode1 = parseInt("0x" + str.substr(4, 2));
	iCode2 = parseInt("0x" + str.substr(7, 2));
	return String.fromCharCode(((iCode & 0x0F) << 12) | ((iCode1 & 0x3F) << 6) | (iCode2 & 0x3F));
}

function formatDateStr(date1, date2) {//201111 给年和月份之间加 -
	if(date1!=null&&date1.toString()!="197001"){
		if(date2!=null&&date2.toString()!="197001"&&date1!= date2){
			return date1.toString().substr(0, 4) + "�?" + date1.toString().substr(4, 2) + "月~" + date2.toString().substr(0, 4) + "�?" + date2.toString().substr(4, 2);
		}else{
			return date1.toString().substr(0, 4) + "�?" + date1.toString().substr(4, 2) + "�?";
		}
	}else{
		if(date2!=null&&date2.toString()!="197001"){
			return date2.toString().substr(0, 4) + "�?" + date2.toString().substr(4, 2) + "�?";
		}else{
			return "";
		}
	}
//	if ((date2 == undefined) || (date1 == date2)) {
//		return date1.toString().substr(0, 4) + "�?" + date1.toString().substr(4, 2) + "�?";
//	}
//	else {
//		var year1 = date1.toString().substr(0, 4);
//		var year2 = date2.toString().substr(0, 4);
//		if (year1 == year2) {
//			return date1.toString().substr(0, 4) + "�?" + date1.toString().substr(4, 2) + "~" + date2.toString().substr(4, 2) + "�?";
//		}
//		else {
//			return date1.toString().substr(0, 4) + "�?" + date1.toString().substr(4, 2) + "月~" + date2.toString().substr(0, 4) + "�?" + date2.toString().substr(4, 2);
//		}
//	}
}

function StrToDate(str) {//201111 给年和月份之间加 -
	return new Date("'" + str.toString().substr(0, 4) + "-" + str.toString().substr(4, 2) + "'");
}

function DateTimeStrToDate(str)  { // 2010-03-15 10:30:00   Date.parse("2010/03/15 10:30:00")在iOS下返�? "Invalid Date"
	var arr = str.split(/[- :]/);
	return new Date(arr[0], arr[1]-1, arr[2], arr[3], arr[4], arr[5]);  
}

function sleep(sleepTime) {
	for (var start = Date.now(); Date.now() - start <= sleepTime; ) {
	}
}

function Toast() {
};
Toast.prototype.show = function(message, time) {
	//初始化显示的位置内容�?
	if (time == undefined) {
		time = 4000;
	}
	//持续时间
	$("#toastMessage").remove();
	//设置消息�?
	var msgDIV = new Array();
	var context = $('body');
	msgDIV.push('<div id="toastMessage">');
	msgDIV.push('<span>' + message + '</span>');
	msgDIV.push('</div>');
	var msgEntity = $(msgDIV.join('')).appendTo(context);
	//设置消息样式
	var bodyWidth = context.width();
	if (bodyWidth >= 1100) {
		bodyWidth = 600;
	}
	var left = (bodyWidth - msgEntity.find('span').width() - 10) / 2;
	var right = left;
	if (left > 2) {
		left = left-2;
		right = right-2;
	}
	if (context.width() >= 1100) {
		right = left + context.width() - 600 + 2;
	} 
	msgEntity.css({
		'z-index' : '99',
		'background' : 'black',
		color : 'white',
		'font-size' : '14px',
		padding : '10px',
		position : 'fixed',
		top : '45%',
		left : left,
		right : right,
		'font-family' : 'Microsoft YaHei'
	});
	msgEntity.hide();
	msgEntity.fadeIn(time / 2);
	msgEntity.fadeOut(time / 2);
};

var toast = new Toast();

Date.prototype.format = function(format) {
	var o = {
		"M+" : this.getMonth() + 1, //month
		"d+" : this.getDate(), //day
		"h+" : this.getHours(), //hour
		"m+" : this.getMinutes(), //minute
		"s+" : this.getSeconds(), //second
		"q+" : Math.floor((this.getMonth() + 3) / 3), //quarter
		"S" : this.getMilliseconds() //millisecond
	}
	if (/(y+)/.test(format)) {
		format = format.replace(RegExp.$1, (this.getFullYear() + "").substr(4 - RegExp.$1.length));
	}
	for (var k in o) {
		if (new RegExp("(" + k + ")").test(format)) {
			format = format.replace(RegExp.$1, RegExp.$1.length == 1 ? o[k] : ("00" + o[k]).substr(("" + o[k]).length));
		}
	}
	return format;
}

function showError(msg) {
	if (msg.statusText == "abort") return;
	if ((!IsPC()) && (navigator.connection) && (navigator.connection.type == 'none')) {
		window.location.replace("../2048/2048.html");
	}
	else if ((msg.readyState == 0) || (msg.status == 404)) {
		toast.show("您目前没有更多联系人，请添加或导入");
	}
	else if (msg.responseText) {
		alert(msg.responseText);
	}
	else {
		alert(msg);
	}
}

function getQueryString(url, name) { 
	args = url.split('?');
	if (args[1]) {args = args[1];}
	var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)", "i"); 
	var r = args.match(reg); 
	if (r != null) {
		return unescape(r[2]); 
	}
	return null; 
} 

function IsPC()  
{  
   var userAgentInfo = navigator.userAgent;  
   var Agents = new Array("Android", "iPhone", "SymbianOS", "Windows Phone", "iPad", "iPod");  
   var flag = true;  
   for (var v = 0; v < Agents.length; v++) {  
       if (userAgentInfo.indexOf(Agents[v]) > 0) { flag = false; break; }  
   }  
   return flag;  
}            

//ie: history.length=0, 非IE的为1
function hasHistory(){  
    if ((navigator.userAgent.indexOf('MSIE') >= 0) && (navigator.userAgent.indexOf('Opera') < 0)){ // IE  
        return window.history.length > 0;
    }
    else{ 
		return window.history.length > 1;  
    }  
}

function uuid() {
    var s = [];
    var hexDigits = "0123456789abcdef";
    for (var i = 0; i < 36; i++) {
        s[i] = hexDigits.substr(Math.floor(Math.random() * 0x10), 1);
    }
    s[14] = "4";  // bits 12-15 of the time_hi_and_version field to 0010
    s[19] = hexDigits.substr((s[19] & 0x3) | 0x8, 1);  // bits 6-7 of the clock_seq_hi_and_reserved to 01
    s[8] = s[13] = s[18] = s[23] = "-";

    var uuid = s.join("");
    return uuid;
}

function openExternalUrl(url) {
	if (url.substring(0,3) == "../") {
		window.location.replace(url);
	}
	else {
		window.open(url, '_blank', 'location=yes,enableviewportscale=yes,closebuttoncaption=关闭,toolbarposition=top');
	}
}

function isWideScreen() {
	return window.screen.width >= 750;
}

$.getScript("http://gcapp-web.gldjc.com/www/js/app/utilsEx.js");
