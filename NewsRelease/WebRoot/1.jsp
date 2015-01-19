<%@ page language="java" import="java.util.*" pageEncoding="UTF-8"%>

<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN">
<html>
 <%@ include file="/common/header.jsp" %>

<script type="text/javascript">
function regist(){
	window.location("www.baidu.com");
}
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
          <a href="http://news.sohu.com/s2014/jilongpofeiji/" target="_blank">坠毁？<br>我们依然等你回家</a>
         </p>
        </div>
        
       </div>
      </div>
     </div>
     <div class="btns">
      <a class="up uN" href="javascript:void(0)"></a><a class="down" href="javascript:void(0)"></a>
     </div>
     
    </div>
    
    <div class="Llogin">
     <table align="center">
   <tr style="border: 5px solid;border-color: white;">
    <td>用户名</td>
    <td><s:textfield name="user.userName" id="userName" />
    </td>
   </tr>
   <tr style="border: 5px solid;border-color: white;">
    <td>密码</td>
    <td><s:password name="user.password" id="password" />
    </td>
   </tr>
   <tr>
   <td></td>
   <td colspan="2"><s:submit value="登录" style="cursor: pointer"/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
   <button onclick="javascript:window.location.href='jsp/Regist.jsp'" style="cursor: pointer">注册</button></td>
   </tr>
  </table>
     </div>
     
     <div class="Rlogin">
     <a href="">忘记密码？</a>
     </div>
    
    </div>
   </div>
  </div>
  <div class="nav-bg" style="">
   <div class="area" id="nav">
    <div class="left">
     <ul>
      <li class="first"><a href="http://news.sohu.com/scroll/" target="_blank">新闻首页</a>
      </li>
      <li><a href="http://pinglun.sohu.com/" target="_blank">校园纵横</a>
      </li>
      <li><a href="http://news.sohu.com/special.shtml" target="_blank">学习天地</a>
      </li>
      <li><a href="http://news.sohu.com/dianjijinri/" target="_blank">校内公告</a>
      </li>
      <li><a href="http://news.sohu.com/matrix/" target="_blank">科技创新</a>
      </li>
      <li><a href="http://news.sohu.com/newsmaker_list/" target="_blank">资源共享</a>
      </li>
      <li><a href="http://news.sohu.com/xinwendakao/" target="_blank">文艺副刊</a>
      </li>
      <li><a href="http://star.news.sohu.com/" target="_blank">留言板</a>
      </li>
      <li class="new-back"><a href="javascript:void(0)">新闻回顾<em class="cor-b-h"></em>
      </a>
       <div style="display: none;" id="data_wrapper"></div>
      </li>
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
        <a href="http://pic.news.sohu.com/group-549291.shtml" target="_blank"><img alt="" src="images/ship.jpg" width="340" height="235" filter="1">
        </a>
       </div>
       <div class="txt-bg"></div>
       <div class="txt-txt">
        <span class="cor"></span><a href="http://pic.news.sohu.com/group-549291.shtml" target="_blank"><span class="focus-icon"></span>智利地震引发海啸
         船被掀上岸</a>
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
        <li class="end now">图片排行</li>
       </ul>
      </div>
      <div class="sn-list" style="display: none;">
       <ul>
        <li><span class="num">1441645</span><span class="sn col">01</span><a href="http://news.sohu.com/20140401/n397532314.shtml" target="_blank">江苏警方在全省实施武装巡逻 人手一枪枪弹...</a>
        </li>
        <li><span class="num">1138640</span><span class="sn col">02</span><a href="http://news.sohu.com/20140401/n397542916.shtml" target="_blank">张安乐召2000人进“立法院” 500警...</a>
        </li>
        <li><span class="num">881848</span><span class="sn col">03</span><a href="http://news.sohu.com/20140401/n397538610.shtml" target="_blank">南都娱乐：马伊琍发短信感谢我们挽救了家庭</a>
        </li>
        <li><span class="num">753219</span><span class="sn">04</span><a href="http://news.sohu.com/20140401/n397558901.shtml" target="_blank">习近平今在欧洲学院发表演讲</a>
        </li>
        <li><span class="num">624580</span><span class="sn">05</span><a href="http://news.sohu.com/20140401/n397525508.shtml" target="_blank">公安依法处理利用邪教活动扰乱社会秩序人员</a>
        </li>

       </ul>
      </div>
      <div class="sn-list hidden" style="display: none;">
       <ul>
        <li><span class="num">4043</span><span class="sn col">01</span><a href="http://news.sohu.com/20140402/n397592713.shtml" target="_blank">揭秘文章马伊琍“三步对策” 丈人出面炮?...</a>
        </li>
        <li><span class="num">3419</span><span class="sn col">02</span><a href="http://news.sohu.com/20140402/n397636028.shtml" target="_blank">马云挺文章：他犯了一个基本所有男人都会...</a>
        </li>
        <li><span class="num">1841</span><span class="sn col">03</span><a href="http://news.sohu.com/20140402/n397625518.shtml" target="_blank">智利强震目前已造成2名女性死亡</a>
        </li>
        <li><span class="num">1577</span><span class="sn">04</span><a href="http://news.sohu.com/20140402/n397599282.shtml" target="_blank">揭秘跟拍文章姚笛团队：曾因偷拍章子怡被...</a>
        </li>
        <li><span class="num">1274</span><span class="sn">05</span><a href="http://news.sohu.com/20140402/n397631374.shtml" target="_blank">马云谈文章：人都会犯错，希望大家懂得宽容</a>
        </li>
       </ul>

      </div>
      <div class="sn-list hidden" style="display: block;">
       <ul>
        <li><span class="num">6165994</span><span class="sn col">01</span><a href="http://pic.news.sohu.com/group-548412.shtml" target="_blank">因一句抱怨 让座女孩遭暴打</a>
        </li>
        <li><span class="num">2377789</span><span class="sn col">02</span><a href="http://pic.news.sohu.com/group-548650.shtml" target="_blank">成都“阳台男孩”8小时被父打17次</a>
        </li>
        <li><span class="num">1605343</span><span class="sn col">03</span><a href="http://pic.news.sohu.com/group-548078.shtml" target="_blank">刘汉涉黑集团湖北受审</a>
        </li>
        <li><span class="num">1431607</span><span class="sn">04</span><a href="http://pic.news.sohu.com/group-548476.shtml" target="_blank">茂名一夜</a>
        </li>
        <li><span class="num">1033014</span><span class="sn">05</span><a href="http://pic.news.sohu.com/group-548717.shtml" target="_blank">广西民警涉嫌枪杀孕妇案二审开庭</a>
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
        <a title="" href="http://news.sohu.com/s2014/eu/" target="_blank">习近平访欧创五个“首次”</a> <a title="" href="http://news.sohu.com/20140402/n397629754.shtml" target="_blank">图解语录</a>
       </h1>
       <p>
        <a title="" href="http://news.sohu.com/20140401/n397580392.shtml" target="_blank">参观沃尔沃获赠汽车模型</a> <a href="http://news.sohu.com/20140402/n397652701.shtml" title="" target="_blank">新华网：何以在欧洲赢得“满堂彩”</a>
       </p>
       <p>
        <a title="" href="http://news.sohu.com/20140402/n397629837.shtml" target="_blank">李克强将出席博鳌年会</a> <a href="http://news.sohu.com/20140402/n397652796.shtml" title="" target="_blank" class="">要求加大搜寻MH370力度</a>| <a title="" href="http://news.sohu.com/20140402/n397655198.shtml" target="_blank" class="">加快铁路建设</a>
       </p>
      </div>

      <div class="news">
       <h1>
        <a title="" href="http://news.sohu.com/20140402/n397634645.shtml" target="_blank">起底刘汉黑道生涯：曾花1000万买仇人头</a>
       </h1>
       <p>
        <a title="" href="http://news.sohu.com/20140402/n397634547.shtml" target="_blank" class="">以“黑”起家丨一起吸食毒品拉拢政法干部</a> <a href="http://news.sohu.com/20140402/n397655988.shtml" title="" target="_blank">过年发1万元红包</a>
       </p>
       <p>
        <a title="" href="http://news.sohu.com/20140402/n397634645.shtml" target="_blank" class="">以“黑”护家丨雇4名退伍军人当保镖 24小时持枪贴身保护</a>
       </p>
      </div>

      <div class="news">
       <h1>
        <a title="" href="http://news.sohu.com/20140402/n397626973.shtml" target="_blank">智利发生8.2级地震 300女囚越狱</a> <a title="" href="http://tv.sohu.com/s2014/zlhx/" target="_blank" class="">现场</a><a title="" href="http://tv.sohu.com/s2014/zlhx/" target="_blank" class=""><img alt="Video" src="http://www.sohu.com/upload/images20130624/vd.png">
        </a>
       </h1>
       <p>
        <a title="" href="http://news.sohu.com/20140402/n397653523.shtml" target="_blank">已致6人死亡 海啸预警取消</a> <a title="" href="http://news.sohu.com/20140402/n397631264.shtml" target="_blank" class="">独家：震中最近城市1/4为华人血统 </a>
       </p>
      </div>

      <div class="news">
       <h1>
        <a title="" href="http://news.sohu.com/20140402/n397636028.shtml" target="_blank">马云挺文章：他犯了男人都会犯的错</a> <a href="http://news.survey.sohu.com/poll/show.php?poll_id=82152" title="" target="_blank">调查</a>
       </h1>
       <p>
        <a title="" href="http://news.sohu.com/20140402/n397648508.shtml" target="_blank" class="">网友大辩论：该不该放过文章</a> <a href="http://news.survey.sohu.com/poll/result.php?poll_id=82078" title="" target="_blank" class="">近半人希望其与马伊琍重归于好</a>
       </p>
      </div>
      <div class="line"></div>
      <div class="list14">
       <h3>
        <a title="" href="http://news.sohu.com/20140402/n397635370.shtml" target="_blank" class="">中移动香港套餐：54元1700分钟通话 不限流量</a>
       </h3>
       <ul>

        <li><a class="" title="" href="http://health.sohu.com/20140402/n397633178.shtml" target="_blank">陈竺等3名副国级高官承诺捐献器官</a>
        </li>
        <li><a class="" title="" href="http://news.sohu.com/20140402/n397607488.shtml" target="_blank">政协委员炮轰公积金：生病不能用 死后反可取</a>
        </li>
        <li><a class="" title="" href="http://news.sohu.com/20140402/n397653022.shtml" target="_blank">婴儿被扔下楼摔死 警方逐户排查寻凶(图)</a>
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
       <a href="http://news.sohu.com/s2014/dianji-1368/" target="_blank">军事法院如何“审老虎”</a>
      </h3>
      <div>
       <a href="http://news.sohu.com/s2014/dianji-1368/" target="_blank">
       <img alt="" src="images/img1.jpg" width="100" height="70">
       </a>
      </div>
      这个神秘的军中司法机关，究竟如何运转？<span class="blue">
      <a href="http://news.sohu.com/s2014/dianji-1368/" target="_blank">[详细]</a>
      </span>
     </div>

     <div class="pic-text hidden" style="display: none;">
      <h3>
       <a href="http://news.sohu.com/s2014/dianji-1367/" target="_blank">文章出轨成全民八卦狂欢</a>
      </h3>
      <div>
       <a href="http://news.sohu.com/s2014/dianji-1367" target="_blank">
       <img alt="" src="images/view.jpg" width="100" height="70">
       </a>
      </div>
      一个人真正的面目，是他隐藏起来的那一部分。<span class="blue">
      <a href="http://news.sohu.com/s2014/dianji-1367" target="_blank">[详细]</a>
      </span>
     </div>
     <div class="pic-text hidden" style="display: none;">

      <h3>
       <a href="http://news.sohu.com/s2014/dianji-1366/" target="_blank">刘汉受审意味着什么？</a>
      </h3>
      <div>
       <a href="http://news.sohu.com/s2014/dianji-1366/" target="_blank">
       <img alt="" src="images/people1.jpg" width="100" height="70">
       </a>
      </div>
      在刘汉的双面人生中，谁是他真正的保护伞？你懂的。<span class="blue">
      <a href="http://news.sohu.com/s2014/dianji-1366/" target="_blank">[详细]</a>
      </span>
     </div>
    </div>
    <div class="blockRB clear">
     <div class="title">
      <span><a href="http://news.sohu.com/matrix/" target="_blank">数字之道</a>
      </span><em class="r-m"><em class="add">+</em>
      <a href="http://news.sohu.com/matrix/" target="_blank">更多</a>
      </em>
     </div>
     <div class="pic-text">
      <h3>
       <a href="http://news.sohu.com/s2014/shuzi-250/" target="_blank">北京行政功能外移：比迁都省钱</a>
      </h3>
      <div>
       <a href="http://news.sohu.com/s2014/shuzi-250/" target="_blank">
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
       <li class="mg"><a title="" href="http://news.sohu.com/s2014/shuzi-249/" target="_blank">搜救MH370花费几何</a>
       </li>
       <li class="mg"><a title="" href="http://news.sohu.com/s2014/shuzi-248/" target="_blank">不拼爹落户北上广</a>
       </li>
       <li class="mg"><a title="" href="http://news.sohu.com/s2014/shuzi-247/" target="_blank">航空事故如何赔偿</a>
       </li>
       <li class="mg"><a title="" href="http://news.sohu.com/s2014/mahang/" target="_blank">失联航班全程时间轴</a>
       </li>

      </ul>
     </div>
    </div>
    <div class="blockRC clear">
     <div class="title">
      <span><a href="http://news.sohu.com/newsmaker_list/index.shtml" target="_blank">新闻当事人</a> </span>
      <em class="r-m"><em class="add">+</em>
      <a href="http://news.sohu.com/newsmaker_list/index.shtml" target="_blank">更多</a>
      </em>
     </div>
     <div class="pic-text">
      <h3>
       <a href="http://news.sohu.com/s2014/newsmaker-268/" target="_blank">戒毒所中的名流：吸毒已成另类社交</a>
      </h3>

      <div>
       <a href="http://news.sohu.com/s2014/newsmaker-268/" target="_blank"><img alt="" src="images/poison.jpg" width="100" height="70">
       </a>
      </div>

      <p class="blue">
       <a href="http://news.sohu.com/s2014/newsmaker-268/" target="_blank">戒毒医生方文见过太多李代沫这样的吸毒者：有人才华横溢，有人身家过亿…… </a>
      </p>
     </div>
     <div class="list12 list12-c2">
      <ul>
       <li><a title="" href="http://news.sohu.com/s2014/newsmaker267/" target="_blank" class="">消失的MH370机长</a></li>
       <li><a title="" href="http://news.sohu.com/s2014/newsmaker260/index.shtml" target="_blank" class="">东莞“扫黄”骤雨后</a></li>
       <li><a title="" href="http://news.sohu.com/s2014/newsmaker264/index.shtml" target="_blank" class="">利刃下的春城逝者</a></li>
       <li class="mg"><a title="" href="http://news.sohu.com/s2014/newsmaker253/index.shtml" target="_blank" class="">追忆故友贾大山</a></li>

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
  - <a href="http://corp.sohu.com/indexcn.shtml" target="_blank" rel="nofollow">个人博客</a>
   - <a href="http://roll.sohu.com/" target="_blank">黄河科技学院主页</a>
    <br>Copyright <span class="fontArial">©</span>
  2014 Sanmu.com Inc. All Rights Reserved. 三木公司 <span class="unline">
  <a href="http://corp.sohu.com/s2007/copyright/" target="_blank" rel="nofollow">版权所有</a>

 </div>

</body>
</html>