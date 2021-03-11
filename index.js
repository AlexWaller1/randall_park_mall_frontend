const endPoint = "http://localhost:3000/api/v1/gas_stations"

document.addEventListener('DOMContentLoaded', () => {
    getStations()

    const createGasStationForm = document.querySelector("#create-gas_station-form")

    createGasStationForm.addEventListener("submit", (e) => 
    createFormHandler(e))
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
            container').innerHTML += gas_stationMarkup
        })
    })
}

function createFormHandler(e) {
e.preventDefault()
const nameInput = document.querySelector('#input-name').value
const descriptionInput = document.querySelector('#input-description').value
const imageInput = document.querySelector('#input-url').value
const stateId = parseInt(document.querySelector('#categories').value)
postFetch(nameInput, descriptionInput, imageInput, stateId)
}

function postFetch(name, description, image_url, state_id) {
    console.log(name, description, image_url, state_id)

}

