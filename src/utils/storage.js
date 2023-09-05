const storage = {
  set(key, value) {
    if (value === undefined) return;
    let stringify = JSON.stringify(value);
    localStorage.setItem(key, stringify);
  },
  get(key, defaultValue = null) {
    let stringify = localStorage.getItem(key);
    if (stringify === null) return defaultValue;
    return JSON.parse(stringify);
  },
  clear() {
    localStorage.clear();
  },
  remove(key) {
    localStorage.removeItem(key);
  },
};

export const tokenKey = '_token';
export const botTokenKey = '_bot_token';

export default storage;
