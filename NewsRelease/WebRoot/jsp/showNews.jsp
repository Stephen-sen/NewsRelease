<%@ page language="java" import="java.util.*" pageEncoding="UTF-8"%>

<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN">
<html>
<head>
<%@ include file="/common/head.jsp"%>
</head>

<style type="text/css">
table tr td {
 text-align: center;
}

form {
 margin: 0;
}

textarea {
 display: block;
}
</style>


<script>

$(document).ready(function (){
	   if(${userMess !=null}){
	     $("#commens").show();
	     $("#comm_butt").show();
	   }
	   else{
	     $("#commens").hide();
	     $("#comm_butt").hide();
	   }
	 })
	 
	 function setValue() {
  var content;
  content = $("#content2").val();
  $("#content1").val(content);
  $("#form1").submit();
 }
 
 function getTimes() {
	    var date = new Date();
	    var times = date.toLocaleDateString();
	    var hours = (date.getHours() < 10) ? "0" + date.getHours() : date.getHours();
	    var minutes = (date.getMinutes() < 10) ? "0" + date.getMinutes() : date.getMinutes();
	    var seconds = (date.getSeconds() < 10) ? "0" + date.getSeconds() : date.getSeconds();
	    times += "  " + hours + ":" + minutes + ":" + seconds;

	    document.getElementById("comm_time").innerHTML = times;
	  }
 
function saveComment() {
	var commValue = $("#content2").val();
	//alert("${userMess.id}");
    $.ajax({
        cache : false,
        type : 'post',
        async : false,
        url : 'comment/insertComment',
        data : {
			"comment.context" : commValue,
			"news.id" : $("#news_id").val(),
			"user.id" : "${userMess.id}"
		},
        dataType : 'json',
        error : function(XMLHttpRequest, textStatus, errorThrown) {
          alert(XMLHttpRequest.status);
        },
        success : function(data) {
        	 $(data).each(function(i, item) {
        		 if (item.state == 1) {
        			 alert("评论成功!");
        			 KindEditor.instances[0].html('');
        		 }
               });
        },
        complete : function(XMLHttpRequest, textStatus) {
        }
    });
  }


 
 function addPingLun(){
	var content = $("#content2").val();
	var rowCount = ($("table[id$='tab1']>tbody").children("tr").length-3)/2;
	 $("#tab1 tr").eq(-3).last()
	 .after("<tr><td style=\"text-align: left;width:80%;text-indent:75px;border-bottom:#333 1px dashed;\">"+content+"</td></tr>");
	 $("#tab1 tr").eq(-4).last()
	 .after("<tr><td style=\"text-align: left;text-indent:75px;\">#"+rowCount+"楼&nbsp;&nbsp;${userMess.userName}&nbsp;&nbsp;发表于:<label id=\"comm_time\"></label></td></tr>");
 }
 

</script>

<body style="text-align: center;">
  <div id="insertNews-body">
    <div class="main_left">
      <div class="main_left_top"></div>
      <div class="main_left_bottom">

        <form id="form1" action="" method="post">
          <s:hidden name="news.id" />
          <table class="table" style="text-align: center;" id="tab1">
            <tr>
              <th><h1><s:property value="news.title"/></h1></th>
            </tr>
            <tr>
              <td><s:property value="news.createDate"/>&nbsp;&nbsp;
              <s:property value="news.source"/>&nbsp;&nbsp;
              <s:property value="news.readTimes"/>&nbsp;&nbsp;
              <s:property value="news.commentTimes"/></td>
            </tr>
            <tr>
              <td style="text-align: left;">
              <div style="padding-left: 90px;padding-right: 80px">
              ${news.content}
              </div>
              </td>
            </tr>
             <s:iterator  value="#request.commentList" status="comment">
             <tr>
              <td style="text-align: left;text-indent:75px;"> #<s:property value="#comment.index+1"/>楼
             &nbsp;&nbsp;${userMess.userName }&nbsp;&nbsp;发表于：<s:property value="dateTime"/>
              </td>
            </tr>
             <tr>
              <td style="text-align: left;width:80%;text-indent:75px;border-bottom:#333 1px dashed;">
            ${context}
              </td>
            </tr>
            </s:iterator>
            <tr>
              <td style="text-align: left;">
              <div style="padding-left: 90px;display: none" id="commens"> 评论：<input type="hidden" name="news.content" id="content1">
              <textarea id="content2" name="content" style="width:800px;height:200px;" >${comment.content}</textarea>
              </div>
              </td>
            </tr>
            <tr>
              <td ><div style="display: none" id="comm_butt">
              <a href="javascript:;" class="bbtn" onclick="addPingLun(),getTimes(),saveComment()"><cite>评论</cite> </a>
               <a href="#" class="bbtn"><cite>取消</cite> </a>
               </div>
               </td>
            </tr>
         
          </table>
        </form>

      </div>
    </div>

  </div>


</body>
</html>
