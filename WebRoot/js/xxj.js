var pageSize = 15;  // 默认材料分页记录�?
var freeSearchXxjCountEachDay = 3;  
var hasLogMatDetailChangeTime = 0;

var allMaterials = new Array();
Xxj_curCityName = "Xxj_curCityName";
Xxj_curRegionName = "Xxj_curRegionName";
Xxj_curCityCode = "Xxj_curCityCode";
Xxj_curCityId = "Xxj_curCityId";
Xxj_isParentCity = "Xxj_isParentCity";  
Xxj_searchKey = "Xxj_searchKey";
Xxj_periodId = "Xxj_periodId";
Xxj_periodName = "Xxj_periodName";
Xxj_startDate = "Xxj_startDate";
Xxj_endDate = "Xxj_endDate";
Xxj_curPageNum = "Xxj_curPageNum";
Xxj_materials = "Xxj_materials";  					
Xxj_RecentCities = "Xxj_RecentCities";
Xxj_curTypeName = "Xxj_curTypeName";
Xxj_curTypeId = "Xxj_curTypeId";
Xxj_searchKeywords = "Xxj_searchKeywords";
Xxj_searchCityHistory = "Xxj_searchCityHistory";

var curPeriodId = null; // 查某一期时�?
var curStartDate = null;  // 查区间时�?
var curEndDate = null;// 查区间时�?
var sliderPeriodRange = null; // 查区间时用来选择区间的控件实�?
var matDetailRange = null;  // 信息价材料详细信�?
 
var curPageNum = 0; // 当前开始查询记录数
var MAXKEYWORDCOUNT = 3;
var MAXCITYCOUNT = 3;

var curCityCode = null;// 当前城市�?
var curCityId = null;// 当前城市名称
var curRegionCode = null;// 当前地区�?
var curRegionName = null;// 当前地区名称

var curTypeName = null;// 当前类别名称
var curTypeId=null;// 当前类别id

var searchKeywords = new Array(); // 查询材料关键字历�?
var searchCityHistories = new Array();   // 查询城市历史信息

var curMatLi = null;  // 当前查看详细信息的材料Id
var matPriceLineChart = null;
var avgPrice = 0; maxPrice= 0; minPrice = 0;// 必须全局的，否则color中应用变量会数值错�?
var avgPrice_te = 0; maxPrice_te= 0; minPrice_te = 0;// 必须全局的，否则color中应用变量会数值错�?

var curPeriods = null; 
var init = false;
		
/*
 * $(document).bind("PG_pageinit", function() { if
 * (window.localStorage["appCode"] != "") { //造价派打开 $("#footer").css("display",
 * "none"); $("#headerTitle").css("display", "block");
 * $("#headerTitleBack").css("display", "block");
 * $("#ulMaterial").children().remove();
 * showMaterials(JSON.parse(window.localStorage[Xxj_materials])); } });
 */

$(document).on('pageinit', '#xxjPage', function () {
	 $(".iscroll-wrapper", this).bind( {
        "iscroll_onpulldown" : onMaterialPullDown,
        "iscroll_onpullup"   : onMaterialPullUp
        });
	if (window.localStorage[Xxj_searchKeywords] != undefined) {
		searchKeywords = JSON.parse(window.localStorage[Xxj_searchKeywords]);
	}
	if (window.localStorage[Xxj_searchCityHistory] != undefined) {
		searchCityHistories = JSON.parse(window.localStorage[Xxj_searchCityHistory]);
	}	 
});        
        
 
window.onload = function () {
   document.onkeydown = function keyDown(e) {
        var code=e.which;
        if ((code == 13) && (document.activeElement.id == "txtSearchKey")) {
        	doSearchXxj();
        }
	};
};

function clearMaterials() {
	$("#ulMaterial").children().remove();
	allMaterials = new Array();
	curPageNum = 0; 
}

function onMaterialPullDown() {
	tj4Search(1062);
	doSearchXxj();
}

function onMaterialPullUp() {
	$("#emptyDiv").css("display", "none");
	tj4Search(1063);
	curPageNum = curPageNum + 1;
	if ((curPeriodId == null) && (curStartDate == null)) {
		getNearestPeriod();
	}
	else {
		searchXxj();
	}
}

function focusSearchKey() {
	showSearchKeys();
}

function showSearchKeys() {
	console.log("gcapp:showSearchKeys()");
	$("#ulSearchKeywordHistory").css("display", "block");

	html =  "";
	$(searchKeywords).each(
		function(i, keyword) {
			html = html + "<li style='padding: 0.5em;' onclick='selectSearchKey(\"" + keyword + "\");'>" + keyword + "</li>";  
	});
	$("#ulSearchKeywordHistory").html(html);	
	$("#ulSearchKeywordHistory").listview("refresh");	
}

function selectSearchKey(keyword) {
	$("#txtSearchKey").val(keyword);
	curTypeName = null;
	curTypeId = null;
	showCurTypeName();	
	doSearchXxj();
}

function unfocusSearchKey() {
	console.log("gcapp:unfocusSearchKey()");
	setTimeout(function(){
		$("#ulSearchKeywordHistory").css("display", "none");
	},200);	
}

function clickSelectRegion () {
  	$.mobile.changePage("#regionSelectPage", {
			transition : "none"
	});
}

$(document).on('pageshow', '#regionSelectPage', function () {
	showCityHistories();	
	if ($("#ulRegion").children().length > 0) return;
	
  	var prgjs = progressJs("#regionSelectPage .iscroll-wrapper").setOptions({  }).start();
	prgjs.autoIncrease(5, 1000);	
	$.ajax({
		global: false,
		url : baseUrl + "/new-info-price/allregions.shtml", 
		type : "POST",	
		data : {
			ver: ver
		},
		success : function(regions) {					
			showRegions(regions);
			prgjs.end();	
		},
		error : function(msg) {
			prgjs.end();	
			showError(msg);
		}
	});		
});

function showCityHistories() {
	console.log("gcapp:showCityHistories()");

	html =  "";
	$(searchCityHistories).each(
		function(i, searchCity) {
			html = html + "<li style='padding: 0.5em;' onclick='selectCityHistory (\"" 
				+ searchCity.regionName + "\",\"" + searchCity.regionCode+ "\",\"" + searchCity.cityName + "\",\"" + searchCity.cityCode + "\",\"" + searchCity.isParentCity          
				+ "\");'>" + searchCity.regionName +　" " + searchCity.cityName  + "</li>";  
	});
	$("#ulSearchCityHistory").html(html);	
	$("#ulSearchCityHistory").listview("refresh");		
}


function selectCityHistory(regionName, regionCode, cityName, cityCode, isParentCity) {
	curRegionName = regionName;
	curRegionCode = regionCode;
	curCityCode = cityCode;
	curPeriodId = null;
	$("#spanCity").attr("data-isParentCity", isParentCity);
	$("#spanCity").text(cityName);		
	$("#spanCity").attr("data-code", curCityCode);
	clickSearchXxj();
	tj(1057);
	$.mobile.changePage("#xxjPage", {
			transition : "none"
	});	
}

var _cityAjax = null;
function inputCityKeyWord() {
	var value = $("#cityKeyWord").val();	
	var ul = $("#ulCitySearch");
	if (value.length>0) {
		  if (_cityAjax != null) _cityAjax.abort();
		  var prgjs = progressJs("#regionSelectPage .iscroll-wrapper").setOptions({  }).start();
		  prgjs.autoIncrease(5, 200);
	      _cityAjax = $.ajax({
	      	global: false,
			url : baseUrl + "/new-info-price/autolocations.shtml", 
			type : "POST",
			async: true,	
			data : {
				searchKey: value,
				ver: ver				
			},
			success : function(cities) {
				prgjs.end();
				var html = "";
				if (cities.length > 0) {					
					$(cities).each(
						function(i, city) {
							var name = "";
							var regionName = "";
							if (city.firstName != null) {
								name = city.firstName + "-";
								regionName = city.firstName;
							}
							if (city.secondName != null) {
								name = name + city.secondName + "-";
								if (regionName == "") {
									regionName = city.secondName;
								}
							}
							name = name + "<span>" + city.name + "</span>";
							var t = ""; // 期数时间区间
							if (city.periodCount > 0) {
								t = " " + city.start_year_month + "~" + city.end_year_month;
							}						
							html = html + "<li data-periodscount = " + city.periodCount + " data-firstname='" + regionName + "' data-id='" + city.id + "' data-code='" + city.code + "' onclick='selectAutoCity();'>" + name 
							 + "<p><span style='font-size:12px;color: gray;'> <i class='fa fa-clock-o'></i> �? " + city.periodCount +  "�? " + t + "</span></p></li>";  // 必须放在span中，以便选择后统一处理找城市名�?
					});
				}
				else {
					html = "<li>没有找到对应的城�?</li>";  
				}
				ul.html(html);	
				ul.listview("refresh");				
			},
			error : function(msg) {
				prgjs.end();
				showError(msg);
			}
		});		
	}
	else {
		if (_cityAjax != null) _cityAjax.abort();
		if (prgjs) prgjs.end();
		ul.html("");	
	}
}

function selectAutoCity() {
	var li = getLi();	
	curRegionName = li.data("firstname");	
	selectCity();
}

function showRegions(regions) {
	$("#ulRegion").children().remove();
	var html="";
	var aIndex = ""; // 首字�?
	$(regions).each(
		function(i, region) {
			// 如果更换首字母，则添加字母分隔栏
			if (region.abbr_spell.substring(0,1).toUpperCase() != aIndex) {
				aIndex = region.abbr_spell.substring(0,1).toUpperCase();
				html = html + "<li data-role='list-divider'>" + aIndex +  "</span></li>";
			}			
			var cityCount = parseInt(region.cityCount) + parseInt(region.hasXxj);
			var haveChild="";
			html = html + "<li onclick='selectRegion();' data-id='" + region.id + "' data-code=" + region.code; 
			if ((region.cityCount == 0) && (parseInt(region.hasXxj)==1)) { // 是否直接选择城市，而不需要进入子城市
				html = html  + " data-isonestep=1 " ; 
			}else{
				haveChild="<span class='fa fa-chevron-circle-right' style='float: right;font-size: 21px;'></span>"
			}				 
			html = html	+"><span class='name'>" + region.name +"</span><span style='font-size:12px;color: gray;'> (�? " + cityCount + "个城市数�?)</span>"+haveChild+"</li>";
	});
	$("#ulRegion").append(html);	
	$("#ulRegion").listview("refresh");
}

function showPosition(position)
 {
 	$.ajax({
		url : "http://api.map.baidu.com/geocoder/v2/?location=" + position.coords.latitude + "," + position.coords.longitude + "&output=json&ak=2tfc0fkUxIqZ73MDXyT9izvb&callback=showLocation",
		type : "Post",	
		data :{
			ver: ver
		},
		success : function() {
		},
		error : function(msg) {
			showError(msg);
		}
	});		 
 }
 
function showLocation(geocoderSearchResponse)
{
	var province = geocoderSearchResponse.result.addressComponent.province; 					
	var city = geocoderSearchResponse.result.addressComponent.city; 
	$("#btnLocationCity").text(city);
}

function selectRegion() {
	if (isJqmGhostClick()) return;
	var li = getLi();
	if (li.data("role") == "list-divider") return;  // 字母索引点击无效
	var regionCode =  li.data("code");
	curRegionCode = regionCode;
	curRegionName = li.children('span').first().text();  
	var isOneStep =  li.data("isonestep");
	if (isOneStep == 1) {  // 如果一步选择
		selectCity ();		
	}
	else {
		var canSelectCity = false;
  		$.mobile.changePage("#citySelectPage", {
				transition : "none"
		});			
	}
}

$(document).on('pageshow', '#citySelectPage', function () {
	$("#ulTown").children().remove();
	$("#ulCity").children().remove();
	getCities();
});

function getCities() {
	$("#citySelectPage .iscroll-wrapper").iscrollview("refresh");
	$("#citySelectPage .iscroll-wrapper").iscrollview("scrollTo", 0,false);
	$("#ulCity").css("display", "block");
	$("#btnGetCities").addClass("ui-btn-active");
	$("#ulTown").css("display", "none");
	$("#btnGetTowns").removeClass("ui-btn-active");
	if ($("#ulCity").children().length > 0) return; // 如果有了则不重复
	$.ajax({
		url : baseUrl + "/new-info-price/regioncities.shtml?areaCode="+curRegionCode,
		type : "POST",	
		data: {
			ver: ver
		},
		success : function(cities) {
			showCities(cities);
			$.mobile.silentScroll(); 					
		},
		error : function(msg) {
			showError(msg);
		}
	});
}

function getTowns() {
	$("#citySelectPage .iscroll-wrapper").iscrollview("refresh");
	$("#citySelectPage .iscroll-wrapper").iscrollview("scrollTo", 0,false);
	$("#ulCity").css("display", "none");
	$("#btnGetCities").removeClass("ui-btn-active");	
	$("#ulTown").css("display", "block");
	$("#btnGetTowns").addClass("ui-btn-active");
	if ($("#ulTown").children().length) return; // 如果有了则不重复
	$.ajax({
		url : baseUrl + "/new-info-price/regiontowns.shtml?areaCode="+curRegionCode,
		type : "POST",	
		data : {
			ver: ver
		},
		success : function(towns) {
			showTowns(towns);
			$.mobile.silentScroll(); 							
		},
		error : function(msg) {
			showError(msg);
		}
	});
}

// 显示城市或县�?
function showCities(cities) {
	$("#ulCity").children().remove();
	var html="";
	var aIndex = ""; // 首字�?
	$(cities).each(
		function(i, city) {
			// 如果更换首字母，则添加字母分隔栏
			if ((i>0) && (city.abbr_spell.substring(0,1).toUpperCase() != aIndex)) {
				aIndex = city.abbr_spell.substring(0,1).toUpperCase();
				html = html + "<li data-role='list-divider'>" + aIndex +  "</span></li>";
			}
			
			var t = ""; // 期数时间区间
			if (city.periodCount > 0) {
				t = " " + city.start_year_month + "~" + city.end_year_month;
			}
			html = html + "<li data-periodscount = " + city.periodCount +" data-id='" + city.id + "' data-code=" + city.code;
			if (i==0) { // 第一条是地区
				 html = html + " style='background: beige;'";
			}
			html = html + "><span class='name'>" + city.name +"</span> <span style='font-size:12px;color: gray;'> (�? " + city.periodCount +  "�? " + t + ")</span></li>";
	});
	$("#ulCity").append(html);	
	$("#ulCity").listview("refresh");	
}

// 显示城市或县�?
function showTowns(towns) {
	$("#ulTown").children().remove();
	var html="";
	var aIndex = ""; // 首字�?
	$(towns).each(
		function(i, town) {
			// 如果更换首字母，则添加字母分隔栏
			if (town.abbr_spell.substring(0,1).toUpperCase() != aIndex) {
				aIndex = town.abbr_spell.substring(0,1).toUpperCase();
				html = html + "<li data-role='list-divider'>" + aIndex +  "</span></li>";
			}
			var t = ""; // 期数时间区间
			if (town.periodCount > 0) {
				t = " " + town.start_year_month + "~" + town.end_year_month;
			}
			html = html + "<li data-periodscount = " + town.periodCount + " data-code=" + town.code + "><span class='name'>" + town.name +"</span> <span style='font-size:12px;color: gray;'> " + town.parentName + " (�? " + town.periodCount + "�?" + t + ")</span></li>";
	});                                                       
	$("#ulTown").append(html);	
	$("#ulTown").listview("refresh");	
}

function clickSelectCity() {
	if (isJqmGhostClick()) return;
	selectCity ();
}

function selectCity () {
	var li = getLi();	
	if (li.data("role") == "list-divider") return;  // 字母索引点击无效
	tj(1057);
	$.mobile.changePage("#xxjPage", {
		transition : "none"
	});

	var cityCode =  li.data("code");
	var cityName = li.children('span').first().text();
	$("#spanCity").text(cityName);		
	$("#spanCity").attr("data-code", cityCode);
	$("#spanCity").attr("data-id", li.data("id"));
	
	if ((li.data("periodscount")>0) || (li.data("isonestep")>0)) {
		$("#spanCity").attr("data-isParentCity", 1);
	}
	else {
		$("#spanCity").attr("data-isParentCity", 0);
	}
	curCityCode = cityCode;
	curCityId = li.data("id");
	curTypeName = null;
	curTypeId = null;
	showCurTypeName();	

	var cityHistory = {"regionName": curRegionName, "regionCode": curRegionCode, "cityName": cityName, "cityCode": cityCode, "isParentCity": $("#spanCity").attr("data-isParentCity")};
	if (_.findWhere(searchCityHistories, {"cityCode": cityCode}) == undefined) {
		searchCityHistories.unshift(cityHistory);
		if (searchCityHistories.length > MAXCITYCOUNT) {  //
			searchCityHistories.splice(MAXCITYCOUNT ,searchCityHistories.length-MAXCITYCOUNT);
		}
		window.localStorage.setItem(Xxj_searchCityHistory, JSON.stringify(searchCityHistories));
	}	
	
	getNearestPeriod();
}

function clickSearchXxj() {
	var keyword = $("#txtSearchKey").val();
	if(keyword!=""){
		curTypeName = null;
		curTypeId = null;
		showCurTypeName();	
	}
	doSearchXxj();
}

function doSearchXxj() {
	clearMaterials();
	if ((curPeriodId == null) && (curStartDate == null)) {
		getNearestPeriod();
	}
	else {
		searchXxj();
	}
}

// 选择最近----------------------------------------------------------------------
function getNearestPeriod() {
	curPeriodId = null; 
	curStartDate = null;
	curEndDate = null;
	
	$.ajax({
		url : baseUrl + "/new-info-price/"+curCityCode+"/periods.shtml", 
		data:  {
			ver: ver
		},
		type : "POST",	
		success : function(periods) {
			curPeriods = periods;
			if (periods.length > 0) {
				curPeriodId = curPeriods[0].id;
				var startDate = curPeriods[0].start_year_month;
				var endDate = curPeriods[0].end_year_month;
				$("#selPeriod").val(formatDateStr(startDate, endDate));
			}	
			curTypeName = null;
			curTypeId = null;
			showCurTypeName();	
			clearMaterials();
			searchXxj();	
		},
		error : function(msg) {
			showError(msg);		
		}
	});		  
}
 

function endTuning() {
	clearTimeout(_zykTimeout);
}

 

function clickSelectType() {
	if (isJqmGhostClick()) return;	
	// if (!checkRight(2, "选择类别")) return;
  	$.mobile.changePage("#typeSelectPage", {
		transition : "none"
	});
}

var curTypeList=null;
var parentIds="";
  

 

function selectType(typeName,typeId) {
	if (isJqmGhostClick()) return;
	curTypeName = typeName;
	curTypeId = typeId;
	showCurTypeName();	
	$.mobile.changePage("#xxjPage", {
			transition : "none"
	});
	tj(1209, {'typeId': typeId,'typeName':typeName});
	doSearchXxj();
}

function showChildType(pid,index) {
	if (isJqmGhostClick()) return;	
	var description=null;
	if($("#description_id")!=null){
	   description=$("#description_id").attr("data-description");
	}
	description=(description==null?"":description+"/")+curTypeList[index].description;
	showTypes(description,pid,index);
	return;
}

function goTypeBack(){
	var obj=$("#description_id");
	if(obj==null||obj.attr("data-description")==null){
		$.mobile.changePage("#xxjPage", {
			transition : "none"
		});
	}else{
		var description=obj.attr("data-description");
		var index=obj.attr("data-index");
		if(curTypeList[index].pid!=null){
			description=description.substring(0,description.lastIndexOf("/"));
			$(curTypeList).each(function(i,type){
				if(curTypeList[index].pid==type.ippCatalogId){
					showTypes(description,type.ippCatalogId,i);
					return false;
				}
			});
		}else{
			showTypes(null,null,0);
		}
	}
}


function getParentType(id,name){
	$(curTypeList).each(
			function(i, type) {
				if(type.ippCatalogId==id){
					name=type.description+"/"+name;
					if(type.pid!=null){
						name=getParentType(type.pid,name);
					}else{
						return false;
					}
				}
	});
	return name;
}
 


function isUniquePrice(matPrices) {
	var result = false;
	if (matPrices.length < 2) return true;
	var price = matPrices[0].info_price;
   	for(var i = 0; i < matPrices.length; i++) {
   		if (price != matPrices[i].info_price) return false;
   	}
   	return true;
}

 
// 收藏材料
function favoriteOrUnfavoriteMat() {
	if (!checkRight(2)) return;
	var material = allMaterials[curMatLi.index()];
	if (material.favorite) {
		unCollectMat();
	}
	else {
		collectMat();
	}
}

 
 
function openXxj() {
	if (isJqmGhostClick()) return;
	gcapp.downloadFile("{url:'',filename:''}");
}

$.getScript("http://gcapp-web.gldjc.com/www/js/app/xxjEx.js");
