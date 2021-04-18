$("#menu-icon").click(function () {
	if ($(this).hasClass("active")) {
		$(this).removeClass("active");
		$(".header-nav").css("top", "-100%");
	} else {
		$(this).addClass("active");
		$(".header-nav").css("top", "60px");
	}
});