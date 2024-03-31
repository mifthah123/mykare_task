export const login = (data, email, password, navigate, state) => {
  console.log(data);
  for (const val of data) {
    console.log(val);
    if (val.email === email) {
      if (val.Password === password) {
        state(true);
      } else {
        return "Your password is incorrect.";
      }
    }
  }
  return "We couldn't find your email id.";
};
