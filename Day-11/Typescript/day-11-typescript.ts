// ------------------------------------ Activity 1: Understanding Promises

// Task 1: Create a promise that resolves with a message after a 2-second timeout and log the message to the console.

const promiseSuccess: Promise<string> = new Promise((resolve, reject) => {
	setTimeout(() => {
		resolve("Hello, my name is Abdullah");
	}, 2000);
});

promiseSuccess.then((data: string) => {
	console.log(data);
});

// Task 2: Create a promise that rejects with an error message after a 2-second timeout and handle the error using .catch() method.

const promiseError: Promise<string> = new Promise((resolve, reject) => {
	setTimeout(() => {
		reject("Something went wrong");
	}, 2000);
});

promiseError.catch((error: string) => {
	console.error(error); // This will handle the error.
});

// ----------------------------------- Activity 2: Chaining Promises

// Task 3: Create a sequence of promises that simulate fetching data from a server. Chain the promises to log messages in a specific order.

fetch("https://jsonplaceholder.typicode.com/posts/1")
	.then((res: Response) => {
		return res.json();
	})
	.then((data: any) => {
		console.log(data);
	})
	.catch((error: any) => {
		console.log("Failed to fetch data");
	});

// ----------------------------------------- Activity 3: Using Async/Await

// Task 4: Write an async function that waits for a promise to resolve and then logs the resolved value.

const waitForPromise = async (): Promise<void> => {
	const result = await new Promise<string>((resolve) => {
		setTimeout(() => {
			resolve("Promise resolved successfully");
		}, 1000);
	});
	console.log(result);
};

waitForPromise();

// Task 5: Write an async function that handles a rejected promise using try-catch and logs the error message.

const promiseRejected = async (): Promise<void> => {
	try {
		await new Promise<string>((resolve, reject) => {
			setTimeout(() => {
				reject("Something went wrong in promiseRejected function reject task");
			}, 1000);
		});
	} catch (error) {
		console.log(error);
	}
};

promiseRejected();

// ------------------------------------- Activity 4: Fetching Data from an API

// Task 6: Use the fetch method API to get data from a public API and log the response data to the console using promises.

// API URL: https://jsonplaceholder.typicode.com/posts/10

const fetchData: Promise<any> = fetch("https://jsonplaceholder.typicode.com/posts/4");

fetchData
	.then((data: Response) => {
		return data.json();
	})
	.then((data: any) => {
		console.log(data);
	})
	.catch((error: any) => {
		console.log("Something went wrong in fetchData", error);
	});

// Task 7: Use the fetch method API to get data from a public API and log the response data to the console using async/await.

const getDataFromAsync = async (): Promise<void> => {
	try {
		const response: Response = await fetch("https://jsonplaceholder.typicode.com/posts/7");
		const data: any = await response.json();
		console.log(data);
	} catch (error) {
		console.log(error);
	}
};

getDataFromAsync();

// ---------------------------------------- Activity 5: Concurrent Promises

// Task 8: Use promise.all to wait for multiple promises to resolve and then log all their values.

const promise1: Promise<number> = new Promise((resolve, reject) => {
	setTimeout(() => {
		resolve(2);
	}, 1000);
});
const promise2: Promise<number> = new Promise((resolve, reject) => {
	setTimeout(() => {
		resolve(2);
	}, 1000);
});

Promise.all([promise1, promise2])
	.then(([res1, res2]: [number, number]) => {
		console.log("The Response From promises is", res1 + res2);
	})
	.catch((error: any) => {
		console.log(error);
	});

// Task 9: Use promise.race to log the value of the first promise that resolves among multiple promises.

const promiseRace1: Promise<number> = new Promise((resolve, reject) => {
	setTimeout(() => {
		resolve(2);
	}, 1000);
});

const promiseRace2: Promise<number> = new Promise((resolve, reject) => {
	setTimeout(() => {
		resolve(3);
	}, 500);
});

Promise.race([promiseRace1, promiseRace2])
	.then((value: number) => {
		console.log("First resolved value:", value);
	})
	.catch((error: any) => {
		console.error("Something went wrong:", error);
	});
