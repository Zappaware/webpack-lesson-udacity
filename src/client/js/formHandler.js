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
           mode: "cors"       
       })

       try {
           const newData= response.json();
           return newData

       } catch (error){
           console.log('error', error)

       }
   }
   const userResponse= async (url, data = {}) =>{
    const response = await fetch (url,{
        method: 'POST',
        credentials: 'same-origin',
        mode: "cors"       
    })

    try {
        const newData= response.json();
        return newData

    } catch (error){
        console.log('error', error)

    }
}

   const getData = async (url='') => {
    const request = await fetch(url);

    try{
        const allData = await request.json();
        console.log(allData);
    } catch (error) {
        console.log('error', error)
    }
}

let feeling = document.getElementById('feeling').value
let appId = ``
const baseUrl = `https://api.meaningcloud.com/sentiment-2.1?`
let url = `${baseUrl}key=${appId}&of=json&txt=${feeling}&model=sentiment&lang=en`

meaningCloudResponse(url)
.then((data)=>{
    userResponse('/add', {
      projectData: data  
    })
.then(getData('/all'))   
})
   
}




export { handleSubmit }
