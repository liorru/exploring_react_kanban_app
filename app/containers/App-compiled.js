'use strict';

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = undefined;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _Notes = require('./Notes.jsx');

var _Notes2 = _interopRequireDefault(_Notes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var App = (function (_React$Component) {
    _inherits(App, _React$Component);

    function App(props) {
        _classCallCheck(this, App);

        var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(App).call(this, props));

        _this.addNote = function () {
            // Libraries, such as Immutable.js, go a notch further.
            _this.setState({
                notes: _this.state.notes.concat([{
                    id: 4,
                    task: 'New task'
                }])
            });
        };

        _this.editNote = function (id, task) {
            var notes = _this.state.notes.map(function (note) {
                if (note.id === id && task) {
                    note.task = task;
                }
                return note;
            });
            _this.setState({ notes: notes });
        };

        _this.deleteNote = function (id) {
            _this.setState({
                notes: _this.state.notes.filter(function (note) {
                    return note.id !== id;
                })
            });
        };

        _this.state = {
            notes: [{
                id: 1,
                task: 'Learn Webpack'
            }, {
                id: 2,
                task: 'Learn React'
            }, {
                id: 3,
                task: 'Do laundry'
            }]
        };
        return _this;
    }

    _createClass(App, [{
        key: 'render',
        value: function render() {
            var notes = this.state.notes;
            return _react2.default.createElement(
                'div',
                null,
                _react2.default.createElement(
                    'button',
                    { className: 'add-note', onClick: this.addNote },
                    '+'
                ),
                _react2.default.createElement(_Notes2.default, { notes: notes,
                    onEdit: this.editNote,
                    onDelete: this.deleteNote })
            );
        }
    }]);

    return App;
})(_react2.default.Component);

exports.default = App;

//# sourceMappingURL=App-compiled.js.map