<%@ page language="java" import="java.util.*" pageEncoding="UTF-8"%>
<%
String path = request.getContextPath();
String basePath = request.getScheme()+"://"+request.getServerName()+":"+request.getServerPort()+path+"/";
%>

<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN">
<html>
  <head>
    <base href="<%=basePath%>">
    
    <title>My JSP 'uploadTest.jsp' starting page</title>
    
	<meta http-equiv="pragma" content="no-cache">
	<meta http-equiv="cache-control" content="no-cache">
	<meta http-equiv="expires" content="0">    
	<meta http-equiv="keywords" content="keyword1,keyword2,keyword3">
	<meta http-equiv="description" content="This is my page">
	<!--
	<link rel="stylesheet" type="text/css" href="styles.css">
	-->
<link rel="stylesheet" type="text/css" href="uploadify/uploadify.css" />
<script type="text/javascript" src="jquery/jquery2.1.0.js"></script>
<script type="text/javascript" src="uploadify/jquery.uploadify.js"></script>
<script type="text/javascript">
$(function(){
$("#file_upload").uploadify({
       'swf'      : 'uploadify/uploadify.swf',//按钮的动画
       'uploader' : '${pageContext.request.contextPath }/uploadaction.action',//上传的路径
       'queueID':'fileQueue',//设置为队列的ID
       'method' : "post",
       'folder' : 'imageFile',//设置上传文件夹
       'fileObjName' : 'file',//与后台Action中file属性一样???
            'auto':true,//为true时，不加队列，直接上传
            'multi':false,//为false时，一次只能选一个文件
            'fileSizeLimit': 10485760,//限制上传文件的大小
            'buttonText'   : 'FIEL',//按钮上的文字
            'fileTypeDesc' : '支持格式:jpg/gif/jpeg/png/bmp.', //如果配置了以下的'fileExt'属性，那么这个属性是必须的 
            'fileTypeExts' : '*.jpg;*.gif;*.jpeg;*.png;*.bmp',//允许的格式
            'onUploadSuccess' : function (file, data, response){
                alert(data);
             }
   });
});
</script>
  </head>
  
  <body>
    <div id="fileQueue"></div>
    <input type="file" name="file" id="file_upload">
    <p>
    <a href="javascript:$('#file_upload').uploadify('upload')">上传图片</a> 
    <a href="javascript:$('#file_upload').uploadify('cancel')">取消上传</a>
  </body>
</html>
