
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
console.log(sum(1, 2))

var user = {username: "sam", password: "123abc"};

function login(username, password){
    try {
        if(password !==  password){
            throw 
        }
        console.log("Login successful!")
}

// If password not entered 
if (password1 == '') 
alert ("Please enter Password"); 
  
// If confirm password not entered 
else if (password2 == '') 
alert ("Please enter confirm password"); 
  
// If Not same return False.     
else if (password1 != password2) { 
alert ("\nPassword did not match: Please try again...") 
return false; 
} 

// If same return True. 
else{ 
alert("Password Match: Welcome to GeeksforGeeks!") 
return true; 