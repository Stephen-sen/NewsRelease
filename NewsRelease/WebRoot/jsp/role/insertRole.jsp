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

<body style="text-align: center;">
	<div id="update-body">
		<div class="main_left">
			<div class="main_left_top"></div>
			<div class="main_left_bottom">

				<form action="role/insertRole" method="post">
					<s:hidden name="role.id" />
					<table class="table" style="text-align: right;">
						<tr>
							<th><span class="txta">*</span> 角色名称：</th>
							<td><s:textfield name="role.name" /></td>
						</tr>
						<tr>
							<th><span class="txta">*</span> 说明：</th>
							<td><s:textfield name="role.discription" /></td>
						</tr>
						<tr>
							<td colspan="3" align="right"><input type="submit"
								value="提交" class="bind_btn" id="submit_btn" /> <a
								href="role/findRole?role.id=<s:property value="id"/>"
								class="bbtn"><cite>取消</cite>
							</a></td>
						</tr>
					</table>
				</form>

			</div>
		</div>

	</div>


</body>
</html>
