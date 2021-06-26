var getUserRepos = function(user) {
    var apiUrl = "https://api.github.com/users/" + user + "/repos";

    // make a call to the api 
    fetch(apiUrl).then(function(response) {
        response.json().then(function(data) {
            console.log(data);
        });
    });
};
getUserRepos("facebook");

// try bwogi facebook microsoft etc. 

// fetch('').then(response).then(data)