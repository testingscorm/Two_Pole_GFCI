// JavaScript Document
//"""""""""""""""""""""""""""""""""""""""""""""""""Top Navigation
	function fnOpenMenu()
	{
		$("video").each(function () { this.pause() });
		$("#menu").attr("class", "md-modal md-effect-8 md-show");
	}
	function toggleZoom() 
	{	
		if ( $('.sj-book').data().zoomIn == false )
		{
			$("#book-zoom").css("transform", "scale(1.5, 1.5)");
			$('.sj-book').data().zoomIn = true;
			$("body").css("overflow", "auto");
		}else{
			$("#book-zoom").css("transform", "scale(1, 1)");
			$('.sj-book').data().zoomIn = false;
			$("body").css("overflow", "hidden");
		}	
	}
	function toggleFullscreen(elem) 
	{
		var browserName = navigator.userAgent.toLowerCase();
		if ( browserName.indexOf("msie") != -1) 
		{
			alert("Press F11 to activate FullScreen")

		} else if(browserName.indexOf("trident") != -1) { //IE 11
			alert("Press F11 to activate FullScreen")

		} else {
			elem = elem || document.documentElement;
			if (!document.fullscreenElement && !document.mozFullScreenElement && !document.webkitFullscreenElement && !document.msFullscreenElement) 
			{
					if (elem.requestFullscreen) 
					{
					  elem.requestFullscreen();
					} else if (elem.msRequestFullscreen) {
					  elem.msRequestFullscreen();
					} else if (elem.mozRequestFullScreen) {
					  elem.mozRequestFullScreen();
					} else if (elem.webkitRequestFullscreen) {
					  elem.webkitRequestFullscreen(Element.ALLOW_KEYBOARD_INPUT);
					}

			} else {
					if (document.exitFullscreen) 
					{
					  document.exitFullscreen();
					} else if (document.msExitFullscreen) {
					  document.msExitFullscreen();
					} else if (document.mozCancelFullScreen) {
					  document.mozCancelFullScreen();
					} else if (document.webkitExitFullscreen) {
					  document.webkitExitFullscreen();
					}

			}
		}
	}
	function fnFirst(){ 
		$('.sj-book').turn('page', 1);						
	}	
	function fnPagination()
	{
		document.getElementsByName("pg_txt").item(0).value = String($('.sj-book').turn('page') + " of " + $('.sj-book').turn('pages') );
	}
	function fnLast() 
	{ 
		var lp = $('.sj-book').turn('pages');
		$('.sj-book').turn('page', lp); 
	}
	function fnGBack() 
	{ 
		$('.sj-book').turn('previous'); 
	}
	function fnGNext() 
	{ 
		$('.sj-book').turn('next'); 
	}


	function fnPrint()
	{
		var browserName = navigator.userAgent.toLowerCase();
		if ( ( browserName.indexOf("msie") != -1) || (browserName.indexOf("trident") != -1) )
		{ 
			iframe = document.getElementById('iFramePdf');
			iframe.contentWindow.document.execCommand('print', false, null);
		}else{
			function printTrigger(elementId) 
			{
				var getMyFrame = document.getElementById(elementId);
				getMyFrame.contentWindow.close();
				getMyFrame.contentWindow.focus();
				getMyFrame.contentWindow.print();
			}
			printTrigger('iFramePdf');
		}
		
	}
	function fnOpenHelp()
	{
		$("video").each(function () { this.pause() });
		$("#helpwin").attr("class", "md-modal md-effect-8 md-show");
		
	}

	function fnCloseModel()
	{
		$("#menu").attr("class", "md-modal md-effect-8");
		$("#share").attr("class", "md-modal md-effect-8");
		$("#helpwin").attr("class", "md-modal md-effect-8");
		
	}





	/*document.getElementById('btnHome').addEventListener('click', function() {  fnHome(); });*/
	document.getElementById('btnMenu').addEventListener('click', function() {  fnOpenMenu(); });
	//document.getElementById('btnZoom').addEventListener('click', function() {  toggleZoom(); });
	document.getElementById('btnFullscreen').addEventListener('click', function() {  toggleFullscreen(); });
	/*document.getElementById('btnNext').addEventListener('click', function() {  fnNext(); });
	document.getElementById('btnBack').addEventListener('click', function() {  fnBack(); });*/
	document.getElementById('btnFirst').addEventListener('click', function() {  fnFirst(); });
	document.getElementById('btnLast').addEventListener('click', function() {  fnLast(); });
	/*document.getElementById('btnShare').addEventListener('click', function() {  fnOpenShare(); });*/
	/*document.getElementById('btnPrint').addEventListener('click', function() {  fnPrint(); });*/
	document.getElementById('btnHelp').addEventListener('click', function() {  fnOpenHelp(); });
	document.getElementById('global_next').addEventListener('click', function() {  fnGNext(); });
	document.getElementById('global_back').addEventListener('click', function() {  fnGBack(); });