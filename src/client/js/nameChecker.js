
//Function maked by you guys in the Udacity quarters, so simple but It gave some problems whan I tried to import it to the jest files
function checkForName(inputText) {
    console.log("::: Running checkForName :::", inputText);
    let names = [
        "Picard",
        "Janeway",
        "Kirk",
        "Archer",
        "Georgiou"
    ]

 
    if(names.includes(inputText)) {
        alert("Welcome, Captain!")
    } 
  
}

export { checkForName }
