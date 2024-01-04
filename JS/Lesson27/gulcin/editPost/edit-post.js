const postTitleInput = document.getElementById('post-title-input');
const postBodyInput = document.getElementById('post-body-input');
const form = document.getElementById('post-form');
const urlParams = new URLSearchParams(window.location.search);
const postId = urlParams.get('postId');


function getPostById(id) {
	fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
		.then(response => response.json())
		.then(data => {
			console.log(data)
			postTitleInput.innerText = data.title;
			postBodyInput.innerText = data.body;
		});
}

function updatePost(id) {
	fetch(`https://jsonplaceholder.typicode.com/posts/${id}`, {
		method: 'PUT',
		body: JSON.stringify({
			title: postTitleInput.value,
			body: postBodyInput.value,
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

form.addEventListener('submit', function (e) {
	e.preventDefault();
	updatePost(postId);
});