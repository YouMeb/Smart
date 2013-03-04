$(function() {
	//首頁選單開始
	var $mini_top_tab_subs = $('.dropdownmenu').find('a').hammer(),
		$showadframe = $('.showadframe'),
		$megas = $('.showadframe'),
		$lis = $('.dropdownmenu'),
		$close_btn = $('.close_style').hammer(),
		$mouseleavemenu = $('.megamenu');

	$mouseleavemenu.on('mouseleave', function(event) {
		$mini_top_tab_subs.removeClass('checktime');
		$showadframe.removeClass('fadeIn').addClass('fadeOut');
	});
	$close_btn.on('tap', function(event){
		$mini_top_tab_subs.removeClass('checktime');
		$showadframe.removeClass('fadeIn').addClass('fadeOut');
	})

	$mini_top_tab_subs.on('tap', function(event) {
		event.preventDefault();
		$mini_top_tab_subs.each(function() {
			document.getElementById('showaddiv1').style.display = 'none';
			$('.megamenu').css('display', 'none');
			$showadframe.removeClass('active');
		});
		$('.megamenu').hide();
		var section = $(this).data('section');
		if ($(this).hasClass('checktime')){
			
			switch(section) {
			case 'aab':
				$('.megamenu_' + section).show().addClass('fadeIn');
				if($('#drop1').hasClass('checktime')) {
					console.log('go!!');
					//location.href = '/test/tpl/dd2.php'; //請輸入課程Url
				}
				break;
			case 'aa':
				$('.megamenu_' + section).show().addClass('fadeIn');
				if($('#drop1').hasClass('checktime')) {
					location.href = '/test/tpl/dd2.php'; //請輸入課程Url
				}
				break;
			case 'class':
				$('.megamenu_' + section).show().addClass('fadeIn');
				if($('#drop2').hasClass('checktime')) {
					location.href = '/test/tpl/dd2.php'; //請輸入課程Url
				}
				break;
			case 'DVD':
				$('.megamenu_' + section).show().addClass('fadeIn');
				if($('#drop3').hasClass('checktime')) {
					location.href = '/test/tpl/dd3.php'; //請輸入DVD Url
				}
				break;
			case 'magazine':
				$('.megamenu_' + section).show().addClass('fadeIn');
				if($('#drop4').hasClass('checktime')) {
					location.href = '/test/tpl/dd4.php'; //請輸入雜誌Url
				}
				break;
			case 'book':
				location.href = '/test/tpl/dd.php'; //請輸入叢書Url
				break;
			case 'forum':
				location.href = '/test/tpl/dd.php'; //請輸入討論區Url
				break;
			case 'purchase':
				location.href = '/test/tpl/dd.php'; //請輸入限時搶購Url
				break;
			}

		}else{
			switch(section) {
			case 'aa':
				$('.megamenu_' + section).show().addClass('fadeIn');
				break;
			case 'class':
				$('.megamenu_' + section).show().addClass('fadeIn');
				break;
			case 'DVD':
				$('.megamenu_' + section).show().addClass('fadeIn');
				break;
			case 'magazine':
				$('.megamenu_' + section).show().addClass('fadeIn');
				break;
			case 'book':
				location.href = '/test/tpl/dd.php'; //請輸入叢書Url
				break;
			case 'forum':
				location.href = '/test/tpl/dd.php'; //請輸入討論區Url
				break;
			case 'purchase':
				location.href = '/test/tpl/dd.php'; //請輸入限時搶購Url
				break;
			}
			$(this).addClass('checktime');
			
		}
		
	});
	//首頁選單結束



});