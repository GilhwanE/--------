$(document).ready(function () {


    //toggle menu
    const tab = $(".burger");
    const menu = $("nav");

    tab.click(function () {
        menu.toggleClass("on");
    })

    // section
    $(window).scroll(function () {
        let sct = $(window).scrollTop();

        $("section").each(function (index) {
            if (sct > $(this).offset().top - 500) {
                $(this).addClass("active");
            }
        })
    })

    // section3
    const slideTxt = $(".contextItem");
    const slide = $(".swiper-slide");
    const slideCount = slideTxt.length;
    let currentIdx = 0;
    function slideMove(num) {
        slideTxt.eq(num).show().siblings().hide();
        currentIdx = num;
    }
    slideMove(0);
    function autoSlide() {
        autoslide = setInterval(function () {
            let nextIdx = (currentIdx + 1) % slideCount;
            slideMove(nextIdx);
        }, 9000)
    }
    autoSlide()
    function stopSlide() {
        clearInterval(autoSlide);
    }
    slide.mouseenter(function () {
        stopSlide();
    })
    slide.mouseleave(function () {
        autoSlide();
    })

    //특정위치 스크롤 나타나는 애니메이션
    $(window).scroll(function () {
        if ($(this).scrollTop() > 500) {
            $('.f_top').css('opacity', '1');
        } else {
            $('.f_top').css('opacity', '0');
        }
    });

    //스크롤 top 이동
    $('.f_top').click(function () {
        $("html, body").animate({ scrollTop: 0 }, 500);
        return false;
    });

    $('.gnb li').click(function () {
        var scrollPosition = $($(this).attr("data-target")).offset().top;
        $("body").animate({
            scrollTop: scrollPosition
        }, 500);
    })
});

function fnMove(seq) {
    var offset = $("#section" + seq).offset();
    $('html, body').animate({
        scrollTop: offset.top
    }, 800);
}
function fnMove2() {
    var offset = $("#footer").offset();
    $('html, body').animate({
        scrollTop: offset.top
    }, 800);
}

function emailJs(target) {
    target.each(function () {
        let $value = $(this).val();
        let $check = $('#check1').is(':checked')
        if (!$value) {
            $(this).addClass("error");
        }else if(!$check){
            $(this).addClass("error");
        }
        else {
            $(this).removeClass("error");
        }
    })
    let $errorCount = $(".error").length;
    console.log($errorCount);
    if (!$errorCount == 0) {
        $("#submit").prop('disabled', true).val("Please enter and check the empty items.");
    }
}
$("#submit").click(function () {
    const W_input = $(".sec6_con_contact").find(".con_input");
    emailJs(W_input);
});

$(".con_input").click(function () {
    console.log($(this));
    $(this).removeClass("error");
    $("#submit").prop('disabled', false).val("send");
})

//email js 플러그인
$(function () {
    emailjs.init('user_fQFCEDyqXrsGP6J7RuW3y');
});
window.onload = function () {
    document.getElementById('contact_form').addEventListener('submit', function (event) {
        event.preventDefault();
        // generate a five digit number for the contact_number variable
        this.contact_number.value = Math.random() * 100000 | 0;
        // these IDs from the previous steps
        emailjs.sendForm('hyunjun', 'template_crfo2rp', this)
            .then(function () {
                alert('Thank you for your inquiry. We will reply as soon as possible.');
            }, function (error) {
                console.log('FAILED...', error);
            });
    });
}
