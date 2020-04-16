'use strict';
$(document).ready(function () {

    $('.owl-carousel').owlCarousel({
        loop: true,
        margin: 10,
        nav: true,
        navClass: ['slider__nav--left', 'slider__nav--right'],
        responsive: {
            0: {
                items: 1

            },
            600: {
                items: 2,
            },
            700: {
                items: 3
            },
            // 900: {
            //     items: 3
            // },
            1200: {
                items: 4
            }
        }
    });










});