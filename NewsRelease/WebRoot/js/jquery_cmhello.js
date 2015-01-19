$(document).ready(function() {
	$("#navmenu ul li:has(ul)").hover(function() {
		$(this).children("a").css({
			color : "#fff"
		});
		if ($(this).find("li").length > 0) {
			$(this).children("ul").stop(true, true).slideDown(100)
		}
	}, function() {
		$(this).children("a").css({
			color : "#fff"
		});
		$(this).children("ul").stop(true, true).slideUp("fast")
	});
})
$(document)
		.ready(
				function() {
					getsiteID = $('div.site_nav1, div.site_nav2').attr('id');
					$('div.site_nav dl a').each(function() {
						getNavClass = $(this).attr('class');
						if (getNavClass == getsiteID) {
							$('div.site_nav dl a').removeClass('cur');
							$(this).addClass('cur')
						}
					});
					$(
							'div.hot_box a.title, div.index_art li a, ul.index_resourse_list a')
							.hover(function() {
								$(this).animate({
									paddingLeft : "20px"
								}, 300);
							}, function() {
								$(this).animate({
									paddingLeft : "15px"
								}, 300);
							});// hotbox
					$("div.tip_trigger a.img").hover(function() {
						$(this).parent('div.tip_trigger').css({
							'background' : '#e23a0a',
							'z-index' : '1000'
						});
						$('#h_coolsite .block').show();
						tip = $(this).siblings('.tip');
						tip.show();
					}, function() {
						$(this).parent('div.tip_trigger').css({
							'background' : 'none',
							'z-index' : '0'
						});
						$('#h_coolsite .block').hide();
						tip.hide();
					})
				});
