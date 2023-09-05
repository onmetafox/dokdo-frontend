export const setter = (state, keys, value) => {
  if (typeof keys === 'string') keys = keys.split('.');

  if (!keys || keys.length === 0) return value;

  let temp = { ...state };
  if (typeof temp[keys[0]] !== 'object') temp[keys[0]] = {};

  if (keys.length === 1 && value === undefined) {
    delete temp[keys[0]];
  } else {
    temp[keys[0]] = setter(temp[keys[0]], keys.slice(1), value);
  }
  return temp;
};

export const setterCallback = (key, value) => state => setter(state, key, value);
export const toggleCallback = state => !state;

export const setterDirect = (state, key_str, value) => {
  if (!key_str) return;
  let temp = state;
  const keys = key_str.split('.');
  keys.slice(0, -1).forEach(key => {
    if (typeof temp[key] !== 'object') temp[key] = {};
    temp = temp[key];
  });
  if (value === undefined) {
    delete temp[keys[keys.length - 1]];
  } else {
    temp[keys[keys.length - 1]] = value;
  }
};

export const downloadJsonContent = (data, fileName) => {
  const element = document.createElement('a');
  const file = new Blob([JSON.stringify(data, null, 4)], { type: 'text/plain' });
  element.href = URL.createObjectURL(file);
  element.download = fileName;
  document.body.appendChild(element);
  element.click();
};

export function numFormatter(num) {
  num = Number(num);
  const absNum = Math.abs(num);
  if (absNum > 999 && absNum < 1000000) {
    return (num / 1000).toLocaleString('en-US', { maximumFractionDigits: 2 }) + ' K';
  } else if (absNum > 1000000) {
    return (num / 1000000).toLocaleString('en-US', { maximumFractionDigits: 2 }) + ' M';
  } else if (absNum < 900) {
    return num.toLocaleString('en-US', { maximumFractionDigits: 2 });
  }
}

export function convertTypeof(str) {
  if (typeof str === 'string') {
    if (str.toLowerCase() === 'false') return false;
    if (str.toLowerCase() === 'true') return true;
    if (!isNaN(Number(str))) return Number(str);
  }
  return str;
}

export function dateToDateTimeString(date) {
  date = new Date(date);
  return date.toLocaleDateString('en-US', {
    year: 'numeric',
    month: '2-digit',
    day: '2-digit',
    hour: '2-digit',
    hourCycle: 'h23',
    minute: '2-digit',
    second: '2-digit',
  });
}

export function toDateLocalString(date) {
  date = new Date(date);
  return date.getDate() + '/' + (date.getMonth() + 1) + '/' + date.getFullYear();
}

export function scrollToJustAbove(element, margin = 20) {
  let dims = element.getBoundingClientRect();
  window.scrollTo(window.scrollX, dims.top - margin);
}
