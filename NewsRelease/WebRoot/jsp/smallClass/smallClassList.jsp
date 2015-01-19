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
            <th>小类新闻名称</th>
            <th>所属大类</th>
            <th>说明</th>
            <th>添加人</th>
            <th>操作</th>
          </tr>
        </thead>
        <tbody>
          <s:iterator value="#request.smallClassList" var="smallClass">
            <tr class="gradeA">
              <td><s:property value="typeName" /></td>
              <td><s:property value="bigClassType.typeName" /></td>
              <td><s:property value="info" /></td>
              <td><s:property value="user.userName" /></td>
              <td><a href="smallClass/deleteSmallClass?newsSmallClass.id=<s:property value="id"/>">删除</a>
               <a href="smallClass/findSmallClass?newsSmallClass.id=<s:property value="id"/>">修改</a> 
            </tr>
          </s:iterator>
        </tbody>
        <tfoot>
          <tr>
            <td style="color: blue;">当前系统中存在的小类新闻</td>
          </tr>
        </tfoot>
      </table>
    </div>
    <div class="spacer"></div>

  </div>
</body>
</html>
