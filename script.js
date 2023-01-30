const container = document.querySelector('.container')
const input = document.querySelector("#input");
const submitButton = document.querySelector("#subBut");
const error = document.querySelector("#error");
const ulLi = document.querySelector("#ulLi");
const commentBut = document.querySelector("#commentBut")
const fieldComments = document.querySelector("#fieldComments");

submitButton.addEventListener("click", () => {
    fetch(`https://jsonplaceholder.typicode.com/posts/${input.value}`)
        .then(
            function (response) {
                return response.json()
            }
        )
        .then((response) => {
            if (isNaN(input.value) ||input.value == 0 || input.value.trim() === "" || input.value > 100 || input.value < 0) {
                error.style.display = "block";
            } else {
                console.log(response)
                const userId = document.querySelector("#userId")
                userId.innerHTML = `UserID: ${response.userId}`
                const id = document.querySelector("#id")
                id.innerHTML = `Id: ${response.id}`
                const title = document.querySelector("#title")
                title.innerHTML = `Title: ${response.title}`
                const body = document.querySelector("#body")
                body.innerHTML = `Body: ${response.body}`

                error.style.display = "none";
                commentBut.style.display = "block";
            };
        })
        .catch((error) => {
            console.log(error)
        });
});

commentBut.addEventListener("click", () => {
    fetch(`https://jsonplaceholder.typicode.com/comments?postId=${input.value}`)
        .then(
            function (response) {
                return response.json()
            }
        )
        .then((response) => {
            console.log(response)
            container.append(fieldComments);
            
            response.forEach(data => {
                const postId_com = document.createElement("li");
                const id_com = document.createElement("li");
                const name_com = document.createElement("li");
                const email_com = document.createElement("li");
                const body_com = document.createElement("li");

                postId_com.innerHTML = `PostId: ${data.postId}`;
                id_com.innerHTML = `Id: ${data.id}`;
                name_com.innerHTML = `Name: ${data.name}`;
                email_com.innerHTML = `Email: ${data.email}`;
                body_com.innerHTML = `Content body: ${data.body}`;

                fieldComments.append(postId_com);
                fieldComments.append(id_com);
                fieldComments.append(name_com);
                fieldComments.append(email_com);
                fieldComments.append(body_com);
                
            });
        });
})