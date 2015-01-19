<%@ page language="java" import="java.util.*" pageEncoding="UTF-8"%>

<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN">
<html>
<head>
<%@ include file="/common/head.jsp"%>
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
function setValue() {
    var content;
    content = $("#content2").val();
    $("#content1").val(content);
   
    if($("#content2").val() == ""){
    	alert("留言内容不能为空！");
    	return false;
    }
   $("#form1").submit();
  }
  function back(){
	  history.back(-1);
  }
</script>

<body style="text-align: center;">
	<div id="update-body">
		<div class="main_left" style="width: 840px">
			<div class="main_left_top"></div>
			<div class="main_left_bottom">
<a href="mBoard/mYMBoardList>" class="bbtn"><cite>我的留言</cite> </a>
				<form action="mBoard/insertMBoard" method="post" id="form1">
				<s:hidden name="messageBoard.id" />
					<input name="user.id" value="${userMess.id}" type="hidden">
					<table class="table" style="text-align: center;">

						<tr>
							<th><span class="txta">*</span>留言内容：</th>
							<td><input type="hidden" name="messageBoard.messageContext" id="content1">
							</td>
						</tr>

						<tr>
							<td colspan="2"><textarea id="content2" name="content"
									style="width:800px;height:200px;"></textarea>
							</td>
						</tr>

						<tr>
							<th><span class="txta">*</span> 留言人：&nbsp;&nbsp;${userMess.userName}</th>
						</tr>
						<tr>
							<td colspan="3" align="right">
								<div style="padding-left: 80px">
									 <a href="javascript:;" class="bbtn" onclick="setValue()"><cite>留言</cite> </a> <a
										href="menu/findMenu?menu.id=<s:property value="id"/>"
										class="bbtn"><cite>取消</cite> </a>
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
