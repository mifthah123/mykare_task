import { getItem, setItem } from "./storage";

export const register = (title, data, user) => {
  if (getItem(title)) {
    const context = JSON.stringify([...data, user]);
    setItem(title, context);
  } else {
    const context = JSON.stringify([user]);
    setItem(title, context);
  }
};

export const validation = (title, data, email) => {
  if (getItem(title)) {
    for (let val of data) {
      if (val.email.includes(email)) {
        return false;
      }
    }
  }
  return true;
};
