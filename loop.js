const testContainer = document.querySelector(".test")


const myJson = [
   {
       created: "today",
       text: "This is the text",
       image: "No image here, keep on looping",
       entities: {
           media: [
               {
               media_url: "https://toreberg.dev/",
               }
           ]
       }
   }
]

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