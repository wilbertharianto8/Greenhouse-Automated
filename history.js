document.addEventListener('DOMContentLoaded', function() {

    const history1 = document.querySelector('#history')
    const historyURL = `http://localhost:3000/plants`
    const historyForm = document.querySelector('#plants')
    let allHistory = []
  
    fetch(`${historyURL}`)
      .then( response => response.json() )
      .then( historyData => historyData.forEach(function(history) {
        allHistory = historyData
        history1.innerHTML += `
        <div id=history-${history.id}>
        <p style="color:rgb(162, 255, 0)"> <h2>Plant: ${history.plant}</h2>
          <h4>Temperature: ${history.temperature}</h4>
          <p>Humidity: ${history.humidity}</p>
          </p>
        </div>`
      })) // end of history fetch
  
  
      historyForm.addEventListener('submit', (e) => {
      event.preventDefault();
  
      const plant = historyForm.querySelector('#plant').value
      const temperature = historyForm.querySelector('#temperature').value
      const humidity = historyForm.querySelector('#humidity').value
  
      fetch(`${historyURL}`, {
        method: 'POST',
        body: JSON.stringify({
          plant: plant,
          temperature: temperature,
          humidity: humidity
        }),
        headers: {
          'Content-Type': 'application/json'
        }
      }).then( response => response.json())
        .then( history => {
          allHistory.push(history)
          history1.innerHTML += `
          <div id=history-${history.id}>
            <h2>Plant: ${history.plant}</h2>
            <h4>Temperature: ${history.temperature}</h4>
            <p>Humidity: ${history.humidity}</p>
          </div>`
        })
  
    }) // end of eventListener for add history
  
  
  })
  