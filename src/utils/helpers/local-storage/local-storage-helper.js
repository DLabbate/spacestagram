export const getLocalStorage = (key) => {
  const saved = localStorage.getItem(key);
  const initialValue = JSON.parse(saved);
  return initialValue || [];
};

export const setLocalStorage = (key, value) => {
  localStorage.setItem(key, JSON.stringify(value));
};

export const isLiked = (date) => {
  const likes = getLocalStorage("likes");
  const index = likes.indexOf(date);
  return index > -1 ? true : false;
};

export const addToLocalStorage = (date) => {
  let likes = getLocalStorage("likes");
  let updatedLikes = [...likes, date];
  setLocalStorage("likes", updatedLikes);
};

export const removeFromLocalStorage = (date) => {
  let likes = getLocalStorage("likes");
  let updatedLikes = likes.filter((like) => like !== date);
  setLocalStorage("likes", updatedLikes);
};
