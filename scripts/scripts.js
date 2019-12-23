/* FORM */
//CLOSE

function focusy() {
	let input = document.querySelectorAll(".input");
	let label = document.querySelectorAll(".labels");
	for (let i = 0; i < input.length; i++) {
		input[i].addEventListener("focus", () => {
			gsap.to(label[i], { y: -30, scale: 0.9 });
		});

		input[i].addEventListener("focusout", () => {
			if (input[i].value.length === 0) gsap.to(label[i], { y: 0, scale: 1 });
		});
	}
}

document.querySelector(".get__in__touch").addEventListener("click", () => {
	let className = document.querySelector(".touch__modal").className.split(" ")[1];

	if (className === "closed") {
		gsap.to(".touch__modal", { duration: 0.7, opacity: 1, y: 50 });
		document.querySelector(".touch__modal").classList.remove("closed");
		document.querySelector(".touch__modal").classList.add("opened");
	}
});

document.getElementById("nav-icon1").addEventListener("click", () => {
	let className = document.querySelector(".touch__modal").className.split(" ")[1];

	if (className === "opened") {
		gsap.to(".touch__modal", { duration: 0.8, opacity: 0, y: 0 });
		setTimeout(() => {
			document.querySelector(".touch__modal").classList.remove("opened");
			document.querySelector(".touch__modal").classList.add("closed");
		}, 1000);
	}
});

focusy();

/* DETAIL PANELS */

document.getElementById("corre__detail").addEventListener("click", () => {
	let className = document.getElementById("corre__details").className.split(" ")[1];
	if (className === "closed") {
		let tl = gsap.timeline();
		document.getElementById("corre__details").classList.remove("closed");
		document.getElementById("corre__details").classList.add("opened");
		tl.from(".detail__view", { opacity: 0, duration: 0.8, x: -2000 }).from("#corre__det", { opacity: 0, duration: 1, x: 500, ease: "elastic.out(1.2, 1.9)" }, "-=.2");
	}
});

document.getElementById("close__corre").addEventListener("click", () => {
	let className = document.getElementById("corre__details").className.split(" ")[1];
	let tl = gsap.timeline();

	if (className === "opened") {
		tl.to(".detail__view", { opacity: 0, duration: 0.8, ease: "elastic.out(1.2, 2.5)" }).to(".detail__view", { opacity: 1, duration: 0.1, x: 0 });
		setTimeout(() => {
			document.getElementById("corre__details").classList.remove("opened");
			document.getElementById("corre__details").classList.add("closed");
		}, 250);
	}
});

document.getElementById("portfolio__detail").addEventListener("click", () => {
	let className = document.getElementById("portfolio__details").className.split(" ")[1];
	if (className === "closed") {
		let tl = gsap.timeline();
		document.getElementById("portfolio__details").classList.remove("closed");
		document.getElementById("portfolio__details").classList.add("opened");
		tl.from(".detail__view", { opacity: 0, duration: 0.8, x: -2000 }).from("#portfolio__det", { opacity: 0, duration: 1, x: 500, ease: "elastic.out(1.2, 1.9)" }, "-=.2");
	}
});

document.getElementById("close__portfolio").addEventListener("click", () => {
	let className = document.getElementById("portfolio__details").className.split(" ")[1];
	let tl = gsap.timeline();

	if (className === "opened") {
		tl.to(".detail__view", { opacity: 0, duration: 0.8, ease: "elastic.out(1.2, 2.5)" }).to(".detail__view", { opacity: 1, duration: 0.1, x: 0 });
		setTimeout(() => {
			document.getElementById("portfolio__details").classList.remove("opened");
			document.getElementById("portfolio__details").classList.add("closed");
		}, 250);
	}
});
document.getElementById("ml__detail").addEventListener("click", () => {
	let className = document.getElementById("ml__details").className.split(" ")[1];
	if (className === "closed") {
		let tl = gsap.timeline();
		document.getElementById("ml__details").classList.remove("closed");
		document.getElementById("ml__details").classList.add("opened");
		tl.from(".detail__view", { opacity: 0, duration: 0.8, x: -2000 }).from("#ml__det", { opacity: 0, duration: 1, x: 500, ease: "elastic.out(1.2, 1.9)" }, "-=.2");
	}
});

document.getElementById("close__ml").addEventListener("click", () => {
	let className = document.getElementById("ml__details").className.split(" ")[1];
	let tl = gsap.timeline();

	if (className === "opened") {
		tl.to(".detail__view", { opacity: 0, duration: 0.8, ease: "elastic.out(1.2, 2.5)" }).to(".detail__view", { opacity: 1, duration: 0.1, x: 0 });
		setTimeout(() => {
			document.getElementById("ml__details").classList.remove("opened");
			document.getElementById("ml__details").classList.add("closed");
		}, 250);
	}
});

document.querySelectorAll(".nav__anchor").forEach(anchor => {
	anchor.onclick = () => {
		gsap.timeline()
			.to("#open__menu", { opacity: 1, duration: 0.8 }, "-=1")
			.to(".nav__opened", { duration: 1, x: 2200 }, "+=.01")
			.to(".nav__opened", { duration: 0.01, x: 0, opacity: 0 })
			.to(".nav__opened", { scaleY: 0 });

		let welcome = document.getElementById("welcome").className.split(" ")[1];
		let body = document.getElementById("body").className.split(" ")[0];

		if (welcome === "blur" && body === "noScroll") {
			document.getElementById("welcome").classList.remove("blur");
			document.getElementById("body").classList.remove("noScroll");
		}
	};
});

document.getElementById("open__menu").addEventListener("click", () => {
	let welcome = document.getElementById("welcome").className.split(" ")[1];
	let body = document.getElementById("body").className.split(" ")[1];

	if (welcome === undefined && body === undefined) {
		document.getElementById("welcome").classList.add("blur");
		document.getElementById("body").classList.add("noScroll");
	}
});

document.getElementById("close__menu").addEventListener("click", () => {
	let welcome = document.getElementById("welcome").className.split(" ")[1];
	let body = document.getElementById("body").className.split(" ")[0];
	if (welcome === "blur" && body === "noScroll") {
		document.getElementById("welcome").classList.remove("blur");
		document.getElementById("body").classList.remove("noScroll");
	}
});

/* ANIME */
