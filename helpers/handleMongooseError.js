const handleMongooseError = (error, doc, next) => {
  error.status = 400;
  next();
};

module.exports = handleMongooseError;
