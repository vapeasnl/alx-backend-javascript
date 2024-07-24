export default function uploadPhoto(fileName) {
  return new Promise((_, reject) => { // I only want to reject, so I passed _ as resolved
    reject(Error(`${fileName} cannot be processed`));
  });
}
