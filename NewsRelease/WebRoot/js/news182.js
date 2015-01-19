(function(){
	window.SOHU_NEWS_LX = {
		today_time : 9,
		candler_show : false, // 日历是否显示
		getHistory : function(day){ // 2013年10月10日 开始每天保存两次  在此之前为： http://news.sohu.com/20131002/homepage_n.shtml
			var thatTime = new Date(day),
				year = thatTime.getFullYear(),
				month = thatTime.getMonth()+1,
				day = thatTime.getDate();

			month = month > 9 ? month : "0"+month;
			day = day > 9 ? day : "0"+day;

			var dateNum = year+""+month+""+day-0;
			if(dateNum < 20131010){
				var url = "http://news.sohu.com/"+dateNum+"/homepage_n.shtml";
			}else{
				var url =  "http://news.sohu.com/"+year+""+month+""+day+"/homepage_"+window.SOHU_NEWS_LX.today_time+".shtml";
			}
			window.open(url);
		}
	};

	/*
	 对应碎片的地址 http://news.sohu.com/_scroll_newslist/20130929/[].inc
	 顺序为标签对应的mid
	 */
	var incArray = ["business","yule","sports","mil","auto","it","stock","fashion","learning","health"],
		tabFixing = false; // 是否已经展开定制面板，定制中标签将不可点击

	//判断设备
	function getMobileType(){
		var t="unknow";
		if( navigator.userAgent.match(/Android/i) ) { t = "android" }
		if( navigator.userAgent.match(/BlackBerry/i) ) { t = "blackberry" }
		if( navigator.userAgent.match(/iPhone|iPad|iPod/i) ) { t = "ios" }
		if( navigator.userAgent.match(/IEMobile/i) ) { t = "windowsPhone" }
		return t;
	}

	//如果是移动端，添加移动端样式
	function loadMobileStyle(){
		var t = getMobileType();
		if(t == "android" || t == "blackberry" || t == "ios" || t == "windowsPhone"){
			$("#mobile-css").attr("href","http://news.sohu.com/upload/2013/mobile_style.css")
		}
	}

	// 定制标签
	function tabCustom(){
		var $cusId = $("#customize .menuB"),
			$cusLayer = $cusId.find(".cus-layer"),
			$menuArr = $cusId.find("ul"),
			$tabArr = $cusId.find(".cus-layer dl"),
			$tabInput = $tabArr.find("dd input"),
			tArr = ["财经","娱乐","体育","军事","汽车","科技","股市","时尚","教育","健康"],
			num = 0, // 已经定制的标签数量
			eventAdd = false, // 事件是否已经添加，防止重复添加事件
			max = 4, // 最多有4个标签
			min = 1; // 最少1个标签

		$cusId.find(".more a").click(function(){  // 展开定制
			$cusId.addClass("menuB-cus");
			$cusLayer.show();
			if(!eventAdd){changeTabEvt();}
			$cusId.find(".tt").trigger("click");
			tabFixing = true;
		});
		$cusId.find(".shut a").click(function(){ // 关闭定制
			$cusId.removeClass("menuB-cus");
			$cusLayer.hide();
			closeTabEvt();
			tabFixing = false;
		});

		function changeTabEvt(){ // 打开定制面板后添加事件
			eventAdd = true;
			var $tabLi = $menuArr.find("li"),
				existId = [];
			$tabLi.each(function(i){
				existId.push(this.getAttribute("mid"));
			});
			num = existId.length;

			for(var i=0,l=existId.length;i<l;i++){
				changeTab(existId[i],l);
			}

			$tabInput.each(function(){
				if(!this.getAttribute("c")){
					this.checked = false;
				}
			});

			if(num >= max){
				disableRadio(true);
			}

			$tabInput.click(function(e){ // 多选按钮点击
				if(this.getAttribute("c") == "true"){ // 如果是选中状态
					if(num == 1){
						return;
					}
					this.checked = false;
					this.setAttribute("c","false");
					num -= 1;
					muneChange($(this).attr("mid"),false);
					if(num == 1){
						$tabInput.each(function(){
							if(this.getAttribute("c") == "true"){
								this.disabled = true;
							}
						});
					}
				}else{
					this.checked = true;
					this.setAttribute("c","true");
					num += 1;
					muneChange($(this).attr("mid"),true);
					if(num == 2){
						$tabInput.each(function(){
							if(this.getAttribute("c") == "true"){
								this.disabled = false;
							}
						});
					}
				}
				if(num >= max){
					disableRadio(true);
				}else{
					disableRadio(false);
				}
			});

			$tabLi.find(".del").live('click',function(){
				var mid = $(this).parent("li").attr("mid");
				if(num > 1){
					$tabArr.find("dd:eq("+mid+") input").trigger("click");
					$tabArr.find("dd:eq("+mid+") input")[0].checked = false;
				}
			});

		}


		function disableRadio(disable){ // true:禁用多选按钮 false:放开所有多选
			var $this = null;
			if(disable){
				$tabInput.each(function(i){
					if(this.getAttribute("c") !== "true"){
						this.disabled = true;
					}else{
						this.disabled = false;
					}
				});
			}else{
				$tabInput.each(function(){
					if(this.getAttribute("c") !== "true"){
						this.disabled = false;
					}
				});
			}
		}

		function changeTab(tabNum,l){ // 改变某个多选按钮为选中状态
			var $tab = $tabArr.find("dd:eq("+tabNum+") input");
			$tab[0].checked = true;
			$tab.attr("c","true");
			if(l == 1){ // 如果只有一个标签，禁用它
				$tab.disabled = true;
			}
		}

		function muneChange(id,add){ // true:添加  false:删除 标签
			if(add){
				var muneHtml = '<li mid="'+id+'">'+tArr[id]+'<span class="del"></span></li>';
				$menuArr.append(muneHtml);
			}else{
				$menuArr.find("li[mid='"+id+"']").remove();
			}
		}

		function closeTabEvt(){ // 关闭定制后，将用户设置放入cookie
			var $tagLi = $menuArr.find("li"),
				midArr = [];

			$tagLi.each(function(){
				midArr.push(this.getAttribute("mid"));
			});

			util.setCookie("userTab",midArr.toString(),365);

		}

		function setMenu(){ // 通过用户设置的cookie，设置menu的标签
			var cookie = util.getCookie("userTab"),
				tabHtml = "",
				suv = util.getCookie("SUV"),
				yyid = util.getCookie("YYID"),
				suv = suv ? suv : -1;
			yyid = yyid ? yyid : -1;
			if(!cookie){
				$.ajax({
					url:"http://ufav.news.sohu.com/?yyid="+yyid+"&suv="+suv,
					type:"GET",
					dataType:"jsonp",
					success:function(d){
						if(d && d.data && d.data.length){
							var arr = d.data;
							for(var i=0,l=arr.length;i<l;i++){
								var name = arr[i];
								cookie += tArr.indexOf(name)+",";
							};
							cookie = cookie.slice(0,-1);
							setMenuByCookie(cookie);
						}else{
							cookie = "0,1,2,3";
							setMenuByCookie(cookie);
						}
					}
				});
			}else{
				setMenuByCookie(cookie);
			}

			function setMenuByCookie(cookie){ // 通过“cookie”来设置menu
				var cookieArr = cookie.split(",");
				for(var i = 0,l = cookieArr.length;i < l;i++){
					var mid = cookieArr[i],
						name  = tArr[mid];

					tabHtml += "<li mid="+mid+">"+name+"<span class='del'></span></li>";
				}

				$menuArr.html(tabHtml);
				changeMenu();
			}

		}

		setMenu();

	}


	function changeMenu(){ // 闻首定制区域标签点击切换
		var customTab = $("#customize"),
			commentTab = customTab.find("div.tt"), // 评论tab默认为选中状态
			userTabs = $('.menuB').find("ul li"),
			nowTab = commentTab,
			incPlace = customTab.find(".list14"),
			incCache = {}; // 碎片缓存

		incCache.comm = incPlace.html();

		function clickEvt(){
			if(this.tagName.toLowerCape == "span" || tabFixing){
				return;
			}

			var $this = $(this),
				mid = 0;
			if($this.hasClass("now")){
				return;
			}else{
				$this.addClass("now");
				nowTab.removeClass("now");
				nowTab = $this;
				mid = $this.attr("mid") ? $this.attr("mid") : 99;
				getInc(mid);
			}
		}

		function getInc(mid){ // 取得对应碎片并绘制
			var incname = mid == 99 ? "comm" : incArray[mid],
				url = "http://news.sohu.com/_scroll_newslist/"+util.getDate()+"/"+incname+".inc",
				incHtml = "<ul>";


			if(incCache[incname]){ // 查看是否有缓存
				incPlace.html(incCache[incname]);
				return;
			}

			$.ajax({
				url : url,
				type : "GET",
				dataType : "json",
				success : function(data){
					//		var data = {data:[["汽车大脑谁更灵？5款大热中级车系统解析","http://auto.sohu.com/20131010/n387707512.shtml"],["帮您算账 五款15万元紧凑车用车成本详解","http://auto.sohu.com/20131010/n387669884.shtml"],["享受奔驰S级的豪华　拥有惊人配置家用车","http://auto.sohu.com/20131008/n387684458.shtml"],["用车省心 解析天籁/迈腾/索8/C5三包政策","http://auto.sohu.com/20131008/n387672537.shtml"],["理论PK实际 家用轿车/SUV真实油耗大调查","http://auto.sohu.com/20131008/n387677405.shtml"]]};
					var arr = data.data;
					for(var i = 0,l = arr.length;i < l;i++){
						var d = arr[i];
						incHtml += "<li><a target='_blank' href='"+d[1]+"'>"+d[0]+"</a></li>"
					};
					incHtml += "</ul>";
					incPlace.html(incHtml);
					incCache[incname] = incHtml;
				}
			});


		}

		commentTab.click(clickEvt);
		userTabs.live({
			click: clickEvt});

		/*commentTab.hover(clickEvt);
	userTabs.live({
			mouseenter: clickEvt
			,
			mouseleave:clickEvt});*/
	}

	/*
	 新闻回顾
	 页面上的占位div ：<div id="data_wrapper"></div>
	 initCalendar : 初始化日历调用日历插件 jCalendar

	 */
	function initCalendar(){
		$("#nav .new-back>a").bind('click', function () {
			var nowDate = new Date();
			var starYear = 2003;
			var nowYear = nowDate.getFullYear();
			var yearOptHTML = '';
			var monthHTML = '';

			if(window.SOHU_NEWS_LX.candler_show){
				$("#data_wrapper").hide().find("form").remove();
				window.SOHU_NEWS_LX.candler_show = false;
				return;
			}

			do{
				yearOptHTML += '<option value="'+starYear+'">'+starYear+'年</option>';
				starYear++;
			}while(starYear < (nowYear+1));

			var selectHTML = '<form>'+
				'<div id="jcalendar">'+
				'<div class="jcalendar-wrapper">'+
				'<div class="jcalendar-selects">'+
				'<select class="jcalendar-select-year" id="year" name="year">'+ yearOptHTML+'</select>'+
				'<select class="jcalendar-select-month" id="month" name="month">'+
				'<option value="1">1月</option>'+
				'<option value="2">2月</option>'+
				'<option value="3">3月</option>'+
				'<option value="4">4月</option>'+
				'<option value="5">5月</option>'+
				'<option value="6">6月</option>'+
				'<option value="7">7月</option>'+
				'<option value="8">8月</option>'+
				'<option value="9">9月</option>'+
				'<option value="10">10月</option>'+
				'<option value="11">11月</option>'+
				'<option value="12">12月</option>'+
				'</select>'+
				'</div>'+
				'</div>'+
				'</div>'+
				'</form>';
			$('#data_wrapper').html(selectHTML).show();
			$('#jcalendar').jcalendar();
			window.SOHU_NEWS_LX.candler_show = true;
			return false;
		});
		$('body').bind("click",function(e){
			var $target = $(e.target);
			if(!$target.closest("#jcalendar").length){
				$("#data_wrapper").hide().find("form").remove();
				window.SOHU_NEWS_LX.candler_show = false;
			}
		});
	}
	/*
	 新闻换一换功能
	 */

	function newsChange(){
		var date = {},
			Nyear = 0,
			Nmonth = 0,
			time = 0,
			Nday = 0,
			timeLine = [],
			nowHtml = "",
			$topChangeBtn = $("#contentA .r-m .change-icon");


		function getTimeLine(){
			date = new Date();
			Nyear = date.getFullYear();
			Nmonth = date.getMonth()+1;
			time = date.getHours();
			Nday = date.getDate();
			if(9<= time && time <15){
				timeLine = ["y22","y15","y9","now"];
			}else if(15<=time && time <22){
				timeLine = ["9","y22","y15","now"];
			}else if(22<=time && time<24){
				timeLine = ["15","9","y22","now"];
			}else if(time < 9){
				timeLine = ["y15","y9","y22","now"];
			}
		}
		function saveNowHtml(){ // 第一次点击“换一换”,保存当时的html
			nowHtml = $("#change-con").html();
		}
		function getNowHtml(){ // 获取保存的nowHtml
			return nowHtml;
		}
		function topNewsChange(){ // 要闻换一换
			var i = 0;
			var timeLine = [];
			var firstFrag = '';
			var newsUrls = {'9':'143746642/20347612_143746642_UTF8.inc','15':'143746642/20347660_143746642_UTF8.inc','22':'143746642/20347614_143746642_UTF8.inc'};
			var date = new Date();
			var hour = date.getHours();
			if(hour<=9 || hour>22){
				timeLine = [22,15,9];
			}else if(9<hour && hour<=15){
				timeLine = [9,22,15];
			}else{
				timeLine = [15,9,22];
			}
			$topChangeBtn.click(function(e){
				if(i == 0 && !firstFrag){
					firstFrag = $("#change-con").html();
				}else if(i == 3){
					$("#change-con").html(firstFrag);
					firstFrag = '';
					i=0;
					$topChangeBtn.css({'background':'url("http://news.sohu.com/upload/2013/images/n_unchangeable.gif") no-repeat','cursor':'default'});
					$topChangeBtn.unbind('click');
					return;
				}
				var time = timeLine[i];
				var url = newsUrls[time];
				$.ajax({
					url : 'http://news.sohu.com/frag/'+url,
					type : 'GET',
					success : function(d){
						$("#change-con").html(d);
						i++;
					}
				});
			});
/*			var i = 0;
			$topChangeBtn.click(function(e){
				if(!timeLine.length){
					getTimeLine();
				}
				if(!nowHtml){
					saveNowHtml();
				}
				var time = timeLine[i],
					year = 0,
					month = 0,
					day = 0,
					$this = $(e.target);
				if(time.substring(0,1) == "y"){
					time = time.substring(1);
					if(Nday > 1){
						day = Nday - 1;
						month = Nmonth;
						year = Nyear;
					}else{
						if(Nmonth > 1){
							month = Nmonth - 1;
							day = new Date(date.getFullYear(),date.getMonth()-1,0).getDate();
							year = Nyear;
						}else{
							day = 31;
							month = 12;
							year = Nyear - 1;
						}
					}
				}else if(time == "now"){
					$("#change-con").html(getNowHtml());
					i = 0;
					return;
				}else{
					day = Nday;
					month = Nmonth;
					year = Nyear;
				}
				day = day < 10 ? "0"+day : day;
				month = month < 10 ? "0"+month : month;
				year = year;
				var url = "http://news.sohu.com/"+year+""+month+""+day+"/frag/143746642/yaoWen_"+time+".inc";
				$.ajax({
					url:url,
					type:"GET",
					success:function(html){
						if(html){
							$("#change-con").html(html);
						}
						i < 3 ? i++ : i = 0;
					}
				})

			});*/
		};

		function normalChange(){
			var shiZheng = {'8':'20347603_143746642_UTF8.inc','12':'20347631_143746642_UTF8.inc','15':'20347655_143746642_UTF8.inc','22':'20347644_143746642_UTF8.inc'},
                minSheng = {'8':'20347618_143746642_UTF8.inc','12':'20347635_143746642_UTF8.inc','15':'20347613_143746642_UTF8.inc','22':'20347662_143746642_UTF8.inc'},
				tanZi = {'8':'20347634_143746642_UTF8.inc','12':'20347624_143746642_UTF8.inc','15':'20347649_143746642_UTF8.inc','22':'20347600_143746642_UTF8.inc'},
				chaoXian = {'8':'20347604_143746642_UTF8.inc','12':'20347626_143746642_UTF8.inc','15':'20347640_143746642_UTF8.inc','22':'20347616_143746642_UTF8.inc'},
				tianXia = {'8':'20347619_143746642_UTF8.inc','12':'20347661_143746642_UTF8.inc','15':'20347621_143746642_UTF8.inc','22':'20347658_143746642_UTF8.inc'},
				diFang = {'8':'20347642_143746642_UTF8.inc','12':'20347656_143746642_UTF8.inc','15':'20347633_143746642_UTF8.inc','22':'20347648_143746642_UTF8.inc'},
				timeLine = [],
				LocObg = {'shiZheng':shiZheng,'minSheng':minSheng,'tanZi':tanZi,'chaoXian':chaoXian,'tianXia':tianXia,'diFang':diFang},
				changeBtn = $("#contentB .left-pub .more a");

			changeBtn.each(function(){
				var $this = $(this),
					timeLine = [],
					firstFrag = '',
					i = 0,
					loc = $this.attr('loc'),
					urlList = LocObg[loc];

				$this.click(function(){
					var date = new Date(),
						time = date.getHours();
					if(8<time && time<=12){
						timeLine = [8,22,15,12];
					}else if(12<time && time<=15){
						timeLine = [12,8,22,15];
					}else if(15<time && time<=22){
						timeLine = [15,12,8,22];
					}else{
						timeLine = [22,15,12,8];
					}
					if(i == 0&&!firstFrag){
						firstFrag = $this.closest(".left-pub").find(".list14").html();
					};
					if(i == 4){
						$this.closest(".left-pub").find(".list14").html(firstFrag);
						firstFrag = '';
						i = 0;
						$this.css({'background':'url("http://news.sohu.com/upload/2013/images/n_unchangeable.gif") no-repeat','cursor':'default'});
						$this.unbind('click');
						return;
					};
					var url = urlList[timeLine[i]];
					$.ajax({
						url : 'http://news.sohu.com/frag/143746642/'+url,
						type : 'GET',
						success : function(data){
							$this.closest(".left-pub").find(".list14").html(data);
							i++;
						}
					});
				});

			});

			/*
			var changeBtn = $("#contentB .left-pub .more a"),
				date = new Date(),
				Nday = date.getDate(),
				Nmonth = date.getMonth()+1,
				Nyear = date.getFullYear();
			changeBtn.each(function(i){
				var $this = $(this),
					date = new Date(),
					ntime = date.getHours(),
					year = date.getFullYear(),
					month = date.getMonth()+1,
					day = date.getDate(),
					i = 0,
					NtimeLine = [];

				$this.click(function(e){
					var $this = $(e.target),
						loc = $this.attr("loc");

					if(!NtimeLine.length){
						while(NtimeLine.length < 7){
							if(3<ntime){
								ntime -= 3;
								NtimeLine.push(year+"|"+month+"|"+day+"|"+ntime);
							}else{
								ntime = 24+(ntime-3);
								if(1<day){
									day = Nday -1;
									NtimeLine.push(year+"|"+month+"|"+day+"|"+(ntime == 24 ? 0 : ntime));
								}else{
									if(1<month){
										day = new Date(date.getFullYear(),date.getMonth()-1,0).getDate();
										month = Nmonth-1;
										NtimeLine.push(year+"|"+month+"|"+day+"|"+(ntime == 24 ? 0 : ntime));
									}else{
										day = 31;
										month = 12;
										year = Nyear-1;
										NtimeLine.push(year+"|"+month+"|"+day+"|"+(ntime == 24 ? 0 : ntime));
									}

								}
							}
						}
						NtimeLine.push($this.closest(".left-pub").find(".list14").html());
					}
					if(i == 7){ // 最后一条为原始记录
						$this.closest(".left-pub").find(".list14").html(NtimeLine[i]);
						i = 0;
						return;
					}else{
						var lineArr = NtimeLine[i].split("|"),
							lineMonth = lineArr[1]-0,
							lineDay = lineArr[2]-0,
							lineMonth = lineMonth < 10 ? "0"+lineMonth : lineMonth,
							lineDay = lineDay < 10 ? "0"+lineDay : lineDay,
							url = "http://news.sohu.com/"+lineArr[0]+lineMonth+""+lineDay+"/frag/143746642/"+loc+"_"+lineArr[3]+".inc";


						$.ajax({
							url:url,
							type:"GET",
							success:function(html){
								if(html){
									$this.closest(".left-pub").find(".list14").html(html);
								}
								i < 7 ? i++ : i=0;
							}
						})
					}
				});
			});*/
		}
		topNewsChange(timeLine);
		normalChange();
	}
	/*
	 天气 start
	 */
	function loadWeather(){
		var Loc = util.getCookie('weather_CN');
		if(!Loc){
			Loc = util.getCookie('weatherIPLOC');
			if(!Loc){
				Loc = '110000';
			}
		}
		var LocNum = Loc,
			daytime = true,
			hour = new Date().getHours(),
			$sohuWeather = $('#weather'),
			weatherList = ['晴','多云','阴','阵雨','雷阵雨','雷阵雨伴有冰雹','雨夹雪','小雨','中雨','大雨','暴雨','大暴雨','特大暴雨','阵雪','小雪','中雪','大雪','暴雪','雾','冻雨','沙尘暴','小到中雨','中到大雨','大到暴雨','暴雨到大暴雨','大暴雨到特大暴雨','小到中雪','中到大雪','大到暴雪','浮尘','扬沙','强沙尘暴','','','','','','','','','','','','','','','','','','','','','','霾'],
			windList = ['无持续风向','东北风','东风','东南风','南风','西南风','西风','西北风','北风','旋转风'],
			windNameList = ['微风','3-4级','4-5级','5-6级','6-7级','7-8级','8-9级','9-10级','10-11级','11-12级'],
			degreeStyle = {'优':'1','良':'2','轻度':'3','中度':'4','重度':'5','严重':'6'},
			PMData = {},
			wData = {},
			futureWeatherShow = false;
		if(hour > 18 || hour < 6){daytime = false} // check now is daytime or night
		$.getJSON('http://news.sohu.com/weather/'+LocNum+'.inc',function(data){ // get weather JSON data
			wData = data;
			getPMData();
			//showWeather();
		});
		function getPMData(){
			/*$.ajax({
				url : 'http://mailinglist.corp.sohu.com/getPM25Jsons.jsp',
				type : 'GET',
				dataType : 'jsonp',
				scriptCharset : 'utf-8',
				success : function(data){
					PMData = data;
					showWeather();
				}
			});*/
			$.getJSON('http://news.sohu.com/weather/quality.inc',function(data){
					PMData = data;
					showWeather();
			  });
		};
		function showWeather(add_city){
			var todayData = getWeatherData(0);
			$sohuWeather.find('.weather-area').html(todayData.city);
			$sohuWeather.find('.weather-img img').attr('src',todayData.pic);
			$sohuWeather.find('.weather-time').html(todayData.time);
			$sohuWeather.find('.weather-air').html(todayData.qualityHtml);
			$sohuWeather.find('.weather-con').html(todayData.html);
			if(!add_city){
				addEvent();
			}
		}
		function getWeatherData(day){
			var f = wData.f.f1[day],
				nowWeather = daytime ? f.fa : f.fb,
				minTem = f.fd,
				maxTem = f.fc,
				todayTime = 'day',
				wind = daytime ? f.fg : f.fh,
				windDirection = daytime ? (f.fe-0) : (f.ff-0),
				weatherData = {},
				date = new Date(),
				windD = windDirection ? windList[windDirection] : '';
			if(!daytime && day == 0){
				todayTime = 'night';
			}else if(day > 0){
				todayTime = 'day';
			}
			weatherData.qualityHtml = '';
			weatherData.pic = 'http://news.sohu.com/upload/test1/images/pic/icon-small/'+todayTime+'/'+nowWeather+'.png';
			weatherData.maxTem = maxTem;
			weatherData.minTem = minTem;
			weatherData.nowWeather = weatherList[nowWeather-0];
			weatherData.html = '<span class="weather-sysbol">'+weatherData.nowWeather+'</span><span class="weather-temperature">'+maxTem+'℃～'+minTem+'℃</span><span class="weather-wind">'+windD+windNameList[wind]+'</span>';
			weatherData.city = wData.c.c3;
			weatherData.time = (date.getMonth()+1)+'月'+date.getDate()+'日';
			for(var i=0,l=PMData.length;i<l;i++){
				if(PMData[i].area == weatherData.city){
					weatherData.quality = PMData[i].quality.substr(0,2);
					weatherData.aqi = PMData[i].aqi;
					weatherData.degreeStyle = degreeStyle[weatherData.quality];
					weatherData.qualityHtml = '空气质量：<em class="quality bg'+weatherData.degreeStyle+'">'+weatherData.quality+'</em>';
					break;
				}
			}

			return weatherData;
		}
		function showFutureWeather(add_city){
			$('#weather-btn').addClass('arrUp');
			var layerArr = [],
				todayData = getWeatherData(0),
				tomorrowData = getWeatherData(1),
				afterTomorrowData = getWeatherData(2);

			layerArr.push('<div class="weather-date weather-today"><div class="w-d">今天</div>');
			layerArr.push('<div class="w-p"><img src="'+todayData.pic+'" width="25" height="25" alt="" /></div>');
			layerArr.push('<div class="w-t">'+todayData.maxTem+'℃～'+todayData.minTem+'℃</div><div class="w-s">'+todayData.nowWeather+'</div></div>');
			layerArr.push('<div class="weather-date weather-tomorrow"><div class="w-d">明天</div>');
			layerArr.push('<div class="w-p"><img src="'+tomorrowData.pic+'" width="25" height="25" alt="" /></div>');
			layerArr.push('<div class="w-t">'+tomorrowData.maxTem+'℃～'+tomorrowData.minTem+'℃</div><div class="w-s">'+tomorrowData.nowWeather+'</div></div>');
			layerArr.push('<div class="weather-date weather-after"><div class="w-d">后天</div>');
			layerArr.push('<div class="w-p"><img src="'+afterTomorrowData.pic+'" width="25" height="25" alt="" /></div>');
			layerArr.push('<div class="w-t">'+afterTomorrowData.maxTem+'℃～'+afterTomorrowData.minTem+'℃</div><div class="w-s">'+afterTomorrowData.nowWeather+'</div></div>');

			if(!add_city){
				if(!todayData.aqi){
					var textHtml = '';
				}else{
					var textHtml = '<span class="test_html">空气指数(数据来源:pm25.in)：</span><span class="aqi-num">'+todayData.aqi+'</span>';
				}
				layerArr.push('<div class="weather-aqi"><span class="city-order" id="city-order"><a href="javascript:void(0)">[城市定制]</a></span>'+textHtml+'</div>' +
					'<div class="weather-close">关闭</div>');
			}else{
				if(!todayData.aqi){
					var textHtml = '';
				}else{
					var textHtml = '<span class="test_html">空气指数(数据来源:pm25.in)：</span><span class="aqi-num">'+todayData.aqi+'</span>';
				}
				$('#weather-date-layer .weather-aqi').find('.test_html').remove();
				$('#weather-date-layer .weather-aqi').find('.aqi-num').remove();
				$('#city-order').after(textHtml);
			}

			var $layer = $(layerArr.join(''));
			if(!add_city){
				$("#weather-date-layer").append($layer).show();
			}else{
				$("#weather-date-layer .weather-aqi").before($layer);
			}
			futureWeatherShow = true;
		}
		function removeFutureWeather(){
			$("#weather-date-layer").hide().find('div').remove();
			$("#weather-sele-layer").hide();
			$('#weather-btn').removeClass('arrUp');
			futureWeatherShow = false;
		}
		function loadNewWeather(){ // 更新城市后重新加载weather数据
			LocNum = util.getCookie('weather_CN');
			$.getJSON('http://news.sohu.com/weather/'+LocNum+'.inc',function(data){ // get weather JSON data
				wData = data;
				showWeather('new');
				$("#weather-date-layer").find('.weather-date').remove();
				showFutureWeather('new');
			});
		}
		function addEvent(){
			var $moreBtn = $('#weather-btn a'),
				t = getMobileType();

			if(t == 'unknow'){
				$moreBtn.unbind('hover').bind('hover',function(){

					if(futureWeatherShow){
						return;
					}else{
						showFutureWeather();
						$("#city-order a").unbind('click').bind('click',function(){
							var $seleLayer = $("#weather-sele-layer");
							$seleLayer.show();
							selectCityEvt($seleLayer);
						});
					}
				});
			}else{
				$moreBtn.unbind('click').bind('click',function(){
					if(futureWeatherShow){
						removeFutureWeather();
					}else{
						showFutureWeather();
						$("#city-order a").unbind('click').bind('click',function(){
							var $seleLayer = $("#weather-sele-layer");
							$seleLayer.show();
							selectCityEvt($seleLayer);
						});
					}
				});
			}



			function selectCityEvt($seleLayer){
				var $seleCountry = $seleLayer.find('.sele-country'),
					$seleCity = $seleLayer.find('.sele-city'),
					$seleOk = $seleLayer.find('.btn-ok'),
					$seleCancel = $seleLayer.find('.btn-cancel'),
					CN = '', // 选择城市的区域码
					cityList = {'11':[{"v":"110000","n":"北京"}],
						'12':[{"v":"120000","n":"天津"}],
						'13':[{"v":"130100","n":"石家庄"},{"v":"130200","n":"唐山"},{"v":"130300","n":"秦皇岛"},{"v":"130400","n":"邯郸"},{"v":"130500","n":"邢台"},{"v":"130600","n":"保定"},{"v":"130700","n":"张家口"},{"v":"130800","n":"承德"},{"v":"130900","n":"沧州"},{"v":"131000","n":"廊坊"},{"v":"131100","n":"衡水"}],
						'14':[{"v":"140100","n":"太原"},{"v":"140200","n":"大同"},{"v":"140300","n":"阳泉"},{"v":"140400","n":"长治"},{"v":"140500","n":"晋城"},{"v":"140600","n":"朔州"},{"v":"140700","n":"晋中"},{"v":"140800","n":"运城"},{"v":"140900","n":"忻州"},{"v":"141000","n":"临汾"},{"v":"141100","n":"吕梁"}],
						'15':[{"v":"150100","n":"呼和浩特"},{"v":"150200","n":"包头"},{"v":"150300","n":"乌海"},{"v":"150400","n":"赤峰"},{"v":"150500","n":"通辽"},{"v":"150600","n":"鄂尔多斯"},{"v":"151100","n":"海拉尔"},{"v":"151200","n":"集宁"},{"v":"151500","n":"锡林浩特"},{"v":"151600","n":"临河"}],
						'21':[{"v":"210100","n":"沈阳"},{"v":"210200","n":"大连"},{"v":"210300","n":"鞍山"},{"v":"210400","n":"抚顺"},{"v":"210500","n":"本溪"},{"v":"210600","n":"丹东"},{"v":"210700","n":"锦州"},{"v":"210800","n":"营口"},{"v":"210900","n":"阜新"},{"v":"211000","n":"辽阳"},{"v":"211100","n":"盘锦"},{"v":"211200","n":"铁岭"},{"v":"211300","n":"朝阳"},{"v":"211400","n":"葫芦岛"}],
						'22':[{"v":"220100","n":"长春"},{"v":"220200","n":"吉林"},{"v":"220300","n":"四平"},{"v":"220400","n":"辽源"},{"v":"220500","n":"通化"},{"v":"220600","n":"白山"},{"v":"220700","n":"松原"},{"v":"220800","n":"白城"}],
						'23':[{"v":"230100","n":"哈尔滨"},{"v":"230200","n":"齐齐哈尔"},{"v":"230300","n":"鸡西"},{"v":"230400","n":"鹤岗"},{"v":"230500","n":"双鸭山"},{"v":"230600","n":"大庆"},{"v":"230700","n":"伊春"},{"v":"230800","n":"佳木斯"},{"v":"230900","n":"七台河"},{"v":"231000","n":"牡丹江"},{"v":"231100","n":"黑河"},{"v":"231200","n":"绥化"}],
						'31':[{"v":"310000","n":"上海"}],
						'32':[{"v":"320100","n":"南京"},{"v":"320200","n":"无锡"},{"v":"320300","n":"徐州"},{"v":"320400","n":"常州"},{"v":"320500","n":"苏州"},{"v":"320600","n":"南通"},{"v":"320700","n":"连云港"},{"v":"320800","n":"淮安"},{"v":"320900","n":"盐城"},{"v":"321000","n":"扬州"},{"v":"321100","n":"镇江"},{"v":"321200","n":"泰州"},{"v":"321300","n":"宿迁"}],
						'33':[{"v":"330100","n":"杭州"},{"v":"330200","n":"宁波"},{"v":"330300","n":"温州"},{"v":"330400","n":"嘉兴"},{"v":"330500","n":"湖州"},{"v":"330600","n":"绍兴"},{"v":"330700","n":"金华"},{"v":"330800","n":"衢州"},{"v":"330900","n":"舟山"},{"v":"331000","n":"台州"},{"v":"331100","n":"丽水"}],
						'34':[{"v":"340100","n":"合肥"},{"v":"340200","n":"芜湖"},{"v":"340300","n":"蚌埠"},{"v":"340400","n":"淮南"},{"v":"340500","n":"马鞍山"},{"v":"340600","n":"淮北"},{"v":"340700","n":"铜陵"},{"v":"340800","n":"安庆"},{"v":"341000","n":"黄山"},{"v":"341100","n":"滁州"},{"v":"341200","n":"阜阳"},{"v":"341300","n":"宿州"},{"v":"341400","n":"巢湖"},{"v":"341500","n":"六安"},{"v":"341600","n":"亳州"},{"v":"341700","n":"池州"},{"v":"341800","n":"宣城"}],
						'35':[{"v":"350100","n":"福州"},{"v":"350200","n":"厦门"},{"v":"350300","n":"莆田"},{"v":"350400","n":"三明"},{"v":"350500","n":"泉州"},{"v":"350600","n":"漳州"},{"v":"350700","n":"南平"},{"v":"350800","n":"龙岩"},{"v":"350900","n":"宁德"}],
						'36':[{"v":"360100","n":"南昌"},{"v":"360200","n":"景德镇"},{"v":"360300","n":"萍乡"},{"v":"360400","n":"九江"},{"v":"360500","n":"新余"},{"v":"360600","n":"鹰潭"},{"v":"360700","n":"赣州"},{"v":"360800","n":"吉安"},{"v":"360900","n":"宜春"},{"v":"361000","n":"抚州"},{"v":"361100","n":"上饶"}],
						'37':[{"v":"370100","n":"济南"},{"v":"370200","n":"青岛"},{"v":"370300","n":"淄博"},{"v":"370400","n":"枣庄"},{"v":"370500","n":"东营"},{"v":"370600","n":"烟台"},{"v":"370700","n":"潍坊"},{"v":"370800","n":"济宁"},{"v":"370900","n":"泰安"},{"v":"371000","n":"威海"},{"v":"371100","n":"日照"},{"v":"371200","n":"莱芜"},{"v":"371300","n":"临沂"},{"v":"371400","n":"德州"},{"v":"371500","n":"聊城"},{"v":"371600","n":"滨州"},{"v":"371700","n":"菏泽"}],
						'41':[{"v":"410100","n":"郑州"},{"v":"410200","n":"开封"},{"v":"410300","n":"洛阳"},{"v":"410400","n":"平顶山"},{"v":"410500","n":"安阳"},{"v":"410600","n":"鹤壁"},{"v":"410700","n":"新乡"},{"v":"410800","n":"焦作"},{"v":"410900","n":"濮阳"},{"v":"411000","n":"许昌"},{"v":"411100","n":"漯河"},{"v":"411200","n":"三门峡"},{"v":"411300","n":"南阳"},{"v":"411400","n":"商丘"},{"v":"411500","n":"信阳"},{"v":"411600","n":"周口"},{"v":"411700","n":"驻马店"}],
						'42':[{"v":"420100","n":"武汉"},{"v":"420200","n":"黄石"},{"v":"420300","n":"十堰"},{"v":"420500","n":"宜昌"},{"v":"420700","n":"鄂州"},{"v":"420800","n":"荆门"},{"v":"420900","n":"孝感"},{"v":"421000","n":"荆州"},{"v":"421100","n":"黄冈"},{"v":"421200","n":"咸宁"},{"v":"421300","n":"随州"}],
						'43':[{"v":"430100","n":"长沙"},{"v":"430200","n":"株洲"},{"v":"430300","n":"湘潭"},{"v":"430400","n":"衡阳"},{"v":"430500","n":"邵阳"},{"v":"430600","n":"岳阳"},{"v":"430700","n":"常德"},{"v":"430800","n":"张家界"},{"v":"430900","n":"益阳"},{"v":"431000","n":"郴州"},{"v":"431100","n":"永州"},{"v":"431200","n":"怀化"},{"v":"431300","n":"娄底"}],
						'44':[{"v":"440100","n":"广州"},{"v":"440200","n":"韶关"},{"v":"440300","n":"深圳"},{"v":"440400","n":"珠海"},{"v":"440500","n":"汕头"},{"v":"440600","n":"佛山"},{"v":"440700","n":"江门"},{"v":"440800","n":"湛江"},{"v":"440900","n":"茂名"},{"v":"441200","n":"肇庆"},{"v":"441300","n":"惠州"},{"v":"441400","n":"梅州"},{"v":"441500","n":"汕尾"},{"v":"441600","n":"河源"},{"v":"441700","n":"阳江"},{"v":"441800","n":"清远"},{"v":"441900","n":"东莞"},{"v":"445100","n":"潮州"},{"v":"445200","n":"揭阳"},{"v":"445300","n":"云浮"}],
						'45':[{"v":"450100","n":"南宁"},{"v":"450200","n":"柳州"},{"v":"450300","n":"桂林"},{"v":"450400","n":"梧州"},{"v":"450500","n":"北海"},{"v":"450600","n":"防城港"},{"v":"450700","n":"钦州"},{"v":"450800","n":"贵港"},{"v":"450900","n":"玉林"},{"v":"451000","n":"百色"},{"v":"451100","n":"贺州"},{"v":"451200","n":"河池"},{"v":"451300","n":"来宾"},{"v":"451400","n":"崇左"}],
						'46':[{"v":"460100","n":"海口"},{"v":"460200","n":"三亚"}],
						'50':[{"v":"500000","n":"重庆"}],
						'51':[{"v":"510100","n":"成都"},{"v":"510300","n":"自贡"},{"v":"510400","n":"攀枝花"},{"v":"510500","n":"泸州"},{"v":"510600","n":"德阳"},{"v":"510700","n":"绵阳"},{"v":"510800","n":"广元"},{"v":"510900","n":"遂宁"},{"v":"511000","n":"内江"},{"v":"511100","n":"乐山"},{"v":"511300","n":"南充"},{"v":"511400","n":"眉山"},{"v":"511500","n":"宜宾"},{"v":"511600","n":"广安"},{"v":"511700","n":"达州"},{"v":"511800","n":"雅安"},{"v":"511900","n":"巴中"}],
						'52':[{"v":"520100","n":"贵阳"},{"v":"520300","n":"遵义"},{"v":"520400","n":"安顺"},{"v":"522301","n":"兴义"},{"v":"522601","n":"凯里"},{"v":"522701","n":"都匀"},{"v":"522201","n":"铜仁"},{"v":"522401","n":"毕节"}],
						'53':[{"v":"530100","n":"昆明"},{"v":"530300","n":"曲靖"},{"v":"530400","n":"玉溪"},{"v":"530500","n":"保山"},{"v":"530600","n":"昭通"},{"v":"530700","n":"丽江"},{"v":"530900","n":"临沧"}],
						'54':[{"v":"540100","n":"拉萨"},{"v":"542121","n":"昌都"},{"v":"542301","n":"日喀则"},{"v":"542421","n":"那曲"},{"v":"542621","n":"林芝"}],
						'61':[{"v":"610100","n":"西安"},{"v":"610200","n":"铜川"},{"v":"610300","n":"宝鸡"},{"v":"610400","n":"咸阳"},{"v":"610500","n":"渭南"},{"v":"610600","n":"延安"},{"v":"610700","n":"汉中"},{"v":"610800","n":"榆林"},{"v":"610900","n":"安康"},{"v":"611000","n":"商洛"}],
						'62':[{"v":"620100","n":"兰州"},{"v":"620200","n":"嘉峪关"},{"v":"620300","n":"金昌"},{"v":"620400","n":"白银"},{"v":"620500","n":"天水"},{"v":"620600","n":"武威"},{"v":"620700","n":"张掖"},{"v":"620800","n":"平凉"},{"v":"620900","n":"酒泉"},{"v":"621000","n":"庆阳"},{"v":"621100","n":"定西"},{"v":"622901","n":"临夏"}],
						'63':[{"v":"630100","n":"西宁"},{"v":"632801","n":"格尔木"},{"v":"150303","n":"海南"},{"v":"632721","n":"玉树"}],
						'64':[{"v":"640100","n":"银川"},{"v":"640200","n":"石嘴山"},{"v":"640300","n":"吴忠"},{"v":"640400","n":"固原"},{"v":"640500","n":"中卫"}],
						'65':[{"v":"650100","n":"乌鲁木齐"},{"v":"650200","n":"克拉玛依"},{"v":"652101","n":"吐鲁番"},{"v":"652201","n":"哈密"},{"v":"652301","n":"昌吉"},{"v":"652901","n":"阿克苏"},{"v":"653101","n":"喀什"},{"v":"653201","n":"和田"},{"v":"654201","n":"塔城"},{"v":"654301","n":"阿勒泰"},{"v":"659001","n":"石河子"}],
						'81':[{"v":"810000","n":"香港"}],
						'82':[{"v":"820000","n":"澳门"}]
					};
				$seleCountry.change(function(e){
					var value = e.target.value,
						list = cityList[value],
						cityHtml = '';
					if(!list){
						return;
					}
					CN = list[0].v;

					for(var i=0,l=list.length;i<l;i++){
						var C = list[i];
						cityHtml += '<option value="'+C.v+'">'+C.n+'</option>';
					}
					$seleCity.html(cityHtml);
				});

				$seleCity.change(function(){
					CN = this.value;
				});
				$seleOk.unbind('click').bind('click',function(){
					util.setCookie('weather_CN',CN,365);
					//$seleLayer.hide();
					loadNewWeather();
				});

				$seleCancel.unbind('click').bind('click',function(){
					$seleLayer.hide();
				});
			};
			function removeFW(e){
				var $target = $(e.target);
				if($target.closest('#weather').length){
					return;
				}else if(futureWeatherShow){
					removeFutureWeather();
				}
			};
			$('body').unbind('click',removeFW).bind('click',removeFW);
			$('.weather-close').live('click',function(){
				if(futureWeatherShow){
					removeFutureWeather();
				}
			});
			$('#weather').live('mouseleave',function(){
				if(futureWeatherShow){
					//removeFutureWeather();
				}
			});
		}
	}
	/*
	 天气 end
	 */



	/*设备选择 start*/
	function deviceSelect(){
		$('#device').click(function(){
			var $this = $(this);
			if ($this.hasClass('arrUp')) {
				$this.animate({'height':'140'},400);
				$this.addClass('arrUp');
			}else{
				$this.css('height',28);
				$this.removeClass('arrUp');
			}
		});

		$('body').bind('click',function(e){
			e = e || window.event;
            var curEl = e.srcElement || e.target;
			var $target = $(curEl);
			if($target.closest('#device').length){
				return;
			}else{
				$('#device').css('height',28).removeClass('arrUp');
			}
		});
	}
	/*设备选择 end*/
	var util = function(){ // 工具集

		Array.prototype.indexOf = function(v){
			for(var i=0,l=this.length;i<l;i++){
				if(this[i] === v){
					return i;
				}
			}
			return -1;
		};

		return {
			setCookie : function(c_name,value,expiredays){
				var exdate=new Date();
				exdate.setDate(exdate.getDate()+expiredays);
				document.cookie=c_name+ "=" +escape(value)+
					((expiredays==null) ? "" : ";expires="+exdate.toGMTString())
			},
			getCookie : function(c_name){
				if (document.cookie.length>0){
					c_start=document.cookie.indexOf(c_name + "=");
					if (c_start!=-1){
						c_start=c_start + c_name.length+1;
						c_end=document.cookie.indexOf(";",c_start);
						if (c_end==-1) c_end=document.cookie.length;
						return unescape(document.cookie.substring(c_start,c_end))
					}
				}
				return "";
			},
			getDate : function(){
				var date = new Date(),
					year = date.getFullYear(),
					month = date.getMonth()+1,
					day = date.getDate(),
					nday = day > 9 ? day : "0"+day;
					nmonth = month > 9 ? month : "0"+month;
				return year+""+nmonth+""+nday;
			}
		}
	}();

	loadMobileStyle();

	$(function(){
		tabCustom();
		changeMenu();
		loadWeather();
		deviceSelect();
		initCalendar();
		newsChange();
	});
})();