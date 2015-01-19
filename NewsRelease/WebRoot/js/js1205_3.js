//焦点图9
jQuery (function (jq) {
	jq ("#focus .focus-list .box").live ("click", function () {
		jq ('.txt-txt').removeClass ('focus-hover');
		var temp = jq ("#focus .focus-now").html ();
		jq ("#focus .focus-now").html (jq (this).html ());
		jq (this).html (temp);
	});
	jq ('.txt-bg').live ({
		mouseenter: function () {
			jq (this).next ('.txt-txt').addClass ('focus-hover');
		},
		mouseleave: function () {
			jq (".txt-txt").removeClass ('focus-hover');
		}
	});
});
//财经股市右侧js
jQuery (function (jq) {
	var uls = jq ("#shareList ul");
	var cls = "now";
	var curEl = null,
		dur = 300,
		h = {
			min: 25,
			max: 155
		};

	uls.find ("li").mouseover (function (el) {
		el = jq (this);
		if (el === curEl) return;
		curEl = el;

		el.find ("img").attr ("src", el.find ("img").attr ("src").replace (/\.png.*/, ".png?" + new Date ().getTime ()))
		el.parent ().find ("li.now").removeClass (cls).end ().find ('li').stop ().animate ({
			'height': h.min
		}, dur, 'linear');

		el.stop ().animate ({
			'height': h.max
		}, dur, 'linear');
		el.addClass (cls);
	});

	uls.each (function (els) {
		els = jq (this);
		els.find ('li').eq (0).find ('img').attr ("src", els.find ('li').eq (0).find ('img').attr ("src").replace (/\.png.*/, ".png?" + new Date ().getTime ()))
		els.find ('li').css ({
			'height': h.min
		}).eq (0).css ({
				'height': h.max
			});
		curEl = els.find ('li').eq (0).addClass (cls);
	});
	jQuery.ajax ({
		type    : "get",
		url     : "http://hq.stock.sohu.com/hqindex/finaceindex/financeindexhq2.js",
		dataType: "script"
	});
});

function fortune_hq(o) {
	for (it in o) {
		if (typeof swichIT[it] == 'function') {
			swichIT[it] (o[it])
		}
	}
};

function cna(o) {
	var str = [],
		lis = $ ('#tab_1_1 li');
	$.each (lis, function (i) {
		var d = o[i],
			p = $ (this).find ('p').html (),
			c = (parseFloat (d[3]) > 0 ? 'red' : parseFloat (d[3]) < 0 ? 'gre' : '');
		$ (this).html ('<span class="wa"><a title="' + d[0] + '"  target="_blank" href="' + d[4] + '">' + d[0] + '</a></span><span class="wb ' + c + '">' + d[1] + '</span><span class="wc ' + c + '">' + d[2] + '</span><span class="wd ' + c + '">' + d[3] + '</span>' + p)
	})
}

function cnb(o) {
	var str = [],
		lis = $ ('#tab_1_2 li');
	$.each (lis, function (i) {
		var d = o[i],
			p = $ (this).find ('p').html (),
			c = (parseFloat (d[3]) > 0 ? 'red' : parseFloat (d[3]) < 0 ? 'gre' : '');
		$ (this).html ('<span class="wa"><a title="' + d[0] + '"  target="_blank" href="' + d[4] + '">' + d[0] + '</a></span><span class="wb ' + c + '">' + d[1] + '</span><span class="wc ' + c + '">' + d[2] + '</span><span class="wd ' + c + '">' + d[3] + '</span>' + p)
	})
}

function cnf(o) {
	var str = [],
		lis = $ ('#tab_1_3 li');
	$.each (lis, function (i) {
		var d = o[i],
			p = $ (this).find ('p').html (),
			c = (parseFloat (d[3]) > 0 ? 'red' : parseFloat (d[3]) < 0 ? 'gre' : '');
		$ (this).html ('<span class="wa"><a title="' + d[0] + '"  target="_blank" href="' + d[4] + '">' + d[0] + '</a></span><span class="wb ' + c + '">' + d[1] + '</span><span class="wc ' + c + '">' + d[2] + '</span><span class="wd ' + c + '">' + d[3] + '</span>' + p)
	})
}

function hk(o) {
	var str = [],
		lis = $ ('#tab_1_4 li');
	$.each (lis, function (i) {
		var d = o[i],
			p = $ (this).find ('p').html (),
			c = (parseFloat (d[3]) > 0 ? 'red' : parseFloat (d[3]) < 0 ? 'gre' : '');
		$ (this).html ('<span class="wa"><a title="' + d[0] + '"  target="_blank" href="' + d[4] + '">' + d[0] + '</a></span><span class="wb ' + c + '">' + d[1] + '</span><span class="wc ' + c + '">' + d[2] + '</span><span class="wd ' + c + '">' + d[3] + '</span>' + p)
	})
}

function us(o) {
	var str = [],
		lis = $ ('#tab_1_5 li');
	$.each (lis, function (i) {
		var d = o[i],
			p = $ (this).find ('p').html (),
			c = (parseFloat (d[3]) > 0 ? 'red' : parseFloat (d[3]) < 0 ? 'gre' : '');
		$ (this).html ('<span class="wa"><a title="' + d[0] + '"  target="_blank" href="' + d[4] + '">' + d[0] + '</a></span><span class="wb ' + c + '">' + d[1] + '</span><span class="wc ' + c + '">' + d[2] + '</span><span class="wd ' + c + '">' + d[3] + '</span>' + p)
	})
}
var swichIT = {
	"cna": cna,
	"cnb": cnb,
	"cnf": cnf,
	"hk" : hk,
	"us" : us
};


jQuery (function (jq) {
	//标签


	function changeTab(lis, divs, nums) {
		lis.each (function (i) {
			var els = jq (this);
			els.mouseenter (function () {
				lis.removeClass ("now");
				divs.stop ().hide ();
				jq (this).addClass ("now");
				divs.eq (i).show ();
			});
		}).eq (nums).mouseenter ();
	}

	var divA = jq ("#menu-a");
	changeTab (divA.find (".menuA li"), divA.find (".block"), 0);

	var divB = jq ("#menu-b");
	changeTab (divB.find (".menuA li"), divB.find (".block"), 0);

	var divC = jq ("#menu-c");
	changeTab (divC.find (".menuA li"), divC.find (".sn-list"), 0);

	var divD = jq ("#menu-d");
	changeTab (divD.find (".menuA li"), divD.find (".block"), 0);

	var divE = jq ("#menu-e");
	changeTab (divE.find (".menuC li"), divE.find (".pic-text"), 0);

	var divF = jq ("#menu-f");
	changeTab (divF.find (".menuD li:not('.ln')"), divF.find (".turn"), 0);

	var divG = jq ("#menu-g");
	changeTab (divG.find (".menuD li:not('.ln')"), divG.find (".turn"), 0);

	var divH = jq ("#menu-h");
	changeTab (divH.find (".menuD li:not('.ln')"), divH.find (".turn"), 0);

	var divI = jq ("#menu-i");
	changeTab (divI.find (".menuD li:not('.ln')"), divI.find (".turn"), 0);

	var divJ = jq ("#menu-j");
	changeTab (divJ.find (".menuA li"), divJ.find (".sn-list"), 0);

	var divK = jq ("#menu-k");
	changeTab (divK.find (".menuA li"), divK.find (".sn-list"), 0);

	var divL = jq ("#menu-l");
	changeTab (divL.find (".menuD li:not('.ln')"), divL.find (".turn"), 0);

	var divM = jq ("#menu-m");
	changeTab (divM.find (".menuA li"), divM.find (".turn"), 0);

	var divN = jq ("#menu-n");
	changeTab (divN.find (".menuA li"), divN.find (".turn"), 0);

	var divO = jq ("#menu-o");
	changeTab (divO.find (".menuA li"), divO.find (".sn-list"), 0);

	var divP = jq ("#menu-p");
	changeTab (divP.find (".menuA li"), divP.find (".turn"), 0);

	var divQ = jq ("#menu-q");
	changeTab (divQ.find (".menuA li"), divQ.find (".turn"), 0);

	var divR = jq ('#menu-r');
	changeTab (divR.find ('.tab-con li'), divR.find ('.turn'), 0);
	
	var divS = jq ('#menu-s');
	changeTab (divS.find ('.menuA li'), divS.find ('.sn-list'), 0);

	var divT = jq ('#menu-t');
	changeTab (divT.find(".menuD li:not('.ln')"), divT.find ('.turn'), 0);
	//滚动


	function autoScroll(rr, conr, lisr, btns, ts, unit, ft, auto, stopTime) {
		var conr0 = conr[0],
			btnPr = btns.find ('a.up'),
			btnNr = btns.find ('a.down'),
			sli = rr.find (".autoS li"),
			cls = "libg";
		var ff = ft || false;
		var auto = auto || false;
		var st = stopTime || 5000;
		if (lisr.length <= 1) return;

		var pnumr = unit,
			numr = lisr.length;
		if (numr <= pnumr) return;
		//if(numr <= pnumr) {btnWr.hide();return;}
		var owr = lisr[1].offsetLeft - lisr[0].offsetLeft,
			idxArear = [0, numr - pnumr],
			idxr = 0;

		if (ff) owr = lisr[1].offsetTop - lisr[0].offsetTop;

		function updateNum(n) {
			if (n > idxArear[1] || n < idxArear[0]) {
				return;
			}

			btnPr[((n == 0) ? 'add' : 'remove') + 'Class'] ('uN');
			btnNr[((n == idxArear[1]) ? 'add' : 'remove') + 'Class'] ('dN');

			idxr = n;
			if (ff) {
				conr.stop ().animate ({
					top: -n * owr
				}, ts);
			} else {
				conr.stop ().animate ({
					left: -n * owr
				}, ts);
			}
			sli.removeClass (cls).eq (n).addClass (cls);
		}

		var scoll = function () {
			if (idxr < idxArear[1]) {
				btnPr[((idxr == -1) ? 'add' : 'remove') + 'Class'] ('uN');
				btnNr[((idxr == (idxArear[1] - 1)) ? 'add' : 'remove') + 'Class'] ('dN');
				if (ff) {
					conr.stop ().animate ({
						top: owr * -(++idxr)
					}, ts);
				} else {
					conr.stop ().animate ({
						left: owr * -(++idxr)
					}, ts);
				}
				sli.removeClass (cls).eq (idxr).addClass (cls);
			}
			idxr = idxr >= idxArear[1] ? idxr = -1 : idxr;
			var ss = window.setTimeout (function () {
				scoll ()
			}, st);
		};
		if (auto == true) {
			var sss = window.setTimeout (function () {
				scoll ()
			}, 2000);
		}

		sli.each (function (ii) {
			jq (this).mouseenter (function (ev) {
				updateNum (ii);
				return false;
			});
		});

		btnPr.click (function (ev) {
			updateNum (idxr - 1);
			return false;
		});
		btnNr.click (function (ev) {
			updateNum (idxr + 1);
			return false;
		});
	}

	var sa = jq ("#today-new"); //id, 内容, 列表, 按钮, 时间, 显示个数, 滚动方向, 自动, 停留时间
	autoScroll (sa, sa.find (".con"), sa.find (".pic-txt"), sa.find (".btns"), 300, 1, false, false);

	var sc = jq ("#scroll-a");
	autoScroll (sc, sc.find (".con"), sc.find (".pic"), sc.find (".btns"), 300, 1, false, true);

});

//daShiYe
jQuery (function (jq) {
	var covId = jq ("#coverage");
	covId.find (".btn-show").hover (function () {
		covId.find (".pic-group").addClass ("pg-pub-hd");
		jq (this).hide ();
		covId.find (".btn-hide").show ();
	});
	covId.find (".btn-hide").click (function () {
		covId.find (".pic-group").removeClass ("pg-pub-hd");
		jq (this).hide ();
		covId.find (".btn-show").show ();
	});
	jq ('.pg-pub-hd').live ({
		mouseleave: function () {
			covId.find (".pic-group").removeClass ("pg-pub-hd");
			jq (".btn-hide").hide ();
			covId.find (".btn-show").show ();
		}

	});
});
//input
(function ($) {
	function FnInput(_Input) {
		var tempVal = '';
		$ (_Input).focus (function () {
			tempVal = '';
			tempVal = $ (this).val ();
			$ (this).attr ('value', '');
		});
		$ (_Input).blur (function () {
			if ($ (this).val () === '') {
				$ (this).attr ('value', tempVal);
			}
		});
	}

	var mainSearch = new FnInput ('#topSearch');
	var searchIn = new FnInput ('.search-in');
}) (jQuery);

//weibo
(function ($) {
	$ ('.tsohu-card').hide ();
	$ ('#tsohu_loginCard,#tsohu_notLoginCard').css ('left', -22222).hide ();
}) (jQuery);
//mob-layer
jQuery (function (jq) {
	jq ("#mobile").hover (function () {
		jq (".mob-layer").show ();
	}, function () {
		jq (".mob-layer").hide ();
	});
});
//auto
(function ($) {

	function sohu_auto_ip_location(d1) {
		var $ = function (id) {
			return document.getElementById (id);
		};
		var doc1 = $ ("news_auto_inc");
		var txt1 = doc1.innerHTML;

		try {
			if (d1) doc1.innerHTML = d1;
		} catch (e) {
			doc1.innerHTML = txt1;
		}

	}

	function sohu_auto_il_func() {
		try {
			if (typeof(sohu_IP_Loc) != "undefined") {
				var c = [
					{
						cn: ['CN11'],
						u : 'http://auto.sohu.com/frag/265026164/20299328_265026164.inc'
					},
					{
						cn: ['CN31'],
						u : 'http://auto.sohu.com/frag/265026182/20299328_265026182.inc'
					},
					{
						cn: ['CN4401', 'CN4402', 'CN4418', 'CN4409', 'CN4405', 'CN4451', 'CN4452', 'CN4420', 'CN4404', 'CN4408', 'CN4416', 'CN4414', 'CN4415', 'CN4413'],
						u : 'http://auto.sohu.com/frag/265026295/20299328_265026295.inc'
					},
					{
						cn: ['CN81', 'CN82', 'CN4403'],
						u : 'http://auto.sohu.com/frag/265027364/20299328_265027364.inc'
					},
					{
						cn: ['CN12'],
						u : 'http://auto.sohu.com/frag/265027411/20299328_265027411.inc'
					},
					{
						cn: ['CN3701', 'CN3708', 'CN3709', 'CN3712', 'CN3714', 'CN3715', 'CN3717'],
						u : 'http://auto.sohu.com/frag/265027256/20299328_265027256.inc'
					},
					{
						cn: ['CN1301', 'CN1306', 'CN1311', 'CN1309', 'CN1304', 'CN1307', 'CN1305'],
						u : 'http://auto.sohu.com/frag/265027312/20299328_265027312.inc'
					},
					{
						cn: ['CN23'],
						u : 'http://auto.sohu.com/frag/265026591/20299328_265026591.inc'
					},
					{
						cn: ['CN4406', 'CN4412', 'CN4453', 'CN4417', 'CN4407'],
						u : 'http://auto.sohu.com/frag/278734555/20299328_278734555.inc'
					},
					{
						cn: ['CN36'],
						u : 'http://auto.sohu.com/frag/265027156/20299328_265027156.inc'
					},
					{
						cn: ['CN42'],
						u : 'http://auto.sohu.com/frag/265027349/20299328_265027349.inc'
					},
					{
						cn: ['CN41'],
						u : 'http://auto.sohu.com/frag/265027225/20299328_265027225.inc'
					},
					{
						cn: ['CN50'],
						u : 'http://auto.sohu.com/frag/265026473/20299328_265026473.inc'
					},
					{
						cn: ['CN43'],
						u : 'http://auto.sohu.com/frag/265026570/20299328_265026570.inc'
					},
					{
						cn: ['CN1302', 'CN1303', 'CN1308', 'CN1310'],
						u : 'http://auto.sohu.com/frag/312274143/20299328_312274143.inc'
					},
					{
						cn: ['CN3205'],
						u : 'http://auto.sohu.com/frag/312274145/20299328_312274145.inc'
					},
					{
						cn: ['CN3702', 'CN3711'],
						u : 'http://auto.sohu.com/frag/265027042/20299328_265027042.inc'
					},
					{
						cn: ['CN3706', 'CN3710'],
						u : 'http://auto.sohu.com/frag/312274115/20299328_312274115.inc'
					},
					{
						cn: ['CN3713', 'CN3704'],
						u : 'http://auto.sohu.com/frag/312274117/20299328_312274117.inc'
					},
					{
						cn: ['CN3707'],
						u : 'http://auto.sohu.com/frag/312274142/20299328_312274142.inc'
					},
					{
						cn: ['CN3703', 'CN3716', 'CN3705'],
						u : 'http://auto.sohu.com/frag/312274198/20299328_312274198.inc'
					},
					{
						cn: ['CN14'],
						u : 'http://auto.sohu.com/frag/265027038/20299328_265027038.inc'
					},
					{
						cn: ['CN2102', 'CN2106', 'CN2107', 'CN2108', 'CN2114'],
						u : 'http://auto.sohu.com/frag/265027375/20299328_265027375.inc'
					},
					{
						cn: ['CN2101', 'CN2103', 'CN2104', 'CN2105', 'CN2109', 'CN2110', 'CN2112', 'CN2113'],
						u : 'http://auto.sohu.com/frag/265027032/20299328_265027032.inc'
					},
					{
						cn: ['CN22'],
						u : 'http://auto.sohu.com/frag/265027129/20299328_265027129.inc'
					},
					{
						cn: ['CN51', 'CN52'],
						u : 'http://auto.sohu.com/frag/265027037/20299328_265027037.inc'
					},
					{
						cn: ['CN61', 'CN62', 'CN63', 'CN64', 'CN65'],
						u : 'http://auto.sohu.com/frag/265026579/20299328_265026579.inc'
					},
					{
						cn: ['CN53'],
						u : 'http://auto.sohu.com/frag/312273643/20299328_312273643.inc'
					},
					{
						cn: ['CN3301', 'CN3305', 'CN3306', 'CN3308'],
						u : 'http://auto.sohu.com/frag/265026592/20299328_265026592.inc'
					},
					{
						cn: ['CN3201', 'CN3203', 'CN3213', 'CN3207', 'CN3208', 'CN3209', 'CN3212', 'CN3210'],
						u : 'http://auto.sohu.com/frag/265027376/20299328_265027376.inc'
					},
					{
						cn: ['CN3211', 'CN3202', 'CN3204'],
						u : 'http://auto.sohu.com/frag/308795560/20299328_308795560.inc'
					},
					{
						cn: ['CN3206'],
						u : 'http://auto.sohu.com/frag/312274200/20299328_312274200.inc'
					},
					{
						cn: ['CN3302', 'CN3309'],
						u : 'http://auto.sohu.com/frag/312274061/20299328_312274061.inc'
					},
					{
						cn: ['CN3303', 'CN3310', 'CN3311'],
						u : 'http://auto.sohu.com/frag/265027501/20299328_265027501.inc'
					},
					{
						cn: ['CN3304'],
						u : 'http://auto.sohu.com/s2011/frag/19/20058347_317884713.inc'
					},
					{
						cn: ['CN4419'],
						u : 'http://auto.sohu.com/frag/278734943/20299328_278734943.inc'
					},
					{
						cn: ['CN3501', 'CN71', 'CN3503', 'CN3504', 'CN3507', 'CN3509'],
						u : 'http://auto.sohu.com/frag/265027370/20299328_265027370.inc'
					},
					{
						cn: ['CN3502', 'CN3505', 'CN3506', 'CN3508'],
						u : 'http://auto.sohu.com/frag/265026406/20299328_265026406.inc'
					},
					{
						cn: ['CN34'],
						u : 'http://auto.sohu.com/frag/265027108/20299328_265027108.inc'
					}
				];
				var l = c.length;
				var u = 'http://auto.sohu.com/s2010/frag/05/20299328_273960925.inc';
				for (var i = 0; i < l; i++) {
					var d = c[i];
					var e = d.cn;
					var f = e.length;
					for (var j = 0; j < f; j++) {
						if (sohu_IP_Loc.indexOf (e[j]) == 0) {
							u = d.u;
							var script = document.createElement ('script');
							script.type = 'text/javascript';
							script.src = u;
							document.getElementsByTagName ('head')[0].appendChild (script);
							return;
						}
					}
				}
			}
		} catch (e) {}
	}

	sohu_auto_il_func ();
}) (jQuery);
//下面是房产ip回填代码
(function ($) {

	var __cityeIP;
	var i = 0;
	if (window.location.href.getQueryString ("ip") == null) {
		__cityeIP = sohu_IP_Loc.substr (0, 6);
	} else {
		__cityeIP = window.location.href.getQueryString ("ip");
	}

	var __citySN = {
		arr: ["CN11", "CN12", "CN13", "CN1303", "CN1304", "CN1305", "CN1306", "CN1308", "CN1309", "CN1311", "CN14", "CN1402", "CN1403", "CN1410", "CN15","CN1502", "CN21", "CN2102", "CN2103", "CN2104", "CN2106", "CN2109", "CN22", "CN2202", "CN2207", "CN2224","CN23", "CN2302", "CN2306", "CN2310","CN2312", "CN31", "CN32", "CN3202", "CN3204", "CN3205", "CN3206", "CN3207", "CN3208", "CN3210", "CN33", "CN3302", "CN3303", "CN3304", "CN3306", "CN3309", "CN34", "CN3402", "CN3403", "CN3405", "CN3408", "CN3410", "CN3412", "CN3415", "CN3417", "CN3418", "CN35", "CN3502", "CN3505", "CN3508", "CN36", "CN3604", "CN3610", "CN37", "CN3702", "CN3704", "CN3705", "CN3706", "CN3707", "CN3709", "CN3710", "CN3711", "CN3713", "CN3714", "CN3716", "CN41", "CN4102", "CN4103", "CN4107", "CN4109", "CN42", "CN4205", "CN4206", "CN4228", "CN43", "CN4302","CN4303", "CN4304", "CN4305", "CN4310", "CN44", "CN4403", "CN4404", "CN4409", "CN4412", "CN4413", "CN4418", "CN4419", "CN45", "CN4503", "CN46", "CN50", "CN51", "CN5113", "CN5114", "CN53", "CN5305", "CN5307", "CN5308", "CN5328", "CN5329", "CN5331", "CN5334", "CN61", "CN6104", "CN6105", "CN62", "CN64", "CN65", "CN99"]
		};

	var __citySearch = function (v) {
		var r = "",
			cl = __citySN.arr.length,
			cs = __citySN.arr;

		for (i = 0; i < cl; i++) {
			if (v == cs[i]) {
				return cs[i];
			}
		}
		for (i = 0; i < __citySN.arr.length; i++) {
			if (v.substr (0, 4) == cs[i]) {
				return cs[i];
			}
		}
		return cs[0];
	};
	var focusNews = function () {
		try {
			var str = "",
				jsonData, jsonLength = 0;
			jsonData = sohu_frag;
			var l = jsonData.left,
				m = jsonData.middle,
				r = jsonData.right;
			if (l != "") $ ("#focus_news1").html (jsonData.left);
			if (m != "") $ ("#focus_news2").html (jsonData.middle);
			if (r != "") $ ("#focus_news3").html (jsonData.right);

		} catch (e) {}
	};
	var focusCityData = function (cid) {
		try {
			var tcid = (__citySearch (cid.toUpperCase ()));

			if (tcid != "CN11") {
				// $.getScript(url, focusNews, true);
				var scriptDOM = document.createElement ("script");
				scriptDOM.src = "http://news.sohu.com/frag/focus/news_index_" + tcid + ".inc?_t=" + (new Date ()).getTime ();
				var head = document.getElementsByTagName ("head")[0];
				if ($.browser.msie && ($.browser.version - 0) < 9) {
					scriptDOM.onreadystatechange = focusNews;
				} else {
					scriptDOM.onload = focusNews;
				}
				head.appendChild (scriptDOM);

			}
		} catch (e) {}
	} (__cityeIP);
}) (jQuery);
//change-ico
(function ($) {

	function removeIcon() {
		$ ('.change-icon').removeClass ('change-icon-d');
	}

	$ ('.change-icon').click (function () {
		$ (this).addClass ('change-icon-d');

		var changeIcon = setTimeout (removeIcon, 1000);
		return false;
	});

}) (jQuery);
(function ($) {
	var sn = $ ('#scrollNews');
	var snBox = $ ('.ulBox');
	var snUl = sn.find ('ul');
	var snLi = snUl.find ('li');
	var distance = snLi.height ();
	var len = snLi.length;
	var timer = null;
	var i = 0;
	var snBtn = $ ('.scrollNews_btn');

	function timerFn() {
		timer = setInterval (function () {
			i++;
			if (i > len - 1) {
				i = 0
			}
			scrollNews (i);
		}, 3500);
		return i;
	}

	timerFn ();
	$ (snLi).hover (function () {
		clearInterval (timer);
	}, function () {
		timerFn ();
	});
	$ (snBtn).hover (function () {
		clearInterval (timer);
	}, function () {
		timerFn ();
	});

	function scrollNews(i) {
		snBox.stop (true, false).animate ({'top': -(distance * i)}, 200);
	}
}) (jQuery);
(function ($) {
	$ ('.pic-group').find ('img').live ({
		mouseenter   : function () {
			$ (this).stop (true, false).animate ({'opacity': 0.9}, 100);
		}, mouseleave: function () {
			$ (this).stop (true, false).animate ({'opacity': 1}, 100);
		}
	});
	$ ('.focus-pic').find ('img').live ({
		mouseenter   : function () {
			$ (this).stop (true, false).animate ({'opacity': 0.9}, 100);
		}, mouseleave: function () {
			$ (this).stop (true, false).animate ({'opacity': 1}, 100);
		}
	});
}) (jQuery);