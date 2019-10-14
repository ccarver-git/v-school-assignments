var numbSym = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz~!@-#$%^&*()?/<>:][{}=+-_.,.'";
var stringLength = 5
var randomString = '';

function randomGen(password)
    for (let i = 0; i < stringLength; i++) {
    var randomString = (Math.random() * numbSym.length);
    randomGen += numbSym.substring(chars,chars+1);
}

console.log(randomGen)