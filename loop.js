//Create a div in the html file: <div class="test"></div>
//let javascript know that there's a div called "test" so you can create html
const testContainer = document.querySelector(".test")

//A typical JSON structure
const myJson = [
   {
       created: "today",
       text: "This is the text",
       image: "No image here, keep on looping",
       entities: {
           media: [
               {
               media_url: "https://www.example.com",
               }
           ]
       }
   }
]

//Looping through the outer array, then the nested array. 
//Sorry for the creative naming
function  brainFartLoop() {
    for (let i = 0; i < myJson.length; i++) {
        let outerArray = myJson[i];
        console.log(myJson[i].entities.media)
        let innerArray = myJson[i].entities.media;
        for (let j = 0; j < innerArray.length; j++) {
            let innerArrayObject = innerArray[j]
            console.log(innerArrayObject)
            testContainer.innerHTML += `<p style="color: white">${outerArray.created}</p>
                                        <p style="color: white">${outerArray.text}</p>
                                        <p style="color: white">${innerArrayObject.media_url}</p>`
        }
    }
}
brainFartLoop()
