$("#menu-icon").click(function () {
    var NavHT = $(".header-nav").height()*(-1);
	if ($(this).hasClass("active")) {
		$(".header-nav").css("top", NavHT);
		$(this).removeClass("active");
	} else {
		$(this).addClass("active");
		$(".header-nav").css("top", "60px");
	}
});