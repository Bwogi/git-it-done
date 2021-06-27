var issueContainerEl = document.querySelector("#issues-container");

var getRepoIssues = function(repo) {
    var apiUrl = "https://api.github.com/repos/" + repo + "/issues?direction=asc";
    console.log(apiUrl)

    fetch(apiUrl)
        .then(function(response) {
            // request was successful
            if (response.ok) {
                response.json().then(function(data) {
                    //test different properties
                    console.log(data[0]);
                    console.log(data[0].title);
                    console.log(data[0].comments);
                    console.log(data[0].number);
                    console.log(data[0].id);
                    console.log(data[0].html_url);
                    console.log(data[0].body);
                    console.log(data[0].user);
                    console.log(data[0].user.login);
                    console.log(data[0].user.url);

                    // pass response data to dom function
                    displayIssues(data);
                });
            } else {
                alert("Error: GitHub User " + user + " Not Found")
            }
        })
        // handle slow network issue 
        .catch(function(error) {
            // Notice this `.catch()` getting chained onto the end of the `.then()` method 
            alert("unable to connect to github")
        })
};

var displayIssues = function(issues) {
    if (issues.length === 0) {
        issueContainerEl.textContent = "This repo has no open issues!";
        return;
    }
    for (var i = 0; i < issues.length; i++) {
        // create a link element to take users t othe issue on github 
        var issueEl = document.createElement("a");
        issueEl.classList = "list-item flex-row justify-space-between align-center";
        issueEl.setAttribute("href", issues[i].html_url);
        issueEl.setAttribute("target", "_blank");
        // create span to hold issue title
        var titleEl = document.createElement("span");
        titleEl.textContent = issues[i].title;

        // append to container
        issueEl.appendChild(titleEl);

        // create a type element
        var typeEl = document.createElement("span");

        // check if issue is an actual issue or a pull request
        if (issues[i].pull_request) {
            typeEl.textContent = "(Pull request)";
        } else {
            typeEl.textContent = "(Issue)";
        }

        // append to container
        issueEl.appendChild(typeEl);

        issueContainerEl.appendChild(issueEl);

    }
};

getRepoIssues("facebook/react")