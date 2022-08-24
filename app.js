var boop = new Audio("boop.mp3");
var pip = new Audio("wup.mp3");
var wup = new Audio("pip.mp3");


const calc = document.querySelector('.calc');
const result = document.querySelector('#result');

calc.addEventListener('click', function(event) {

    if(!event.target.classList.contains('calc_btn')) return;
    
    const value = event.target.innerText;
    
    switch (value) {

        case 'C':
            result.innerText = ' ';
            boop.play();
            break;

        case '=':
            if(result.innerText.search(/[^0-9*/+-.]/mi) != -1) return;
            pip.play();
            result.innerText = eval(result.innerText).toFixed(2);
            break;

        default:
            result.innerText += value;
            wup.play();
            break;
    }
    
    


});