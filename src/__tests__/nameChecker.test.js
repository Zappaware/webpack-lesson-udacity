// I only could make it work with the require function.

const checkForNameTest = require('../client/js/nameChecker')
     /*This jest describe method check's for the function to be defined. for the second test I wanted to practice jest and make sure that the checkForName function actually can do what it is supose to do with the i/o required*/

describe("Testing the nameChecker functionality", () => {
 
    test("Testing the checkForName() function, it should return PASS", () => {

           expect(checkForNameTest).toBeDefined();      
})

    test('Testing function', ()=>{
        //making variables for the expect method to replace arguments
        let name = "Picard";
        let answer = "Welcome, Captain!";
        /*In this part I added tje jsdomAlert and empty implementention fo window.alert beacause it throwed me an error when I runned the test, so getting help in stackOverFlow they said that de jsdom library does not implement everything a browser can do*/
        const jsdomAlert = window.alert; 
        window.alert = () => {};  // provide an empty implementation for window.alert
        return expect(checkForNameTest.checkForName(name)).toEqual(alert(answer));
        window.alert = jsdomAlert;
    })
});
