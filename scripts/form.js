$(document).ready(() => {
	$(".send__email").click(event => {
		console.log("Pressed");

		let name = $(".nname").val();
		let email = $(".email").val();
		let subject = $(".subject").val();
		let msg = $(".message").val();

		let statusEl = $(".status");
		statusEl.empty();

		if (email.length < 5 && email.includes("@" && email.includes("."))) {
			statusEl.append("<div>Email good</div>");
		} else {
			event.preventDefault();
			statusEl.append("<div>Email not good</div>");
		}
	});
});
