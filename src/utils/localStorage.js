const getTtlType = (time, ttlType) => {
  switch (ttlType) {
    case 'minute':
      return time * 60;
    case 'hour':
      return time * 3600;
    case 'day':
      return time * 86400;
    case 'week':
      return time * 86400 * 7;
    default:
      return time;
  }
};

const setLocalStorage = (key, value, ttl = { time: 0, type: null }) => {
  const now = new Date();
  const expiry =
    ttl.time === 0 || ttl.type === null
      ? null
      : now.getTime() + getTtlType(ttl.time, ttl.type);
  const item = {
    value: {
      ...value,
    },
    expiry,
  };
  localStorage.setItem(key, JSON.stringify(item));
};

const getLocalStorage = (key) => {
  const itemStr = localStorage.getItem(key);
  if (!itemStr) {
    return null;
  }
  const item = JSON.parse(itemStr);
  const now = new Date();
  if (now.getTime() > item.expiry) {
    localStorage.removeItem(key);
    return null;
  }
  return item.value;
};

export { setLocalStorage, getLocalStorage };
