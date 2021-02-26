$(document).ready(() => {
    let mainDiv = $("#mainDiv");
    function getPost(url) {
        return new Promise((resolve, reject) => {
            $.ajax({
                url: url,
                success: (response) => {
                    resolve(response);
                },
                error: (errorResponse) => {
                    reject(errorResponse);
                }
            });
        });
    };

    function getFirstPost(posts) {
        if (!posts || posts.length === 0) {
            throw new Error("Error, please try again");
        };
        var postNum1 = posts.filter(post => post.id === 1);
        mainDiv.append(`<ul id="ul1">
        <li><b>ID</b>: <i>${postNum1[0].id}</i></li>
        <li><b>User ID</b>: <i>${postNum1[0].userId}</i></li>
        <li><b>Title</b>: <i>${postNum1[0].title}</i></li>
        <li><b>Body</b>: <i>${postNum1[0].body}</i></li>
        </ul>`);
        return new Promise((resolve, reject) => {
            $.ajax({
                url: `https://jsonplaceholder.typicode.com/users/${postNum1[0].userId}`,
                success: (data) => {
                    resolve(data);
                },
                error: (errorData) => {
                    reject(errorData);
                }
            });
        });
    };

    function printUser(user) {
        if (!user || user.length === 0) {
            throw new Error("Error, please try again later!")
        };
        mainDiv.append(`<ul id="ul2">
        <li><b>User ID</b>: <i>${user.id}</i></li>
        <li><b>Name ID</b>: <i>${user.name}</i></li>
        <li><b>Username</b>: <i>${user.username}</i></li>
        <li><b>E-mail</b>: <i>${user.email}</i></li>
        <li><b>Street</b>: <i>${user.address.street}</i></li>
        <li><b>Suite</b>: <i>${user.address.suite}</i></li>
        <li><b>City</b>: <i>${user.address.city}</i></li>
        <li><b>Zip Code</b>: <i>${user.address.zipcode}</i></li>
        <li><b>Phone</b>: <i>${user.phone}</i></li>
        <li><b>Website</b>: <i>${user.website}</i></li>
        <li><b>Company</b>: <i>${user.company.name}</i></li>
        <li><b>Catch Phrase</b>: <i>${user.company.catchPhrase}</i></li>
        <li><b>BS</b>: <i>${user.company.bs}</i></li>
        </ul>`);
    };

    getPost("https://jsonplaceholder.typicode.com/posts")
        .then(p => {
            return getFirstPost(p);
        })
        .then(user => printUser(user))
        .catch(err => console.log(err))
});