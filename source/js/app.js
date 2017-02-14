jQuery(function($){
    $(document).ready(function(){
        svg4everybody();
        var owl = $("#owl-slider-main").owlCarousel({
            items: 1,
            slideSpeed: 5000,
            autoplay: true,
            autoplayTimeout: 4500,
            loop: true,
            singleItem: true,
            dots: true,
            margin: 85,
            itemElement:'li',
            stageElement:'ul',
            dotsClass:'owl-slider__pager',
        });
        var owl_cat = $(".catalog__main_page").owlCarousel({
            nav:true,
            dots: false,
            items: 4,
            slideSpeed: 5000,
            autoplay: true,
            autoplayTimeout: 4500,
            loop: true,
            itemElement:'li',
            stageElement:'ul',
            responsive:{
                0:{
                    items:1
                },
                750:{
                    items:2
                },
                940:{
                    items:3
                },
                1200:{
                    items:4
                }
            }
        });
        var owl_cat = $(".brands").owlCarousel({
            nav:true,
            dots: false,
            items: 4,
            slideSpeed: 5000,
            autoplay: true,
            autoplayTimeout: 4500,
            loop: true,
            itemElement:'li',
            stageElement:'ul',
            responsive:{
                0:{
                    items:1
                },
                480:{
                    items:2
                },
                750:{
                    items:3
                },
                940:{
                    items:4
                },
                1200:{
                    items:6
                }
            }
        });
        /*TABS*/
        $('.tabs__controls-link').on('click', function(e){
            e.preventDefault();

            var item = $(this).closest('.tabs__controls-item'),
                contentItem = $('.tabs__item'),
                itemPosition = item.data('class');

                contentItem.filter('.tabs__item_' + itemPosition)
                    .add(item)
                    .addClass('active')
                    .siblings()
                    .removeClass('active');
        });
        /*!TABS*/
        /*MENU*/
        // third
        $( '#dl-menu' ).dlmenu();

        // second
        // $('.adapt__menu_icon').on('click', function(e){
        //     e.preventDefault();
        //     $('.header__shadow').addClass('header__shadow_active').show('fast');
        // });
        // $('.header__shadow').on('click', function(e){
        //     var $this = $(this);
        //     console.log($this);
        //         $this.toggleClass('header__shadow_active');
        // });

        // first
        // $('.adapt__menu').on('click', function(e){
        //     e.preventDefault();

        //     var item = $(this).next('.header__catalog_menu');
        //         item.toggleClass('active');
        //     $(window).resize(function(){
        //         item.removeClass('active');
        //     });
        // });
        // $('.close_menu').on('click', function(e){
        //     e.preventDefault();

        //     $('.adapt__menu').next('.header__catalog_menu').removeClass('active');
        // });
        /*!MENU*/
        /*SEARCH*/
        $('#title-search-input').on('blur', function(e){
            e.preventDefault();
            $('#search').removeClass('active');
            if($('.container').width() < 1199){
                $(this).width(230);
            }/* else if($('.container').width() < 940) {
                $(this).width(260);
            } else if($('.container').width() < 480) {
                $(this).width(160);
            }*/
            $('.title-search-result').hide('fast');
        });
        $('#title-search-input').on('focus', function(e){
            e.preventDefault();
            $('#search').addClass('active');
            $(this).width($('.container').width());
            $('.title-search-result').show('fast');
        });
        $(window).resize(function(){
            $('#search.active .bx-input-group').width($('.container').width());
        });
        if($('.container').width() < 1200){
            $('.adapt__search').on('click', function(e){
                $('.header__catalog_search').addClass('adapt__menu_active');
            });
            $('.bx-input-group-btn .close').on('click', function(e){
                $('.header__catalog_search').removeClass('adapt__menu_active');
            });
        }
        /*!SEARCH*/
        /*CHECKBOX*/
        setTimeout(function() {
          $('input.checkbox_styler, select, .gender').styler();
        }, 100)
        /*!CHECKBOX*/
        /*FILTER SCROLLBAR*/
        jQuery(document).ready(function(){
            jQuery('.bx_filter_block').scrollbar();
        });
        /*!FILTER SCROLLBAR*/
        /*DETAIL_PAGE*/
        var next = $('.catalog__detail_next'),
            prev = $('.catalog__detail_prev'),
            contentImg = $('.catalog__detail_img'),
            slides = $('.catalog__detail_slider');
        prev.on('click', function(e){
            e.preventDefault();

            var this_slide = slides.find('.active'),
                countElement = $('.catalog__detail_item').length,
                curentElement = $('li.catalog__detail_item.active').index();
                
                if(countElement > curentElement){
                    this_slide
                        .removeClass('active')
                        .next('.catalog__detail_item')
                        .addClass('active');
                }
                

                contentImg.attr('src', slides.find('.active').find('img').attr('src'));
        });
        next.on('click', function(e){
            e.preventDefault();

            var this_slide = slides.find('.active'),
                countElement = $('.catalog__detail_item').length,
                curentElement = $('li.catalog__detail_item.active').index();

                if(curentElement > 1){
                    this_slide
                        .removeClass('active')
                        .prev('.catalog__detail_item')
                        .addClass('active');
                }

                contentImg.attr('src', slides.find('.active').find('img').attr('src')); 
        });
        $('.catalog__detail_link').on('click', function(e){
            e.preventDefault();

            var item = $(this).closest('.catalog__detail_item'),
                contentItem = $('.catalog__detail_image'),
                itemPosition = item.data('class');

                contentItem
                    .add(item)
                    .addClass('active')
                    .siblings()
                    .removeClass('active');
                contentImg.attr('src', $(this).find('img').attr('src'));
        });
        /*!DERTAIL_PAGE*/
        /*FAQ*/
        $('.accordeon__trigger').on('click', function(e){
            e.preventDefault();

            var $this = $(this),
                item = $this.closest('.accordeon__item'),
                list = $this.closest('.accordeon__list'),
                items = list.find('.accordeon__item'),
                content = item.find('.accordeon__inner'),
                otherContent = list.find('.accordeon__inner'),
                duration = 100;

            if(!item.hasClass('active')){
                items.removeClass('active');
                item.addClass('active');

                //otherContent.stop(true, true).slideUp(duration);
                content.stop(true, true).slideDown(duration);
            } else {
                content.stop(true, true).slideUp(duration);
                item.stop(true, true).removeClass('active')
            }
        });
        /*!FAQ*/
        /*AUTH*/
        $(".checkPassword").on("change", function(){
            var x = $(this).parentsUntil(".bx-authform-formgroup-container").find("#password");
           if(this.checked) {
              x.attr("type", "text");
            } else {
              x.attr("type", "password");
            }
          });
        $().ready(function() {
            $("#form_auth").validate({
                rules: {
                    USER_LOGIN: {
                        required: true,
                        minlength: 6
                    },
                    USER_PASSWORD: {
                        required: true,
                        minlength: 6
                    }
                },
                messages: {
                    USER_LOGIN: {
                        required: "Поле не заполнено",
                        minlength: "Ваш e-mail должен состоять не менее чем из 6-х символов"
                    },
                    USER_PASSWORD: {
                        required: "Поле не заполнено",
                        minlength: "Ваш пароль должен состоять не менее чем из 6-х символов"
                    }
                }
            });
            $("#form_registr").validate({
                rules: {
                    USER_NAME: {
                        required: true,
                        minlength: 6
                    },
                    USER_EMAIL: {
                        required: true,
                        minlength: 6
                    },
                    USER_PHONE: {
                        required: true,
                        minlength: 10
                    },
                    USER_PASSWORD_REG: {
                        required: true,
                        minlength: 6
                    },
                    USER_CONFIRM_PASSWORD: {
                        required: true,
                        minlength: 6,
                        equalTo: "input[name='USER_PASSWORD_REG']"
                    },
                    USER_REMEMBER: "required"
                },
                messages: {
                    USER_NAME: {
                        required: "Поле не заполнено",
                        minlength: ""
                    },
                    USER_EMAIL: {
                        required: "Поле не заполнено",
                        minlength: ""
                    },
                    USER_PHONE: {
                        required: "Поле не заполнено",
                        minlength: ""
                    },
                    USER_PASSWORD_REG: {
                        required: "Поле не заполнено",
                        minlength: ""
                    },
                    USER_CONFIRM_PASSWORD: {
                        required: "Поле не заполнено",
                        minlength: "",
                        equalTo: "Пароли не совпадают"
                    },
                    USER_REMEMBER: {
                        required: function() {
                            if($('#form_registr input.valid').length >= 6)
                                $("#bg__lay").show('fast');
                        }
                    }
                        
                }
            });
        });
        $('#bg__lay, .block__close').on('click', function(){
            $("#bg__lay").hide('fast');
        });
        $("input[name='USER_PHONE']").inputmask("+7 (999) 999-9999");
        /*!AUTH*/
         $('.slider-for').slick({
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows: false,
          fade: true,
          asNavFor: '.slider-nav'
        });
        $('.slider-nav').slick({
          slidesToScroll: 1,
          slidesToShow: 4,
          vertical: true,
          verticalSwiping: true,
          asNavFor: '.slider-for',
          dots: false,
          centerMode: false,
          verticalSwiping: true,
          focusOnSelect: true,
          responsive: [
/*            {
              breakpoint: 625,
              settings: {
                slidesToShow: 4,
                vertical: true,
                verticalSwiping: true
              }
            },*/
            {
              breakpoint: 325,
              settings: {
                slidesToShow: 2,
                vertical: false,
                verticalSwiping: false
              }
            }
          ]
        });
        /*ABOUTH*/
        $('.mask__loop').fancybox();
        /*!ABOUTH*/
        $(".show__table").fancybox({
            maxWidth    : 930,
            maxHeight   : 525,
            fitToView   : false,
            width       : '100%',
            height      : '100%',
            autoSize    : true,
            closeClick  : true,
            openEffect  : 'none',
            closeEffect : 'none'
        });
        $(".show__add").fancybox({
            maxWidth    : 420,
            maxHeight   : 280,
            fitToView   : false,
            width       : '100%',
            height      : '100%',
            autoSize    : true,
            closeClick  : true,
            openEffect  : 'none',
            closeEffect : 'none'
        });
        $("a.detail_gallery, a.iframe").fancybox();
    });
})