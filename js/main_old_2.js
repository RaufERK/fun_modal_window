// var p = 'picture';

//var pic_width=200;
//var pic_height=200;

var currImage = 0;
// var currImage_2 = 0;

var p1;
// var p2;


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


/*	document.querySelectorAll('input[name=pictSelect2]').forEach(function(item) {
				item.addEventListener('click', selectPict2);
			}); */
	
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

	/*
	var pictures = document.querySelectorAll('input[name=pictSelect]');
	pictures.forEach(function(picture, index, arr) {
		console.log('adding listener to:', picture);
		picture.addEventListener('click', selectPict);
	}); */

	document.querySelectorAll('input[name=sliderState]').forEach(function(item) {
		item.addEventListener('click', sliderStateAction);
	});

	document.querySelectorAll('input[name=pictSelect2]').forEach(function(item) {
		item.addEventListener('click', selectPict2);
	});
	
	
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

console.log(r);

}

function selectPict2() {
var r = document.querySelector('input[name=pictSelect2]:checked');
var p2 = document.getElementById('pict2');

console.log('selectPict2() : ', r);

p2.src = images[parseInt(r.value) - 1];


console.log('selectPict2() : ', p2.src);

}