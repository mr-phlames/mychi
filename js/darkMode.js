// toggle dark mode button
let toggleDarkModeBtn = document.getElementById("toggle-dark-mode-btn");

// variable controlling dark mode
let isDark = false;

// items affected by mode change
let body = document.getElementById("body");
let header = document.getElementById("header");
let logo = document.getElementById("logo");


// automatic darkmode
if (date.getHours() > 17 && date.getHours() <= 23) {
	isDark = true;
	applyMode("dark");
} else if (date.getHours() >= 00 && date.getHours() < 06) {
	isDark = true;
	applyMode("dark");
} else {
	isDark = false;
	applyMode("light")
}

// toggle darkmode
toggleDarkModeBtn.onclick = function () {
	isDark = !isDark;
	isDark === true ? applyMode("dark") : applyMode("light");
}

// apply mode to elements
function applyMode(mode) {
	if (mode === "dark") {
		body.style = `background: #2a2a2a; color: #fff; transition-delay: 0s; transition-duration: 0.3s; transition-property: all; transition-timing-function: ease-in-out;`;
		header.style = `background: rgba(42, 42, 42, 0.8); color: #fff; transition-delay: 0s; transition-duration: 0.3s; transition-property: all; transition-timing-function: ease-in-out;`;
		name ? name.style = `background: rgba(42, 42, 42, 0.8); color: #fff; transition-delay: 0s; transition-duration: 0.3s; transition-property: all; transition-timing-function: ease-in-out;` : null;
		name ? email.style = `background: rgba(42, 42, 42, 0.8); color: #fff; transition-delay: 0s; transition-duration: 0.3s; transition-property: all; transition-timing-function: ease-in-out;` : null;
		name ? message.style = `background: rgba(42, 42, 42, 0.8); color: #fff; transition-delay: 0s; transition-duration: 0.3s; transition-property: all; transition-timing-function: ease-in-out;` : null;
		logo.style = `color: #fff; transition-delay: 0s; transition-duration: 0.3s; transition-property: all; transition-timing-function: ease-in-out;`;
		toggleDarkModeBtn.innerText = "🔆";
	} else if (mode === "light") {
		body.style = `background: #fff; color: #2a2a2a; transition-delay: 0s; transition-duration: 0.3s; transition-property: all; transition-timing-function: ease-in-out;`;
		header.style = `background: rgba(255,255,255,0.8); color: #2a2a2a; transition-delay: 0s; transition-duration: 0.3s; transition-property: all; transition-timing-function: ease-in-out;`;
		name ? name.style = `background: rgba(255,255,255,0.8); color: #2a2a2a; transition-delay: 0s; transition-duration: 0.3s; transition-property: all; transition-timing-function: ease-in-out;` : null;
		name ? email.style = `background: rgba(255,255,255,0.8); color: #2a2a2a; transition-delay: 0s; transition-duration: 0.3s; transition-property: all; transition-timing-function: ease-in-out;` : null;
		name ? message.style = `background: rgba(255,255,255,0.8); color: #2a2a2a; transition-delay: 0s; transition-duration: 0.3s; transition-property: all; transition-timing-function: ease-in-out;` : null;
		logo.style = `color: #2a2a2a; transition-delay: 0s; transition-duration: 0.3s; transition-property: all; transition-timing-function: ease-in-out;`;
		toggleDarkModeBtn.innerText = "🌙";
	} else {
		body.style = `background: #fff; color: #2a2a2a; transition-delay: 0s; transition-duration: 0.3s; transition-property: all; transition-timing-function: ease-in-out;`;
		header.style = `background: rgba(255,255,255,0.8); color: #2a2a2a; transition-delay: 0s; transition-duration: 0.3s; transition-property: all; transition-timing-function: ease-in-out;`;
		name ? name.style = `background: rgba(255,255,255,0.8); color: #2a2a2a; transition-delay: 0s; transition-duration: 0.3s; transition-property: all; transition-timing-function: ease-in-out;` : null;
		name ? email.style = `background: rgba(255,255,255,0.8); color: #2a2a2a; transition-delay: 0s; transition-duration: 0.3s; transition-property: all; transition-timing-function: ease-in-out;` : null;
		name ? message.style = `background: rgba(255,255,255,0.8); color: #2a2a2a; transition-delay: 0s; transition-duration: 0.3s; transition-property: all; transition-timing-function: ease-in-out;` : null;
		logo.style = `color: #2a2a2a; transition-delay: 0s; transition-duration: 0.3s; transition-property: all; transition-timing-function: ease-in-out;`;
		toggleDarkModeBtn.innerText = "🌙";
	}
}