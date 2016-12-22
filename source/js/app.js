jQuery(function($){
    $(document).ready(function(){
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
        $('.adapt__menu').on('click', function(e){
            e.preventDefault();

            var item = $(this).next('.header__catalog_menu');
                item.toggleClass('active');
            $(window).resize(function(){
                item.removeClass('active');
            });
        });
        $('.close_menu').on('click', function(e){
            e.preventDefault();

            $('.adapt__menu').next('.header__catalog_menu').removeClass('active');
        });
        /*!MENU*/
        /*SEARCH*/
        $('#title-search-input').on('blur', function(e){
            e.preventDefault();
            $('#search').removeClass('active');
            if($('.container').width() < 1200){
                $(this).width(230);
            } else if($('.container').width() < 940) {
                $(this).width(260);
            } else if($('.container').width() < 480) {
                $(this).width(160);
            }
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
        /*!SEARCH*/
        /*CHECKBOX*/
        setTimeout(function() {
          $('input.checkbox_styler, select').styler();
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

                otherContent.stop(true, true).slideUp(duration);
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
        /*!AUTH*/
    });
})

