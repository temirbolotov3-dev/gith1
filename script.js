//setInterval- белгилуу бир убакыттын ичинде 
// кандайдыр бир функцияны аткарат

/*setInterval(() => {
    alert('Hello World')
    console.log(alert)
}, 5000);*/

/*let count=0

setInterval(() => {
    count++
    let p = document.getElementById('time')
    p.innerHTML=count
    if (count>=3){
        p.style.backgroundColor='green'
    }
    if (count>=5){
        p.style.backgroundColor='yellow'
    }
    if (count>=10){
        p.style.backgroundColor='red'
    }

}, 1000);*/


/*let count =0
const Startcount=()=>{

setInterval(() => {
    count++
    document.getElementById('sum').innerHTML=count
},1000);
}*/


let count = 0; // Изначальное значение счетчика.
let intervalId = null; // Идентификатор интервала.

const startCount = () => {
    if (intervalId === null) { // Проверка, что таймер не запущен
        intervalId = setInterval(() => {
            count++; // Увеличиваем счетчик
            document.getElementById('sum').innerHTML = count; // Обновляем значение в элементе
        }, 1000);
    }
};

const stopClick = () => {
    clearInterval(intervalId); // Останавливаем таймер
    intervalId = null; // Сбрасываем идентификатор интервала
};

const clearClick = () => {
    clearInterval(intervalId); // Останавливаем таймер, если он запущен
    intervalId = null; // Устанавливаем идентификатор интервала в null
    count = 0; // Сбрасываем значение счетчика
    document.getElementById('sum').innerHTML = count; // Обновляем значение в элементе
};

// Добавление обработчиков событий для кнопок
document.getElementById('start').addEventListener('click', startCount);
document.getElementById('stop').addEventListener('click', stopClick);
document.getElementById('clear').addEventListener('click', clearClick);