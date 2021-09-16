export const getLocalStorage = (key) => {
  const saved = localStorage.getItem(key);
  const initialValue = JSON.parse(saved);
  return initialValue || [];
};

export const setLocalStorage = (key, value) => {
  localStorage.setItem(key, JSON.stringify(value));
};
