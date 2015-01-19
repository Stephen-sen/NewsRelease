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
	$(function() {

		//demo04
		$("#city").citySelect({
			prov : "${province}",
			city : "${city}",
			dist : "${district}",
			nodata : "none"
		});
	});
</script>

<body style="text-align: center;">
	<div id="update-body">
		<div class="main_left">
			<div class="main_left_top"></div>
			<div class="main_left_bottom">

				<form action="user/insertUser" method="post">
					<input type="hidden" id="birthYear" value="${birthYear}"> <input
						type="hidden" id="birthMonth" value="${birthMonth}"> <input
						type="hidden" id="birthDay" value="${birthDay}">
					<s:hidden name="user.id" />
					<table class="table" style="text-align: right;">
						<tr>
							<th><span class="txta">*</span> 昵称：</th>
							<td><s:textfield name="user.nickName" /></td>
						</tr>
						<tr>
							<th><span class="txta">*</span> 真实姓名：</th>
							<td><s:textfield name="user.userName" /></td>
						</tr>
						<tr>
							<th><span class="txta">*</span> 性别：</th>
							<td><s:radio name="user.sex" list="%{#{'1':'男','0':'女'}}"
									value="user.sex" theme="simple"></s:radio></td>
						</tr>
						<tr>
							<th>出生日期：</th>
							<td colspan="2"><select id="year" name="user.birthYear">
							</select><span>年</span><select id="month" name="user.birthMonth">
							</select><span>月</span> <select id="day" name="user.birthDay">
							</select><span>日</span></td>
						</tr>
						<tr>
							<th>所在地：</th>
							<td>
								<div id="city">
									<select class="prov" id="province" name="user.province"></select><span>省</span>
									<select class="city" disabled="disabled" id="city"
										name='user.city'></select><span>市</span> <select class="dist"
										disabled="disabled" id="district" name='user.district'></select>
								</div></td>

						</tr>
						<tr>
							<th><span class="txta">*</span>邮箱：</th>
							<td><s:textfield name="user.email" /></td>
						</tr>
						<tr>
							<th><span class="txta">*</span> 电话：</th>
							<td><s:textfield name="user.tel" /></td>
						</tr>
						<tr>
							<td colspan="3" align="right"><input type="submit"
								value="提交" class="bind_btn" id="submit_btn" /> <a
								href="user/findUser?user.id=<s:property value="id"/>"
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
