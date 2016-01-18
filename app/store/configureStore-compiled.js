'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = configureStore;

var _redux = require('redux');

var _reduxLogger = require('redux-logger');

var _reduxLogger2 = _interopRequireDefault(_reduxLogger);

var _reducers = require('../reducers');

var _reducers2 = _interopRequireDefault(_reducers);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var logger = (0, _reduxLogger2.default)({
    collapsed: true,
    predicate: function predicate(getState, action) {
        return process.env.NODE_ENV !== 'production';
    }
}); /**
     * Created by liorr_000 on 17/1/2016.
     */

var createStoreWithMiddleware = (0, _redux.applyMiddleware)(logger)(_redux.createStore);

function configureStore(initialState) {
    var store = createStoreWithMiddleware(_reducers2.default, initialState);

    if (module.hot) {
        // Enable Webpack hot module replacement for reducers
        module.hot.accept('../reducers', function () {
            var nextReducer = require('../reducers/index').default;

            store.replaceReducer(nextReducer);
        });
    }

    return store;
}

//# sourceMappingURL=configureStore-compiled.js.map