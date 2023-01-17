const contentBox1 = document.querySelector(".content-hide.sec1");
const contentBox2 = document.querySelector(".content-hide.sec2");
const hiddenBtn1 = document.querySelector(".imgbox .txt .sec1");
const hiddenBtn2 = document.querySelector(".imgbox .txt .sec2");

hiddenBtn1.addEventListener("click", (e) => {
  e.preventDefault();
  hiddenBtn1.classList.toggle("on");
  //   contentBox1.classList.toggle("on");
});

hiddenBtn2.addEventListener("click", (e) => {
  e.preventDefault();
  hiddenBtn2.classList.toggle("on");
  //   contentBox2.classList.toggle("on");
});

$(".imgbox .txt .sec1").click(function () {
  if ($(".content-hide.sec1").is(":visible")) {
    $(".content-hide.sec1").slideUp();
  } else {
    $(".content-hide.sec1").slideDown({
      start: function () {
        $(this).css({
          display: "flex",
        });
      },
    });
  }
});

$(".imgbox .txt .sec2").click(function (e) {
  $(this).parent("li").toggleClass("active");
  if ($(".content-hide.sec2").is(":visible")) {
    $(".content-hide.sec2").slideUp();
  } else {
    $(".content-hide.sec2").slideDown();
  }
});

$(function () {
  let Win_W = $(window).width();
  let Wedo_Slider = undefined;

  function resizeSwiper() {
    if (Win_W < 601 && Wedo_Slider == undefined) {
      Wedo_Slider = new Swiper(".m-swiper", {
        slidesPerView: 1,
        spaceBetween: 8,
        loop: false,
        // autoplay: {
        //   delay: 5000,
        //   disableOnInteraction: false // 쓸어 넘기거나 버튼 클릭 시 자동 슬라이드 정지 비활성화.
        // },
      });
    } else if (Win_W > 601 && Wedo_Slider != undefined) {
      Wedo_Slider.destroy();
      Wedo_Slider = undefined;
    }
  }

  resizeSwiper();

  $(window).on("resize", function () {
    Win_W = $(window).width();
    resizeSwiper();
  });
});

$(function () {
  let Win_W = $(window).width();
  let Wedo_Slider = undefined;

  function resizeSwiper() {
    if (Win_W < 1023 && Wedo_Slider == undefined) {
      Wedo_Slider = new Swiper(".mt-swiper", {
        slidesPerView: "auto",
        spaceBetween: 0,
        loop: false,
        // autoplay: {
        //   delay: 5000,
        //   disableOnInteraction: false // 쓸어 넘기거나 버튼 클릭 시 자동 슬라이드 정지 비활성화.
        // },
        breakpoints: {
          280: {
            slidesPerView: 1,
            spaceBetween: 8,
          },
          600: {
            slidesPerView: "auto",
          },
        },
      });
    } else if (Win_W > 1023 && Wedo_Slider != undefined) {
      Wedo_Slider.destroy();
      Wedo_Slider = undefined;
    }
  }

  resizeSwiper();

  $(window).on("resize", function () {
    Win_W = $(window).width();
    resizeSwiper();
  });
});
