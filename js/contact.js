let form = document.getElementById("contact-me-form");
let success = document.getElementById("contact-form-sent");
let sending = document.getElementById("contact-form-sending");

// form fields
let name = document.getElementById('name');
let email = document.getElementById('email');
let message = document.getElementById('message');

// for validation messages
let nameMessage = document.getElementById('nameMessage');
let emailMessage = document.getElementById('emailMessage');
let messageMessage = document.getElementById('messageMessage');

form.onsubmit = function (event) {
	event.preventDefault();
	name.value == "" ? nameMessage.innerText = "Please type your name" : nameMessage.innerText = "";
	email.value == "" ? emailMessage.innerText = "Please type your email" : emailMessage.innerText = "";
	message.value == "" ? messageMessage.innerText = "Please type your message" : messageMessage.innerText = "";

	name.value != "" && email.value != "" && message.value  != "" ? submitForm() : null;
}

function submitForm() {
	showSending();
	// will use axios to submit message to me
	setTimeout(function() {
		showSuccess();
	}, 5000);
}

function showSending() {
	sending.style = "display: block !important; transition-delay: 0s; transition-duration: 0.3s; transition-property: all; transition-timing-function: ease-in-out;";
	form.style = "display: none !important;";
}

function showSuccess() {
	success.style = "display: block !important; transition-delay: 0s; transition-duration: 0.3s; transition-property: all; transition-timing-function: ease-in-out;";
	sending.style = "display: none !important;";
}