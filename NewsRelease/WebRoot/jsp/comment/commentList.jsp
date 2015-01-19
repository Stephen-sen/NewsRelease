<%@ page language="java" import="java.util.*" pageEncoding="UTF-8"%>

<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN">
<html>
<head>
<%@ include file="/common/headers.jsp"%>
</head>

<body id="dt_example">
  <div id="container">
    <div id="demo">
      <table cellpadding="0" cellspacing="0" border="0" class="display" id="example">
        <thead>
          <tr>
            <th>新闻名称</th>
            <th>评论内容</th>
            <th>评论时间</th>
            <th>评论人</th>
            <th>操作</th>
          </tr>
        </thead>
        <tbody>
          <s:iterator value="#request.commentList" var="comment">
            <tr class="gradeA">
              <td><s:property value="news.title" /></td>
              <td>${context}</td>
              <td><s:property value="dateTime" /></td>
              <td><s:property value="user.userName" /></td>
              <td><a href="comment/deleteComment?comment.id=<s:property value="id"/>">删除</a>
               <a href="comment/findComment?comment.id=<s:property value="id"/>">修改</a> 
               <a href="comment/commentDetail?comment.id=<s:property value="id"/>">详细</a></td>
            </tr>
          </s:iterator>
        </tbody>
        <tfoot>
          <tr>
            <td style="color: blue;">系统中的新闻评论内容</td>
          </tr>
        </tfoot>
      </table>
    </div>
    <div class="spacer"></div>

  </div>
</body>
</html>
