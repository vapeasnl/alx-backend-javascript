export default function getFullResponseFromAPI(success) {
  const data = { status: 200, body: 'Success' };
  return new Promise((resolve, reject) => {
    if (success) {
      resolve(data);
    }
    reject(new Error('The fake API is not working currently'));
  });
}
