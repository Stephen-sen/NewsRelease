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
            <th>用户姓名</th>
            <th>对应角色</th>
            <th>操作</th>
          </tr>
        </thead>
        <tbody>
          <s:iterator value="#request.userRoleList" var="userRole">
            <tr class="gradeA">
              <td><s:property value="user.userName" /></td>
              <td><s:property value="role.name" /></td>
              <td><a href="userRole/deleteUserRole?userRole.id=<s:property value="id"/>">删除</a>
               <a href="userRole/findUserRole?userRole.id=<s:property value="id"/>">修改</a> 
            </tr>
          </s:iterator>
        </tbody>
        <tfoot>
          <tr>
            <td style="color: blue;">当前系统中的角色</td>
          </tr>
        </tfoot>
      </table>
    </div>
    <div class="spacer"></div>

  </div>
</body>
</html>
