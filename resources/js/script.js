// MixitUp Js
var mixer = mixitup('.portfolio-grid-container');

// Scrollify JS

$(function() {
    $.scrollify({
    section : ".scrollify",
    setHeights: false,
    updateHash: false,
    });
});

// Hamburgar Menu  

function openMenu(){
    document.getElementById('navbar').style .height = "100vh";
}

function closeMenu(){
    document.getElementById('navbar').style.height = "0";
}

// Scroll Smooth  
$(function(){
    $('.menu-items a, .scroll-down a').on('click', function(){
        $('html, body').animate({
            scrollTop: $($.attr(this, 'href')).offset().top
        }, 1000);
        return false
    });
});   