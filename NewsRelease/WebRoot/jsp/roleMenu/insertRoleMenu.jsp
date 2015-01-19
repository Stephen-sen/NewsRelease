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
		initMenuList();
	})

	function initMenuList() {
		var ids = eval('${idjson}');
        $.each(ids, function(i, n){
            $("#_" + n.menuId).prop("checked", "true");
        });

		var menus = $("input[type='checkbox']");
		$("#allSelect").prop("checked", "true");
		for ( var i = 0; i < menus.length; i++) {
			if (!menus[i].checked) {
				$("#allSelect").removeAttr("checked");
				continue;
			}
		}
	}

	function checkAll(box) {
		if (box.checked) {
			$("input[type='checkbox']").prop("checked", "true");
		} else {
			$("input[type='checkbox']").removeAttr("checked");
		}
	}

	function checkSome(box, id) {
		if (box.checked) {
			$("input[name*='" + id + "']").each(function() {
				$(this).prop("checked", "true");
			});
		} else {
			$("input[name*='" + id + "']").each(function() {
				$(this).removeAttr("checked");
			});
		}
	}

	/**
	 * 功能：保存菜单
	 */
	function saveMenu() {
		var menus = $("input[type='checkbox']");
		var menuStr = "";
		for ( var i = 0; i < menus.length; i++) {
			if (menus[i].checked && menus[i].name != "") {
				menuStr += menus[i].value + ",";
			}
		}
		menuStr = menuStr.substring(0, menuStr.length - 1);
		$('#menuStrHid').val(menuStr);
		$('#form1').submit();
	}
</script>

<body style="text-align: center;">
	<div id="update-body" style="width: 800px;margin-left: 10px">
		<div class="main_left" style="width: 800px;height: 700px">
			<div class="main_left_top"></div>
			<div class="main_left_bottom">

				<table class="table" style="text-align: right;">
					<tr>
						<td></td>
						<td>设置菜单</td>
						<td></td>
						<td></td>
					</tr>
				</table>

				<form id="form1" action="roleMenu/insertRoleMenu" method="post">
					<s:hidden name="role.id" />
					<input type="hidden" id="menuStrHid" name="roleMenu.roleMenuStr" />
					<table border="1"class="table" style="text-align: right;">
						<tr>
							<td colspan="4"><font size=2 color="black"> <strong>角色信息</strong>&nbsp;&nbsp;&nbsp;</font>
							</td>
						</tr>
						<tr>
							<td><strong>角色名称</strong>
							</td>
							<td><s:property value="role.name" />
							</td>
							<td><strong>角色说明</strong>
							</td>
							<td><s:property value="role.discription" />
							</td>
						</tr>
						<tr>
							<td colspan="4"><font size=2 color="black"> <strong>
										<input id="allSelect" type="checkbox"
										onclick="javascript:checkAll(this);" />全选</strong>&nbsp;&nbsp;&nbsp; </font>
							</td>
						</tr>
						<s:iterator value="#request.menuList" var="menu">
							<s:if test="#menu.menuType== '01' && #menu.preId!= '-1'">
								<tr>
									<td><font size=2 color="black"><strong> <input
												type="checkbox" id="_${menu.id}" name="_${menu.id}"
												onclick="javascript:checkSome(this,'${menu.id}');"
												value="${menu.id }" />${menu.name} </strong> </font></td>

									<td colspan="3"><s:iterator value="#request.menuList"
											var="menus">
											<s:if test="#menus.preId == #menu.id">
												<input id="_${menus.id}" name="_${menu.id}_${menus.id}"
													onclick="javascript:checkSome(this,'${menus.id}');"
													type="checkbox" value="${menus.id}" />${menus.name}
						</s:if>
										</s:iterator></td>
								</tr>
							</s:if>
						</s:iterator>
						 <tr>
              <td colspan="4"><div style="margin-left: 120px;">
              <a href="javascript:saveMenu();" class="bbtn" onclick="javascritp:setValue()"><cite>添加</cite> </a>
               <a href="role/findRole?role.id=<s:property value="id"/>" class="bbtn"><cite>取消</cite> </a>
               </div>
               </td>
            </tr>
					</table>
				</form>
			</div>
		</div>
	</div>
</body>
</html>
