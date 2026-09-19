jQuery.fn.exists = function(callback) {
    var args = [].slice.call(arguments, 1);
    if (this.length) {
        callback.call(this, args);
    }
    return this;
};
jQuery(document).ready(function($) {
    jQuery("body").prepend("<a id='move-to-top' class='animate ' href='#blog'><i class='fa fa-angle-double-up'></i></a>");
    var scrollDes = 'html,body';
    if (navigator.userAgent.match(/opera/i)) {
        scrollDes = 'html';
    }
    jQuery(window).scroll(function() {
        if (jQuery(this).scrollTop() > 160) {
            jQuery('#move-to-top').addClass('filling').removeClass('hiding');
        } else {
            jQuery('#move-to-top').removeClass('filling').addClass('hiding');
        }
    });
    let hostname = window.location.host;
    let fresh_array = [];
    if (hostname.includes('www')) {
        fresh_array = window.location.host.split('.');
        fresh_array.shift();
        hostname = fresh_array[0];
    } else {
        hostname = window.location.host.split('.');
        hostname = hostname[0];
    }
    let allATags = document.body.querySelectorAll("a")
    allATags.forEach(function(entry) {
        if (entry.href.includes('http')) {
            if (entry.href.includes(hostname)) {} else {
                entry.rel = 'noreferrer noopener';
                if (entry.target != '_blank') {
                    entry.target = '_blank';
                }
            }
        }
    });
});
jQuery(document).ready(function($) {
    var scrollToAnchor = function(id, event) {
        var elem = $("a[name='" + id + "']");
        if (typeof(elem.offset()) === "undefined") {
            elem = $("#" + id);
        }
        if (typeof(elem.offset()) !== "undefined") {
            event.preventDefault();
            var scroll_to = elem.offset().top;
            $('html, body').removeClass('mobile-menu-active').animate({
                scrollTop: scroll_to
            }, 600, 'swing', function() {
                if (scroll_to > 46) window.location.hash = id;
            });
        }
    };
    $("a").click(function(event) {
        var href = $(this).attr("href");
        if (href && href.match("#") && href !== '#') {
            var parts = href.split('#'),
                url = parts[0],
                target = parts[1];
            if ((!url || url == window.location.href.split('#')[0]) && target)
                scrollToAnchor(target, event);
        }
    });
});

function check_menu_items() {
    jQuery('.sub-menu').each(function() {
        var li_number = $('> li', this).length
        if (li_number > 7) {
            jQuery(this).addClass('wda-long-menu');
        }
    });
}
if (mts_customscript.responsive && mts_customscript.nav_menu != 'none') {
    jQuery(document).ready(function($) {
        $('#secondary-navigation').append('<div id="mobile-menu-overlay" />');
        if (mts_customscript.nav_menu == 'both' && !$('.navigation.mobile-only').length) {
            $('.navigation').not('.mobile-menu-wrapper').find('.menu').clone().appendTo('.mobile-menu-wrapper').hide();
        }
        $('nav').find('.header-social-icons').clone().appendTo('.mobile-menu-wrapper').hide();
        $('nav').find('.mts-cart').clone().appendTo('.mobile-menu-wrapper').hide();
        $('.toggle-mobile-menu').click(function(e) {
            e.preventDefault();
            e.stopPropagation();
            $('body').toggleClass('mobile-menu-active');
            if ($('body').hasClass('mobile-menu-active')) {
                if ($(document).height() > $(window).height()) {
                    var scrollTop = ($('html').scrollTop()) ? $('html').scrollTop() : $('body').scrollTop();
                    $('html').addClass('noscroll').css('top', -scrollTop);
                }
                $('#mobile-menu-overlay').fadeIn();
            } else {
                var scrollTop = parseInt($('html').css('top'));
                $('html').removeClass('noscroll');
                $('html,body').scrollTop(-scrollTop);
                $('#mobile-menu-overlay').fadeOut();
            }
        });
        jQuery('nav.navigation a').click(function() {
            console.log(jQuery(this).text());
            if (jQuery(this).attr('href') == undefined) {} else {
                closeMenu();
            }
        });
        jQuery('#mobile-menu-overlay').click(function() {
            closeMenu();
        });
    });

    function closeMenu() {
        var $target = jQuery(event.target);
        if (($target.hasClass("fa") && $target.parent().hasClass("toggle-caret")) || $target.hasClass("toggle-caret")) {
            return;
        }
        jQuery('body').removeClass('mobile-menu-active');
        jQuery('html').removeClass('noscroll');
        jQuery('#mobile-menu-overlay').fadeOut();
    }
}
jQuery(document).ready(function($) {
    function mtsDropdownMenu() {
        var wWidth = $(window).width();
        if (wWidth > 865) {} else {
            $('.navigation li').unbind('hover');
            $('.navigation li.active > ul.sub-menu, .navigation li.active > ul.children').show();
        }
    }
    mtsDropdownMenu();
    $(window).resize(function() {
        mtsDropdownMenu();
    });
});
jQuery(document).ready(function($) {
    $('.widget_nav_menu, .navigation .menu').addClass('toggle-menu');
    $('.toggle-menu ul.sub-menu, .toggle-menu ul.children').addClass('toggle-submenu');
    $('.toggle-menu ul.sub-menu').parent().addClass('toggle-menu-item-parent');
    $('.toggle-menu .toggle-menu-item-parent').append('<span class="toggle-caret"><i class="fa fa-plus"></i></span>');
    $('.toggle-caret').click(function(e) {
        e.preventDefault();
        $(this).parent().toggleClass('active').children('.toggle-submenu').slideToggle('fast');
    });
});
jQuery(document).ready(function($) {
    (function(d, s) {
        var js, fjs = d.getElementsByTagName(s)[0],
            load = function(url, id) {
                if (d.getElementById(id)) {
                    return;
                }
                js = d.createElement(s);
                js.src = url;
                js.id = id;
                fjs.parentNode.insertBefore(js, fjs);
            };
        jQuery('span.facebookbtn, .facebook_like').exists(function() {
            load('//connect.facebook.net/en_US/all.js#xfbml=1&version=v2.3', 'fbjssdk');
        });
        jQuery('span.gplusbtn').exists(function() {
            load('https://apis.google.com/js/plusone.js', 'gplus1js');
        });
        jQuery('span.twitterbtn').exists(function() {
            load('//platform.twitter.com/widgets.js', 'tweetjs');
        });
        jQuery('span.linkedinbtn').exists(function() {
            load('//platform.linkedin.com/in.js', 'linkedinjs');
        });
        jQuery('span.pinbtn').exists(function() {
            load('//assets.pinterest.com/js/pinit.js', 'pinterestjs');
        });
        jQuery('span.stumblebtn').exists(function() {
            load('//platform.stumbleupon.com/1/widgets.js', 'stumbleuponjs');
        });
    }(document, 'script'));
});
var wda_mute;
wda_mute = function(videoclass) {
    var className = videoclass,
        videoTarget = jQuery('.' + className + ' video')[0];
    jQuery('.' + className).addClass('wda_video_style');
    jQuery('<div class="buttonToAuto"><a class="btn" href="javascript:void(null)" id="wdapvideo"> <i class="fa fa-volume-up"></i> Play Audio</a></div>').click(function() {
        if (videoTarget.muted == false) {
            videoTarget.muted = true;
            videoTarget.currentTime = 0
            jQuery('.buttonToAuto a').html('<i class="fa fa-volume-up"></i> Play Audio');
        } else {
            videoTarget.muted = false;
            videoTarget.currentTime = 0
            jQuery('.buttonToAuto a').html('<i class="fa fa-volume-down"></i> Mute Audio');
        }
    }).appendTo('.' + className);
}
wda_check_distance = function() {
    jQuery('.sub-menu').each(function() {
        var distanceElement = jQuery(window).width() - (jQuery(this).offset().left + jQuery(this).width());
        if (distanceElement < jQuery(this).width()) {
            jQuery(this).addClass('moveLeft');
        }
    });
    jQuery(window).resize(function() {
        jQuery('.sub-menu').each(function() {
            var distanceElement = jQuery(window).width() - (jQuery(this).offset().left + jQuery(this).width());
            if (distanceElement < jQuery(this).width()) {
                jQuery(this).addClass('moveLeft');
            } else {
                jQuery(this).removeClass('moveLeft');
            }
        });
    });
};
wda_popup_function = function() {
    jQuery('[data-dm-popup]').each(function() {
        jQuery(this).wrapInner('<div class="dm-popup-wrapper">');
    });
    jQuery('[data-dm-popup] .dm-popup-wrapper').prepend('<button><i class="fa fa-close"></i></button>').click(function() {
        jQuery(this).parent().removeClass('show-dm-modal');
        jQuery('.dm-modal-backdrop').removeClass('show-dm-drop');
    });
    jQuery('[data-dm-category=pop]').click(function() {
        let id_selector = jQuery(this).attr('id');
        jQuery('[data-dm-popup = ' + id_selector + ']').addClass('show-dm-modal');
        jQuery('.dm-modal-backdrop').addClass('show-dm-drop');
    });
}
wda_backdrop = function() {
    let backdrop = document.createElement('div');
    backdrop.className = 'dm-modal-backdrop';
    document.body.appendChild(backdrop);
}
jQuery(document).ready(function($) {
    let class_checker = document.querySelectorAll('.dm-classic-pop');
    if (class_checker.length > 0) {
        wda_backdrop();
        jQuery('#page').addClass('fix-visio');
        wda_popup_function();
    }
    if ($('.dm-lightbox').length) {
        let pageHead = $('.page-header h2').text();
        $('.dm-lightbox img').each(function() {
            let imgSrc = $(this).attr('src');
            if ($(this).parent('a').length > 0) {
                $(this).parent().attr('data-lightbox', pageHead);
            } else {
                $(this).wrap('<a href="' + imgSrc + '" data-lightbox="' + pageHead + '"></a>');
            }
        });
    }
    if ($('.dm-modal').length > 0) {
        wda_backdrop();
        $('.dm-modal').prepend('<button><i class="fa fa-close"></i></button>').click(function() {
            $(this).closest('.dm-modal').removeClass('show-dm-modal');
            $('.dm-modal-backdrop').removeClass('show-dm-drop');
        });
    }
    $('.dm_read_more').click(function(e) {
        e.preventDefault();
        if ($(this).closest('.dm-readmore').children('.dm-readmore-wrapper').hasClass('dm-modal')) {
            $(this).closest('.dm-readmore').children('.dm-modal').addClass('show-dm-modal');
            $('.dm-modal-backdrop').addClass('show-dm-drop');
        } else {
            if ($(this).closest('.dm-readmore').children('.dm-readmore-wrapper').is(':visible')) {
                $(this).closest('.dm-readmore').children('.dm-readmore-wrapper').slideUp('slow');
                $(this).text('read more');
            } else {
                $(this).closest('.dm-readmore').children('.dm-readmore-wrapper').slideDown('slow');
                $(this).text('read less');
            }
        }
    });
    $('.dm_classic_modal').click(function(e) {
        e.preventDefault();
        let target_modal = $(this).attr('id');
        $('[data-modal-counter=' + target_modal + ']').children('.dm-readmore').children('.dm-modal').addClass('show-dm-modal');
        $('.dm-modal-backdrop').addClass('show-dm-drop');
    });
    var fontSize = 16;
    jQuery('.wah-action-button.larger').click(function() {
        fontSize++;
        $('html *').css('font-size', fontSize + 'px');
    });
    jQuery('.wah-action-button.smaller').click(function() {
        fontSize--;
        $('html *').css('font-size', fontSize + 'px');
    });
    jQuery('#greyscale').click(function() {
        $('html').toggleClass('active_greyscale');
    });
    var lazyloadAvatar = function() {
        $('.comment-author .avatar').each(function() {
            var distanceToTop = $(this).offset().top;
            var scroll = $(window).scrollTop();
            var windowHeight = $(window).height();
            var isVisible = distanceToTop - scroll < windowHeight;
            if (isVisible) {
                var hashedUrl = $(this).attr('data-src');
                if (hashedUrl) {
                    $(this).attr('src', hashedUrl).removeClass('loading');
                }
            }
        });
    };
    if ($('.comment-author .avatar').length > 0) {
        $('.comment-author .avatar').each(function(i, el) {
            $(el).attr('data-src', el.src).removeAttr('src').addClass('loading');
        });
        $(function() {
            $(window).scroll(function() {
                lazyloadAvatar();
            });
        });
        lazyloadAvatar();
    }
    check_menu_items();
    wda_check_distance();
});