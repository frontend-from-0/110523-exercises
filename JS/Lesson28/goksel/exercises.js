// 1. Convert the function below into asyncrounous function using async/await and try/catch syntax.


async function fetchPosts () {
	try {
		const response = await(fetch('https://jsonplaceholder.typicode.com/posts'));
		const posts = await(response.json());
		console.log('Example-1 :', posts);
	} catch(error) {
		console.log(error);
	}
};
fetchPosts();



// 2. Convert the function below into asyncrounous function using async/await and try/catch syntax.
const fetchData = () => {
	return new Promise((resolve, reject) => {
		setTimeout(() => {
			reject('Data fetched unsuccessfully!');
		}, 2000);
	});
};


async function newFunction() {
	try {
		const result = await fetchData();
		console.log('Exercise-2 : ', result);
	} catch (err) {
		console.log(err);
	}
}

newFunction();


// 3. Convert the function below into asyncrounous function using async/await and try/catch syntax.
const fetchUsers = async () => {
	try {
		const response = await fetch('https://jsonplaceholder.typicode.com/users');
		return await response.json();
	} catch (error) {
		console.error(error);
	}
};

async function getUsers() {
	try {
		const result = await fetchUsers();
		console.log('Exercise-3 : ', result.length);
	} catch (error) {
		console.error(error);
	}
}
getUsers();






// 4. Convert the function below into asyncrounous function using async/await and try/catch syntax.
const fetchUserData = async () => {
  try {
    const response = await fetch('https://jsonplaceholder.typicode.com/posts/1');
    const user = await response.json();
    return user;
  } catch (error) {
    console.error('Error:', error);
    throw error;
  }
};



async function userInformaions() {
try {
	const result = await fetchUserData();
	console.log("Exercise-4 : ", result);
} catch(error) {
console.log("Error:", error);
 }
}

userInformaions();

// 5. Convert the function below into asyncrounous function using async/await and try/catch syntax.
const getPostsAndComments = async () => {
	try {
		const response = await fetch('https://jsonplaceholder.typicode.com/posts/1');
		const post = await response.json();
		const commentResponse = await fetch(
			`https://jsonplaceholder.typicode.com/comments?postId=${post.id}`
		);
		const comment = await commentResponse.json();

		console.log("Exercise-5 : ", comment);
	} catch (err) {
		console.log(err);
	}

}

getPostsAndComments();


// 6.Convert the function below into asyncrounous function using async/await and try/catch syntax.

const fetchWithTimeout = (url, timeout) => {
	return new Promise((resolve, reject) => {
		setTimeout(async () => {
			try {
				const response = await fetch(url);
				const result = await resolve(response.json());
				
			} catch (err) {
				console.log(reject(err));
			}


		}, timeout);
	});
};


async function newFunction() {

	try {
		const response = await fetchWithTimeout('https://jsonplaceholder.typicode.com/posts', 2000);
		console.log("Exercise-6 : ", response);
	} catch (err) {
		console.error(err);
	}

}

newFunction();