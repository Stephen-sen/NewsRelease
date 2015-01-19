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
            <th>大类新闻名称</th>
            <th>说明</th>
            <th>添加人</th>
            <th>添加时间</th>
            <th>操作</th>
          </tr>
        </thead>
        <tbody>
          <s:iterator value="#request.bigClassList" var="bigClass">
            <tr class="gradeA">
              <td><s:property value="typeName" /></td>
              <td><s:property value="info" /></td>
              <td><s:property value="user.userName" /></td>
              <td><s:property value="createDate" /></td>
              <td><a href="bigClass/deleteBigClass?newsBigClass.id=<s:property value="id"/>">删除</a>
               <a href="bigClass/findBigClass?newsBigClass.id=<s:property value="id"/>">修改</a> 
            </tr>
          </s:iterator>
        </tbody>
        <tfoot>
          <tr>
            <td style="color: blue;">当前系统中存在的大类新闻</td>
          </tr>
        </tfoot>
      </table>
    </div>
    <div class="spacer"></div>

  </div>
</body>
</html>
