const get = (key, defaultForm) => {
  const data = localStorage.getItem(key);
  if (data === null) {
    return defaultForm;
  } else {
    return JSON.parse(data);
  }
};

const set = (key, value) => {
  localStorage.setItem(key, JSON.stringify(value));
};

const ls = {
  get: get,
  set: set,
};

export default ls;
