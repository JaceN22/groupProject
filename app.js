function computerThink() {
	computerChoice = Math.floor(Math.random()*3);
	if(computerChoice === 1) {
		//alert("Yes");//
		document.getElementById("image").src = "Yes.png";
	}
	else if(computerChoice === 2) {
		//alert("No");//
		document.getElementById("image").src = "No.png";
	}
	else if(computerChoice === 3) {
		//alert("Probably Not");//
		document.getElementById("image").src = "ProbablyNot.png";
	}
	else if(computerChoice === 4) {
		//alert("Probably");//
		document.getElementById("image").src = "Probably.png";
	}
	else{
		//alert("Maybe");//
		document.getElementById("image").src = "Maybe.png";
	}
}

