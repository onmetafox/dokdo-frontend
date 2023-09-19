const { default: eventEmitter } = require('./event.emitter');

module.exports = errorHandler;

function errorHandler(actionAsync) {
  return function (data, thunkApi) {
    const { rejectWithValue } = thunkApi;
    return actionAsync(data, thunkApi)
      .then(data => {
        return {
          data,
          status: 200,
          statusText: 'OK',
        };
      })
      .catch(error => {
        if (error.response) {
          // Server error.
          if (error.response.data.message) {
            if (error.response.data.message !== 'NonVerifiedEmail') {
              eventEmitter.emit('error', error.response.data.message);
            } else if (error.response.data.message === 'Unauthorized') {
              return eventEmitter.emit('Unauthorized');
            } else {
              return eventEmitter.emit('email-verification');
            }
          }
          return rejectWithValue({
            error: error.response.data,
            status: error.response.status,
            statusText: error.response.statusText,
          });
        } else {
          // Frontend custom error.
          return rejectWithValue({
            error: { message: error },
            status: 400,
            statusText: 'Custom Error',
          });
        }
      });
  };
}
