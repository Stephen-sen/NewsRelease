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
</script>

<body style="text-align: center;">
  <div id="insertNews-body">
    <div class="main_left">
      <div class="main_left_top"></div>
      <div class="main_left_bottom">

        <form id="form1" action="comment/updateComment" method="post">
          <s:hidden name="comment.id" />
          <input type="hidden" name="news.id" value="${comment.news.id }">
          <input type="hidden" name="user.id" value="${comment.user.id }">
          <s:hidden name="" />
          <table class="table" style="text-align: right;">
            <tr>
              <th><span class="txta">*</span> 新闻标题：</th>
              <td><s:textfield name="comment.news.title" readonly="true"/></td>
            </tr>
           <tr>
              <th><span class="txta">*</span> 评论时间：</th>
              <td>
               <s:textfield name="comment.dateTime" readonly="true"/>
              </td>
            </tr>
            <tr>
              <th><span class="txta">*</span> 评论人：</th>
              <td><s:textfield name="comment.user.userName" readonly="true"/></td>
            </tr>
            <tr>
              <th>评论内容：</th>
              <td><input type="hidden" name="comment.context" id="content1"></td>
            </tr>

            <tr>
              <td colspan="2"><textarea id="content2" name="content" style="width:800px;height:200px;">${comment.context}</textarea></td>
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
