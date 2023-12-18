/* 
CRUD - set of basic operations or functions that are commonly used in the context of database management and web applications to manage and manipulate data.
C - create - POST method (has request body to transfer data)
R - read - GET method (cannot have request body to send data to the server)
U - update - PUT / PATCH method (have request body to transfer data)
D - delete - DELETE method
Status codes
HTTP status codes are three-digit numbers that the server sends in response to a client's request made to a web server. They provide information about the outcome of the request, whether it was successful, encountered an error, or requires further action. HTTP status codes are grouped into several ranges, each indicating a different category of response. 
100... - Informational Responses
200... - Successful Responses (200 OK, 201 Created, 204 No content)
300.. - redirection (301 Moved Permanently, Found (or 307 Temporary Redirect))
400... - Errors (
	400 Bad Request - something is wrong in your request,
	401 Unauthorized - you don't have access to the resource (API key missing or does not have access to that endpoint),
	403 Forbidden - you are not allowed to access this enpoint,
	404 Not Found - you're trying to access a non-existing endpoint (could be used for security reasons as well to hide some resources)
	)
500... - Service error (500 Internal Server Error, 502 Bad Gateway, 503 Service Unavailable)
*/

// Mocked - it behaves like if the request was processed even if it is not

// const URL = 'https://jsonplaceholder.typicode.com/posts/1';

function getPosts() {
	fetch('https://jsonplaceholder.typicode.com/posts')
		.then((response) => response.json())
		.then((data) =>

			data.map((item) => {
				//  post-container
				const post = document.createElement('div');
				post.classList.add('post');

				const postTitle = document.createElement('h2');
				postTitle.classList.add('post-title');
				postTitle.innerText = item.title.toUpperCase();


				const postBody = document.createElement('p');
				postBody.innerText = item.body;

				post.classList.add('post-body');

				const postsContainer = document.getElementById('post-container');
				// TODO: add <a> element instead of <button>, href will be './editPost/edit-post.html?postId=${postId}';

				const editPostButton = document.createElement('a');
				editPostButton.href = `./editPost/edit-post.html?postId=${item.id}`;
				editPostButton.classList.add("edit-btn");
				editPostButton.textContent = 'Edit Post';


				const deletePostBtn = document.createElement("button");
				deletePostBtn.classList.add("delete-btn");
				deletePostBtn.textContent = "Delete Post"
				deletePostBtn.onclick = () => {
					post.style.display = "none";
				}


				const header = document.createElement("div");
				header.classList.add("header");
				const btn = document.createElement("div");
				btn.classList.add("btn");


				header.appendChild(postTitle);
				btn.appendChild(editPostButton);
				btn.appendChild(deletePostBtn);

				post.appendChild(header);
				post.appendChild(postBody);
				post.appendChild(btn);

				postsContainer.appendChild(post);

			})
		);
}

function getPostById() {

	fetch('https://jsonplaceholder.typicode.com/posts')
		.then((response) => response.json())
		.then((data) => {


			let item = Math.floor(Math.random() * data.length)
			console.log(data[item])
			let dataItem = data[item];

			//  post-container
			const post = document.createElement('div');
			post.classList.add('post');
			const postTitle = document.createElement('h2');
			postTitle.innerText = dataItem.title.toUpperCase();
			postTitle.classList.add('post-title');

			const postBody = document.createElement('p');
			postBody.innerText = dataItem.body;
			post.classList.add('post-body');

			const postsContainer = document.getElementById('post-container');
			// TODO: add <a> element instead of <button>, href will be './editPost/edit-post.html?postId=${postId}';
			const editPostButton = document.createElement('a');

			editPostButton.href = `./editPost/edit-post.html?postId=${dataItem.id}`;
			editPostButton.classList.add("edit-btn");
			editPostButton.textContent = 'Edit Post';

			const deleteBtn = document.createElement("button");
			deleteBtn.classList.add("delete-btn");
			deleteBtn.textContent = "Delete Post"
			deleteBtn.addEventListener("click", function () {
				postsContainer.textContent = "";

			})
			//TODO : burada delete butonu düzenle, işlev çalışmıyor


			const header = document.createElement("div");
			header.classList.add("header");
			const btn = document.createElement("div");
			btn.classList.add("btn");


			header.appendChild(postTitle);
			btn.appendChild(editPostButton);
			btn.appendChild(deleteBtn);

			post.appendChild(header);
			post.appendChild(postBody);
			post.appendChild(btn);

			postsContainer.appendChild(post);

		})
}



// TODO: move all the code related to create post to another JS file

function clearPosts() {
	document.getElementById("post-container").innerText = "";
}


// ı tried to use DELETE method with using fetch apı, ı am getting 404 Not Found error, and ı couldn't understand how to use it on frontend. So ı used the function above clearPost for to clear all posts

// function clearPosts() {
// 	fetch("https://jsonplaceholder.typicode.com/posts", {
// 		method:"DELETE",
// 	})
// 	.then(res => res.json)
// 	.then(data => console.log(data))
// }