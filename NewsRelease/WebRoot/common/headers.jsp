<%@ page language="java" import="java.util.*" pageEncoding="UTF-8"%>
<%@ taglib uri="/struts-tags" prefix="s"%>
<%@ taglib uri="../../js/c.tld" prefix="c" %>
<%
  String path = request.getContextPath();
			String basePath = request.getScheme() + "://"
					+ request.getServerName() + ":" + request.getServerPort()
					+ path + "/";
%>

<head>
<base href="<%=basePath%>">

<title>新闻发布后台管理</title>

<meta http-equiv="pragma" content="no-cache">
<meta http-equiv="cache-control" content="no-cache">
<meta http-equiv="expires" content="0">
<meta http-equiv="keywords" content="keyword1,keyword2,keyword3">
<meta http-equiv="description" content="This is my page">
<link type="text/css" rel="stylesheet" href="css/admin.css">
<link rel="stylesheet" href="css/textEdit.css" />
<link rel="stylesheet" type="text/css" href="css/uploadify.css">
<style type="text/css" title="currentStyle">
@import "css/demo_page.css";
@import "css/demo_table.css";
</style>

<SCRIPT type=text/javascript src="js/png.js"></SCRIPT>
<script type="text/javascript" src="js/jquery-1.7.2.min.js"></script>
<script type="text/javascript" src="js/jquery.validate.js"></script>
<script type="text/javascript" src="js/jquery.dataTables.js"></script>
<!--  -->
<script type="text/javascript" src="js/myDate.js"></script>
<script type="text/javascript" src="js/jquery.cityselect.js"></script>
<script charset="utf-8" src="js/kindeditor-min.js"></script>
<script charset="utf-8" src="js/zh_CN.js"></script>
<script type="text/javascript" src="js/jquery.uploadify.js"></script>
<script type="text/javascript" src="js/jquery.uploadify.min.js"></script>



<script type="text/javascript" charset="utf-8">

  var oTable;

  $(document).ready(function() {
	  if(${userInfo == null}){
		  window.top.location.href ="jsp/Login.jsp";
	  }
    /* Add a click handler to the rows - this could be used as a callback */
    $("#example tbody tr").click(function(e) {
      if ($(this).hasClass('row_selected')) {
        $(this).removeClass('row_selected');
      } else {
        oTable.$('tr.row_selected').removeClass('row_selected');
        $(this).addClass('row_selected');
      }
    });

    /* Add a click handler for the delete row */
    $('#delete').click(function() {
      var anSelected = fnGetSelected(oTable);
      if (anSelected.length !== 0) {
        oTable.fnDeleteRow(anSelected[0]);
      }
    });

    /* Init the table */
    oTable = $('#example').dataTable();
  });

  /* Get the rows which are currently selected */
  function fnGetSelected(oTableLocal) {
    return oTableLocal.$('tr.row_selected');
  }

  function getTimes() {
    var date = new Date();
    var times = date.toLocaleDateString();
    var hours = (date.getHours() < 10) ? "0" + date.getHours() : date.getHours();
    var minutes = (date.getMinutes() < 10) ? "0" + date.getMinutes() : date.getMinutes();
    var seconds = (date.getSeconds() < 10) ? "0" + date.getSeconds() : date.getSeconds();
    times += "  " + hours + ":" + minutes + ":" + seconds;

    document.getElementById("div_time").innerHTML = times;
    setTimeout(getTimes, 100);
  }
  function resize() {

    var x = document.body.clientHeight;
    var y = document.body.clientWidth;
    timeDiv = document.getElementById("div_time");
    timeDiv.style.left = y - 520 + "px";
    timeDiv.style.top = x - 30 + "px";
    setTimeout(resize, 100);
  }

  /**文本编辑器
   **/
  KindEditor.ready(function(K) {
    K.create('textarea[name="content"]', {
        autoHeightMode : true,
        afterCreate : function() {
          this.loadPlugin('autoheight');
        },
        afterBlur : function() {
          this.sync();
        }
    });
  });
</script>
</head>

