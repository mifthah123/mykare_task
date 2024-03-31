export const setItem = (title, data) => {
  localStorage.setItem(title, data);
};

export const getItem = (title) => {
  return localStorage.getItem(title);
};
