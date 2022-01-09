const inputField = document.querySelector('#username')
const h1 = document.querySelector('h1')

inputField.addEventListener('input', function(e){
    if (inputField.value === "") {
        h1.innerText = `Enter Your Username` 
      } else {
        h1.innerText = `Welcome, ${inputField.value}`;
      }
})

