(function($){
  $.extend({
	 BackToTop: function(options){
		var _defaults = {
			model: ['text','Top'], /*text, image*/
			position: {bottom:20, right:0}
		};
		options = $.extend(_defaults, options);
		
		var _layoutInit = function(){
		  
		  var  $_btt = $('<div id="backtotop"></div>');
		  if(options.model[0] == 'text'){
			  $_btt.addClass('btt-text');
			  $_btt.html(options.model[1])
		  }else if(options.model[0] == 'image'){
			
			   $_btt = $('<div id="backtotop"><img src="'+options.model[1]+'"/></div>');
			   $_btt.addClass('btt-image');
		  }else{
			  return false;
		  }
		 
		  $_btt.css(options.position);
		  $_btt.appendTo($('body'));
	    };
		var _animation = function(){
		  var $btt = $('#backtotop');
		  $(window).scroll(function() {
				//if($(this).scrollTop() >= $(document).height() - $(this).height()) {
			    if($(this).scrollTop() >= 200) {
					$btt.fadeIn();	
				} else {
					$btt.fadeOut();
				}
		 });
		  $btt.on('click', function(){
			   $("html, body").on("scroll mousedown DOMMouseScroll mousewheel keyup", function() {
                  $('html, body').stop();
               });
               $('html,body').animate({ scrollTop: 0 }, 1200, function() {
                  $("html, body").off("scroll mousedown DOMMouseScroll mousewheel keyup");
               });
		  });
		};
       
	    _layoutInit();
		_animation();
	}
  });
})(jQuery);