(function(){
	window.SOHU_NEWS_LX = {
		today_time : 9,
		candler_show : false, // �����Ƿ���ʾ
		getHistory : function(day){ // 2013��10��10�� ��ʼÿ�챣������  �ڴ�֮ǰΪ�� http://news.sohu.com/20131002/homepage_n.shtml
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
	 ��Ӧ��Ƭ�ĵ�ַ http://news.sohu.com/_scroll_newslist/20130929/[].inc
	 ˳��Ϊ��ǩ��Ӧ��mid
	 */
	var incArray = ["business","yule","sports","mil","auto","it","stock","fashion","learning","health"],
		tabFixing = false; // �Ƿ��Ѿ�չ��������壬�����б�ǩ�����ɵ��

	//�ж��豸
	function getMobileType(){
		var t="unknow";
		if( navigator.userAgent.match(/Android/i) ) { t = "android" }
		if( navigator.userAgent.match(/BlackBerry/i) ) { t = "blackberry" }
		if( navigator.userAgent.match(/iPhone|iPad|iPod/i) ) { t = "ios" }
		if( navigator.userAgent.match(/IEMobile/i) ) { t = "windowsPhone" }
		return t;
	}

	//������ƶ��ˣ�����ƶ�����ʽ
	function loadMobileStyle(){
		var t = getMobileType();
		if(t == "android" || t == "blackberry" || t == "ios" || t == "windowsPhone"){
			$("#mobile-css").attr("href","http://news.sohu.com/upload/2013/mobile_style.css")
		}
	}

	// ���Ʊ�ǩ
	function tabCustom(){
		var $cusId = $("#customize .menuB"),
			$cusLayer = $cusId.find(".cus-layer"),
			$menuArr = $cusId.find("ul"),
			$tabArr = $cusId.find(".cus-layer dl"),
			$tabInput = $tabArr.find("dd input"),
			tArr = ["�ƾ�","����","����","����","����","�Ƽ�","����","ʱ��","����","����"],
			num = 0, // �Ѿ����Ƶı�ǩ����
			eventAdd = false, // �¼��Ƿ��Ѿ���ӣ���ֹ�ظ�����¼�
			max = 4, // �����4����ǩ
			min = 1; // ����1����ǩ

		$cusId.find(".more a").click(function(){  // չ������
			$cusId.addClass("menuB-cus");
			$cusLayer.show();
			if(!eventAdd){changeTabEvt();}
			$cusId.find(".tt").trigger("click");
			tabFixing = true;
		});
		$cusId.find(".shut a").click(function(){ // �رն���
			$cusId.removeClass("menuB-cus");
			$cusLayer.hide();
			closeTabEvt();
			tabFixing = false;
		});

		function changeTabEvt(){ // �򿪶�����������¼�
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

			$tabInput.click(function(e){ // ��ѡ��ť���
				if(this.getAttribute("c") == "true"){ // �����ѡ��״̬
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


		function disableRadio(disable){ // true:���ö�ѡ��ť false:�ſ����ж�ѡ
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

		function changeTab(tabNum,l){ // �ı�ĳ����ѡ��ťΪѡ��״̬
			var $tab = $tabArr.find("dd:eq("+tabNum+") input");
			$tab[0].checked = true;
			$tab.attr("c","true");
			if(l == 1){ // ���ֻ��һ����ǩ��������
				$tab.disabled = true;
			}
		}

		function muneChange(id,add){ // true:���  false:ɾ�� ��ǩ
			if(add){
				var muneHtml = '<li mid="'+id+'">'+tArr[id]+'<span class="del"></span></li>';
				$menuArr.append(muneHtml);
			}else{
				$menuArr.find("li[mid='"+id+"']").remove();
			}
		}

		function closeTabEvt(){ // �رն��ƺ󣬽��û����÷���cookie
			var $tagLi = $menuArr.find("li"),
				midArr = [];

			$tagLi.each(function(){
				midArr.push(this.getAttribute("mid"));
			});

			util.setCookie("userTab",midArr.toString(),365);

		}

		function setMenu(){ // ͨ���û����õ�cookie������menu�ı�ǩ
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

			function setMenuByCookie(cookie){ // ͨ����cookie��������menu
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


	function changeMenu(){ // ���׶��������ǩ����л�
		var customTab = $("#customize"),
			commentTab = customTab.find("div.tt"), // ����tabĬ��Ϊѡ��״̬
			userTabs = $('.menuB').find("ul li"),
			nowTab = commentTab,
			incPlace = customTab.find(".list14"),
			incCache = {}; // ��Ƭ����

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

		function getInc(mid){ // ȡ�ö�Ӧ��Ƭ������
			var incname = mid == 99 ? "comm" : incArray[mid],
				url = "http://news.sohu.com/_scroll_newslist/"+util.getDate()+"/"+incname+".inc",
				incHtml = "<ul>";


			if(incCache[incname]){ // �鿴�Ƿ��л���
				incPlace.html(incCache[incname]);
				return;
			}

			$.ajax({
				url : url,
				type : "GET",
				dataType : "json",
				success : function(data){
					//		var data = {data:[["��������˭���飿5������м���ϵͳ����","http://auto.sohu.com/20131010/n387707512.shtml"],["�������� ���15��Ԫ���ճ��ó��ɱ����","http://auto.sohu.com/20131010/n387669884.shtml"],["���ܱ���S���ĺ�����ӵ�о������ü��ó�","http://auto.sohu.com/20131008/n387684458.shtml"],["�ó�ʡ�� ��������/����/��8/C5��������","http://auto.sohu.com/20131008/n387672537.shtml"],["����PKʵ�� ���ýγ�/SUV��ʵ�ͺĴ����","http://auto.sohu.com/20131008/n387677405.shtml"]]};
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
	 ���Żع�
	 ҳ���ϵ�ռλdiv ��<div id="data_wrapper"></div>
	 initCalendar : ��ʼ����������������� jCalendar

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
				yearOptHTML += '<option value="'+starYear+'">'+starYear+'��</option>';
				starYear++;
			}while(starYear < (nowYear+1));

			var selectHTML = '<form>'+
				'<div id="jcalendar">'+
				'<div class="jcalendar-wrapper">'+
				'<div class="jcalendar-selects">'+
				'<select class="jcalendar-select-year" id="year" name="year">'+ yearOptHTML+'</select>'+
				'<select class="jcalendar-select-month" id="month" name="month">'+
				'<option value="1">1��</option>'+
				'<option value="2">2��</option>'+
				'<option value="3">3��</option>'+
				'<option value="4">4��</option>'+
				'<option value="5">5��</option>'+
				'<option value="6">6��</option>'+
				'<option value="7">7��</option>'+
				'<option value="8">8��</option>'+
				'<option value="9">9��</option>'+
				'<option value="10">10��</option>'+
				'<option value="11">11��</option>'+
				'<option value="12">12��</option>'+
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
	 ���Ż�һ������
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
		function saveNowHtml(){ // ��һ�ε������һ����,���浱ʱ��html
			nowHtml = $("#change-con").html();
		}
		function getNowHtml(){ // ��ȡ�����nowHtml
			return nowHtml;
		}
		function topNewsChange(){ // Ҫ�Ż�һ��
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
					if(i == 7){ // ���һ��Ϊԭʼ��¼
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
	 ���� start
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
			weatherList = ['��','����','��','����','������','��������б���','���ѩ','С��','����','����','����','����','�ش���','��ѩ','Сѩ','��ѩ','��ѩ','��ѩ','��','����','ɳ����','С������','�е�����','�󵽱���','���굽����','���굽�ش���','С����ѩ','�е���ѩ','�󵽱�ѩ','����','��ɳ','ǿɳ����','','','','','','','','','','','','','','','','','','','','','','��'],
			windList = ['�޳�������','������','����','���Ϸ�','�Ϸ�','���Ϸ�','����','������','����','��ת��'],
			windNameList = ['΢��','3-4��','4-5��','5-6��','6-7��','7-8��','8-9��','9-10��','10-11��','11-12��'],
			degreeStyle = {'��':'1','��':'2','���':'3','�ж�':'4','�ض�':'5','����':'6'},
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
			weatherData.html = '<span class="weather-sysbol">'+weatherData.nowWeather+'</span><span class="weather-temperature">'+maxTem+'�桫'+minTem+'��</span><span class="weather-wind">'+windD+windNameList[wind]+'</span>';
			weatherData.city = wData.c.c3;
			weatherData.time = (date.getMonth()+1)+'��'+date.getDate()+'��';
			for(var i=0,l=PMData.length;i<l;i++){
				if(PMData[i].area == weatherData.city){
					weatherData.quality = PMData[i].quality.substr(0,2);
					weatherData.aqi = PMData[i].aqi;
					weatherData.degreeStyle = degreeStyle[weatherData.quality];
					weatherData.qualityHtml = '����������<em class="quality bg'+weatherData.degreeStyle+'">'+weatherData.quality+'</em>';
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

			layerArr.push('<div class="weather-date weather-today"><div class="w-d">����</div>');
			layerArr.push('<div class="w-p"><img src="'+todayData.pic+'" width="25" height="25" alt="" /></div>');
			layerArr.push('<div class="w-t">'+todayData.maxTem+'�桫'+todayData.minTem+'��</div><div class="w-s">'+todayData.nowWeather+'</div></div>');
			layerArr.push('<div class="weather-date weather-tomorrow"><div class="w-d">����</div>');
			layerArr.push('<div class="w-p"><img src="'+tomorrowData.pic+'" width="25" height="25" alt="" /></div>');
			layerArr.push('<div class="w-t">'+tomorrowData.maxTem+'�桫'+tomorrowData.minTem+'��</div><div class="w-s">'+tomorrowData.nowWeather+'</div></div>');
			layerArr.push('<div class="weather-date weather-after"><div class="w-d">����</div>');
			layerArr.push('<div class="w-p"><img src="'+afterTomorrowData.pic+'" width="25" height="25" alt="" /></div>');
			layerArr.push('<div class="w-t">'+afterTomorrowData.maxTem+'�桫'+afterTomorrowData.minTem+'��</div><div class="w-s">'+afterTomorrowData.nowWeather+'</div></div>');

			if(!add_city){
				if(!todayData.aqi){
					var textHtml = '';
				}else{
					var textHtml = '<span class="test_html">����ָ��(������Դ:pm25.in)��</span><span class="aqi-num">'+todayData.aqi+'</span>';
				}
				layerArr.push('<div class="weather-aqi"><span class="city-order" id="city-order"><a href="javascript:void(0)">[���ж���]</a></span>'+textHtml+'</div>' +
					'<div class="weather-close">�ر�</div>');
			}else{
				if(!todayData.aqi){
					var textHtml = '';
				}else{
					var textHtml = '<span class="test_html">����ָ��(������Դ:pm25.in)��</span><span class="aqi-num">'+todayData.aqi+'</span>';
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
		function loadNewWeather(){ // ���³��к����¼���weather����
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
					CN = '', // ѡ����е�������
					cityList = {'11':[{"v":"110000","n":"����"}],
						'12':[{"v":"120000","n":"���"}],
						'13':[{"v":"130100","n":"ʯ��ׯ"},{"v":"130200","n":"��ɽ"},{"v":"130300","n":"�ػʵ�"},{"v":"130400","n":"����"},{"v":"130500","n":"��̨"},{"v":"130600","n":"����"},{"v":"130700","n":"�żҿ�"},{"v":"130800","n":"�е�"},{"v":"130900","n":"����"},{"v":"131000","n":"�ȷ�"},{"v":"131100","n":"��ˮ"}],
						'14':[{"v":"140100","n":"̫ԭ"},{"v":"140200","n":"��ͬ"},{"v":"140300","n":"��Ȫ"},{"v":"140400","n":"����"},{"v":"140500","n":"����"},{"v":"140600","n":"˷��"},{"v":"140700","n":"����"},{"v":"140800","n":"�˳�"},{"v":"140900","n":"����"},{"v":"141000","n":"�ٷ�"},{"v":"141100","n":"����"}],
						'15':[{"v":"150100","n":"���ͺ���"},{"v":"150200","n":"��ͷ"},{"v":"150300","n":"�ں�"},{"v":"150400","n":"���"},{"v":"150500","n":"ͨ��"},{"v":"150600","n":"������˹"},{"v":"151100","n":"������"},{"v":"151200","n":"����"},{"v":"151500","n":"���ֺ���"},{"v":"151600","n":"�ٺ�"}],
						'21':[{"v":"210100","n":"����"},{"v":"210200","n":"����"},{"v":"210300","n":"��ɽ"},{"v":"210400","n":"��˳"},{"v":"210500","n":"��Ϫ"},{"v":"210600","n":"����"},{"v":"210700","n":"����"},{"v":"210800","n":"Ӫ��"},{"v":"210900","n":"����"},{"v":"211000","n":"����"},{"v":"211100","n":"�̽�"},{"v":"211200","n":"����"},{"v":"211300","n":"����"},{"v":"211400","n":"��«��"}],
						'22':[{"v":"220100","n":"����"},{"v":"220200","n":"����"},{"v":"220300","n":"��ƽ"},{"v":"220400","n":"��Դ"},{"v":"220500","n":"ͨ��"},{"v":"220600","n":"��ɽ"},{"v":"220700","n":"��ԭ"},{"v":"220800","n":"�׳�"}],
						'23':[{"v":"230100","n":"������"},{"v":"230200","n":"�������"},{"v":"230300","n":"����"},{"v":"230400","n":"�׸�"},{"v":"230500","n":"˫Ѽɽ"},{"v":"230600","n":"����"},{"v":"230700","n":"����"},{"v":"230800","n":"��ľ˹"},{"v":"230900","n":"��̨��"},{"v":"231000","n":"ĵ����"},{"v":"231100","n":"�ں�"},{"v":"231200","n":"�绯"}],
						'31':[{"v":"310000","n":"�Ϻ�"}],
						'32':[{"v":"320100","n":"�Ͼ�"},{"v":"320200","n":"����"},{"v":"320300","n":"����"},{"v":"320400","n":"����"},{"v":"320500","n":"����"},{"v":"320600","n":"��ͨ"},{"v":"320700","n":"���Ƹ�"},{"v":"320800","n":"����"},{"v":"320900","n":"�γ�"},{"v":"321000","n":"����"},{"v":"321100","n":"��"},{"v":"321200","n":"̩��"},{"v":"321300","n":"��Ǩ"}],
						'33':[{"v":"330100","n":"����"},{"v":"330200","n":"����"},{"v":"330300","n":"����"},{"v":"330400","n":"����"},{"v":"330500","n":"����"},{"v":"330600","n":"����"},{"v":"330700","n":"��"},{"v":"330800","n":"����"},{"v":"330900","n":"��ɽ"},{"v":"331000","n":"̨��"},{"v":"331100","n":"��ˮ"}],
						'34':[{"v":"340100","n":"�Ϸ�"},{"v":"340200","n":"�ߺ�"},{"v":"340300","n":"����"},{"v":"340400","n":"����"},{"v":"340500","n":"��ɽ"},{"v":"340600","n":"����"},{"v":"340700","n":"ͭ��"},{"v":"340800","n":"����"},{"v":"341000","n":"��ɽ"},{"v":"341100","n":"����"},{"v":"341200","n":"����"},{"v":"341300","n":"����"},{"v":"341400","n":"����"},{"v":"341500","n":"����"},{"v":"341600","n":"����"},{"v":"341700","n":"����"},{"v":"341800","n":"����"}],
						'35':[{"v":"350100","n":"����"},{"v":"350200","n":"����"},{"v":"350300","n":"����"},{"v":"350400","n":"����"},{"v":"350500","n":"Ȫ��"},{"v":"350600","n":"����"},{"v":"350700","n":"��ƽ"},{"v":"350800","n":"����"},{"v":"350900","n":"����"}],
						'36':[{"v":"360100","n":"�ϲ�"},{"v":"360200","n":"������"},{"v":"360300","n":"Ƽ��"},{"v":"360400","n":"�Ž�"},{"v":"360500","n":"����"},{"v":"360600","n":"ӥ̶"},{"v":"360700","n":"����"},{"v":"360800","n":"����"},{"v":"360900","n":"�˴�"},{"v":"361000","n":"����"},{"v":"361100","n":"����"}],
						'37':[{"v":"370100","n":"����"},{"v":"370200","n":"�ൺ"},{"v":"370300","n":"�Ͳ�"},{"v":"370400","n":"��ׯ"},{"v":"370500","n":"��Ӫ"},{"v":"370600","n":"��̨"},{"v":"370700","n":"Ϋ��"},{"v":"370800","n":"����"},{"v":"370900","n":"̩��"},{"v":"371000","n":"����"},{"v":"371100","n":"����"},{"v":"371200","n":"����"},{"v":"371300","n":"����"},{"v":"371400","n":"����"},{"v":"371500","n":"�ĳ�"},{"v":"371600","n":"����"},{"v":"371700","n":"����"}],
						'41':[{"v":"410100","n":"֣��"},{"v":"410200","n":"����"},{"v":"410300","n":"����"},{"v":"410400","n":"ƽ��ɽ"},{"v":"410500","n":"����"},{"v":"410600","n":"�ױ�"},{"v":"410700","n":"����"},{"v":"410800","n":"����"},{"v":"410900","n":"���"},{"v":"411000","n":"���"},{"v":"411100","n":"���"},{"v":"411200","n":"����Ͽ"},{"v":"411300","n":"����"},{"v":"411400","n":"����"},{"v":"411500","n":"����"},{"v":"411600","n":"�ܿ�"},{"v":"411700","n":"פ���"}],
						'42':[{"v":"420100","n":"�人"},{"v":"420200","n":"��ʯ"},{"v":"420300","n":"ʮ��"},{"v":"420500","n":"�˲�"},{"v":"420700","n":"����"},{"v":"420800","n":"����"},{"v":"420900","n":"Т��"},{"v":"421000","n":"����"},{"v":"421100","n":"�Ƹ�"},{"v":"421200","n":"����"},{"v":"421300","n":"����"}],
						'43':[{"v":"430100","n":"��ɳ"},{"v":"430200","n":"����"},{"v":"430300","n":"��̶"},{"v":"430400","n":"����"},{"v":"430500","n":"����"},{"v":"430600","n":"����"},{"v":"430700","n":"����"},{"v":"430800","n":"�żҽ�"},{"v":"430900","n":"����"},{"v":"431000","n":"����"},{"v":"431100","n":"����"},{"v":"431200","n":"����"},{"v":"431300","n":"¦��"}],
						'44':[{"v":"440100","n":"����"},{"v":"440200","n":"�ع�"},{"v":"440300","n":"����"},{"v":"440400","n":"�麣"},{"v":"440500","n":"��ͷ"},{"v":"440600","n":"��ɽ"},{"v":"440700","n":"����"},{"v":"440800","n":"տ��"},{"v":"440900","n":"ï��"},{"v":"441200","n":"����"},{"v":"441300","n":"����"},{"v":"441400","n":"÷��"},{"v":"441500","n":"��β"},{"v":"441600","n":"��Դ"},{"v":"441700","n":"����"},{"v":"441800","n":"��Զ"},{"v":"441900","n":"��ݸ"},{"v":"445100","n":"����"},{"v":"445200","n":"����"},{"v":"445300","n":"�Ƹ�"}],
						'45':[{"v":"450100","n":"����"},{"v":"450200","n":"����"},{"v":"450300","n":"����"},{"v":"450400","n":"����"},{"v":"450500","n":"����"},{"v":"450600","n":"���Ǹ�"},{"v":"450700","n":"����"},{"v":"450800","n":"���"},{"v":"450900","n":"����"},{"v":"451000","n":"��ɫ"},{"v":"451100","n":"����"},{"v":"451200","n":"�ӳ�"},{"v":"451300","n":"����"},{"v":"451400","n":"����"}],
						'46':[{"v":"460100","n":"����"},{"v":"460200","n":"����"}],
						'50':[{"v":"500000","n":"����"}],
						'51':[{"v":"510100","n":"�ɶ�"},{"v":"510300","n":"�Թ�"},{"v":"510400","n":"��֦��"},{"v":"510500","n":"����"},{"v":"510600","n":"����"},{"v":"510700","n":"����"},{"v":"510800","n":"��Ԫ"},{"v":"510900","n":"����"},{"v":"511000","n":"�ڽ�"},{"v":"511100","n":"��ɽ"},{"v":"511300","n":"�ϳ�"},{"v":"511400","n":"üɽ"},{"v":"511500","n":"�˱�"},{"v":"511600","n":"�㰲"},{"v":"511700","n":"����"},{"v":"511800","n":"�Ű�"},{"v":"511900","n":"����"}],
						'52':[{"v":"520100","n":"����"},{"v":"520300","n":"����"},{"v":"520400","n":"��˳"},{"v":"522301","n":"����"},{"v":"522601","n":"����"},{"v":"522701","n":"����"},{"v":"522201","n":"ͭ��"},{"v":"522401","n":"�Ͻ�"}],
						'53':[{"v":"530100","n":"����"},{"v":"530300","n":"����"},{"v":"530400","n":"��Ϫ"},{"v":"530500","n":"��ɽ"},{"v":"530600","n":"��ͨ"},{"v":"530700","n":"����"},{"v":"530900","n":"�ٲ�"}],
						'54':[{"v":"540100","n":"����"},{"v":"542121","n":"����"},{"v":"542301","n":"�տ���"},{"v":"542421","n":"����"},{"v":"542621","n":"��֥"}],
						'61':[{"v":"610100","n":"����"},{"v":"610200","n":"ͭ��"},{"v":"610300","n":"����"},{"v":"610400","n":"����"},{"v":"610500","n":"μ��"},{"v":"610600","n":"�Ӱ�"},{"v":"610700","n":"����"},{"v":"610800","n":"����"},{"v":"610900","n":"����"},{"v":"611000","n":"����"}],
						'62':[{"v":"620100","n":"����"},{"v":"620200","n":"������"},{"v":"620300","n":"���"},{"v":"620400","n":"����"},{"v":"620500","n":"��ˮ"},{"v":"620600","n":"����"},{"v":"620700","n":"��Ҵ"},{"v":"620800","n":"ƽ��"},{"v":"620900","n":"��Ȫ"},{"v":"621000","n":"����"},{"v":"621100","n":"����"},{"v":"622901","n":"����"}],
						'63':[{"v":"630100","n":"����"},{"v":"632801","n":"���ľ"},{"v":"150303","n":"����"},{"v":"632721","n":"����"}],
						'64':[{"v":"640100","n":"����"},{"v":"640200","n":"ʯ��ɽ"},{"v":"640300","n":"����"},{"v":"640400","n":"��ԭ"},{"v":"640500","n":"����"}],
						'65':[{"v":"650100","n":"��³ľ��"},{"v":"650200","n":"��������"},{"v":"652101","n":"��³��"},{"v":"652201","n":"����"},{"v":"652301","n":"����"},{"v":"652901","n":"������"},{"v":"653101","n":"��ʲ"},{"v":"653201","n":"����"},{"v":"654201","n":"����"},{"v":"654301","n":"����̩"},{"v":"659001","n":"ʯ����"}],
						'81':[{"v":"810000","n":"���"}],
						'82':[{"v":"820000","n":"����"}]
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
	 ���� end
	 */



	/*�豸ѡ�� start*/
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
	/*�豸ѡ�� end*/
	var util = function(){ // ���߼�

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