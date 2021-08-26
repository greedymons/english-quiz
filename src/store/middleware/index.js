const logger = (store) => (next) => (action) => {
  console.log('pass on middleware', action)
  next(action)
};

export default logger;