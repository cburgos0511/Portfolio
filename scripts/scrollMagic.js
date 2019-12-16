let scrollAboutExec,
	scrollProj,
	scrollCorreWrap,
	scrollPortWrap,
	scrollPoseWrap,
	scrollContact,
	scrollFindMe,
	scrollContContain = false;

window.addEventListener("scroll", () => {
	let tlAbout = gsap.timeline();
	const scrollY = window.scrollY;

	if (scrollAboutExec === true) {
		return;
	} else {
		if (Math.ceil(scrollY) >= 450) {
			tlAbout
				.to(".about__text", { opacity: 1, duration: 1 })
				.to(".about__me__info", { opacity: 1, duration: 1, x: "-25%" })
				.to(".dot__container", { opacity: 1, duration: 1 });
			scrollAboutExec = true;
		}
	}
});

window.addEventListener("scroll", () => {
	var scrollTop = $(window).scrollTop(),
		elementOffset = $(".project").offset().top,
		distance = elementOffset - scrollTop;

	if (scrollProj === true) {
		return;
	} else {
		if (Math.ceil(distance) <= 950) {
			gsap.to(".project", { opacity: 1, duration: 1.8 });
			scrollProj = true;
		}
	}
});

window.addEventListener("scroll", () => {
	var scrollTop = $(window).scrollTop(),
		elementOffset = $(".corre__wrap").offset().top,
		distance = elementOffset - scrollTop;
	if (scrollCorreWrap === true) {
		return;
	} else {
		if (Math.ceil(distance) <= 884) {
			let tl = gsap.timeline();
			tl.to(".corre__wrap", { opacity: 1, duration: 1.8, x: 10 });
			scrollCorreWrap = true;
		}
	}
});

window.addEventListener("scroll", () => {
	var scrollTop = $(window).scrollTop(),
		elementOffset = $(".portfolio__wrap").offset().top,
		distance = elementOffset - scrollTop;
	if (scrollPortWrap === true) {
		return;
	} else {
		if (Math.ceil(distance) <= 753) {
			gsap.to(".portfolio__wrap", { opacity: 1, duration: 1.8, x: 10 });
			scrollPortWrap = true;
		}
	}
});
window.addEventListener("scroll", () => {
	var scrollTop = $(window).scrollTop(),
		elementOffset = $(".pose__wrap").offset().top,
		distance = elementOffset - scrollTop;
	if (scrollPoseWrap === true) {
		return;
	} else {
		if (Math.ceil(distance) <= 861) {
			gsap.to(".pose__wrap", { opacity: 1, duration: 1.8, x: 10 });
			scrollPoseWrap = false;
		}
	}
});

/* CONTACT */
window.addEventListener("scroll", () => {
	var scrollTop = $(window).scrollTop(),
		elementOffset = $(".contact").offset().top,
		distance = elementOffset - scrollTop;
	if (scrollContact === true) {
		return;
	} else {
		if (Math.ceil(distance) <= 811) {
			gsap.to(".contact", { opacity: 1, duration: 1.8 });
			scrollContact = true;
		}
	}
});

window.addEventListener("scroll", () => {
	var scrollTop = $(window).scrollTop(),
		elementOffset = $(".find__me").offset().top,
		distance = elementOffset - scrollTop;
	if (scrollFindMe === true) {
		return;
	} else {
		if (Math.ceil(distance) <= 824) {
			gsap.to(".find__me", { opacity: 1, duration: 1.8, x: 50 });
			scrollFindMe = true;
		}
	}
});

window.addEventListener("scroll", () => {
	var scrollTop = $(window).scrollTop(),
		elementOffset = $(".contact__container").offset().top,
		distance = elementOffset - scrollTop;
	if (scrollContContain === true) {
		return;
	} else {
		if (Math.ceil(distance) <= 776) {
			gsap.timeline()
				.to(".contact__container", { opacity: 1, duration: 1.8, x: -50 })
				.to(".get__in__touch", { opacity: 1, duration: 1.8 }, "-=1.8");
		}
	}
});
