export const fetchToken = () => {
  return JSON.parse(localStorage.getItem('token'));
};

// export const encodedToken = (token) => {
//   token.accessToken = Buffer.from(token.accessToken).toString('base64');
//   token.refreshToken = Buffer.from(token.refreshToken).toString('base64');
//   return token;
// };

// export const decodedToken = () => {
//   const token = fetchToken();
//   if (token) {
//     token.accessToken = Buffer.from(token.accessToken, 'base64').toString(
//       'ascii'
//     );
//     token.refreshToken = Buffer.from(token.refreshToken, 'base64').toString(
//       'ascii'
//     );
//   }
//   return token;
// };
