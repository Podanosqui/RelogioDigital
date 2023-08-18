const horas = document.getElementById('horas'); //Elemento que vai alterar o ID 'horas'. Definidos no HTML.
const minutos = document.getElementById('minutos'); //Elemento que vai alterar o ID 'minutos'. Definidos no HTML.
const segundos = document.getElementById('segundos'); //Elemento que vai alterar o ID 'Segundos'. Definidos no HTML.

const relogio = setInterval(function time(){
    let dateToday = new Date();
    let hr = dateToday.getHours(); //Variável que vai buscar a hora de hoje.
    let min = dateToday.getMinutes(); //Variável que vai buscar os minutos.
    let s = dateToday.getSeconds(); //Variável que vai buscar os segundos.

    if(hr < 10) hr = '0' + hr; //Aplicando o 0 antes da Hora caso seja menor que 10.
    if(min < 10) min = '0' + min; //Aplicando o 0 antes dos Minutos caso seja menor que 10.
    if(s < 10) s = '0' + s; //Aplicando o 0 antes dos Segundos caso seja menor que 10.

    horas.textContent = hr; //Atribuição da hora adquirida no JS para HTML.
    minutos.textContent = min; //Atribuição dos minutos adquiridos no JS para HTML.
    segundos.textContent = s; //Atribuição dos segundos adquiridos no JS para HTML.
});