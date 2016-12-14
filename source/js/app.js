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
        })/*.data('owl-slider-main')*/;
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
            if($('.container').width() > 480){
                $(this).width(260);
            } else {
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
          $('input.checkbox_styler').styler();
        }, 100)
        /*!CHECKBOX*/
        /*FILTER SCROLLBAR*/
        jQuery(document).ready(function(){
            jQuery('.bx_filter_block').scrollbar();
        });
        /*!FILTER SCROLLBAR*/
    });
})