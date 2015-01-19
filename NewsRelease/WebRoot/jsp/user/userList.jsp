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
            <th>姓名</th>
            <th>昵称</th>
            <th>性别</th>
            <th>出生日期</th>
            <th>邮箱</th>
            <th>电话</th>
            <th>住址</th>
            <th>操作</th>
          </tr>
        </thead>
        <tbody>
          <s:iterator value="#request.userList" var="user">
            <tr class="gradeA">
              <td><s:property value="userName" /></td>
              <td><s:property value="nickName" /></td>
              <td>
              <s:if test="#user.sex == 1 ">
                                                  男
              </s:if>
              <s:else>女</s:else>
              </td>
              <td><s:property value="birthDate" /></td>
              <td><s:property value="email" /></td>
              <td><s:property value="tel" /></td>
              <td><s:property value="address" /></td>
              <td><a onclick="if (confirm('确定要删除该用户吗？')) return true; else return false;"
              href="user/deleteUser?user.id=<s:property value="id"/>">删除</a>
               <a href="user/findUser?user.id=<s:property value="id"/>">修改</a> 
               <a href="userRole/findRole?user.id=<s:property value="id"/>">分配角色</a> 
               <a href="user/userDetail?user.id=<s:property value="id"/>">详细</a></td>
            </tr>
          </s:iterator>
        </tbody>
        <tfoot>
          <tr>
            <td style="color: blue;">当前系统中的用户</td>
          </tr>
        </tfoot>
      </table>
    </div>
    <div class="spacer"></div>

  </div>
</body>
</html>
