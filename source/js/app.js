$(function () {
  $("#owl-slider-main").owlCarousel({
    navigation: false,
    slideSpeed: 3000,
    autoPlay: 3000,
    paginationSpeed: 1500,
    singleItem: true,
    stopOnHover: true,
    lazyLoad: true,
    responsive: true,
    responsiveRefreshRate: 200,
    responsiveBaseWidth: window,
    autoHeight: true,
    loop: true
  });
  $("#owl-slider-catalog").owlCarousel({
    navigation: true,
    navigationText: [" ", " "],
    pagination: false,
    slideSpeed: 3000,
    responsive: false,
    paginationSpeed: 1500,
    items: 4,
    stopOnHover: true,
    lazyLoad: true
  });
  $("#owl-slider-brands").owlCarousel({
    navigation: true,
    navigationText: [" ", " "],
    pagination: false,
    slideSpeed: 1000,
    paginationSpeed: 1000,
    responsive: false,
    items: 6,
    stopOnHover: true,
    lazyLoad: true
  });
  var $detailPageSlider = $("#detail__page-slider");
  $detailPageSlider.owlCarousel({
    navigation: true,
    navigationText: [" ", " "],
    pagination: false,
    slideSpeed: 1000,
    paginationSpeed: 1000,
    responsive: false,
    items: 4,
    stopOnHover: true,
    lazyLoad: true
  });
  $('.news').masonry({
    itemSelector: '.news-item',
    columnWidth: 30,
    percentPosition: true,
    gutter: 45
  });
  // window.onload = function () {
  //  $(document).ready(function () {
  setTimeout(function () {
    var mainDivs = document.getElementsByClassName("main__news-container"),
      mainDiv = document.getElementsByClassName("main__news-item");
    var maxHeight = 0;
    var i;
    for (i = 0; i < mainDivs.length; ++i) {
      if (maxHeight < mainDivs[i].clientHeight) {
        maxHeight = mainDivs[i].clientHeight;
      }
    }
    for (i = 0; i < mainDivs.length; ++i) {
      mainDiv[i].style.height = maxHeight + "px";
    }
  }, 300);
  // });
  var $body = $('body');
  $body.on('click', '.artile', function () {
    setTimeout(function () {
      var mainDivs = document.getElementsByClassName("main__news-container"),
        mainDiv = document.getElementsByClassName("main__news-item");
      var maxHeight = 0;
      var i;
      for (i = 0; i < mainDivs.length; ++i) {
        if (maxHeight < mainDivs[i].clientHeight) {
          maxHeight = mainDivs[i].clientHeight;
        }
      }
      for (i = 0; i < mainDivs.length; ++i) {
        mainDiv[i].style.height = maxHeight + "px";
      }
    }, 300);
  });
  // };
/*  $body.on("click", '.header__content-nav-link', function () {
    var $this = $(this);
    $this.next().show("fast");
    $("#bg_layer").show("fast");
    $this.parent().css({"z-index": "20", "background": "#fff", "border-right-color": "rgba(0, 0, 0, 0.46)"});
  });
  $body.on("click", '.close', function () {
    var $headerContentNavLink = $(".header__content-nav-link");
    $headerContentNavLink.next().hide("slow");
    $("#bg_layer").hide();
    $headerContentNavLink.parent().css({"z-index": "5", "border-right-color": "#e0e0e0"});
  });
  var count;
  count = 0;
  $body.on("click", ".cat", function () {
    var $this = $(this);
    count++;
    $this.next().toggle(100, function () {
      if (count & 1) {
        $this.parent().css({"z-index": "20", "background": "#fff"});
        $this.css({"color": "#231f20"});
        $("#bg_layer").show("fast");
        $this.addClass("cat_ar");
      } else {
        $this.parent().css({"z-index": "20", "background": "#e11c18"});
        $this.css({"color": "#fff"});
        $("#bg_layer").hide("fast");
        $this.removeClass("cat_ar");
      }
      $this.toggle(true);
    });
    return false;
  });
  count = 0;
  $(".search__icon").on("click", function () {
    var $this = $(this);
    count++;
    $this.next().toggle(100, function () {
      if (count & 1) {
        $this.parent().css({"z-index": "20", "background": "#fff"});
        $this.css({"background": "url(assets/img/icons/close_tr.png) 0 0 no-repeat"});
        $("#bg_layer").show("fast");
        $this.children().css({"display": "none"});
      } else {
        $this.parent().css({"z-index": "20", "background": "#e11c18"});
        $this.css({"background": "rgba(255, 255, 255, 0.33)"});
        $("#bg_layer").hide("fast");
        $this.children().css({"display": "block"});
      }
      $this.toggle(true);
    })
  });*/
  var count;
  count = 0;
  $body.on("click", 'div.search > a', showPopup);
  $body.on("click", 'li.header__content-nav-item > a', showPopup);
  $body.on("click", 'li.main__menu-item > a', showPopup);
  /*$body.on("click", '.close', closePopup);*/
  function showPopup() {
    var $this = $(this);
    count++;
    $this.next().toggle(100, function () {
      if (count & 1) {
        
        $this.css({"color": "#231f20"});
        $("#bg_layer").show("fast");
        if($this.hasClass('main__menu-item-link')) {
          $this.parent().css({"z-index": "20", "background": "#fff"});
          $this.addClass("cat_ar");
        }
      } else {
        
        $this.css({"color": "#fff"});
        $("#bg_layer").hide("fast");
        if($this.hasClass('main__menu-item-link')) {
          $this.parent().css({"z-index": "20", "background": "#e11c18"});
          $this.removeClass("cat_ar");
        }
      }
      $this.toggle(true);
    });
    return false;
    //});
    //count = 0;
  }
/*  function closePopup() {
    var $this = $(this);
    $this.parent().hide("fast");
    $("#bg_layer").toggle();
  }*/
  // var check = $(".check_email");
  $('.forgot').submit(function () {
    var check_my_email = validator.isEmail(check.val());
    if (!check_my_email) {
      $(check).addClass("wrong").val("РїРѕР»Рµ РѕР±СЏР·Р°С‚РµР»СЊРЅРѕРµ РґР»СЏ Р·Р°РїРѕР»РЅРµРЅРёСЏ!");
      $('.bx-authform-input-container').append("<div class='wrong_line'></div>");
    }
    else {
      $(".check_email").removeClass("wrong");
      $("div.wrong_line").remove();
    }
    return false;
  });
  $body.on('click', '.check_email', function () {
    $(".check_email").removeClass("wrong").val("");
    $("div.wrong_line").remove();
  });
//validate registr form
  var i = 0;
  $('.bx-authform-registr').submit(function () {
    $.each($('.bx-authform input[type="text"],.bx-authform input[type="password"]'), function () {
      i++;
      var check_reg_input = validator.isEmpty(this.value),
        $this = $(this);
      console.log(i);
      console.log(check_reg_input);
      if (!check_reg_input) {
        $this.removeClass("wrong");
        $("div.wrong_line").remove();
      } else {
        $this.addClass("wrong").val("РїРѕР»Рµ РѕР±СЏР·Р°С‚РµР»СЊРЅРѕРµ РґР»СЏ Р·Р°РїРѕР»РЅРµРЅРёСЏ!");
        $this.parent().append("<div class='wrong_line'></div>");
      }
    });
    return false;
  });
  $body.on('click', 'input[type="text"], input[type="password"]', function () {
    $(this).removeClass("wrong").val("");
    $(this).parent(".bx-authform-input-container").children(".wrong_line").remove();
  });
  /*detail*/
  $detailPageSlider.on('click', '.owl-item .detail__page-slider_item a', function (e) {
    e.preventDefault();
    $(this).removeClass('active');
    $(this).toggleClass('active');
    var src = $(this).children().attr("src");
    //console.log(src);
    $('#detail__page-slider').parent().children('.detail__page-photo-big__image').find('.detail__page-photo-img').attr('src', src);
  });
  $body.on('click', '.detail__page-photo-img', function () {
    var img = $(this),
      bg_layer = $("#bg_layer"),
      src = img.attr('src');
    bg_layer.fadeIn(400);
    bg_layer.append('<img src="' + src + '"/>');
    bg_layer.on('click', function () {
      bg_layer.fadeOut(400);
      setTimeout(function () {
        bg_layer.children().remove();
      }, 400);
    });
  });
});