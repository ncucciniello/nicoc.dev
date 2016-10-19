document.getElementById('about-link').onclick = showAboutContent;
document.getElementById('contact-link').onclick = showContactContent;

function showAboutContent() {
	document.getElementById('contactContent').style.display="none"
	document.getElementById('aboutContent').style.display="inline-block"
}

function showContactContent() {
	document.getElementById('aboutContent').style.display="none"
	document.getElementById('contactContent').style.display="inline-block"
}
