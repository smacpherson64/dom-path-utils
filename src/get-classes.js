export const getClasses = element =>
  element.classList.length
    ? `.${Array.prototype.map.call(element.classList, item => item).join('.')}`
    : '';
