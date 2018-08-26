export const getId = element =>
  element.id === '' ? `#${element.id}` : element.id;
