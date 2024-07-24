export default function getFullResponseFromAPI(success) {
  // Return a promise
  return new Promise((resolve, reject) => {
    // If data is true, resolve the promise
    if (success) {
      // Resolve the promise with a status code of 200 and a body of 'Success'
      resolve({
        status: 200,
        body: 'Success',
      });
    } else {
      // If data is false, reject the promise
      reject(new Error('The fake API is not working currently'));
    }
  });
}
