//var hh;

function visible(cursor) {
	var direction;
	
	
	
	if (cursor.parentElement.parentElement.querySelector(".hidden")) {
		cursor.parentElement.parentElement.querySelector(".hide").classList.toggle("hidden");
		
		/*
		if (document.querySelector(".hide").offsetHeight != 0) {
			hh = document.querySelector(".hide").offsetHeight;
		}
		*/
		direction = "normal";
	} else {
		cursor.parentElement.parentElement.querySelector(".hide").classList.toggle("hidden");
		/*
		window.setTimeout(function() {			
			cursor.parentElement.parentElement.querySelector(".hide").classList.toggle("hidden");
		},500);
		*/
		direction = "reverse";
	}
	
	
	
	/*
	//анимация скрытого текста
	cursor.parentElement.parentElement.querySelector(".hide").animate(
		[
			{
				height: "0px"
			},
			{
				height: "auto"
			}
		],
		{
			duration: 500,
			easing: "ease-in-out",
			direction: direction,
			fill: "forwards"
		}
	);
	*/		
}

/*
document.querySelector(".hidden").style.display = 'block';
console.log(document.querySelector(".hidden").offsetHeight);
document.querySelector(".hidden").style.display = 'none';
.setProperty("transition", "transform .5s", "important");
*/
//console.log(document.querySelector(".hidden").getBoundingClientRect()["height"]);
/*
document.querySelector(".hidden").style.setProperty("display", "block");
console.log(document.querySelector(".hidden").offsetHeight);
document.querySelector(".hidden").style.setProperty("display", "none");
document.querySelector(".hide").offsetHeight + "px"
*/
