let apiKey = {};
function handleSubmit(event) {
    event.preventDefault()

    // check what text was put into the form field
    // This part was made by you in Udacity quarters
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
 

console.log("::: MeaningCloud Form Submitted :::")



const getkey = async () => {
    const response = await fetch('/keyCall');

    try {
        const keyResponse =  await response.json();
        //console.log (keyResponse)
        return keyResponse
    } catch (error) {
        console.log('error', error)

    }
}


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

getkey()
.then((data)=>{
    apiKey = data.key
    //console.log(apiKey)
    return apiKey
})
.then((apiData)=>{
    let userInput = document.getElementById('nameChecker').value;
    const baseUrl = 'https://api.meaningcloud.com/topics-2.0';
    MeaningCloudRequest(baseUrl, apiData, userInput)
    .then((data)=>{
        postData('/add', {
            properNoun: data
        }).then(getData('/all'))
    })
})

}
export { handleSubmit }
