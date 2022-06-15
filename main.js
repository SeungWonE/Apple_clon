//fadeIn animation
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

var targetElemet = document.getElementById('title1');
fadeIn(targetElemet, 'up');

targetElemet = document.getElementById('title2');
setTimeout(fadeIn, 1000, targetElemet, 'up');

targetElemet = document.getElementsByClassName('text')[0];
setTimeout(fadeIn, 2000, targetElemet, 'up');

targetElemet = document.getElementById('TV');
setTimeout(fadeIn, 2000, targetElemet, 'center');

//video pause
var pauseButtonClickHandler = function(arg){
	
	var returtEventHandler = function(){
		if (pauseButton[arg].innerText == '||'){
			pauseButton[arg].innerText = '▶︎';
			bgVideo[arg].pause();
		} else {
			pauseButton[arg].innerText = '||';
			bgVideo[arg].play();
		}
	};
	
	return returtEventHandler;
}
//js는 변수가 block scope가 아닌 life time 방식을 활용
//따라서 onclick 이벤트의 안쪽 함수는 마지막 수 값을 봄 -> Handler을 활용해 arg라는 별개의 변수로 수용
var pauseButton = document.getElementsByClassName('pause');
var bgVideo = document.getElementsByClassName('bg_vid');

for (var i=0; i<pauseButton.length; i++){
	pauseButton[i].onclick = pauseButtonClickHandler(i);
};



//showcase float animation
var ShowcaseFloat = function(targetID, targetIndex, showcaseWidth, floatSpeed){
	var target = document.getElementById(targetID);
	var level = 0;
	
	floatId = setInterval( function(){level = ShowcaseLeft(target, targetIndex, showcaseWidth,  level);}, floatSpeed);
};

var ShowcaseLeft = function(target, targetIndex, showcaseWidth, level){
	level = level + 1;

	if(level >= 1174 + showcaseWidth - (showcaseWidth * targetIndex)){
		level = -showcaseWidth * targetIndex;
	}

	target.style.left = level + 'px';
	
	return level
};

var floatId = null;

for(var i = 0; i < 5; i++){
ShowcaseFloat('tv'+i, i, 320, 10);
}

for(var i = 0; i < 7; i++){
ShowcaseFloat('music'+i, i, 180, 10);
}

for(var i = 0; i < 5; i++){
ShowcaseFloat('game'+i, i, 320, 10);
}
	
