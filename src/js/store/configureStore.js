if (process.env.WEBPACK_ENV === 'prod' || (location && location.hostname !== 'localhost')) {
  module.exports = require('./configureStore.prod');
} 
else {
  module.exports = require('./configureStore.dev');
}