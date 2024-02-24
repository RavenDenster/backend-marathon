const requestLogger = (req, res, next) => {
    console.log(`${new Date().toISOString()} - ${req.method} ${req.originalUrl}`);
    next();
};
  
const authenticate = (req, res, next) => {
    if (req.headers.authorization === 'secretToken') {
      next();
    } else {
      res.status(401).send('Unauthorized');
    }
  };

const errorHandler = (err, req, res, next) => {
    console.error(err.stack);
    res.status(500).send('Something broke!');
};
  
module.exports = {
    requestLogger,
    authenticate,
    errorHandler
}