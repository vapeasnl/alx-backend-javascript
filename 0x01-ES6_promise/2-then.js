export default function handleResponseFromAPI(promise) {
  return promise
    .then(() => { // If promise is resolved!
      console.log('Got a response from the API');
      return { status: 200, body: 'success' };
    })
    .catch(() => new Error()); // If the promise didn't get resolved
}
