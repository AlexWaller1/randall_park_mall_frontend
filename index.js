const endPoint = "http://localhost:3000/api/v1/gas_stations"

document.addEventListener('DOMContentLoaded', () => {
    getStations()

    const createGasStationForm = document.querySelector("#create-gas_station-form")

    createGasStationForm.addEventListener("submit", (e) => console.log(e))
})

function getStations() {
    fetch(endPoint)
    .then(response => response.json())
    .then(stations => {
        stations.data.forEach(gas_station => {


            const stationMarkup = 
            <div data-id={gas_station.id}>
                <img src={gas_station.attributes.image}
                height="200" width="250">
                    
                    <p>{gas_station.attributes.state.name}</p>
                    <button data-id={gas_station.id}>edit</button>
            </div>
            <br></br> ;

            document.querySelector('#gas_station-
            container').innerHTML += syllabusMarkup
        })
    })
}
