
function createPost(event) {
	event.preventDefault();
	const titleInput = document.getElementById('post-title-input');
	const bodyInput = document.getElementById('post-body-input');
	fetch('https://jsonplaceholder.typicode.com/posts', {
		method: 'POST',
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


document
	.getElementById('post-form')
	.addEventListener('submit', (event) => createPost(event));
