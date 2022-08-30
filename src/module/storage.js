const getLocalStorage = () => {
  // Check if data is in storage and convert to js object
  if (localStorage.getItem('scores')) {
    return JSON.parse(localStorage.getItem('scores'));
  }
  return [];
};

const setLocalStorage = (array) => {
  localStorage.setItem('scores', JSON.stringify(array));
};

export { setLocalStorage, getLocalStorage };