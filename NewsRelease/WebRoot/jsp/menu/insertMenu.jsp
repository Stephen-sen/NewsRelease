<%@ page language="java" import="java.util.*" pageEncoding="UTF-8"%>

<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN">
<html>
<head>
<%@ include file="/common/headers.jsp"%>
</head>

<style type="text/css">
table tr td {
	text-align: left;
}

table tr th {
	width: 200px;
}
</style>


<script type="text/javascript">
             $(function() {
              $("#file_upload").uploadify({
                  debug:false,
                  auto:true,//是否自动上传
                  height: 30,  
                  buttonText:'上传图片',
                  cancelImage:'images/uploadify-cancel.png',
                  swf : 'js/uploadify.swf',
                  expressInstall:'js/expressInstall.swf',
                  uploader : '<%=path%>
	/upload/fileUpload.action', //后台处理上传文件的action 
							width : 120,
							multi : false,//是否允许多个文件上传
							queueID : 'uploadfileQueue',
							fileObjName : 'fileName', //与后台Action中file属性一样
							formData : { //附带值       
								'userid' : '111',
								'username' : 'tom',
								'rnd' : '111'
							},
							successTimeout : 99999,//上传超时时间
							overrideEvents : [ 'onDialogClose' ],
							fileTypeDesc : '上传文件支持的文件格式:jpg,jpge,gif,png',
							fileTypeExts : '*.*',//*.jpg;*.jpge;*.gif;*.png
							queueSizeLimit : 3,//
							// simUploadLimit:1,//一次可以上传1个文件
							fileSizeLimit : '20MB',//上传文件最大值
							//返回一个错误，选择文件的时候触发
							onSelectError : function(file, errorCode, errorMsg) {
								switch (errorCode) {
								case -100:
									alert("上传的文件数量已经超出系统限制的"
											+ $('#file_upload').uploadify(
													'settings',
													'queueSizeLimit') + "个文件！");
									break;
								case -110:
									alert("文件 ["
											+ file.name
											+ "] 大小超出系统限制的"
											+ $('#file_upload')
													.uploadify('settings',
															'fileSizeLimit')
											+ "大小！");
									break;
								case -120:
									alert("文件 [" + file.name + "] 大小异常！");
									break;
								case -130:
									alert("文件 [" + file.name + "] 类型不正确！");
									break;
								}
							},
							//每次更新上载的文件的进展
							onUploadProgress : function(file, bytesUploaded,
									bytesTotal, totalBytesUploaded,
									totalBytesTotal) {
								//alert(bytesUploaded);
								//有时候上传进度什么想自己个性化控制，可以利用这个方法
								//使用方法见官方说明
							},
							//检测FLASH失败调用
							onFallback : function() {
								alert("您未安装FLASH控件，无法上传图片！请安装FLASH控件后再试。");
							},
							//上传到服务器，服务器返回相应信息到data里
							onUploadSuccess : function(file, data, response) {
								var fileNameAndPath = data.split(",");
								var phtml = "<p><a href='#' onlick=downLoad('"
										+ fileNameAndPath[1]
										+ "')>"
										+ fileNameAndPath[0]
										+ "</a><img alt='删除' src='images/uploadify-cancel.png' onclick=delFile(this)></p>";
								if ($("#uploadfileQueue p").length == 0) {
									$("#uploadfileQueue").html(phtml);
								} else {
									$("#uploadfileQueue p:last").after(phtml);
								}
								//c.png,D:\apache-tomcat-6.0.37\webapps\NewsRelease\uploads\c.png
var path = fileNameAndPath[1]
										.split("D:\\apache-tomcat-6.0.37\\webapps\\NewsRelease\\images\\uploads\\");
								//alert(path[1]);
								$("#imgPath").val("images/uploads/" + path[1]);
							},
							onSelect : function(file) {
								//alert(file.name);         
							},
							removeCompleted : true,//上传的文件进度条是否消失
							requeueErrors : false,
							removeTimeout : 2,//进度条消失的时间，默认为3
							progressData : "percentage",//显示上传的百分比
							onUploadError : function(file, errorCode, errorMsg,
									errorString, swfuploadifyQueue) {
								$("#dialog-message").html(errorString);
							},
							onError : function(event, queueID, fileObj) {
								alert("文件:" + fileObj.name + " 上传失败");
							}
						});
	});
	//删除文件
	function delFile(obj) {
		$(obj).parent().remove();
	}
</script>

<script type="text/javascript">
	$(document).ready(function() {
		initMenu();
	})

	function initMenu() {
		$('#bigClass').append("<option value=\"\">--请选择--</option>");
		$.ajax({
			cache : false,
			type : 'post',
			async : false,
			url : 'menu/findMenuList',
			dataType : 'json',
			error : function(XMLHttpRequest, textStatus, errorThrown) {
				alert(XMLHttpRequest.status);
			},
			success : function(data) {
				$(data).each(
						function(i, item) {
							$('#pre_menu').append(
									"<option value='" + item.id + "'>"
											+ item.menuName + "</option>");
						});
			},
			complete : function(XMLHttpRequest, textStatus) {
			}
		});
	}
</script>
<body style="text-align: center;">
	<div id="update-body">
		<div class="main_left" style="width:600px ">
			<div class="main_left_top"></div>
			<div class="main_left_bottom">

				<form action="menu/insertMenu" method="post">
					<s:hidden name="menu.id" />
					<table class="table" style="text-align: center;"cellpadding="0" cellspacing="0" border="1">
						<tr>
							<th><span class="txta">*</span> 菜单名称：</th>
							<td><s:textfield name="menu.name" /></td>
						</tr>
						<tr>
							<th><span class="txta">*</span> 菜单说明：</th>
							<td><s:textfield name="menu.description" /></td>
						</tr>
						<tr>
							<th>菜单图片</th>
							<td><s:textfield name="menu.logo" id="imgPath" />
								<div style="margin-left: 180px;margin-top: -30px;">
									<input type="file" id="file_upload" name="fileName" />
								</div>
								<div id="uploadfileQueue"
									style="width: 80px;height:30px; margin-left: 310px;margin-top: -40px;">
								</div></td>
						</tr>
						<tr>
							<th><span class="txta">*</span> 跳转URL：</th>
							<td><s:textfield name="menu.url" /></td>
						</tr>
						<tr>
							<th><span class="txta">*</span> 上级目录：</th>
							<td><select id="pre_menu" name="menu.preId">
							</select>
							</td>
						</tr>

						<tr>
							<th><span class="txta">*</span> 菜单类别：</th>
							<td><s:textfield name="menu.menuType" /></td>
						</tr>
						<tr>
							<th><span class="txta">*</span> 按钮代号：</th>
							<td><s:textfield name="menu.buttonCode" /></td>
						</tr>
						<tr>
							<td colspan="3" align="right">
								<div style="padding-left: 80px">
									<input type="submit" value="添加" class="bind_btn"
										id="submit_btn" /> <a
										href="menu/findMenu?menu.id=<s:property value="id"/>"
										class="bbtn"><cite>取消</cite> </a>
								</div></td>
						</tr>
					</table>
				</form>

			</div>
		</div>

	</div>


</body>
</html>
