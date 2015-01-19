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
            <th>模块名称</th>
            <th>模块编号</th>
            <th>说明</th>
            <th>操作</th>
          </tr>
        </thead>
        <tbody>
          <s:iterator value="#request.modularList" var="modular">
            <tr class="gradeA">
              <td><s:property value="name" /></td>
              <td><s:property value="value" /></td>
              <td><s:property value="intro" /></td>
              <td><a href="modular/deleteModular?modular.id=<s:property value="id"/>">删除</a>
               <a href="modular/findModular?modular.id=<s:property value="id"/>">修改</a> 
            </tr>
          </s:iterator>
        </tbody>
        <tfoot>
          <tr>
            <td style="color: blue;">当前系统中的模块信息</td>
          </tr>
        </tfoot>
      </table>
    </div>
    <div class="spacer"></div>

  </div>
</body>
</html>
