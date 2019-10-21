const axios = require("axios")

axios.get("https://swapi.co/api/people/1/").then((response)=>{
    console.dir(response.data)
})

