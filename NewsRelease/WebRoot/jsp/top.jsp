<%@ page language="java" import="java.util.*" pageEncoding="UTF-8"%>

<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN">
<html>
<%@ include file="/common/headers.jsp"%>
<BODY onLoad="getTimes(),resize()">
<div id="div_time" style="position:absolute;font-size: 16px;color: white;"></div>
	<TABLE cellSpacing=0 cellPadding=0 width="100%"
		background="images/header_bg.jpg" border=0>
		<TR height=56>
			<TD width=260><IMG height=56 src="images/header_left.png"
				width=260></TD>
			<TD style="FONT-WEIGHT: bold; COLOR: #fff; PADDING-TOP: 20px"
				align=middle>当前用户：${userInfo.userName}(${userRoleMess.role.name}) &nbsp;&nbsp; <A style="COLOR: #fff"
				href="jsp/mydata/changeMyPwd.jsp" target=main>修改口令</A> &nbsp;&nbsp; <A style="COLOR: #fff"
				onclick="if (confirm('确定要退出吗？')) return true; else return false;"
				href="login/loginOut" target=_top>退出系统</A>
			</TD>
			<TD align=right width=268><IMG height=56
				src="images/header_right.png" width=268></TD>
		</TR>
	</TABLE>
	<TABLE cellSpacing=0 cellPadding=0 width="100%" border=0>
		<TR bgColor=#1c5db6 height=4>
			<TD></TD>
		</TR>
	</TABLE>
</BODY>
</HTML>

