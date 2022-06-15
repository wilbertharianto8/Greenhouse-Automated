var count = 100;
var decrementAmount = 10;

function handleSubmit () {

    const plant = document.getElementById('plant').value;
    const temperature = document.getElementById('temperature').value;
    const humidity = document.getElementById('humidity').value;
    // to set into local storage
    /* localStorage.setItem("NAME", name);
    localStorage.setItem("SURNAME", surname); */
    
    sessionStorage.setItem("PLANT", plant);
    sessionStorage.setItem("TEMPERATURE", temperature);
    sessionStorage.setItem("HUMIDITY", humidity);

    count -= decrementAmount;  

    return;
}