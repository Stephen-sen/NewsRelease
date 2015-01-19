<%@ page language="java" import="java.util.*" pageEncoding="UTF-8"%>

<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN">
<html>
<head>
<%@ include file="/common/head.jsp"%>
</head>

<body id="dt_example">
  <div id="container">
    <div id="demo">
      <table cellpadding="0" cellspacing="0" border="0" class="display" id="example">
        <thead>
        <tr><td style="text-align: left;"><a onclick="back()" class="bbtn"><cite>返回</cite> </a></td></tr>
        <tr><th colspan="3">我的留言</th></tr>
          <tr>
            <th>留言内容</th>
            <th>留言人</th>
            <th>留言日期</th>
          </tr>
        </thead>
        <tbody>
          <s:iterator value="#request.mBoardList" var="menu">
            <tr class="gradeA">
              <td><s:property value="messageContext" /></td>
              <td><s:property value="user.userName" /></td>
              <td><s:property value="dateTime" /></td>
            </tr>
          </s:iterator>
        </tbody>
        <tfoot>
          <tr>
            <td style="color: blue;">我的留言信息</td>
          </tr>
        </tfoot>
      </table>
    </div>
    <div class="spacer"></div>

  </div>
</body>
</html>
