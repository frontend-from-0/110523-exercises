const urlParams = new URLSearchParams(window.location.search);
const postId = urlParams.get('postId');

console.log(postId);

const titleInput = document.getElementById('post-title-input');
const bodyInput = document.getElementById('post-body-input');

// titleInput.value = postId.title;
// bodyInput.value = postId.body;

function getPostById(postId) {
	fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`)
		.then(response => response.json())
		.then(data => {
			console.log("data output : ", data);
			titleInput.value = data.title;
			bodyInput.value = data.body;
		});
}


function updatePost(postId) {


		fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`, {
			method: 'PUT',
			body: JSON.stringify({
				title: titleInput.value,
				body: bodyInput.value,
				userId: 5,
			}),
			headers: {
				'Content-type': 'application/json; charset=UTF-8',
			},
		})
			.then((response) => response.json())
			.then((json) => console.log(json));
}


getPostById(postId);

document.getElementById("post-form").addEventListener("submit", (e) => {
	e.preventDefault();
	updatePost(postId);
});


