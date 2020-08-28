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
/*In this part of the function the code will make de POST request, then it take's the data and make's a do...while loop to select all the proper nouns of the json returned. After that the code make changes dynamically in the page to render it in the browser */
   const meaningCloudResponse= async (url) =>{
       const response = await fetch (url,{
           method: 'POST',
           credentials: 'same-origin',
           mode: "cors",
       })

       try {
           const newData = await response.json();
           let divForm = document.getElementById('form')
           let i = 0;
           do { 
           let nameData = Promise.resolve(newData.entity_list[i].form)
           nameData.then((value)=>{
               console.log(value)
              let newDiv = document.createElement('div')
              newDiv.setAttribute('class', 'info')
              divForm.appendChild(newDiv)
              newDiv.innerHTML = `Proper noun: ${JSON.stringify(value)}`
           }) 
           i ++;
           } while (this.nameData === undefined)
           return newData

       } catch (error){
           console.log('error', error)

       }
   }
//Taking all the elements to construct the url to make the POST request to the MeaningCloud API
let feeling = document.getElementById('feeling').value
let appId = ``
const baseUrl = `https://api.meaningcloud.com/topics-2.0?`
let url = `${baseUrl}key=${appId}&of=json&lang=en&ilang=en&txt=${feeling}&tt=a&uw=y`


// Finally I decided to wrap the request in a function called getData, I don't remember, but I think I doesn't worked when I make some test when I just invoked the function alone.
const getData = () =>{
meaningCloudResponse(url)  
}

getData();

}

export { handleSubmit }
