// var p = 'picture';

//var pic_width=200;
//var pic_height=200;

var currImage = 0;
var p1;
var state = 'on';
	
var images = ['img/pic1.jpg', 'img/pic2.jpg', 'img/pic3.jpg', 'img/pic4.jpg'];
const sliderTimer = 3000;
var to = undefined;


function slider(newState) {
	if (newState == 'off') {
		if (to) {
			clearTimeout(to);
		}
		to = undefined;
		return;
	} else if (newState == 'on' && to ) {
		return;
	}
	
	to = setTimeout(function() {
		p1.src = images[currImage];
		
		document.querySelectorAll('input[name=pictSelect]').forEach(function(item) {
			if (item.value == currImage + 1) {
				item.checked = true;
			}	
		});
					
		currImage = currImage == (images.length - 1) ? 0 : currImage + 1;
		slider();
	}, sliderTimer);
}
	
function onLoad()  {
	p1 = document.getElementById('pict1');
	console.log('src:', p1, p1.src);
	
	p1.src = images[currImage];

	
/*	setTimeout( function() {
		p1.src='img/pic5.jpg';
		//p1.height = pic_height;
		//p1.width = pic_width;
		
		//pic_width=500;
		//pic_height=500;
		
		console.log('picture should be changed');
	}, 5000);
*/
	
	document.querySelectorAll('input[name=pictSelect]').forEach(function(item/*, index, arr*/) {
		item.addEventListener('click', selectPict);
	});

	document.querySelectorAll('input[name=sliderState]').forEach(function(item) {
		item.addEventListener('click', sliderStateAction);
	});

	
	/*
	var pictures = document.querySelectorAll('input[name=pictSelect]');
	pictures.forEach(function(picture, index, arr) {
		console.log('adding listener to:', picture);
		picture.addEventListener('click', selectPict);
	}); */
	
	console.log('after timeout');
	
	slider();
}

function sliderStateAction() {
	console.log('state clicked');
	slider(document.querySelector('input[name=sliderState]:checked').value);
}

function picLoaded() {
	// console.log('picture loaded!');
}


function pictClicked(param) {
	console.log('picture loaded!',param);
	// alert(document.getElementById('pict1').src);
}

function selectPict() {
var r = document.querySelector('input[name=pictSelect]:checked');
//var p1 = document.getElementById('pict1');

currImage = parseInt(r.value) - 1;
	
/*	if (r.value == 1 ) {
		p1.src = 'img/pic1.jpg';
	} else if (r.value == 2 ) {
		p1.src = 'img/pic2.jpg';
	} else if (r.value == 3 ) {
		p1.src = 'img/pic3.jpg';
	} else if (r.value == 4 ) {
		p1.src = 'img/pic4.jpg';
	}
	*/
	
//	p1.src = 'img/pic' + r.value + '.jpg';

//	console.log(typeof r.value);

/*
	switch(r.value) {
		case '1':
			p1.src = 'img/pic1.jpg';
			break;
		case '2':
			p1.src = 'img/pic2.jpg';
			break;
		case '3':
			p1.src = 'img/pic3.jpg';
			break;
		case '4':
			p1.src = 'img/pic4.jpg';
			break;
//		default:
//			p1.src = 'img/empty.jpg';
	}
*/
	
	//p1.height = pic_height;
	//p1.width = pic_width;
// тернарный оператор
//	p1.src = r.value == 1 ? 'img/pic1.jpg' : 'img/pic1.jpg';
	
	
//	document.getElementById('pict1').src = document.querySelector('input[name=pictSelect]:checked').value == 1 ? 'img/pic1.jpg' : 'img/pic2.jpg';
	
}