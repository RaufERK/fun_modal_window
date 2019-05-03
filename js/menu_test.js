var state = 1; // 1 or 2

function changeDiv() {
	document.querySelectorAll('.main').forEach(function(item) {
		if (state == 1) {
			item.classList.add('red');
			
			
		} else {
			item.classList.remove('red');
			
		}
		
	});
	state = state == 1 ? 2 : 1;
}