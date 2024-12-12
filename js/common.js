$( function () {

var swiper = new Swiper('.main_sl', {
	pagination: '.swiper-pagination',
	nextButton: '.swiper-button-next1',
	prevButton: '.swiper-button-prev1',
	paginationClickable: true,
	spaceBetween: 0,/*이지 사이간격*/
	speed: 600,
	autoplay: 2000,
	loop:true
});

//소트 메뉴 펼침
$(".mobile_search .main_bt10").on("click", function() {
    $(this).toggleClass("active");
    $(".sub_search_box").stop(true,true).slideToggle(200);
    return false;
});
// 체크박스 전체선택 및 전체해제
$("#chk_all").click(function() {
   if ($("#chk_all").is(":checked")) {
      $(".chk").prop('checked', true);
   } else {
      $(".chk").prop('checked', false);
   }
});

// 한개의 체크박스 선택 해제시 전체선택 체크박스도 해제
$(".chk").click(function() {
   if ($("input[name='chk']:checked").length == 2) {
      $("#chk_all").prop('checked', true);
   } else {
      $("#chk_all").prop('checked', false);
   }
});

/*tab*/
$(".tab1_bt").click(function(){
	$(".tab_view1").css("display","block");
	$(".tab_view2").css("display","none");
});
$(".tab2_bt").click(function(){
	$(".tab_view2").css("display","block");
	$(".tab_view1").css("display","none");
});


/*인풋 달력창*/
$.datepicker.setDefaults({
	dateFormat: 'yy-mm-dd',
	prevText: '이전 달',
	nextText: '다음 달',
	monthNames: ['1월', '2월', '3월', '4월', '5월', '6월', '7월', '8월', '9월', '10월', '11월', '12월'],
	monthNamesShort: ['1월', '2월', '3월', '4월', '5월', '6월', '7월', '8월', '9월', '10월', '11월', '12월'],
	dayNames: ['일', '월', '화', '수', '목', '금', '토'],
	dayNamesShort: ['일', '월', '화', '수', '목', '금', '토'],
	dayNamesMin: ['일', '월', '화', '수', '목', '금', '토'],
	showMonthAfterYear: true,
	yearSuffix: '년',
	changeMonth : true,
	changeYear : true,
	yearRange : 'c-70:c+10'

});

$(".datepicker1_img").click(function(){
	$(".datepicker1").focus();
});
$(".datepicker2_img").click(function(){
	$(".datepicker2").focus();
});
$(".datepicker3_img").click(function(){
	$(".datepicker3").focus();
});
$(".datepicker4_img").click(function(){
	$(".datepicker4").focus();
});
$(".datepicker5_img").click(function(){
	$(".datepicker5").focus();
});
$(".datepicker6_img").click(function(){
	$(".datepicker6").focus();
});

$(".datepicker1").datepicker();
$(".datepicker2").datepicker();
$(".datepicker3").datepicker();
$(".datepicker4").datepicker();
$(".datepicker5").datepicker();
$(".datepicker6").datepicker();

});

$(function() {
    page.init();
})

var page = {
    init: function() {
        page.style();
    },
    style: function() {
        $(".select_box .btn_value").off("click").on("click", function() {
            $(this).parent().toggleClass("active").find(".select_list").stop(true,true).fadeToggle(200);
            return false;
        });
        $(".select").off("change").on("change", function() {
            $(this).parent().parent().find(".btn_value").html($(this).find("option:selected").text());
            if($(this).hasClass("select_url") && this.value != "") {
                location.href = this.value;
            }
        }).each(function() {
            $(this).parent().parent().find(".btn_value").html($(this).find("option:selected").text());
        });
    }
}


function layer_open() {	
	$("#layer_popup").bPopup({
            modalClose: false,
            opacity: 0.6,
            positionStyle: 'fixed' //'fixed' or 'absolute'
        });
}

function layer_open2() {	
	$("#layer_popup2").bPopup({
            modalClose: false,
            opacity: 0.6,
            positionStyle: 'fixed' //'fixed' or 'absolute'
        });
}

function openNav() {
    document.getElementById("mySidenav").style.width = "100%";
/*    document.getElementById("main").style.marginLeft = "-250px";*/
}

function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
/*    document.getElementById("main").style.marginLeft= "0";*/
}

// 문서상단에서 20px 아래로 스크롤되면 top버튼이 나타남
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        document.getElementById("topup").style.display = "block";
    } else {
        document.getElementById("topup").style.display = "none";
    }
}

// top버튼 클릭시 맨위로 이동
function topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}