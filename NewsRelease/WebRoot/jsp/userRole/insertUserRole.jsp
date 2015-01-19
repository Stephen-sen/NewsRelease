<%@ page language="java" import="java.util.*" pageEncoding="UTF-8"%>

<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN">
<html>
<head>
<%@ include file="/common/headers.jsp"%>
</head>

<style type="text/css">
table tr td {
	text-align: left;
}
</style>

<script type="text/javascript">
  $(document).ready(function() {
    initBigClass();
  })

  function initBigClass() {
    $('#bigClass').append("<option value=\"\">--请选择--</option>");
    $.ajax({
        cache : false,
        type : 'post',
        async : false,
        url : 'userRole/findRoleList',
        dataType : 'json',
        error : function(XMLHttpRequest, textStatus, errorThrown) {
          alert(XMLHttpRequest.status);
        },
        success : function(data) {
          $(data).each(function(i, item) {
            $('#roleNameId').append("<option value='" + item.id + "'>" + item.roleName + "</option>");
          });
        },
        complete : function(XMLHttpRequest, textStatus) {
        }
    });
  }
</script>


<body style="text-align: center;">
	<div id="update-body">
		<div class="main_left">
			<div class="main_left_top"></div>
			<div class="main_left_bottom">

				<form action="userRole/insertUserRole" method="post">
					<s:hidden name="user.id" />
					<table class="table" style="text-align: right;">
						<tr>
							<th><span class="txta">*</span> 用户名称：</th>
							<td><s:textfield name="user.userName" />
							</td>
						</tr>
						<tr>
							<th><span class="txta">*</span> 角色类型：</th>
							<td><select id="roleNameId" name="role.id">
							</select>
							</td>
						</tr>
						<tr>
							<td colspan="3" align="right"><input type="submit"
								value="提交" class="bind_btn" id="submit_btn" /> <a
								href="role/findUser?user.id=<s:property value="id"/>"
								class="bbtn"><cite>取消</cite> </a>
							</td>
						</tr>
					</table>
				</form>

			</div>
		</div>

	</div>


</body>
</html>
