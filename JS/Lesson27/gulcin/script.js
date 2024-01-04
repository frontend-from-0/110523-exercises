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

const URL = 'https://jsonplaceholder.typicode.com/posts';

function getPosts() {
	fetch('https://jsonplaceholder.typicode.com/posts')
		.then((response) => response.json())
		.then((data) =>
			data.map((item) => {
				//  post-container
				const post = document.createElement('div');
				post.classList.add('post');
				const postTitle = document.createElement('h2');
				postTitle.innerText = item.title;
				postTitle.classList.add('post-title');

				const postBody = document.createElement('p');
				postBody.innerText = item.body;
				post.classList.add('post-body');

				const postsContainer = document.getElementById('post-container');
				// TODO: add <a> element instead of <button>, href will be './editPost/edit-post.html?postId=${postId}';
				const editPostLink = document.createElement('a');
				editPostLink.textContent = 'Edit Post';
				editPostLink.href = `./editPost/edit-post.html?postId=${item.id}`;
				editPostLink.classList.add('edit-btn');

				const deletePostButton = document.createElement('button');
				deletePostButton.textContent = 'Delete Post';
				deletePostButton.classList.add('button');
				deletePostButton.classList.add('button--danger');
				deletePostButton.addEventListener('click', function (e) {
					const text = 'Are you sure you want to delete the post?';
					if (confirm(text) == true) {
						deletePost(item.id);
						e.target.closest('.post').remove();
					}
				})

				const buttonsDiv = document.createElement('div');
				buttonsDiv.classList.add('delete-edit-btn');
				buttonsDiv.appendChild(editPostLink);
				buttonsDiv.appendChild(deletePostButton);

				post.appendChild(postTitle);
				post.appendChild(postBody);
				post.appendChild(buttonsDiv);

				postsContainer.appendChild(post);
			})
		);
}




function deletePost(id) {
	fetch(`https://jsonplaceholder.typicode.com/posts/${id},`, {
		method: 'DELETE',
	})
		.then(response => response.json())
		.then(data => console.log(data))
}


function clearAllPosts() {
	const postContainer = document.getElementById('post-container');
	if(postContainer.innerHTML !== '') {
		if (confirm('Are you sure you want to delete all the posts?') == true) {
			postContainer.innerHTML = '';
		}
	}
}

// TODO: move all the code related to create post to another JS file