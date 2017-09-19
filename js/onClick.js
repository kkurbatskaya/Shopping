
$(document).on('click', '.items_list' , function(){
        $(this).children('.items').toggle();
    });

$(document).on('click', '.arrow' , function(){
    $(this).addClass("arrowIsClicked");
    $(this).removeClass("arrow");

});

$(document).on('click', '.arrowIsClicked' , function(){
    $(this).addClass("arrow");
    $(this).removeClass("arrowIsClicked");

});

$(document).on('click', '.show-map' , function(){
    $(".map").toggle();
    $(".show-map").text(($(".show-map").text() == 'Hide Map') ? 'Show Map' : 'Hide Map');
});



