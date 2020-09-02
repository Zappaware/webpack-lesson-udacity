let apiKey = process.env.API_KEY;
function handleSubmit(event) {
    event.preventDefault();
//Starting point to the MeaninCloud platform

 console.log("::: MeaningCloud Form Submitted :::")
 //console.log(apiKey)

//Getting the api key from the dotenv enviroment
/*const getkey = async () => {
    const response = await fetch('/keyCall');

    try {
        const keyResponse =  await response.json();
        //console.log (keyResponse)
        return keyResponse
    } catch (error) {
        console.log('error', error)

    }
}*/

//Async function to hit the POST request in the Meaning Cloud API
const MeaningCloudRequest = async (baseUrl, apiKey, userInput) => {
    const response = await fetch(baseUrl+'?key='+apiKey+'&of=json&lang=en&ilang=en&txt='+userInput+'&tt=a&uw=y',{
        method:'POST',
        credentials: 'same-origin',
        mode: 'cors'
    } );

    try {
        const apiResponse = await response.json();
        console.log(apiResponse)
        return apiResponse
    } catch (error) {
        console.log('error', error)
    }
}

//POST request to send the data from the API
const postData = async (url=``, data = {}) =>{
    const response = await fetch(url, {
        method:'POST',
        credentials: 'same-origin',
        headers: {
            'Content-Type' : 'application/json'
        },
        body: JSON.stringify(data)
    });

    try {
        const newData = await response.json()
        console.log (newData)
        return newData
    } catch (error) {
        console.log('error', error)
    }
}

//Update function that takes the final route to change dynamically the UI
const getData = async (url) => {
    const response = await fetch(url);

    try {
        const newData = await response.json();
           let divForm = document.getElementById('form')
           let i = 0;
           do { 
           let nameData = Promise.resolve(newData.properNoun.entity_list[i].form)
           nameData.then((value)=>{
               console.log(value)
              let newDiv = document.createElement('div')
              newDiv.setAttribute('class', 'info')
              divForm.appendChild(newDiv)
              newDiv.innerHTML = `Proper noun: ${JSON.stringify(value)}`
           }) 
           i ++;
           } while (this.nameData === undefined)
    } catch(error) {
        console.log('error', error)
    }
}

//Chainning promises to do all the process when the event it is submitted
/*getkey()
.then((data)=>{
    apiKey = data.key
    //console.log(apiKey)
    return apiKey
})
.then((apiData)=>{
    
})*/

let userInput = document.getElementById('nameChecker').value;
const baseUrl = 'https://api.meaningcloud.com/topics-2.0';
MeaningCloudRequest(baseUrl, apiKey, userInput)
.then((data)=>{
    postData('/add', {
        properNoun: data
    }).then(getData('/all'))

})


}
export { handleSubmit }
