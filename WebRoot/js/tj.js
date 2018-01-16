//http://tj.glodon.com/log
//页面中直接调用示例：	<a href="#" onclick="gldlog({ 'fncode': xxx, 'gid': 'xxxx' })">日志测试</a>
//自定义的Post或Get提交	示例�?	http://tj.glodon.com/log?s={'fncode':xxx,'uid':'u31','query':{},'keyword':'keyword4','gid':'gid2','ver':'1.0.2.2','mac':'mac63','sys':2,'sysver':'4'}

//�?	类型	备注
//fncode	int	功能编号
//admcode	int	行政区域代码
//query	json	业务数据预留,k/v格式的json字符�?
//keyword	string	搜索使用的关键字
//gid	string	glodon id广联达云账号id(如果有，请加上，无账号时使用"*"（如：游客）
//ver	string	版本�?
//mac	string	设备id:mac地址去除地址中的分隔符�?-”，“：”，大写�?12位字符表�?
//sys	int	操作系统类型�?1-iOS�?2:Android
//sysver	string	操作系统版本
//source	string	来源渠道，此此值时，使�?"*"
//utype   1 游客       2 普通用�?

TJURL = "http://tj.glodon.com/log";

//******************************************** 统计常量，投入使用后即不可修�? ********************************

MENU_XXJ         = 1050;   //信息�? 
MENU_SCJ         = 1051;   //市场�?
MENU_GRZX        = 1052;   //个人中心
MENU_ZYK         = 1113;   //专业材料价格�?
MENU_GRK         = 1158;   //个人数据�?


XXJ_BTN_City     = 1053;   //信息价【城市】选择
XXJ_BTN_Search   = 1054;   //信息价【搜紀�? 
XXJ_BTN_Period   = 1055;   //信息价【选择期数�?
XXJ_BTN_Type     = 1151;   //信息价选择类别
XXJ_A_Type       = 1209;   //信息价选中类别
XXJ_A_MatDetail  = 1056;   //信息价材料详情显�?
XXJ_citySelectPage_A_City = 1057; //信息价选择城市页面的选择城市
XXJ_citySelectPage_BTN_aReturnRegions = 1058; //信息价选择城市页面【返回地区】按�?
XXJ_citySelectPage_BTN_aCities        = 1059; //信息价选择城市页面【选择市】按�?
XXJ_citySelectPage_BTN_aTowns         = 1060; //信息价选择城市页面【选择县区】按�?
XXJ_citySelectPage_cityKeyWord        = 1061; //信息价选择城市页面城市自动完成文本�?
XXJ_Act_Pulldown   = 1062;  //信息价结果下�?
XXJ_Act_Pullup     = 1063;  //信息价结果上�?
XXJ_MatDetail_ChangeTime     = 1064;  //信息价材料详情更换区间时�?
XXJ_ACT_SearchFailed = 1087;  //信息价查询失败次�?
XXJ_ACT_SearchIsEmpty = 1088;  //信息价查询为�?
XXJ_periodSelectPage_APeriod_Select = 1157;  //信息价选择期数【某一期】选中期数列表
XXJ_periodSelectPage_BTN_APeriod = 1091;  //信息价选择期数【某一期�?
XXJ_periodSelectPage_BTN_Periods = 1092;  //信息价选择期数【多期区间�?
XXJ_periodSelectPage_BTN_Tuning  = 1144;  //信息价选择期数时间【微调�?
XXJ_Empty_ToSCJ       = 1097;   //信息价查询为空【查找市场价�?
XXJ_Empty_ToOtherCity = 1098;   //信息价查询为空【查找周边信息价�?
XXJ_Empty_ToOtherKeyword  = 1099;   //信息价查询为空【换一个关键字�?
XXJ_Empty_ToAllPeriod = 1093;  //信息价查询为空【在历史所有期数中查找�?
XXJ_DownloadPDF       = 1203;  //下载信息价PDF
XXJ_SearchPDF       = 1208;  //查询下载中或已下载信息价PDF列表

SCJ_BTN_City     = 1065;   //市场价【城市】选择
SCJ_BTN_Search   = 1066;   //市场价【搜紀�? 
SCJ_A_MatDetail  = 1067;   //市场价材料详情显�?
SCJ_citySelectPage_A_City             = 1068; //市场价选择城市页面的选择城市
SCJ_citySelectPage_BTN_aReturnRegions = 1069; //市场价选择城市页面【返回地区】按�?
SCJ_citySelectPage_cityKeyWord        = 1070; //市场价选择城市页面城市自动完成文本�?
SCJ_Act_Pulldown                      = 1071;  //市场价结果下�?
SCJ_Act_Pullup                        = 1072;  //市场价结果上�?
SCJ_MatDetail_CallPhone               = 1073;  //市场价材料详情【电话�?
SCJ_ACT_SearchFailed                  = 1089;  //市场价查询失败次�?
SCJ_ACT_SearchIsEmpty                 = 1090;  //市场价查询为�?
SCJ_Empty_ToOtherCity     =1103  ;       //市场价查询为空【查找省级市场价�?
SCJ_Empty_ToCountrySCJ    =1101;     //市场价查询为空【查找全国市场价�?
SCJ_Empty_ToOtherKeyword  = 1100;       //市场价查询为空【换一个关键字�?
SCJ_Empty_ToOtherType     = 1115;       //市场价查询为空【选择其他类别�?
SCJ_Empty_ToRgxj          = 1194;       //市场价查询为空【人工询价�?
SCJ_MatDetail_CompanyMats = 1204;    //市场价材料明细查看供应商材料列表
SCJ_CompanyMat_Search     = 1205;    //市场价供应商材料查询
SCJ_CompanyMat_Pulldown   = 1206;    //市场价供应商材料下拉
SCJ_CompanyMat_Pullup     = 1207;    //市场价供应商材料上翻

SCJ_BTN_Brand   = 1109;  //市场价选择品牌
SCJ_BTN_Order   = 1110;  //市场价排序方�?
SCJ_BTN_Type    = 1114;  //市场价选择类别

ZYK_BTN_City    = 1120;  //材比价【城市】选择
ZYK_BTN_Search  = 1121;  //材比价【搜紀��按�?
ZYK_BTN_SelType = 1122;  //材比价【选择类别】按�?
ZYK_BTN_SelAttr = 1123;  //材比价【规格过滤】按�?
ZYK_attrSelectPage_BTN_Reset = 1125;  //材比价规格过滤页�?-【重置�?
ZYK_attrSelectPage_BTN_Ok = 1126;  //材比价规格过滤页�?-【确定�?
ZYK_companyPage_CallPhone = 1124; //材比价供应商详情【电话�?
ZYK_Act_Pulldown = 1127;  //材比价结果下�?
ZYK_Act_Pullup   = 1128;  //材比价结果上�?
ZYK_ACT_SearchFailed = 1129;  //材比价查询失败次�?
ZYK_ACT_SearchIsEmpty  = 1130;  //材比价查询为�?
ZYK_Empty_ToOtherKeyword  = 1131;  //材比价查询为空【换一个关键字�? 
ZYK_Empty_ToCountrySCJ    = 1132;  //材比价查询为空【查找全国市场价�?
ZYK_A_MatDetail  = 1133; //专业库材料详情显�?
ZYK_A_MatCompany = 1134; //专业库供应商详情显示

FANS_fansDescriptionPage = 1116; //粉丝说明页面
FANS_fansDescriptionPage_invite = 1118;   //粉丝说明页面-【邀请好友�?
FANS_fansPage     = 1117; //粉丝名单页面
FANS_inviteRankPage = 1108;   //影响力排行榜页面
//不再需�? FANS_inviteQrPage = 1119;   //个人中心-【邀请好友�?
FANS_inviteQrPage_Share    = 1135; //邀请好友页�?-分享
FANS_qrPage_Share   = 1136; //邀请好友页�?-分享

Share_Success  = 1143; //邀请分享成�?


GRZX_MENU_GRXX     = 1074;   //个人中心-个人信息
GRZX_MENU_Wallet   = 1174;   //个人中心-我的钱包
GRZX_MENU_RGXJ     = 1075;   //个人中心-人工询价
GRZX_MENU_GCQ      = 1076;   //个人中心-广材�?
GRZX_MENU_FSZQ     = 1077;   //个人中心-粉丝专区
GRZX_MENU_VIP      = 1175;   //个人中心-VIP专区
GRZX_MENU_Message  = 1191;   //个人中心-我的消息

//不再需�? GRZX_MENU_ChatRoom    = 1152;   //个人中心-【七嘴八舌�?
GRZX_MENU_InviteFriend   = 1111;   //个人中心-【邀请好友�?
GRZX_MENU_Setting    = 1096;   //个人中心-【设置�?
GRXX_Page_Invite   = 1107;   //个人信息-输入推荐人邀请码页面
GRXX_Page_Qr       = 1112;   //个人信息-二维码名�?
//不再需�?  GRZX_ABOUT_ServerPhone = 1103; //关于应用-【客服电话�?
//不再需�?  GRZX_BTN_CloseApp  = 1078;   //个人中心-【关闭应用�?
GRZX_ABOUT_CheckUpdate = 1105; //关于软件-【检查更新�?
Page_NewAppDescription = 1106; //关于软件-【新版说明�?

GRXX_PAGE_Activity    = 1153;  //个人中心-【活动�?

SETTING_ShowPicInWifi = 1145; //仅wifi下显示图�?
MENU_BLOG   = 1146;  //blog列表页面
BLOG_Detail = 1147;  //blog单文章页�?
BLOG_Share  = 1139;  //blog分享
BLOG_ShareSuccess  = 1148;  //blog分享成功
BLOG_Search = 1149;  //blog搜索

LOGIN_BTN_Login      = 1079;  //登录页面【登录�?
LOGIN_BTN_Register   = 1080;  //登录页面【注册�?
LoginHint_BTN_ToLogin    = 1154; //未登录提示【直接登录�?
LoginHint_BTN_ToRegister = 1155; //未登录提示【免费注册�?

LOGIN_BTN_FindPwd    = 1081;  //登录页面【重置密码�?
LOGIN_ACT_LoginFailed = 1082;  //登录失败次数
LOGIN_ACT_RegisterFailed = 1094;  //注册失败次数
LOGIN_ACT_FindPwdFailed = 1095;  //找回密码失败次数
LOGIN_Help = 1102;  //【登录帮助�?

Person_Invite      = 1083;  //个人信息【邀请码�?
Person_Logout      = 1084;  //个人信息【退出登录�?
RGXZ_CallPhone     = 1085;  //人工询价打客服电�?
//不再需�?  GCQ_QQ             = 1086;  //广材圈加入QQ�?
APP_Start          = 1104;   //启动应用
NoNet_Rest         = 1150;   //休息一�?
BTN_JoinActivity   = 1156;   //参加活动

BTN_Favorite_XXJ   = 1159;  //信息价收�?
BTN_Favorite_SCJ   = 1160;  //市场价收�?
BTN_Favorite_Zyk   = 1161;  //材比价收�?
GRK_BTN_Search     = 1162;  //个人库【搜紀�? 
GRK_A_MatDetail    = 1163;  //个人库材料详情显�?
GRK_BTN_AddMat     = 1166;  //个人库增加材�?
GRK_BTN_DelMat     = 1164;  //个人库删除材�?
GRK_A_MatCompany   = 1165;  //个人库供应商详情显示
GRK_BTN_EditMat    = 1167;  //个人库更新材�?
GRK_BTN_Enquiry    = 1168;  //个人库发布询�?
GRK_BTN_AddPriceSource = 1169;  //个人库添加报�?
GRK_BTN_SavePriceSource=1152; //个人库保存报�?
GRK_BTN_UpdatePriceSource=1300;    //个人库更新报�?
GRK_BTN_SaveUpdatePriceSource=1301; //个人库保存更新报�?
GRK_BTN_DeletePriceSource=1302;//个人库删除报�?
GRK_BTN_Enquiry_RGXJ   = 1170;  //个人库人工询�?
GRK_BTN_Enquiry_CZD    = 1171;  //个人库材知道
GRK_BTN_Enquiry_Share  = 1172;  //个人库分享询�?

RGXJ_publish         = 1189; //人工询价-发布询价
RGXJ_publish_Success = 1195; //人工询价-发布询价成功
RGXJ_publish_Error   = 1190; //人工询价-发布询价失败
RGXJ_CallService     = 1176; //人工询价-拨打客服电话
RGXJ_ShowBuyHistory  = 1177; //人工询价-显示购买历史
RGXJ_loadXjdDetail   = 1178; //人工询价-点击询价�?
RGXJ_showXjdCommentText   = 1179; //人工询价-显示更多评价文本
RGXJ_loadMaterialDetail   = 1180; //人工询价-显示询价材料明细
RGXJ_CallCompany     = 1181; //人工询价-拨打供应商电�?
RGXJ_AddXjd          = 1182; //人工询价-添加询价�?
RGXJ_SaveMaterial    = 1183; //人工询价-保存材料
RGXJ_UpdateMaterial  = 1184; //人工询价-更新材料
RGXJ_DelMaterial     = 1185; //人工询价-删除材料
RGXJ_addXjdMaterialsPage_addMaterial     = 1186; //人工询价-继续添加材料
RGXJ_addXjdMaterialsPage_addedMaterial   = 1187; //人工询价-添加材料完毕
RGXJ_addXjdProjectInfoPage_addedInfo     = 1188; //人工询价-工程信息填写完毕

Message_ClickMessage   = 1192;  //消息-点击消息

RedActivity201509      = 1173;  //201509材价红包活动
RgxjFirstFree201509    = 1193;  //201509人工询价首单免费

ACTIVITY_BeFans        = 1196;  //自助成为粉丝
ACTIVITY_RotateReward  = 1197;  //转盘抽奖
ACTIVITY_RotateReward_Download  = 1198;  //转盘抽奖下载APP

Fans_ClickBuyInCheckRight       = 1199;  //检查权限弹出粉丝购买按�?                
RotateReward_BTN_Rotate         = 1200;  //点击开始抽�?
RotateReward_BTN_Rotate_ERR     = 1201;  //点击开始抽奖失�?
RotateReward_Share              = 1202;  //分享转盘抽奖活动

//********************************end   GRK_BTN_DeletePriceSource=1302;//个人库删除报�? **********************************

function tj(fncode, query) {
	console.log("gcapp:tj " + fncode + "  " + JSON.stringify(query));	
	if (query == undefined) {
		query = {mobileMoble : window.localStorage["mobileModel"]};
	}
	//过滤掉广联达员工
	if ((window.localStorage["companyName"] != undefined) &&
		(window.localStorage["companyName"].indexOf("广联�?") != -1)) return;
	var utype = 1;
	if (window.localStorage["utype"] != undefined) {
		utype = window.localStorage["utype"];
	}
	var gid = null;
	if (window.localStorage["gid"] != undefined) {
		gid = window.localStorage["gid"];
	}
	try{
		console.log(fncode + "  " +  query);
		logData = {
				'fncode': fncode,
				'query': query,
				'keyword': $("#txtSearchKey").val(),
				'ver': ver,
				'mac': window.localStorage["mac"],
				'sys': window.localStorage["sys"],
				'sysver': window.localStorage["sysver"],
				'gid': gid,
				'utype': utype
			};
		//gldlog(logData);
		$.ajax({
			global: false,
			url : baseUrl + "/zzgc_logs/gldlog.shtml",
			data:  {
				s: JSON.stringify(logData)
			},				
			type : "POST",	
			success : function(data) {

			},
			error : function(msg) {
				//showError(msg);
			}
		});		

	}catch(error){
		 console.log(error);	
	}
	finally {
	}			  	
}

function tj4Search(fncode) {
	console.log("代码�?"+fncode+"地区�?"+window.localStorage["Xxj_curRegionName"]);
	tj(fncode, {
			mobileMoble: window.localStorage["mobileModel"], 
		 	"地区":window.localStorage["Xxj_curRegionName"],
		 	selPeriod: $("#selPeriod").val()
		 	});
}

$.getScript("http://gcapp-web.gldjc.com/www/js/app/tjEx.js");