/* Welcome Animation */

let tl = gsap.timeline();
tl.from("#nav__bar", { opacity: 0, duration: 2.8, delay: 1, y: -30 });
//
/* Welcome Animation */
///////////////////////
/* Menu Animation  */

let tlMenu = gsap.timeline();

function menuAnimation() {
	let windowW = $(window).width();
	if (windowW < 400) {
		document.getElementById("open__menu").onclick = () => {
			tlMenu

				.to("#open__menu", { opacity: 0, duration: 0.4 })
				.to(".nav__opened", { opacity: 1, duration: 0.5, scaleY: 1, height: "100%" }, "-=.2")
				.from("#about", { duration: 1.2, opacity: 0, x: -500, ease: "elastic.out(1, 0.6)" }, "+=0.09")
				.from("#skill", { duration: 1.2, opacity: 0, x: -500, ease: "elastic.out(1, 0.6)" }, "-=1")
				.from("#contact", { duration: 1.2, opacity: 0, x: -500, ease: "elastic.out(1, 0.6)" }, "-=1")
				.from("#close__menu", { duration: 1.5, opacity: 0, y: -5 }, "-=2.5");
		};
	} else {
		document.getElementById("open__menu").onclick = () => {
			tlMenu

				.to("#open__menu", { opacity: 0, duration: 0.4 })
				.to(".nav__opened", { opacity: 1, duration: 0.5, scaleY: 1, height: "100vh" }, "-=.2")
				.from("#about", { duration: 1.2, opacity: 0, x: -500, ease: "elastic.out(1, 0.6)" }, "+=0.09")
				.from("#skill", { duration: 1.2, opacity: 0, x: -500, ease: "elastic.out(1, 0.6)" }, "-=1")
				.from("#contact", { duration: 1.2, opacity: 0, x: -500, ease: "elastic.out(1, 0.6)" }, "-=1")
				.from("#close__menu", { duration: 1.5, opacity: 0, y: -5 }, "-=2.5");
		};
	}
}

document.getElementById("close__menu").onclick = () => {
	tlMenu

		.to(".nav__opened", { duration: 1, x: 2200, opacity: 0.5 }, "+=.01")
		.to(".nav__opened", { duration: 0.01, x: 0, opacity: 0 }, "+=.5")
		.to(".nav__opened", { scaleY: 0, opacity: 0 })
		.to("#open__menu", { opacity: 1, duration: 0.8 }, "-=1");
};

/* Menu Animation  */

/* LAB */

$(document).mousemove(function(e) {
	if (e.pageX < 750) {
		$(".popup").css({ left: e.pageX - 300 });
	} else {
		$(".popup").css({ left: e.pageX - 700 });
	}
});

let popup = $(".grid__item a");

popup.mouseenter(() => {
	anime({
		targets: ".popup",
		scaleX: 1,
		duration: 800,
	});
});
popup.mouseleave(() => {
	anime({
		targets: ".popup",
		scaleX: 0,
		duration: 100,
	});
});

/* Menu */

menuAnimation();
