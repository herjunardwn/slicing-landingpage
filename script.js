var swiper = new Swiper(".mySwiperPopular", {
  grabCursor: true,
  spaceBetween: 15,
  centeredSlides: false,
  slidesPerView: "auto",
  navigation: {
    nextEl: ".bxs-chevron-right-circle",
    prevEl: ".bxs-chevron-left-circle",
  },
});

$(() => {
  $(".new-card").slice(0, 4).show();
  $(".load-more").click(function (e) {
    e.preventDefault();
    $(".new-card:hidden").slice(0, 4).slideDown();
  });
});

var swiper2 = new Swiper(".mySwiperBlog", {
  grabCursor: true,
  spaceBetween: 15,
  centeredSlides: false,
  slidesPerView: "auto",
  pagination: {
    el: ".swiper-pagination",
  },
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
});

$(document).ready(function () {
  $(".nav-link").click(function () {
    $(".nav-link").removeClass("active");
    $(this).addClass("active");
  });
});

// AOS
AOS.init();
