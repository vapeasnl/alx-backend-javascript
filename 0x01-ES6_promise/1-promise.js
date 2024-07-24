export default function getFullResponseFromAPI(success) {
  return new Promise((resolve, reject) => {
    if (success) {
      const response = { status: 200, body: 'Success' }; // Set response object
      resolve(response);
    } else {
      reject(Error('The fake API is not working currently'));
    }
  });
}
