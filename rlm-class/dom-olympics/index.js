const h1 = document.createElement("h1");
h1.textContent = "JavaScript Made This!!";
h1.className = "header";
document.getElementById("header").appendChild(h1)



const h3 = document.createElement("h3");
h3.innerHTML = "<span class=name>Clint Carver</span> wrote the JavsScript";
document.getElementById("header").appendChild(h3)

const messages = document.getElementsByClassName("message");

messages[0].textContent = "you're the best";
messages[1].textContent = "no, you're the best";
messages[2].textContent = "get out of town!";
messages[3].textContent = "ahh! Thanks!";


const themeDropDown = document.getElementById("theme-drop-down")
themeDropDown.addEventListener("change", function(){
    themeDropDown.classList.toggle("theme-two");
    // if(themeDropDown.value === "theme-one")
    // messages[0].style.backgroundColor = ""
})

function switchThemes(){
    const themeDropDown = document.getElementById("theme-drop-down")
    .classList.toggle("theme-two");
}

// const themeTwo 


// const themeThree
// teal #2ED;
// dark blue #10053d;

// const themeFour
// green #02ac1e;
// pink #eb01a5;



