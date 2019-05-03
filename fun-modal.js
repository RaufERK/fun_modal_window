function myFunc() {

    let display = document.getElementsByClassName('item1')[0];

    display.innerText = '555';

    let buttons = document.getElementsByClassName('item2');

    for (let i = 0; i < buttons.length; i++) {
        buttons[i].addEventListener('click', function (event){
            
            console.log(event.target);
            
            
            putOnScreen(buttons[i].innerText)});
    }


    function putOnScreen(arg) {
        console.log(arg);
        display.innerText = arg;
    }

}

