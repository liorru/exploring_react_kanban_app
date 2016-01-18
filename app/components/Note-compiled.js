"use strict";

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = undefined;

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Note = (function (_React$Component) {
    _inherits(Note, _React$Component);

    function Note(props) {
        _classCallCheck(this, Note);

        // Track `editing` state.

        var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(Note).call(this, props));

        _this.renderEdit = function () {
            // Deal with blur and input handlers. These map to DOM events.
            return _react2.default.createElement("input", { type: "text",
                autoFocus: true,
                placeholder: _this.props.task,
                onBlur: _this.finishEdit,
                onKeyPress: _this.checkEnter });
        };

        _this.renderDelete = function () {
            return _react2.default.createElement(
                "button",
                { className: "delete-note", onClick: _this.props.onDelete },
                "x"
            );
        };

        _this.renderNote = function () {
            var onDelete = _this.props.onDelete;
            return _react2.default.createElement(
                "div",
                { onClick: _this.edit },
                _react2.default.createElement(
                    "span",
                    { className: "task" },
                    _this.props.task
                ),
                onDelete ? _this.renderDelete() : null
            );
        };

        _this.edit = function () {
            // Enter edit mode.
            _this.setState({
                editing: true
            });
        };

        _this.checkEnter = function (e) {
            // The user hit *enter*, let's finish up.
            if (e.key === 'Enter') {
                _this.finishEdit(e);
            }
        };

        _this.finishEdit = function (e) {
            if (_this.props.onEdit) {
                _this.props.onEdit(e.target.value);
            }
            // Exit edit mode.
            _this.setState({
                editing: false
            });
        };

        _this.state = {
            editing: false
        };
        return _this;
    }

    _createClass(Note, [{
        key: "render",
        value: function render() {
            // Render the component differently based on state.
            if (this.state.editing) {
                return this.renderEdit();
            }
            return this.renderNote();
        }
    }]);

    return Note;
})(_react2.default.Component);

exports.default = Note;

//# sourceMappingURL=Note-compiled.js.map