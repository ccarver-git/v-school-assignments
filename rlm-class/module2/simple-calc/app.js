const addForm = document.addition;

addForm.addEventListener('submit', function(event) {
  event.preventDefault();

  const addOne = addForm.addNumOne.value;
  const addTwo = addForm.addNumTwo.value;
  const h3 = document.querySelector('h3') || document.createElement('h3')

  h3.textContent = Number(addOne) + Number(addTwo);

  const result = document.getElementById('addBox')
  result.appendChild(h3)

});

const subForm = document.subtraction

subForm.addEventListener('submit', function(event){
    event.preventDefault();

    const subOne = subForm.subNumOne.value;
    const subTwo = subForm.subNumTwo.value;
    const h3 = document.querySelector('h3') || document.createElement('h3');

    h3.textContent = Number(subOne) - Number(subTwo);

    const subResult = document.getElementById('subBox');
    subResult.appendChild(h3)
})

const multForm = document.multiply

multForm.addEventListener('submit', function(){
    event.preventDefault();

    const multOne = multForm.multNumOne.value;
    const multTwo = multForm.multNumTwo.value;
    const h3 = document.querySelector('h3') || document.createElement('h3');

    h3.textContent = Number(multOne) * Number(multTwo);

    const multResult = document.getElementById('multBox');
    multResult.appendChild(h3)
})
