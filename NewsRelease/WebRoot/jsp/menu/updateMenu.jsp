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
		
		<form action="menu/updateMenu" method="post">
				<s:hidden name="menu.id" />
				<table class="table" style="text-align: right;">
     <tr>
							<th><span class="txta">*</span> 菜单名称：</th>
							<td><s:textfield name="menu.name" /></td>
						</tr>
						<tr>
							<th><span class="txta">*</span> 菜单说明：</th>
							<td><s:textfield name="menu.description" /></td>
						</tr>
						<tr>
							<th><span class="txta">*</span> 菜单图标：</th>
							<td><s:textfield name="menu.logo" /></td>
						</tr>
						<tr>
							<th><span class="txta">*</span> 跳转URL：</th>
							<td><s:textfield name="menu.url" /></td>
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
       <td colspan="3" align="right"><input type="submit" value="提交"
       class="bind_btn" id="submit_btn" /> <a
       href="menu/menuList"
       class="bbtn"><cite>取消</cite></a></td>
      </tr>
     </table>
			</form>
		</div>
		</div>
		</div>
</body>
</html>
