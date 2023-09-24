$(function () {
  // vedio
  new VenoBox({
    selector: ".my-video-links",
  });

  // preloder-js
  $("#main-preloder")
    .delay(3000)
    .fadeOut(200, function () {});

  // mobile nav
  function openNav() {
    document.body.style.overflowY = "hidden";
    $("#offcanvas-nav").addClass("open");
  }

  function closeNav() {
    document.body.style.overflowY = "";
    $("#offcanvas-nav").removeClass("open");
  }

  $("#nav-opn-btn").on("click", openNav);
  $("#nav-cls-btn").on("click", closeNav);

  // back to top
  $(" .back-to-top i").on("click", function () {
    $("html,body").animate({
      scrollTop: 0,
    });
  });

  $(window).scroll(function () {
    var scrolling = $(this).scrollTop();

    if (scrolling > 50) {
      $(".menu-bg").addClass("nav-bg");
    } else {
      $(".menu-bg").removeClass("nav-bg");
    }

    var scrolling = $(this).scrollTop();
    if (scrolling > 20) {
      $(".back-to-top i").fadeIn(500);
    } else {
      $(".back-to-top i").fadeOut(500);
    }
  });

  $(window).on("load", function () {
    if ($(".shafull-container").length > 0) {
      var $grid = $(".shafull-container");
      $grid.shuffle({
        itemSelector: ".shaf-item",
        sizer: ".shaf-sizer",
      });
      /* reshuffle when user clicks a filter item */
      $(".shaf-filter li").on("click", function () {
        // set active class
        $(".shaf-filter li").removeClass("active");
        $(this).addClass("active");
        // get group name from clicked item
        var groupName = $(this).attr("data-group");
        // reshuffle grid
        $grid.shuffle("shuffle", groupName);
      });
    }
  });

  // additional-details
  $(".testi-inner").slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    autoplay: true,
    autoplaySpeed: "2000",
  });

  $(".news-slick").slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: false,
    dots: true,
    centerMode: true,
    centerPadding: "0",
    autoplay: true,
    autoplaySpeed: "1000",

    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  });

  // photographer
  $(".slick-service").slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: false,
    dots: true,
    centerMode: true,
    centerPadding: "0",
    autoplay: true,
    autoplaySpeed: "2000",
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  });

  // photogallery
  $(".portfolio-gallery").slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: true,
    dots: true,
    centerMode: true,
    centerPadding: "0",
    autoplay: true,
    autoplaySpeed: "2000",

    nextArrow:
      '<span class="next-arrow"><i class="fa-solid fa-arrow-left"></i></span>',
    prevArrow:
      '<span class="prev-arrow"><i class="fa-solid fa-arrow-right"></i></span>',

    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  });

  // photogallery-gap
  $(".photogallary-gap").slick({
    slidesToShow: 4,
    slidesToScroll: 1,
    arrows: true,
    dots: true,
    centerMode: true,
    centerPadding: "0",
    autoplay: true,
    autoplaySpeed: "2000",
    prevArrow: ".prev",
    nextArrow: ".next",

    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  });

  $(".testimonial-box").slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    dots: false,
    autoplay: true,
    autoplaySpeed: "2000",
  });

  // Service slick

  $(".mar-top").slick({
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: false,
    dots: true,
    autoplay: true,
    autoplayspeed: "2000",
    centerMode: true,
    centerPadding: "0",
    responsive: [
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },

      {
        breakpoint: 991,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
    ],
  });

  // customers-item slick
  $(".customers-inner").slick({
    slidesToShow: 7,
    slidesToScroll: 1,
    arrows: false,
    centerMode: true,
    centerPadding: "0",
    autoplay: true,
    autoplaySpeed: "2000",
    responsive: [
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 5,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 5,
          slidesToScroll: 1,
        },
      },
    ],
  });

  // customer-head-item-slick
  $(".customer-head-item-slick").slick({
    slidesToShow: 2,
    slidesToScroll: 1,
    arrows: false,
    autoplay: true,
    dots: true,
    autoplaySpeed: "2000",
    responsive: [
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  });

  // counter up js
  $(".counter").counterUp({
    delay: 100,
    time: 5000,
  });

  //   iso-top

  $(".grid").isotope({
    // options...
    itemSelector: ".grid-item",
    layoutMode: "masonry",
    resize: true,
    masonry: {
      gutter: 30,
      columnWidth: ".grid-item",
    },
    percentPosition: true,
    fitColumns: {
      gutter: ".grid-sizer",
    },
  });

  // blog-slick
  $(".blog-top").slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: false,
    autoplay: true,
    dots: true,
    autoplaySpeed: "2000",
    responsive: [
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
    ],
  });

  // b-slick
  $(".b-slick").slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: false,
    autoplay: true,
    autoplaySpeed: "2000",
    // autoplay: true,
    dots: true,
    centerMode: true,
    centerPadding: "0",
    autoplaySpeed: "2000",
    responsive: [
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
    ],
  });

  // additional-details
  $(".additional-details-top").slick({
    slidesToShow: 2,
    slidesToScroll: 1,
    arrows: false,
    autoplay: true,
    autoplaySpeed: "2000",
    dots: true,
    centerMode: true,
    centerPadding: "0",
    responsive: [
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
    ],
  });
});
