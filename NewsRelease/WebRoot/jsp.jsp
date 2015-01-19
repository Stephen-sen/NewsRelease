<%@ page language="java" import="java.util.*" pageEncoding="UTF-8"%>

<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN">
<html>
<head>
<%@ include file="/common/headers.jsp"%>
</head>
  <script type="text/javascript">
  $(function(){
	 $("tr").last().after("<tr><td><input type=‘button’ class = ‘del’ value=‘删除该行’/></td></tr>");
	  })
  </script>
  <body>
  <input type="button" value="添加一行" />
<table>
<tr><td><input type="button" class = "del" value="删除该行" /></td></tr>
</table>
  </body>
</html>
