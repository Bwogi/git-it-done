var userFormEl = document.querySelector("#user-form");
var nameInputEl = document.querySelector("#username");

var formSubmitHandler = function(event) {
    event.preventDefault();

    var username = nameInputEl.value.trim();
    if (username) {
        getUserRepos(username);
        nameInputEl.value = "";
    } else {
        alert("Please enter your GitHub username")
    }
}

var getUserRepos = function(user) {
    var apiUrl = "https://api.github.com/users/" + user + "/repos";

    // make a call to the api
    // fetch('').then(response).then(data)

    fetch(apiUrl).then(function(response) {
        response.json().then(function(data) {
            console.log(data);
        });
    });
};
// try bwogi ,facebook,microsoft etc. 
// getUserRepos("facebook");
userFormEl.addEventListener("submit", formSubmitHandler)