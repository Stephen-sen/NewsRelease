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
</style>

<script type="text/javascript">
</script>

<body style="text-align: center;">
	<div id="update-body">
		<div class="main_left">
		<div class="main_left_top"></div>
		<div class="main_left_bottom">
		
		<form action="mBoard/updateMBoard" method="post">
				<s:hidden name="messageBoard.id" />
				<input type="hidden" name="user.id" value="${ messageBoard.user.id}">
				<table class="table" style="text-align: right;">
     <tr>
							<th><span class="txta">*</span> 留言内容：</th>
							<td><s:textfield name="messageBoard.messageContext" /></td>
						</tr>
						<tr>
							<th><span class="txta">*</span> 留言人：</th>
							<td><s:textfield name="messageBoard.user.userName" readonly="true"/></td>
						</tr>
						<tr>
							<th><span class="txta">*</span> 留言日期：</th>
							<td><s:textfield name="messageBoard.dateTime" readonly="true"/></td>
						</tr>
      <tr>
       <td colspan="3" align="right"><input type="submit" value="提交"
       class="bind_btn" id="submit_btn" /> <a
       href="mBoard/mBoardList"
       class="bbtn"><cite>取消</cite></a></td>
      </tr>
     </table>
			</form>
		</div>
		</div>
		</div>
</body>
</html>
