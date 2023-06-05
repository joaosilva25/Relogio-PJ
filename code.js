let horas1=document.querySelectorAll('h1')[0];
let minutes2=document.querySelectorAll('h1')[1];
let seconds3=document.querySelectorAll('h1')[2];


setInterval(
function horas() {
    let dates=new Date();
    let hours=dates.getHours();
    let minutes=dates.getMinutes();
    let seconds=dates.getSeconds();

    horas1.innerHTML=`<h1>${hours}</h1>`;
    minutes2.innerHTML=`<h1>${minutes}</h1>`;
    seconds3.innerHTML=`<h1>${seconds}</h1>`;
},1000);

horas()


function screenMode() {
    let button = document.querySelector('button')
    let HorasText=document.querySelector('.horas');
    let MinutosText=document.querySelector('.minutos');
    let SegundosText=document.querySelector('.segundos');
    let screen=document.querySelector('body');

    if (button.classList.contains('dark')) {
        button.classList.replace('dark', 'light');
        button.style.transform="translateX(100%)";
        button.style.transition="0.5s ease-in-out";
        screen.style.backgroundColor="#F6CA46";
        HorasText.style.color="#F6CA46";
        MinutosText.style.color="#F6CA46";
        SegundosText.style.color="#F6CA46";
    }
    else {
        button.classList.replace('light','dark');
        button.style.transform="translateX(10%)";
        button.style.transition="0.5s ease-in-out";
        screen.style.backgroundColor="#20244F";
        HorasText.style.color="#20244F";
        MinutosText.style.color="#20244F";
        SegundosText.style.color="#20244F";
    }

}