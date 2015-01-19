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
            <th>标题</th>
            <th>类别</th>
            <th>来源</th>
            <th>创建人</th>
            <th>创建时间</th>
            <th>点击次数</th>
            <th>评论次数</th>
            <th>所属模块</th>
            <th>操作</th>
          </tr>
        </thead>
        <tbody>
          <s:iterator value="#request.newsList" var="news">
            <tr class="gradeA">
              <td><s:property value="title" /></td>
              <td><s:property value="type.typeName" /></td>
              <td><s:property value="source" /></td>
              <td><s:property value="user.userName" /></td>
              <td><s:property value="createDate" /></td>
              <td><s:property value="readTimes" /></td>
              <td><s:property value="commentTimes" /></td>
              <td><s:property value="modular.name" /></td>
              <td><a href="news/deleteNews?news.id=<s:property value="id"/>">删除</a>
               <a href="news/findNews?news.id=<s:property value="id"/>">修改</a> 
               <a href="news/newsDetail?news.id=<s:property value="id"/>">详细</a></td>
            </tr>
          </s:iterator>
        </tbody>
        <tfoot>
          <tr>
            <td style="color: blue;">系统中的新闻列表</td>
          </tr>
        </tfoot>
      </table>
    </div>
    <div class="spacer"></div>

  </div>
</body>
</html>
