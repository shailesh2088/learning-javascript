window.onload = init;

function init() {
	var images = document.getElementsByTagName("img");
	for (var i = 0; i< images.length; i++) {
		images[i].onmouseover = showAnswer;
		images[i].onmouseout = reblur;
	}
}

function showAnswer(e) {
	var image = e.target;
	var name = image.id;
	name = name + ".jpg";
	image.src = name;
}

function reblur (e) {
	var image = e.target;
	var name = image.id;
	name = name + "blur.jpg";
	image.src = name;
}
