function fadeIn(target) {
	var level = 0;
	var timer = null;
	
	timer = setInterval( function(){level = fadeInAction(target, level, timer);}, 10); //setInterval 주기적으로 반복해주는 함수
}

function fadeInAction(target, level, timer){
	level = level + 0.01;
	
	changeOpacity(target, level);
	
	if(level>1) clearInterval(timer);
	
	return level;
}

function changeOpacity(target, level) {
	var obj = target;
	obj.style.opacity = level;
}

var targetElemet = document.getElementById('title1');
fadeIn(targetElemet);

targetElemet = document.getElementById('title2');

fadeIn(targetElemet);