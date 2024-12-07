document.addEventListener("DOMContentLoaded", function(){
    console.log('hello')
    let login = document.getElementById("login")

    let input = document.getElementById("password")
    let submit = document.getElementById("submit")
    let wrong = document.getElementById("wrong")

    submit.addEventListener("click", function() {
        console.log('hello')
        password = input.value
        if (password.toLowerCase() == "winner") {
            location.href = 'winner.html';
        } else {
            wrong.style.display = "block"
            login.classList.add("shakewildly")
            setTimeout(function() {
                wrong.style.display = "none"
                login.classList.remove("shakewildly")
                input.value = ""
                input.focus();
            }, 300)
        }
    }) 
});
