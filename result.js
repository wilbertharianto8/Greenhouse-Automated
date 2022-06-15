var count = 100;
var decrementAmount = 10;

window.addEventListener('load', () => {

    // Via Query parameters - GET
    /* const params = (new URL(document.location)).searchParams;
    const name = params.get('name');
    const surname = params.get('surname'); */

    // Via local Storage
    /* const name = localStorage.getItem('NAME');
    const surname = localStorage.getItem('SURNAME'); */
    
    const plant = sessionStorage.getItem('PLANT');
    const temperature = sessionStorage.getItem('TEMPERATURE');
    const humidity = sessionStorage.getItem('HUMIDITY');
    count -= decrementAmount; 
    
    document.getElementById('result-plant').innerHTML = plant;
    document.getElementById('result-temperature').innerHTML = temperature;
    document.getElementById('result-humidity').innerHTML = humidity;
    document.getElementById('result-water').innerHTML = count;
})