<%@ page language="java" import="java.util.*" pageEncoding="UTF-8"%>

<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN">
<html>
 <%@ include file="/common/header.jsp" %>

<script type="text/javascript">
/**
 * 用户登录、注销信息处理
 */
function userLogin(){
    $.ajax({
        cache : false,
        type : 'post',
        async : false,
        url: 'userLogin',
        data : {
			"user.passWord" :  $("#passWord").val(),
			"user.nickName" : $("#nickName").val()
		},
        dataType: 'json',
        error: function(XMLHttpRequest, textStatus, errorThrown){
            alert(XMLHttpRequest.status);
        },
        success : function(data) {
          $(data).each(function(i, item) {
        	  if (item.state == 1) {
        		  alert("用户名或密码错误，请重新输入！")
        		  $("#submit_btn").attr("disabled", true);
        	  }else{
        		  location.reload();
        	  }
            });
        },
        complete: function(XMLHttpRequest, textStatus){
        }
    });
}

function destroyLogin(){
  $.ajax({
      cache : false,
      type : 'post',
      async : false,
      url: 'destroyLogin',
      dataType: 'json',
      error: function(XMLHttpRequest, textStatus, errorThrown){
          alert(XMLHttpRequest.status);
      },
      success : function(data) {
        $(data).each(function(i, item) {
          location.reload();
          });
      },
      complete: function(XMLHttpRequest, textStatus){
      }
  });
}

function butt_enable(){
	$("#submit_btn").attr("disabled", false);
}

function flush(){
	history.go(0);
}

$(document).ready(function(){
	if(${userMess !=null}){
		$("#login_div").hide();
		$("#user_Mess").show();
	}else{
		$("#login_div").show();
		$("#user_Mess").hide();
	}
	
	 if(${userMess !=null}){
	     $("#commens").show();
	     $("#comm_li").show();
	   }
	   else{
	     $("#commens").hide();
	     $("#comm_li").hide();
	   }
})
</script>
<style>

#logo-frag .today-new .txt h4 {
 height: 15px;
 clear: both
}

.news h1.cur a,#contentA .left .r .list14 h3.cur a {
 color: #fff;
 background: #7eb6e4
}

#nav .left .new-back {
 z-index: 200
}

.ad-list {
 padding: 10px 0 2px;
}

.ad-list .adC {
 width: 980px;
 margin: 0 auto 2px
}

.ad-list .list ul {
 padding: 0 10px;
}

.ad-list .list ul li {
 width: 122px
}

.left-pub .pic-text {
 height: 70px
}
</style>

<body>
 
 <div class="cont-bg">

  <div id="logo-frag" class="area">
   <div class="left">
    <div class="logo">
     <a href="http://localhost:8080/NewsRelease/my.html" target="_blank">
     <img src="images/news_logo0.jpg" width="112" height="48" alt="校园新闻" filter="1">
     </a>
    </div>
   </div>
    <div class="news">
          今日重磅
   </div>
   <div class="right">
   
    <div class="today-new l" id="today-new">
     <div class="cons">
      <div class="con">
       <div class="pic-txt clear">
        <div class="pic">
         <a href="http://news.sohu.com/s2014/jilongpofeiji/" target="_blank">
         <img alt="" src="images/plane.jpg" width="56" height="56">
         </a>
        </div>
        <div class="txt">
         <p>
          <a href="" target="_blank">坠毁？<br>我们依然等你回家</a>
         </p>
        </div>
        
       </div>
      </div>
     </div>
     <div class="btns">
      <a class="up uN" href="javascript:void(0)"></a><a class="down" href="javascript:void(0)"></a>
     </div>
     
    </div>
    
    <div class="Llogin" id="login_div">
     <table align="center">
   <tr style="border: 5px solid;border-color: white;">
    <td>用户名</td>
    <td><s:textfield name="user.nickName" id="nickName" onfocus="butt_enable()"/>
    </td>
   </tr>
   <tr style="border: 5px solid;border-color: white;">
    <td>密码</td>
    <td><s:password name="user.passWord" id="passWord" onfocus="butt_enable()"/>
    </td>
   </tr>
   <tr>
   <td></td>
   <td colspan="2"> <button id="submit_btn" onclick="javascript:userLogin()" style="cursor: pointer">登录</button>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
   <button onclick="javascript:window.location.href='jsp/Regist.jsp'" style="cursor: pointer">注册</button></td>
   </tr>
  </table>
   <div class="Rlogin">
     <a href="">忘记密码？</a>
     </div>
     </div>
     
     <div class="Llogin" id="user_Mess" style="display: none;">
   <tr style="border: 5px solid;">
   <td><img src="${userMess.headImg}" style="height: 80px;width: 70px"></td>
   <td>欢迎你：${userMess.nickName}</td>
   <td><a onclick="javascript:destroyLogin()"
    href="news/showTitle" target=_top>退出登录</a></td>
   </tr>
  </table>
     </div>
     
    </div>
   </div>
  </div>
  <div class="nav-bg" style="">
   <div class="area" id="nav">
    <div class="left">
     <ul>
      <li class="first"><a onclick="flush()">新闻首页</a>
      </li>
      <div style="display: none" id="comm_li">
      <li><a href="jsp/mBoard/insertMBoard.jsp" target="_blank">留言板</a>
      </li>
      </div>
     </ul>
    </div>
    <div class="center">
     <div class="sreach">
      <form name="sogousearch" action="http://news.sogou.com/news" target="_blank">
       <input name="query" type="text" id="topSearch" value="谷俊山">
       <input type="submit" value="" class="submit-btn" title="提交" name="">
      </form>
     </div>
     
    </div>
     <div class="right">
     <a href="jsp/Login.jsp">管理员入口</a>
     </div>
   </div>
  </div>

  <div id="contentA" class="area public">
   <div class="left">
    <div class="l">
     <div class="focus clear" id="focus">
      <div class="focus-now">
       <div class="pic">
        <a href="news/showNews?news.id=<s:property value="#request.lLNewsTW[0].id" />" target="_blank"><img alt="" src="<s:property value="#request.lLNewsTW[0].newImg" />" width="340" height="235" filter="1">
        </a>
       </div>
       <div class="txt-bg"></div>
       <div class="txt-txt">
        <span class="cor"></span><a href="news/showNews?news.id=<s:property value="#request.lLNewsTW[0].id" />" target="_blank"><span class="focus-icon"></span>
         <s:property value="#request.lLNewsTW[0].title" /></a>
       </div>
      </div>
      <div class="focus-list">
       <div class="box clear">
        <div class="pic">
         <a href="http://pic.news.sohu.com/group-549207.shtml" target="_blank"><img alt="" src="images/money.jpg" width="340" height="235" filter="1">
         </a>
        </div>
        <div class="txt-bg"></div>
        <div class="txt-txt">
         <span class="cor"></span><a href="http://pic.news.sohu.com/group-549207.shtml" target="_blank"><span class="focus-icon"></span>新闻午报：商家印600元“人民币”做代金券</a>
        </div>
       </div>
       <div class="box end clear">
        <div class="pic">
         <a href="http://pic.news.sohu.com/group-548890.shtml" target="_blank"><img alt="" src="images/people.jpg" width="340" height="235" filter="1">
         </a>
        </div>
        <div class="txt-bg"></div>
        <div class="txt-txt">
         <span class="cor"></span><a href="http://pic.news.sohu.com/group-548890.shtml" target="_blank"><span class="focus-icon"></span>贱名一个死磕到底
          “神风”申遗需伴神风</a>
        </div>
       </div>
      </div>
     </div>


     <div class="blockLC clar" id="menu-c">
      <div class="menuA">
       <ul>
        <li class="">热度排行</li>
        <li class="">评论排行</li>
       </ul>
      </div>
      <div class="sn-list" style="display: none;">
       <ul>
        <li><span class="num"><s:property value="#request.lLNewsR[0].readTimes" /></span><span class="sn col">01</span><a href="news/showNews?news.id=<s:property value="#request.lLNewsR[0].id" />" target="_blank"><s:property value="#request.lLNewsR[0].title" /></a>
        </li>
        <li><span class="num"><s:property value="#request.lLNewsR[1].readTimes" /></span><span class="sn col">02</span><a href="news/showNews?news.id=<s:property value="#request.lLNewsR[1].id" />" target="_blank"><s:property value="#request.lLNewsR[1].title" /></a>
        </li>
        <li><span class="num"><s:property value="#request.lLNewsR[2].readTimes" /></span><span class="sn col">03</span><a href="news/showNews?news.id=<s:property value="#request.lLNewsR[2].id" />" target="_blank"><s:property value="#request.lLNewsR[2].title" /></a>
        </li>
        <li><span class="num"><s:property value="#request.lLNewsR[3].readTimes" /></span><span class="sn">04</span><a href="news/showNews?news.id=<s:property value="#request.lLNewsR[3].id" />" target="_blank"><s:property value="#request.lLNewsR[3].title" /></a>
        </li>
        <li><span class="num"><s:property value="#request.lLNewsR[4].readTimes" /></span><span class="sn">05</span><a href="news/showNews?news.id=<s:property value="#request.lLNewsR[4].id" />" target="_blank"><s:property value="#request.lLNewsR[4].title" /></a>
        </li>

       </ul>
      </div>
      <div class="sn-list hidden" style="display: none;">
      <ul>
        <li><span class="num"><s:property value="#request.lLNewsP[0].readTimes" /></span><span class="sn col">01</span><a href="news/showNews?news.id=<s:property value="#request.lLNewsP[0].id" />" target="_blank"><s:property value="#request.lLNewsP[0].title" /></a>
        </li>
        <li><span class="num"><s:property value="#request.lLNewsP[1].readTimes" /></span><span class="sn col">02</span><a href="news/showNews?news.id=<s:property value="#request.lLNewsP[1].id" />" target="_blank"><s:property value="#request.lLNewsP[1].title" /></a>
        </li>
        <li><span class="num"><s:property value="#request.lLNewsP[2].readTimes" /></span><span class="sn col">03</span><a href="news/showNews?news.id=<s:property value="#request.lLNewsP[2].id" />" target="_blank"><s:property value="#request.lLNewsP[2].title" /></a>
        </li>
        <li><span class="num"><s:property value="#request.lLNewsP[3].readTimes" /></span><span class="sn">04</span><a href="news/showNews?news.id=<s:property value="#request.lLNewsP[3].id" />" target="_blank"><s:property value="#request.lLNewsP[3].title" /></a>
        </li>
        <li><span class="num"><s:property value="#request.lLNewsP[4].readTimes" /></span><span class="sn">05</span><a href="news/showNews?news.id=<s:property value="#request.lLNewsP[4].id" />" target="_blank"><s:property value="#request.lLNewsP[4].title" /></a>
        </li>

       </ul>
      </div>
      
     </div>

    </div>
    <div class="r">
     <div class="title">
      <span id="t1">要 闻</span>
      <em class="r-m"><a href="javascript:void(0);" class="change-icon">换一换</a>
      </em>
     </div>
     <div id="change-con">
      <div class="news">
       <h1>
        <a title="" href="news/showNews?news.id=<s:property value="#request.lRNews[0].id" />" target="_blank"><s:property value="#request.lRNews[0].title" /></a>
       </h1>
       <p>
        <a title="" href="news/showNews?news.id=<s:property value="#request.lRNews[1].id" />" target="_blank"><s:property value="#request.lRNews[1].title" /></a>
         <a href="news/showNews?news.id=<s:property value="#request.lRNews[2].id" />" title="" target="_blank"><s:property value="#request.lRNews[2].title" /></a>
       </p>
       <p>
        <a title="" href="news/showNews?news.id=<s:property value="#request.lRNews[3].id" />" target="_blank"><s:property value="#request.lRNews[3].title" /></a>
         <a href="news/showNews?news.id=<s:property value="#request.newsList4].id" />" title="" target="_blank" class=""><s:property value="#request.lRNews[4].title" /></a>
         | <a title="" href="news/showNews?news.id=<s:property value="#request.lRNews[5].id" />" target="_blank" class=""><s:property value="#request.lRNews[5].title" /></a>
       </p>
      </div>

      <div class="news">
       <h1>
        <a title="" href="news/showNews?news.id=<s:property value="#request.lRNews[6].id" />" target="_blank"><s:property value="#request.lRNews[6].title" /></a>
       </h1>
       <p>
        <a title="" href="news/showNews?news.id=<s:property value="#request.lRNews[7].id" />" target="_blank" class=""><s:property value="#request.lRNews[7].title" /></a>
         <a href="news/showNews?news.id=<s:property value="#request.lRNews[8].id" />" title="" target="_blank"><s:property value="#request.lRNews[8].title" /></a>
       </p>
       <p>
        <a title="" href="news/showNews?news.id=<s:property value="#request.lRNews[9].id" />" target="_blank" class=""><s:property value="#request.lRNews[9].title" /></a>
       </p>
      </div>

      <div class="news">
       <h1>
        <a title="" href="news/showNews?news.id=<s:property value="#request.lRNews[10].id" />" target="_blank"><s:property value="#request.lRNews[10].title" /></a>
        </a>
       </h1>
       <p>
        <a title="" href="news/showNews?news.id=<s:property value="#request.lRNews[11].id" />" target="_blank"><s:property value="#request.lRNews[11].title" /></a>
         <a title="" href="news/showNews?news.id=<s:property value="#request.lRNews[12].id" />" target="_blank" class=""><s:property value="#request.lRNews[12].title" /></a>
       </p>
      </div>

      <div class="news">
       <h1>
        <a title="" href="news/showNews?news.id=<s:property value="#request.lRNews[13].id" />" target="_blank"><s:property value="#request.lRNews[13].title" /></a>
       </h1>
       <p>
        <a title="" href="news/showNews?news.id=<s:property value="#request.lRNews[14].id" />" target="_blank" class=""><s:property value="#request.lRNews[14].title" /></a> 
        <a href="news/showNews?news.id=<s:property value="#request.lRNews[15].id" />" title="" target="_blank" class=""><s:property value="#request.lRNews[15].title" /></a>
       </p>
      </div>
      <div class="line"></div>
      <div class="list14">
       <h3>
        <a title="" href="news/showNews?news.id=<s:property value="#request.lRNews[16].id" />" target="_blank" class=""><s:property value="#request.lRNews[16].title" /></a>
       </h3>
       <ul>

        <li><a class="" title="" href="news/showNews?news.id=<s:property value="#request.lRNews[17].id" />" target="_blank"><s:property value="#request.lRNews[17].title" /></a>
        </li>
        <li><a class="" title="" href="news/showNews?news.id=<s:property value="#request.lRNews[18].id" />" target="_blank"><s:property value="#request.lRNews[18].title" /></a>
        </li>
        <li><a class="" title="" href="news/showNews?news.id=<s:property value="#request.lRNews[19].id" />" target="_blank"><s:property value="#request.lRNews[19].title" /></a>
        </li>
       </ul>
      </div>

     </div>
    </div>
   </div>
   <div class="right">
    <div class="blockRA clear" id="menu-e">
     <div class="menuC">
      <div class="title">
       <span><a href="http://news.sohu.com/dianjijinri/" target="_blank">点击今日</a>
       </span>
      </div>
      <div class="title-ad">
       <a href="" target="_blank">
       <img style="MARGIN-TOP: 5px" alt="" src="images/jiu.png" filter="1">
       </a>
      </div>
      <ul>
       <li class="now"></li>
       <li></li>
       <li class=""></li>
      </ul>
     </div>
     <div class="pic-text" style="display: block;">

      <h3>
       <a href="news/showNews?news.id=<s:property value="#request.rNewsRA[0].id"/> " target="_blank"><s:property value="#request.rNewsRA[0].title" /></a>
      </h3>
      <div>
       <a href="" target="_blank">
       <img alt="" src="<s:property value="#request.rNewsRA[0].newImg"/>" width="100" height="70">
       </a>
      </div>
      <s:property value="#request.rNewsRA[0].intro"/><span class="blue">
      <a href="news/showNews?news.id=<s:property value="#request.rNewsRA[0].id"/> " target="_blank">[详细]</a>
      </span>
     </div>

     <div class="pic-text hidden" style="display: none;">
      <h3>
       <a href="news/showNews?news.id=<s:property value="#request.rNewsRA[1].id"/> " target="_blank"><s:property value="#request.rNewsRA[1].title" /></a>
      </h3>
      <div>
       <a href="news/showNews?news.id=<s:property value="#request.rNewsRA[1].id"/> " target="_blank">
       <img alt="" src="<s:property value="#request.rNewsRA[1].newImg"/>" width="100" height="70">
       </a>
      </div>
      <s:property value="#request.rNewsRA[1].intro"/><span class="blue">
      <a href="" target="_blank">[详细]</a>
      </span>
     </div>
     <div class="pic-text hidden" style="display: none;">

      <h3>
       <a href="news/showNews?news.id=<s:property value="#request.rNewsRA[2].id"/> " target="_blank"><s:property value="#request.rNewsRA[2].title" /></a>
      </h3>
      <div>
       <a href="news/showNews?news.id=<s:property value="#request.rNewsRA[2].id"/> " target="_blank">
       <img alt="" src="<s:property value="#request.rNewsRA[2].newImg"/>" width="100" height="70">
       </a>
      </div>
     <s:property value="#request.rNewsRA[2].intro"/><span class="blue">
      <a href="news/showNews?news.id=<s:property value="#request.rNewsRA[2].id"/> " target="_blank">[详细]</a>
      </span>
     </div>
    </div>
    <div class="blockRB clear">
     <div class="title">
      <span><a href="" target="_blank">数字之道</a>
      </span><em class="r-m"><em class="add">+</em>
      <a href="" target="_blank">更多</a>
      </em>
     </div>
     <div class="pic-text">
      <h3>
       <a href="" target="_blank">北京行政功能外移：比迁都省钱</a>
      </h3>
      <div>
       <a href="" target="_blank">
       <img alt="" src="images/fat.jpg" width="100" height="70" filter="1">
       </a>
      </div>
      <p>
       北京的“肥胖”城市病日益突出，减负到底需要甩掉多少包袱…<span class="blue">
       <a href="http://news.sohu.com/s2014/shuzi-250/" target="_blank">[详细]</a>
       </span>
      </p>
     </div>
     <div class="list12 list12-c2">
      <ul>
       <li class="mg"><a title="" href="" target="_blank">搜救MH370花费几何</a>
       </li>
       <li class="mg"><a title="" href="" target="_blank">不拼爹落户北上广</a>
       </li>
       <li class="mg"><a title="" href="" target="_blank">航空事故如何赔偿</a>
       </li>
       <li class="mg"><a title="" href="" target="_blank">失联航班全程时间轴</a>
       </li>

      </ul>
     </div>
    </div>
    <div class="blockRC clear">
     <div class="title">
      <span><a href="" target="_blank">新闻当事人</a> </span>
      <em class="r-m"><em class="add">+</em>
      <a href="" target="_blank">更多</a>
      </em>
     </div>
     <div class="pic-text">
      <h3>
       <a href="" target="_blank">戒毒所中的名流：吸毒已成另类社交</a>
      </h3>

      <div>
       <a href="" target="_blank"><img alt="" src="images/poison.jpg" width="100" height="70">
       </a>
      </div>

      <p class="blue">
       <a href="" target="_blank">戒毒医生方文见过太多李代沫这样的吸毒者：有人才华横溢，有人身家过亿…… </a>
      </p>
     </div>
     <div class="list12 list12-c2">
      <ul>
       <li><a title="" href="" target="_blank" class="">消失的MH370机长</a></li>
       <li><a title="" href="" target="_blank" class="">东莞“扫黄”骤雨后</a></li>
       <li><a title="" href="" target="_blank" class="">利刃下的春城逝者</a></li>
       <li class="mg"><a title="" href="" target="_blank" class="">追忆故友贾大山</a></li>

      </ul>
     </div>
    </div>
   </div>

  </div>

 <div id="foot" class="Area area">
  <a href="javascript:void(0)" onclick="this.style.behavior='url(#default#homepage)';
  this.setHomePage('http://www.sohu.com');return" false;="">设置首页</a>
  - <a href="http://corp.sohu.com/s2006/contactus/" target="_blank" rel="nofollow">联系方式</a> - 
  <a href="http://www.sohu.com/about/privacy.html" target="_blank" rel="nofollow">保护隐私权</a>
  - <a href="" target="_blank" rel="nofollow">个人博客</a>
   - <a href="http://www.hhstu.edu.cn/" target="_blank">黄河科技学院主页</a>
    <br>Copyright <span class="fontArial">©</span>
  2014 Sanmu.com Inc. All Rights Reserved. 三木公司 <span class="unline">
  <a href="http://corp.sohu.com/s2007/copyright/" target="_blank" rel="nofollow">版权所有</a>

 </div>

</body>
</html>