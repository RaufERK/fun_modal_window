// var comment ;
var modalDialog;
var modalOk;
var modalClose;
var modalBackground;
var modalTitle;
var modalText;
var modalSelected;

var dialogData = {
	1: {
		title: 'Подтверждение',
		html: 'Уверен, что надо удалить?<br>Удаляем имя города!!!',
		result: {
			status: 'OK',
			dialog: 1
		},
		func: function () {
			alert('dialog 1 completed!');
		}
	},
	2: {
		title: 'Запрос',
		html: 'Надо ли ввести новые данные?<br>Имя города',
		func: 'string string'
	}
};

function dialogOpen(n) {
	modalSelected = n;
	/*	if (n == 1 ) {
			modalTitle.innerText = 'Подтверждение';
			modalText.innerHTML = 'Уверен, что надо удалить?<br>Удаляем имя города!!!';
		} else {
			modalTitle.innerText = 'Запрос';
			modalText.innerText = 'Надо ли ввести новые данные?<br>Имя города';		
		}
	*/
	modalTitle.innerText = dialogData[n].title;
	modalText.innerHTML = dialogData[n].html;
	/*	идентично написанному выше!!!
		modalTitle.innerText = dialogData[n]['title'];
		modalText.innerHTML = dialogData[n]['html'];
	*/
	modalDialog.style.display = 'block';
	// document.getElementById('modalDialog').style.display = 'block';
}
function onLoad() {
	// назначение переменных (сохранение объектов)
	modalDialog = document.getElementById('modalDialog');
	modalOk = document.getElementById('modalOk');
	modalBackground = document.getElementById('modalBackground');
	modalCancel = document.getElementById('modalCancel');
	modalTitle = document.getElementById('modalTitle');
	modalText = document.getElementById('modalText');
	// вешаем обработчики
	modalOk.addEventListener('click', modalOkFunc);
	modalBackground.addEventListener('click', modalCancelFunc);
	modalCancel.addEventListener('click', modalCancelFunc);
}
function modalOkFunc() {
	console.log('OK pressed, диалог:', modalSelected);
	var dData = dialogData[modalSelected];
	var i;
	console.log('dData:', dData);
	for (i in dData) {
		console.log(
			'dData[',
			modalSelected,
			'][ ',
			i,
			'] =',
			dData[i]);
	}
	/*	if (dData.func) {
			dData.func();
		}
	*/
	dData.func && typeof (dData.func) == 'function' && dData.func();
	modalCloseFunc();
}
function modalCancelFunc() {
	console.log('Closed');
	modalCloseFunc();
}
function modalCloseFunc() {
	modalDialog.style.display = 'none';
}