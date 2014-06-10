$(document).ready(function () {
    (function () {
        $("#bar_code_icon").mouseover(function () {
            $("#bar_code_image").slideDown()
        }).mouseout(function () {
                $("#bar_code_image").slideUp()
            })
    })(), function () {
        $("#software img").mouseover(function () {
            $(this).fadeTo("normal", 1), $(this).siblings("img").stop().fadeTo("normal", .3)
        }).mouseout(function () {
                $(this).siblings("img").stop().fadeTo("normal", 1)
            })
    }(), function () {
        $("#software2 img").mouseover(function () {
            $(this).fadeTo("normal", 1), $(this).siblings("img").stop().fadeTo("normal", .3)
        }).mouseout(function () {
                $(this).siblings("img").stop().fadeTo("normal", 1)
            })
    }(), function (e) {
        e.fn.tooltips = function (t) {
            var n, r = e("body"), i;
            return this.each(function (t, n) {
                i = e(n).attr("data-tooltip", t);
                var r = e('<div class="tooltip" data-tooltip="' + t + '">' + i.attr("title") + '<div class="arrow"></div></div>').appendTo("body"), s = i.position();
                r.css({top:s.top - r.outerHeight() + 20 , left:s.left - r.width() / 5}), i.removeAttr("title").hover(function () {
                    i = e(this), r = e("div[data-tooltip=" + i.data("tooltip") + "]");
                    var t = i.position();
                    r.css({top:t.top - r.outerHeight() + 20, left:t.left - r.width() / 5}), r.addClass("active")
                }, function () {
                    i = e(this), r = e("div[data-tooltip=" + i.data("tooltip") + "]").addClass("out"), setTimeout(function () {
                        r.removeClass("active").removeClass("out")
                    }, 300)
                })
            })
        }
        e.fn.tooltips2 = function (t) {
            var n, r = e("body"), i,c;
            return this.each(function (t, n, c) {
                c = t / 5 >= 1 ? -10 : 35;
                t += 10;
                i = e(n).attr("data-tooltip", t);
                var r = e('<div class="tooltip" data-tooltip="' + t + '">' + i.attr("title") + '<div class="arrow"></div></div>').appendTo("body"), s = i.position();
                r.css({top:s.top - r.outerHeight() + c, left:s.left - r.width() / 3}), i.removeAttr("title").hover(function () {
                    i = e(this), r = e("div[data-tooltip=" + i.data("tooltip") + "]");
                    var t = i.position();
                    r.css({top:t.top - r.outerHeight() + c, left:t.left - r.width() / 3}), r.addClass("active")
                }, function () {
                    i = e(this), r = e("div[data-tooltip=" + i.data("tooltip") + "]").addClass("out"), setTimeout(function () {
                        r.removeClass("active").removeClass("out")
                    }, 300)
                })
            })
        }
    }(jQuery), $("#imac-wrapper > .wallpaper_wrapper > img").tooltips(), $("#pc-wrapper > .wallpaper_wrapper2 > img").tooltips2()
});