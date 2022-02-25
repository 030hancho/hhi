// gnb 등장
$(function(){

    $('.h_menu').on('click', function(){

        

    })

})

/* ---------------------------------------------------------- */

// 기본 이벤트 제거
window.addEventListener("wheel", function(e){
	e.preventDefault();
},{passive : false});

// 참조요소 탐색 및 선언
var $html = $("html");
 
var page = 1;
 
var lastPage = $(".content").length;
 
$html.animate({scrollTop:0},10);

// 스크롤 이벤트
$(window).on("wheel", function(e){
 
	if($html.is(":animated")) return;
 
	if(e.originalEvent.deltaY > 0){
		if(page== lastPage) return;
 
		page++;
	}else if(e.originalEvent.deltaY < 0){
		if(page == 1) return;
 
		page--;
	}
	var posTop = (page-1) * $(window).height();
 
	$html.animate({scrollTop : posTop});
 
});
// 출처 : https://chpofo.tistory.com/44

/* --------------------------------------------------------------- */

//con_main
$(function(){

    $('.main_h2').hide();
    $('.main_h4').hide();
    $('.main_h2').fadeIn(500);
    $('.main_h4').fadeIn(900);

})

//c2_hover
$(function(){

    $('.c2_list li').hover(function(){

        $('.c2_list li').removeClass('on');
        $(this).addClass('on');

    })

})

// c3_click
$(function(){
    $('.con3_list li').on('click', function(){

        $('.con3_list li').removeClass('c3_on');
        $(this).addClass('c3_on');

        var i = $(this).index();

        $('.video>div').removeClass('c3_on');
        $('.video>div').eq(i).addClass('c3_on');

    })
})

// c4_popup
$(function(){

    $('.popup').hide();
    $('.usa li:nth-child(1)').on('click', function(){
        $('.blurbg').removeClass('blur-out');
        $('.pop_up1').fadeIn(800);
        $('.blurbg').addClass('blur-in');
    });
    $('.usa li:nth-child(2)').on('click', function(){
        $('.blurbg').removeClass('blur-out');
        $('.pop_up2').fadeIn(800);
        $('.blurbg').addClass('blur-in');
    });
    $('.usa li:nth-child(3)').on('click', function(){
        $('.blurbg').removeClass('blur-out');
        $('.pop_up3').fadeIn(800);
        $('.blurbg').addClass('blur-in');
    });
    $('.eu li:nth-child(1)').on('click', function(){
        $('.blurbg').removeClass('blur-out');
        $('.pop_up4').fadeIn(800);
        $('.blurbg').addClass('blur-in');
    });
    $('.eu li:nth-child(2)').on('click', function(){
        $('.blurbg').removeClass('blur-out');
        $('.pop_up5').fadeIn(800);
        $('.blurbg').addClass('blur-in');
    });
    $('.eu li:nth-child(3)').on('click', function(){
        $('.blurbg').removeClass('blur-out');
        $('.pop_up6').fadeIn(800);
        $('.blurbg').addClass('blur-in');
    });
    $('.asia li:nth-child(1)').on('click', function(){
        $('.blurbg').removeClass('blur-out');
        $('.pop_up7').fadeIn(800);
        $('.blurbg').addClass('blur-in');
    });
    $('.asia li:nth-child(2)').on('click', function(){
        $('.blurbg').removeClass('blur-out');
        $('.pop_up8').fadeIn(800);
        $('.blurbg').addClass('blur-in');
    });
    $('.me li').on('click', function(){
        $('.blurbg').removeClass('blur-out');
        $('.pop_up9').fadeIn(800);
        $('.blurbg').addClass('blur-in');
    });

    $('.close_btn').on('click', function(e){
        e.preventDefault();

        $('.popup').fadeOut();

        $('.blurbg').removeClass('blur-in');
        $('.blurbg').addClass('blur-out');

        });

}) // doc