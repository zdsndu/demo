function show1() {
	var show1 = document.getElementById("show1");
	var show2 = document.getElementById("show2");
	var show3 = document.getElementById("show3");
	if (show1.style.display == "none") {
		show1.style.display = "block";
	} else {
		show1.style.display = "none";
	}
	show2.style.display = "none";
	show3.style.display = "none";
}

function show2() {
	var show1 = document.getElementById("show1");
	var show2 = document.getElementById("show2");
	var show3 = document.getElementById("show3");
	if (show2.style.display == "none") {
		show2.style.display = "block";
	} else {
		show2.style.display = "none";
	}
	show1.style.display = "none";
	show3.style.display = "none";
}

function show3() {
	var show1 = document.getElementById("show1");
	var show2 = document.getElementById("show2");
	var show3 = document.getElementById("show3");
	if (show3.style.display == "none") {
		show3.style.display = "block";
	} else {
		show3.style.display = "none";
	}
	show2.style.display = "none";
	show1.style.display = "none";
}
