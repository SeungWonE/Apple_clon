//fadeIn func
function fadeIn(target, direction) {
	var level = 0;
	var timer = null;

	target.style.position = 'relative';
	
	timer = setInterval( function(){level = fadeInAction(target, level, timer, direction);}, 10); //setInterval 주기적으로 반복해주는 함수
}

function fadeInAction(target, level, timer, direction){
	level = level + 0.01;


	changeOpacity(target, level, direction);
	
	if(level>1) clearInterval(timer);
	
	return level;
}

function changeOpacity(target, level, direction) {
	var obj = target;
	obj.style.opacity = level;
	
	if(direction == 'up'){
		obj.style.top = Math.cos(level) * 10 + 'px';
	}

}

//vid pause
var backgroundVid = document.getElementsByClassName('bg_vid')
var pauseButton = document.getElementsByClassName('phase')

for (var i = 0; i < pauseButton.length;){
	console.log(i);
	pauseButton[i].addEventListener("click", function(){backgroundVid[i].pause();});
}

//fadeIn animation
var targetElemet = document.getElementById('title1');
fadeIn(targetElemet, 'up');

targetElemet = document.getElementById('title2');
setTimeout(fadeIn, 1000, targetElemet, 'up');

targetElemet = document.getElementsByClassName('text')[0];
setTimeout(fadeIn, 2000, targetElemet, 'up');

targetElemet = document.getElementById('TV');
setTimeout(fadeIn, 2000, targetElemet, 'center');

