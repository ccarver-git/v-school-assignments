
function sum(x, y){
    try{
        if(typeof x !== "number"){
            throw 'Houstan, we have a problem'
        }
    }  catch (err) {
        console.dir(err)
    } finally {
        return x + y
    }


} 
console.log(sum("golf", 8))
// try {
//     sum(1, 2)
// }

// catch {
//     console.log("Houston we have a problem")
// }

// var user = {username: "sam", password: "123abc"};

// function login(username, password){
//   if(username === password)
//   console.log("You are correct, login successful!")
// }

// try {
//     login()
// }

// catch {
//     console.log(" ")
// }