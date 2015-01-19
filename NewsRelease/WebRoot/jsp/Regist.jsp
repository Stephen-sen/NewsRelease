<%@ page language="java" import="java.util.*" pageEncoding="UTF-8"%>
<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN">
<html>
<head>
<%@ include file="/common/header.jsp"%>
<script type="text/javascript">
/**
 * 处理注册信息
 */
  function myReload() {
    document.getElementById("createCheckCode").src = document.getElementById("createCheckCode").src + "?nocache=" + new Date().getTime();
  }

  function checkItem(name) {
    var checkValue = $("#" + name).val();
    if (checkValue != "") {
      $("#" + name+"_v").hide();
      //alert($("#" + name+"_v").val())
      if (name == "email") {
        $.ajax({
            cache : false,
            type : 'post',
            async : false,
            url : 'check',
            data : {
              "user.email" : checkValue
            },
            dataType : 'json',
            error : function(XMLHttpRequest, textStatus, errorThrown) {
              alert(XMLHttpRequest.status);
            },
            success : function(data) {
              $(data).each(function(i, item) {
                if (item.state == 0) {
                  $("#email_l").css("color", "red");
                  $("#error_email").show();
                  $("#right_email").hide();
                  $("#regist_btt").attr("disabled", true);
                } else {
                  $("#email_l").css("color", "#dbf77e");
                  $("#right_email").show();
                  $("#error_email").hide();
                  $("#regist_btt").attr("disabled", false);
                }
                $("#email_l").text(item.message);
              });

            }
        });
      }

      if (name == "nickName") {
        $.ajax({
            cache : false,
            type : 'post',
            async : false,
            url : 'check',
            data : {
              "user.nickName" : checkValue
            },
            dataType : 'json',
            error : function(XMLHttpRequest, textStatus, errorThrown) {
              alert(XMLHttpRequest.status);
            },
            success : function(data) {
              $(data).each(function(i, item) {
                if (item.state == 0) {
                  $("#nickName_l").css("color", "red");
                  $("#error_nickName").show();
                  $("#right_nickName").hide();
                  $("#regist_btt").attr("disabled", true);
                } else {
                  $("#nickName_l").css("color", "#dbf77e");
                  $("#right_nickName").show();
                  $("#error_nickName").hide();
                  $("#regist_btt").attr("disabled", false);
                }
                $("#nickName_l").text(item.message);
              });
            }
        });
      }

    }
    
    else{
      $("#"+name+"_l").css("color", "red");
      $("#right_"+name).hide();
      $("#"+name+"_l").text("*");
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
    }
    else{
      
      if((pwd1 != "") || (pwd2 != "")){
        $("#pwd1_l").hide();
        $("#right_pwd1").show();
        $("#error_pwd1").hide();
        
        $("#pwd2_l").hide();
        $("#right_pwd2").show();
      }
      
    }
  }
  
  function checksubmit(){
	  
	  if ($("#verify").val() == "" || $("#verify").val() == null) {
	      alert("请输入验证码！");
	      return false;
	    }
	  
	  if($("#verify").val() != "" ){
	    	 $.ajax({
	             cache : false,
	             type : 'post',
	             async : false,
	             url: 'checkVerify',
	             data : {
	                 "user.verify" : $("#verify").val()
	               },
	             dataType: 'json',
	             error: function(XMLHttpRequest, textStatus, errorThrown){
	                 alert(XMLHttpRequest.status);
	             },
	             success : function(data) {
	               $(data).each(function(i, item) {
	                     if(item.state != 1){
	                    	 alert("验证码输入错误！");
	                    	 return false;
	                     }
	                     $("#form1").submit();
	                 });
	             },
	             complete: function(XMLHttpRequest, textStatus){
	             }
	         });
	    }
  }
</script>
</head>

<body style="background-image: url(images/zgf.jpg);background-size:100% 100%;">
  <form action="register" method="post" id="form1">
    <center>
      <div class="Regist_C">
        <table>
          <tr>
            <td class="first_td">邮箱</td>
            <td><input type="text" id="email" name="user.email" onblur="javascritp:checkItem('email');">
            </td>
            <td class="last_td">
              <div>
                <div id="right_email" style="display: none;float:left;">
                  <img src="images/duihao.png" style="width: 12px;height: 12px">
                </div>
                <div id="error_email" style="display: none;float:left;">
                  <img src="images/delete1.png" style="width: 12px;height: 12px">
                </div>
                <div style="float:left;padding-left: 5px">
                  <span id="email_l" style="color: red;">*</span>
                </div>
                <div id="email_v" style="color:red">
                <s:fielderror fieldName="user.email"/>
                </div>
              </div></td>

          </tr>
          <tr>
            <td>昵称</td>
            <td><input type="text" id="nickName" name="user.nickName" onblur="javascritp:checkItem('nickName');"></td>
            <td>
              <div>
                <div id="right_nickName" style="display: none;float:left;">
                  <img src="images/duihao.png" style="width: 12px;height: 12px">
                </div>
                <div id="error_nickName" style="display: none;float:left;">
                  <img src="images/delete1.png" style="width: 12px;height: 12px">
                </div>
                <div style="float:left;padding-left: 5px">
                  <span id="nickName_l" style="color: red;">*</span>
                </div>
                <div id="nickName_v" style="color:red">
                <s:fielderror fieldName="user.nickName"/>
                </div>
              </div></td>
          </tr>
          <tr>
            <td>密码</td>
            <td><input type="passWord" id="pwd1" name="user.passWord" onblur="javascritp:show('pwd1');"></td>
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
                <s:fielderror fieldName="user.passWord"/>
                </div>
              </div></td>
          </tr>
          <tr>
            <td>确认密码</td>
            <td><input type="password" id="pwd2" name="user.qrmm" onblur="javascritp:checkPwd();"></td>
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
                <s:fielderror fieldName="repassword"/>
                </div>
              </div></td>
          </tr>
          <tr>
            <td>验证码</td>
            <td><input type="text" id="verify" name="verify" style="width: 70px;margin-top: -35px">
             <img src="PictureCheckCode" id="createCheckCode">
             </td>
            <td><a onclick="myReload()" style="text-decoration: none;">看不清楚？换一个</a></td>
          </tr>
          <tr>
            <td colspan="3" style="padding-left: 20%">
            <input id="regist_btt" type="submit" value="马上注册" onclick="checksubmit()" style="background-color: #e3f736; height: 30px">
            </td>
          </tr>
        </table>
      </div>
    </center>
  </form>
</body>
</html>
