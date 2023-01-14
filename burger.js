//Burger menu
$(".burger").on("click", function () {
    $(".burger").toggleClass("active");
    $(".right-part-line-bar").toggleClass("responsive-show-menu");
});

$(".right-part-line-bar li").on("click", function () {
    $(".burger").removeClass("active");
    $(".right-part-line-bar").removeClass("responsive-show-menu");
});