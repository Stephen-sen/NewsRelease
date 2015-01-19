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
	function checkItem(name) {
		var checkValue = $("#" + name).val();
		if (checkValue != "") {
			//$("#" + name + "_v").hide();
			//alert($("#userId").val())
			if (name == "oldpwd") {
				$.ajax({
					cache : false,
					type : 'post',
					async : false,
					url : 'checkPwd',
					data : {
						"user.passWord" : checkValue,
						"user.id" : $("#userId").val()
					},
					dataType : 'json',
					error : function(XMLHttpRequest, textStatus, errorThrown) {
						alert(XMLHttpRequest.status);
					},
					success : function(data) {
						$(data).each(function(i, item) {
							if (item.state == 1) {
								$("#oldpwd_l").css("color", "red");
								$("#error_oldpwd").show();
								$("#right_oldpwd").hide();
								$("#oldpwd_l").text(item.message);
								$("#submit_btn").attr("disabled", true);
								$("#pwd1").attr("readOnly",true); 
								$("#pwd2").attr("readOnly",true); 
							} 
							if (item.state == 0) {
								$("#oldpwd_l").css("color", "#dbf77e");
								$("#right_oldpwd").show();
								$("#error_oldpwd").hide();
								$("#oldpwd_l").text("");
								$("#submit_btn").attr("disabled", false);
								 $("#pwd1").removeAttr("readOnly");
								 $("#pwd2").removeAttr("readOnly");
							}

						});

					}
				});
			}

		}

		else {
			$("#" + name + "_l").css("color", "red");
			$("#right_" + name).hide();
			$("#" + name + "_l").text("*");
		}

	}

	function show(pwd) {
		pwdValue = $("#" + pwd).val();
		$("#pwd1_v").hide();
		$("#pwd2_v").hide();
		if (pwdValue != "") {
			$("#" + pwd + "_l").hide();
			$("#error_" + pwd).hide();
			$("#right_" + pwd).show();
		} else {
			$("#" + pwd + "_l").show();
			$("#error_" + pwd).hide();
			$("#right_" + pwd).hide();
		}
	}

	function checkPwd() {
		$("#pwd1_v").hide();
		$("#pwd2_v").hide();
		pwd1 = $("#pwd1").val();
		pwd2 = $("#pwd2").val();
		if (pwd1 != pwd2) {
			$("#error_pwd1").show();
			$("#error_pwd1").show();

			$("#right_pwd1").hide();
			$("#right_pwd2").hide();

			$("#pwd1_l").hide();
			$("#pwd2_l").show();
			$("#pwd2_l").text("两次密码输入不一致");
			$("#submit_btn").attr("disabled", true);
		} else {

			if ((pwd1 != "") || (pwd2 != "")) {
				$("#pwd1_l").hide();
				$("#right_pwd1").show();
				$("#error_pwd1").hide();

				$("#pwd2_l").hide();
				$("#right_pwd2").show();
				$("#submit_btn").attr("disabled", false);
			}

		}
	}
	
	function check(){
		var oldpwd = $("#oldpwd").val();
		var pwd1 = $("#pwd1").val();
		var pwd2 = $("#pwd2").val();
		if(oldpwd == "" || pwd1 == "" || pwd2 == ""){
			alert("请填写完信息后重新提交");
			return false;
		}
		else{
			$("#form1").submit();
		}
	}
</script>

<body style="text-align: center;">
	<div id="changePwd-body_left">
		<div class="main_top"></div>
		<div class="message">
		<p>友情提示：原密码输入无效时无法输入新密码
		</div>
		<div class="main_bottom">
			<form id="form1" action="user/updatePwd" method="post">
				<input type="hidden" value=<%=request.getParameter("id")%>
					name="user.id" id="userId">
				<table class="table" style="text-align: right;">
					<tr>
						<td style="width: 20%">原始密码</td>
						<td style="width: 30%"><input class="pwdInput"
							type="passWord" id="oldpwd" name="passWord"
							onblur="javascritp:checkItem('oldpwd');"></td>
						<td>
							<div>
								<div id="right_oldpwd" style="display: none;float:left;">
									<img src="images/duihao.png" style="width: 12px;height: 12px">
								</div>
								<div id="error_oldpwd" style="display: none;float:left;">
									<img src="images/delete1.png" style="width: 12px;height: 12px">
								</div>
								<div style="float:left;padding-left: 5px">
									<span id="oldpwd_l" style="color: red;">*</span>
								</div>
							</div>
						</td>
					</tr>
					<tr>
						<td>密码</td>
						<td><input class="pwdInput" type="passWord" id="pwd1" readonly="readonly"
							name="user.passWord" onblur="javascritp:show('pwd1');">
						</td>
						<td>
							<div>
								<div id="right_pwd1" style="display: none;float:left;">
									<img src="images/duihao.png" style="width: 12px;height: 12px">
								</div>
								<div id="error_pwd1" style="display: none;float:left;">
									<img src="images/delete1.png" style="width: 12px;height: 12px">
								</div>
								<div style="float:left;padding-left: 5px">
									<span id="pwd1_l" style="color: red;">*</span>
								</div>
								<div id="pwd1_v" style="color:red">
									<s:fielderror fieldName="user.passWord" />
								</div>
							</div>
						</td>
					</tr>
					<tr>
						<td>确认密码</td>
						<td><input class="pwdInput" type="password" id="pwd2" readonly="readonly"
							name="user.qrmm" onblur="javascritp:checkPwd();">
						</td>
						<td>
							<div>
								<div id="right_pwd2" style="display: none;float:left;">
									<img src="images/duihao.png" style="width: 12px;height: 12px">
								</div>
								<div id="error_pwd2" style="display: none;float:left;">
									<img src="images/delete1.png" style="width: 12px;height: 12px">
								</div>
								<div style="float:left;padding-left: 5px">
									<span id="pwd2_l" style="color: red;">*</span>
								</div>
								<div id="pwd2_v" style="color:red">
									<s:fielderror fieldName="repassword" />
								</div>
							</div>
						</td>
					</tr>

					<tr>
						<td colspan="3" style="text-align: left;">
						<input type="button" value="提交" class="bind_btn" id="submit_btn" onclick="check()"/>
						 <a href="user/userList" class="bbtn"><cite>取消</cite> </a></td>
					</tr>
				</table>
			</form>
		</div>
	</div>
</body>
</html>
