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

form {
	margin: 0;
}

textarea {
	display: block;
}
</style>


<script>
	function setValue() {
		var content;
		content = $("#content2").val();
		$("#content1").val(content);
		$("#form1").submit();
	}
	
	$(document).ready(function(){
    initSmallClass();
    initModular();
    $("#modular").val("${news.modular.id}");
    $("#smallClass").val("${news.type.id}");
  })
  
  function initSmallClass(){
             $('#smallClass').append("<option value=\"\">--请选择--</option>");
             $.ajax({
                 cache : false,
                 type : 'post',
                 async : false,
                 url: 'smallClass/findListSmaClass',
                 dataType: 'json',
                 error: function(XMLHttpRequest, textStatus, errorThrown){
                     alert(XMLHttpRequest.status);
                 },
                 success : function(data) {
                   $(data).each(function(i, item) {
                         $('#smallClass').append("<option value='" + item.id + "'>" + item.typeName +"</option>");
                     });
                 },
                 complete: function(XMLHttpRequest, textStatus){
                 }
             });
	}
	
	function initModular(){
        $('#modular').append("<option value=\"\">--请选择--</option>");
        $.ajax({
            cache : false,
            type : 'post',
            async : false,
            url: 'modular/findListModular',
            dataType: 'json',
            error: function(XMLHttpRequest, textStatus, errorThrown){
                alert(XMLHttpRequest.status);
            },
            success : function(data) {
              $(data).each(function(i, item) {
                    $('#modular').append("<option value='" + item.id + "'>" + item.modularName +"</option>");
                });
            },
            complete: function(XMLHttpRequest, textStatus){
            }
        });
}
</script>


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
                  uploader : '<%=path%>/upload/fileUpload.action', //后台处理上传文件的action 
                  width  : 120 ,
                  multi:false,//是否允许多个文件上传
                  queueID:'uploadfileQueue',
                  fileObjName:'fileName', //与后台Action中file属性一样
                  formData:{ //附带值       
                                'userid':'111',
                                'username':'tom', 
                                'rnd':'111'
                                },
                   successTimeout:99999,//上传超时时间
                   overrideEvents:['onDialogClose'],
                  fileTypeDesc:'上传文件支持的文件格式:jpg,jpge,gif,png',
                  fileTypeExts:'*.*',//*.jpg;*.jpge;*.gif;*.png
                  queueSizeLimit : 3,//
                 // simUploadLimit:1,//一次可以上传1个文件
                  fileSizeLimit:'20MB',//上传文件最大值
                  //返回一个错误，选择文件的时候触发
                    onSelectError:function(file, errorCode, errorMsg){
                          switch(errorCode) {
                              case -100:
                                  alert("上传的文件数量已经超出系统限制的"+$('#file_upload').uploadify('settings','queueSizeLimit')+"个文件！");
                                  break;
                              case -110:
                                  alert("文件 ["+file.name+"] 大小超出系统限制的"+$('#file_upload').uploadify('settings','fileSizeLimit')+"大小！");
                                  break;
                              case -120:
                                  alert("文件 ["+file.name+"] 大小异常！");
                                  break;
                              case -130:
                                  alert("文件 ["+file.name+"] 类型不正确！");
                                  break;
                          }
                      },
                       //每次更新上载的文件的进展
                      onUploadProgress: function(file, bytesUploaded, bytesTotal, totalBytesUploaded, totalBytesTotal) {
                      //alert(bytesUploaded);
                           //有时候上传进度什么想自己个性化控制，可以利用这个方法
                           //使用方法见官方说明
                      },
                       //检测FLASH失败调用
                       onFallback:function(){
                          alert("您未安装FLASH控件，无法上传图片！请安装FLASH控件后再试。");
                      },
                      //上传到服务器，服务器返回相应信息到data里
                     onUploadSuccess:function(file, data, response){
                      var fileNameAndPath=data.split(",");
                      var phtml="<p><a href='#' onlick=downLoad('"+fileNameAndPath[1]+"')>"+fileNameAndPath[0]+"</a><img alt='删除' src='images/uploadify-cancel.png' onclick=delFile(this)></p>";
                      if($("#uploadfileQueue p").length==0){
                           $("#uploadfileQueue").html(phtml);
                      }else{
                           $("#uploadfileQueue p:last").after(phtml);
                      }
                      //c.png,D:\apache-tomcat-6.0.37\webapps\NewsRelease\uploads\c.png
                      var path = fileNameAndPath[1].split("D:\\apache-tomcat-6.0.37\\webapps\\NewsRelease\\images\\uploads\\");
                      //alert(path[1]);
                          $("#imgPath").val("images/uploads/"+path[1]);
                      },
                     onSelect : function(file) {
                       //alert(file.name);         
                      },
                      removeCompleted:true,//上传的文件进度条是否消失
                      requeueErrors:false,
                      removeTimeout:2,//进度条消失的时间，默认为3
                      progressData:"percentage",//显示上传的百分比
                       onUploadError : function(file,errorCode,errorMsg,errorString,swfuploadifyQueue) {  
                         $("#dialog-message").html(errorString);  
                         } , 
                      onError:function(event, queueID, fileObj){
                       alert("文件:" + fileObj.name + " 上传失败"); 
                      }
             });
            });
             //删除文件
             function delFile(obj){
             $(obj).parent().remove();
             }
        </script>
<body style="text-align: center;">
  <div id="insertNews-body">
    <div class="main_left">
      <div class="main_left_top"></div>
      <div class="main_left_bottom">

        <form id="form1" action="news/updateNews" method="post">
          <s:hidden name="news.id" />
          <table class="table" style="text-align: right;">
            <tr>
              <th><span class="txta">*</span> 新闻标题：</th>
              <td><s:textfield name="news.title" /></td>
            </tr>
            <tr>
              <th><span class="txta">*</span> 所属类别：</th>
              <td><select id="smallClass" name="newsSmallClass.id">
              </select>
              </td>
            </tr>
            <tr>
              <th><span class="txta">*</span> 所属模块：</th>
              <td><select id="modular" name="modular.id">
              </select>
              </td>
            </tr>
            <tr>
              <th><span class="txta">*</span> 简略信息：</th>
              <td><s:textfield name="news.intro" /></td>
            </tr>
            <tr>
              <th><span class="txta">*</span>新闻来源：</th>
              <td><s:textfield name="news.source" /></td>
            </tr>
              <tr>
              <th>图片地址</th>
              <td><s:textfield name="news.newImg" id="imgPath"/>
              <div style="margin-left: 180px;margin-top: -30px;">
              <input type="file" id="file_upload" name="fileName"/>
              </div>
			<div id="uploadfileQueue" style="width: 400px;height:30px; margin-left: 310px;margin-top: -40px;">
			</div>
              </td>
            </tr>
            <tr>
              <th>内容：</th>
              <td><input type="hidden" name="news.content" id="content1"></td>
            </tr>

            <tr>
              <td colspan="2"><textarea id="content2" name="content" style="width:800px;height:200px;">${news.content}</textarea></td>
            </tr>
            <tr>
              <td colspan="3" align="right"><input type="button" onclick="javascritp:setValue()" value="提交" class="bind_btn" id="submit_btn" /> <a href="#" class="bbtn"><cite>取消</cite> </a></td>
            </tr>
          </table>
        </form>

      </div>
    </div>

  </div>


</body>
</html>
