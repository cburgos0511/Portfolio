$(document).ready(() => {
	$(".send__email").click(event => {
		console.log("Pressed");

		let name = $(".nname").val();
		let email = $(".email").val();
		let subject = $(".subject").val();
		let msg = $(".message").val();

		let statusEl = $(".status");
		statusEl.empty();

		if (email.length > 5 && email.includes("@" && email.includes("."))) {
			statusEl.append("<div>Email good</div>");
		} else {
			statusEl.append("<div>Email not good</div>");
			event.preventDefault();
		}

		if (name > 2) {
			statusEl.append("<div>Name good</div>");
		} else {
			statusEl.append("<div>Name not good</div>");
			event.preventDefault();
		}

		if (subject > 2) {
			statusEl.append("<div>Subject good</div>");
		} else {
			statusEl.append("<div>Subject not good</div>");
			event.preventDefault();
		}

		if (msg > 15) {
			statusEl.append("<div>Msg good</div>");
		} else {
			statusEl.append("<div>Msg not good</div>");
			event.preventDefault();
		}
	});
});
