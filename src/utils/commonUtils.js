const isEmpty = object => {
  return object === undefined || object.length === 0;
};

function checkNextPage(total, page, limit) {
  if (total > limit * page) return true;
  return false;
}

function timeoutFunc(timeout, action, delay) {
  clearTimeout(timeout);
  return setTimeout(function() {
    action();
  }, delay);
}

export { isEmpty, checkNextPage, timeoutFunc };
