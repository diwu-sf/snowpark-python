jQuery(document).ready(function($){function s(){c.scrollTop()+window.innerHeight<=t.offset().top?o.removeClass("sticky-stuck"):o.addClass("sticky-stuck")}function e(){c.scrollTop()+window.innerHeight<=t.offset().top?i.removeClass("sticky-stuck"):i.addClass("sticky-stuck")}var o=$(".sticky-links"),t=$(".site-footer"),i=$(".mobile-sticky-btn"),c=$(document);s(),e(),$(document).scroll(s),$(window).resize(s),$(document).scroll(e),$(window).resize(e)}),jQuery(window).scroll(function(){jQuery(this).scrollTop()>=55?jQuery(".site-header").addClass("sticky"):jQuery(".site-header").removeClass("sticky")});