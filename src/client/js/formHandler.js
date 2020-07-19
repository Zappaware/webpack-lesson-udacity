function handleSubmit(event) {
    event.preventDefault()

    // check what text was put into the form field
    let formText = document.getElementById('name').value
    Client.checkForName(formText)

    console.log("::: Form Submitted :::")
    fetch('http://localhost:8081/test')
    .then(res => {
     return res.json()
 })
    .then(function(data) {
        document.getElementById('results').innerHTML = data.message
 })
 
let zipCode = document.getElementById('zip').value
let countryCode = document.getElementById('country').value
let appId = `23eaaf61fab62a2f43f0fc31f3893e2a`
const baseUrl = `api.openweathermap.org/data/2.5/weather?`
let url = `http://${baseUrl}zip=${zipCode},${countryCode}&appid=${appId}&units=imperial`
console.log("::: Weather Form Submitted :::")
    fetch(url)
    .then(res => {
     return res.json()
 })
    .then(function(data) {
        alert(data.main.temp)
 })
}




export { handleSubmit }
