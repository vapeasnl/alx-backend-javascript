export default function signUpUser(firstName, lastName) {
  return new Promise((resolve) => {
    const newUser = { firstName, lastName }; // Using property shorthand
    resolve(newUser);
  });
}
