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
 

console.log("::: MeaningCloud Form Submitted :::")

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

let feeling = document.getElementById('feeling').value
let appId = `79350aa3a3fa44f6f84d665b926aeea3`
const baseUrl = `https://api.meaningcloud.com/topics-2.0?`
let url = `${baseUrl}key=${appId}&of=json&lang=en&ilang=en&txt=${feeling}&tt=a&uw=y`



const getData = () =>{
meaningCloudResponse(url)  
   
}

getData();

}
export { handleSubmit }
