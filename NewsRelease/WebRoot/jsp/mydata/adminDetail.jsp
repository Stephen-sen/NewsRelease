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

#update-body .main_left_bottom table {
	text-align: right;
 border-collapse:collapse;
 width: 380px;
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

  $(document).ready(function() {
    $("input").attr("readOnly", true);
    $("select").prop("disabled", true);
    $("input[name='user.sex']").each(function() {
      $(this).attr("disabled", true);
    });

    $("#city").disabled = true;
  })
</script>

<body style="text-align: center;">
  <div id="update-body">
    <div class="main_left">
      <div class="main_left_top"></div>
      <div class="message">
      <p><h2>您的个人资料</h2>
      </div>
      <div class="main_left_bottom" style="padding-top: 0px">
          <input type="hidden" id="birthYear" value="${userInfo.birthYear}">
          <input type="hidden" id="birthMonth" value="${userInfo.birthMonth}">
          <input type="hidden" id="birthDay" value="${userInfo.birthDay}">
          <s:hidden name="user.id" />
          <table class="table" border="1">
            <tr>
              <th>昵称：</th>
              <td>${userInfo.nickName }</td>
            </tr>
            <tr>
              <th>真实姓名：</th>
              <td>${userInfo.userName }</td>
            </tr>
            <tr>
              <th>密码：</th>
              <td>${userInfo.passWord }</td>
            </tr>
            <tr>
              <th>性别：</th>
              <td><s:radio name="user.sex" list="%{#{'1':'男','0':'女'}}" value="#session.userInfo.sex" theme="simple"></s:radio></td>
            </tr>
            <tr>
              <th>出生日期：</th>
              <td>${userInfo.birthDate }</td>
            </tr>
            <tr>
              <th>所在地：</th>
              <td>${userInfo.address }</td>

            </tr>
            <tr>
              <th>邮箱：</th>
              <td>${userInfo.email }</td>
            </tr>
            <tr>
              <th>电话：</th>
              <td>${userInfo.tel }</td>
            </tr>
          </table>

      </div>
    </div>
    <div class="main_right">

      <img id="userImages" alt="修改头像" src="images/me.jpg">
      <p>个人形象</p>

    </div>

  </div>


</body>
</html>
