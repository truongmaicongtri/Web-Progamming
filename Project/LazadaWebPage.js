var key = true;

function stickyNavFunction() {
    var condition = document.getElementById("J_pageSiteNav").style.top;
    if (window.pageYOffset > 700 && key == true && (condition == "0px" || condition == "")) {
        key = false;
        var i = 0;
        setTimeout(function() {
            hideSiteNav(i);
        }, 0);
    }
    if (window.pageYOffset <= 700 && key == true && condition == "-26px") {
        key = false;
        var i = 26;
        setTimeout(function() {
            showSiteNav(i);
        }, 0)
    }
}

function hideSiteNav(as) {
    setTimeout(function() {
        document.getElementById("J_pageSiteNav").style.top = -as + "px";
        if (as <= 25) {
            as++;
            hideSiteNav(as);
        }
        if (as == 26) {
            key = true;
        }
    }, 10);
}

function showSiteNav(as) {
    setTimeout(function() {
        document.getElementById("J_pageSiteNav").style.top = -as + "px";
        if (as > 0) {
            as--;
            showSiteNav(as);
        }
        if (as == 0) {
            key = true;
        }
    }, 10);
}

$(".page-site-menu-nav-category-label").hover(function() {
    $(".page-site-nav-menu-dropdown").css("visibility", "visible");
}, function() {
    $(".page-site-nav-menu-dropdown").css("visibility", "hidden");
});

$(".page-site-nav-menu-dropdown").hover(function() {
    $(".page-site-nav-menu-dropdown").css("visibility", "visible");
}, function() {
    $(".page-site-nav-menu-dropdown").css("visibility", "hidden");
});
$(".page-site-menu-root-item").hover(function() {
    $(this).find("a").css("color", "red");
}, function() {
    $(this).find("a").css("color", "black");
});

$(function() {
    setTimeout(function() {
        window.onscroll = function() { stickyNavFunction() }
    }, 1000)
    $('.carousel').carousel({
        interval: 2000
    })
})