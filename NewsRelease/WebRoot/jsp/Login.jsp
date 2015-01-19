<%@ page language="java" import="java.util.*" pageEncoding="UTF-8"%>
<%@ taglib uri="/struts-tags" prefix="s"%>
<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3c.org/TR/1999/REC-html401-19991224/loose.dtd">
<!-- saved from url=(0042)http://www.topve.com/work/2011/09/toplian/ -->
<HTML xmlns="http://www.w3.org/1999/xhtml">
<HEAD>
<TITLE>后台管理登录</TITLE>
<META content="text/html; charset=UTF-8" http-equiv=Content-Type>
<META name=keywords content=关键词>
<META name=description content=网站描述>
<META content=blendTrans(Duration=0.5) http-equiv=page-Enter>
<META content=blendTrans(Duration=0.5) http-equiv=page-Exit>
<LINK rel=stylesheet type=text/css href="../css/login.css">
<SCRIPT type=text/javascript src="../js/png.js"></SCRIPT>
<script type="text/javascript" src="../js/jquery-1.7.2.min.js"></script>

<SCRIPT language=JavaScript>
/**
 * 用户登录验证
 */
  function checksubmit() {
	  if ($("#verify").val() == "" || $("#verify").val() == null) {
	      alert("请输入验证码！");
	      return false;
	    }
	  if ($("#userName").val() == "") {
	      alert("用户名不能为空！");
	      return false;
	    }
    if ($("#passWord").val() == "" || $("#passWord").val() == null) {
      alert("密码不能为空！");
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

  function isHost(host) {

    var pattern = /^([a-zA-Z0-9]([a-zA-Z0-9\-]{0,61}[a-zA-Z0-9])?)$/;
    if (host.match(pattern) == null)
      return false;
    else
      return true;
  }
  $(document).ready(function() {
	  
    $("#VerifyCode").css("cursor", "pointer").click(function() {
      $(this).attr("src", "code.php?" + Math.random());
    });
  });

  function myReload() {
	 
    document.getElementById("createCheckCode").src = document.getElementById("createCheckCode").src + "?nocache=" + new Date().getTime();
  }
  
  
</SCRIPT>

<style>
a.hand:hover {cursor:hand}
</style> 

<META name=GENERATOR content="MSHTML 8.00.7600.16853">
</HEAD>
<BODY>
<input type="hidden" id="yzm1" >
  <DIV class=on_indext>
    <DIV class=on_index>
      <DIV class=box>
        <DIV class=box_logo>
          <IMG class=png title=NewsRelease管理登陆 src="../images/logo.png" width=460 height=40>
        </DIV>
        <DIV class=login>
          <FORM method="post" id="form1" action="LoginAction">
            <TABLE class=login-body border=0 cellSpacing=0 cellPadding=0 align=center>
              <TBODY>
                <TR>
                  <TD class=listt>用户名：</TD>
                  <TD align=left><INPUT class=inputbg tabIndex=1 maxLength=62 type="text" name="user.userName" id="userName"></TD>
                </TR>
                <TR>
                  <TD class=listt>密&nbsp;&nbsp;&nbsp;&nbsp;码：</TD>
                  <TD colSpan=2 align=left><INPUT class=inputbg2 tabIndex=1 maxLength=25 type="password" name="user.passWord" id="passWord">
                  </TD>
                </TR>
                <TR>
                  <TD class=listt>验证码：</TD>
                  <TD><INPUT class=inputbg tabIndex=1 maxLength=6 align=left type="text" id="verify" name="verify"></TD>
                  <TD><img src="PictureCheckCode" id="createCheckCode"></TD>
                </TR>
                <TR>
                  <TD colspan="3" style="text-align: right;"><a onclick="myReload()" href='#' class=hand>看不清楚？换一个</a></TD>
                  </TD>
                </TR>
                <TR>
                  <td colspan="3">&nbsp;&nbsp;&nbsp;&nbsp;<input type="button" onclick="checksubmit()" value="登录" style="cursor: pointer"/>
                  &nbsp;&nbsp;&nbsp;&nbsp;<s:reset value="重置" style="cursor: pointer"/>
                  </td>
                </TR>
                <tr><td colspan="2" style="text-align: right;color: red">${errorMess }</td></tr>
              </TBODY>
            </TABLE>
        </DIV>
        <!--login-->
      </DIV>
      <!--box-->
      <DIV class="boxbg png"></DIV>
      <DIV class="foot png">Copyright © 2014.02-2014.05 NewsRelease后台管理系统登录页 All rights reserved.</DIV>
    </DIV>
    <!--on_index-->
  </DIV>
  <SCRIPT type=text/javascript>
      pngHandler.init();
    </SCRIPT>
  </FORM>
</BODY>
</HTML>
