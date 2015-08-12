 $(document).ready(function () { 
     $('.menu.btn').click(function() {
            $(this).toggleClass('open getBig');
            $('.icon').toggleClass('centerBurger');
            $('.smallNav').html("<ul><li><a href='#about' class='links'>About</a></li><li><a href='#work' class='links'>Work</a></li><li><a href='#school' class='links'>School</a></li><li><a href='#contact' class='links'>Contact</a></li></ul>");
            $('.smallNav').toggle();
//FOR ANCHOR SCROLLING
     $(function(){
            $('a.links').click(function(event) {
 	        event.preventDefault();
            var elementClicked = $(this).attr('href');
	      //console.log(elementClicked);
            var destination = $(elementClicked).offset().top - 32;
            $('html:not(:animated),body:not(:animated)').animate({ scrollTop: destination}, 500 );
});
});
});
//FOR FULL PAGE NAV FIXED MENU
	 $(window).scroll(function(){
            var top=$(this).scrollTop();
            //console.log(top);
            if(top>1){
				$('.fullPage').css({'position':'fixed', 'height':'50px'});
				$('.fullPage ul').css({'padding': '0', 'margin':'.5%'});
				$('.fullPage a').css({'font-size':'125%'});
				$('.logo').css({'height':'50px'});
			}
			else {
				$('.fullPage').css({'position':'relative', 'height':'100px'});
				$('.fullPage ul').css({'padding': '2%', 'margin':'0 auto'});
				$('.fullPage a').css({'font-size':'200%'});
				$('.logo').css({'height':'100px'});
			}
});
//FOR RESPONSIVE NAV STYLING WHILE SCROLLING    
     $(window).scroll(function(){
            var top=$(this).scrollTop();
	        //console.log(top);
            if(top>25){
                $('.menu.btn').css({'top':'75px', 'right': '-2.5px', 'background':'none'});
                $('.icon').addClass('special');
				$('.menu.btn').click(function() {
					$(this).css({'background':'purple'});
					$('.icon').removeClass('special');
					$('.getBig').css({'right':'15px'});
});
	    }
       else {
             $('.menu.btn').css({'top': '15px', 'right': '15px', 'background':'purple'});
             $('.icon').removeClass('special');
        }
});        
//FOR OPEN SCROLLING      
                $(window).scroll(function() {
                    var icon = $(".icon");
                    var button = $('.menu.btn');
                if ( (icon.hasClass('centerBurger')) && (icon.hasClass('special')) && (button.hasClass('open')) ) {
                    icon.removeClass('special'); 
                    button.css({'background':'purple'});
                    //console.log('working');
        }
});
//FOR HIGHTLIGHTING ACTIVE
});