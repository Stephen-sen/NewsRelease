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
		
		<form action="role/updateRole" method="post">
				<s:hidden name="role.id" />
				<table class="table" style="text-align: right;">
      <tr>
       <th><span class="txta">*</span> 角色名称：</th>
       <td><s:textfield name="role. name" /></td>
      </tr>
      <tr>
       <th><span class="txta">*</span> 说明：</th>
       <td><s:textfield name="role.discription" /></td>
      </tr>
      <tr>
       <td colspan="3" align="right"><input type="submit" value="提交"
       class="bind_btn" id="submit_btn" /> <a
       href="role/roleList"
       class="bbtn"><cite>取消</cite></a></td>
      </tr>
     </table>
			</form>
		
		</div>
		</div>
		<div class="main_right">
		
		<img id="userImages" alt="修改头像" src="images/me.jpg">
		<p>修改头像</p>
		<div class="info_btn1">
			<a href="" class="abtn"><cite>修改头像</cite>
			</a><a href="user/findUser?user.id=${user.id }" class="abtn"><cite>修改昵称</cite>
			</a><a href="jsp/user/changePwd.jsp?id=${user.id}" class="abtn"><cite>修改密码</cite>
			</a><a onclick="if (confirm('确定要退出吗？')) return true; else return false;"
				href="jsp/Login.jsp" target=_top class="abtn"><cite>安全退出</cite>
			</a>

		</div>
		
		</div>
			
		</div>

	
</body>
</html>
