document.addEventListener("DOMContentLoaded", function(){
    console.log('hello')
    let login_page = document.getElementById("login")
    let winner_page = document.getElementById("winner")

    let submit = document.getElementById("submit")
    submit.addEventListener("click", function() {
        console.log('hello')
        password = document.getElementById("password").value
        if (password == "winner") {
            location.href = 'winner.html';
        }
    }) 
});
