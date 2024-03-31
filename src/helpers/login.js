export const login = (data, email, password, navigate, state) => {
  for (let val of data) {
    if (val.email === email) {
      if (val.Password === password) {
        state(true);
        
      } else {
        return "Your password is incorrect.";
      }
    } else {
      return "We couldn't find your email id.";
    }
  }
};
