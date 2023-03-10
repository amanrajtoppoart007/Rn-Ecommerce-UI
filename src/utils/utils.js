let regexPattern = /[^A-Za-z]/g;
const snakeCase = str => {
  return str
    .replace(/(?:^\w|[A-Z]|\b\w)/g, (word, index) => {
      return index === 0 ? word.toLowerCase() : word.toUpperCase();
    })
    .replace(/\s+/g, '')
    .replace(/[^\w\s]/gi, '')
    .replace(regexPattern, '');
};

export {snakeCase};
