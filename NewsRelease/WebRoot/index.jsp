<%@ page language="java" import="java.util.*" pageEncoding="UTF-8"%>

<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN">
<html>
 <%@ include file="/common/header.jsp" %>

<script type="text/javascript">
$(document).ready(function() {
	var val = "${RegistMess}";
	if(val != null && val != ""){
		alert(val);
	}
	window.location.href ="news/showTitle";
} );

</script>

<body>
</body>
</html>