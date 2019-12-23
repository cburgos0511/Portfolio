let scrollAbout,
	scrollProj,
	scrollCorreWrap,
	scrollPortWrap,
	scrollContact,
	scrollFindMe,
	scrollGridTwo,
	scrollGridThree,
	scrollContContain = false;

window.addEventListener("scroll", () => {
	var scrollTop = $(window).scrollTop(),
		elementOffset = $(".project").offset().top,
		distance = elementOffset - scrollTop;

	if (scrollProj === true) {
		return;
	} else {
		if (Math.ceil(distance) <= 970) {
			gsap.to(".project", { opacity: 1, duration: 1 });
			scrollProj = true;
		}
	}
});

window.addEventListener("scroll", () => {
	var scrollTop = $(window).scrollTop(),
		elementOffset = $("#checkout").offset().top,
		distance = elementOffset - scrollTop;

	if (scrollCorreWrap === true) {
		return;
	} else {
		if (Math.ceil(distance) <= 784) {
			let tl = gsap.timeline();
			tl.to("#checkout", { opacity: 1, duration: 1.8 });
			scrollCorreWrap = true;
		}
	}
});

window.addEventListener("scroll", () => {
	var scrollTop = $(window).scrollTop(),
		elementOffset = $("#first__grid").offset().top,
		distance = elementOffset - scrollTop;
	if (scrollPortWrap === true) {
		return;
	} else {
		if (Math.ceil(distance) <= 753) {
			tl = gsap.timeline();
			tl.to("#first__grid", { opacity: 1, duration: 1 }).to(".stagger__one", 1, { opacity: 1, stagger: 0.15, duration: 1 }, "-=.5");
			scrollPortWrap = true;
		}
	}
});

window.addEventListener("scroll", () => {
	var scrollTop = $(window).scrollTop(),
		elementOffset = $("#second__grid").offset().top,
		distance = elementOffset - scrollTop;
	if (scrollGridTwo === true) {
		return;
	} else {
		if (Math.ceil(distance) <= 753) {
			tl = gsap.timeline();
			tl.to("#second__grid", { opacity: 1, duration: 1 }).to(".stagger__two", 1, { opacity: 1, stagger: 0.15, duration: 1 }, "-=.5");
			scrollGridTwo = true;
		}
	}
});

window.addEventListener("scroll", () => {
	var scrollTop = $(window).scrollTop(),
		elementOffset = $("#third__grid").offset().top,
		distance = elementOffset - scrollTop;
	if (scrollGridThree === true) {
		return;
	} else {
		if (Math.ceil(distance) <= 600) {
			tl = gsap.timeline();
			tl.to("#third__grid", { opacity: 1, duration: 1 }).to(".stagger__three", 1, { opacity: 1, stagger: 0.15, duration: 1 }, "-=.5");
			scrollGridThree = true;
		}
	}
});

/* ABOUT */
window.addEventListener("scroll", () => {
	var scrollTop = $(window).scrollTop(),
		elementOffset = $(".sec__title").offset().top,
		distance = elementOffset - scrollTop;

	let evens = [];
	let odds = [];
	let arr = document.querySelectorAll(".code__l");

	for (let i = 0; i < arr.length; i++) {
		if (i % 2 === 0) {
			evens.push(arr[i]);
		} else {
			odds.push(arr[i]);
		}
	}

	if (scrollAbout === true) {
		return;
	} else {
		if (Math.ceil(distance) <= -188) {
			$(".code__l").css({ opacity: 1 });
			tl = gsap.timeline();
			tl.to(".sec__title", { opacity: 1, duration: 0.5 })
				.from(evens, { opacity: 0, stagger: 0.15, duration: 1, x: 100 }, "-=.5")
				.from(odds, { opacity: 0, stagger: 0.15, duration: 1, x: -100 }, "-=2.5");
			scrollAbout = true;
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
