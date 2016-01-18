'use strict';

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; /**
                                                                                                                                                                                                                                                                   * Created by liorr_000 on 17/1/2016.
                                                                                                                                                                                                                                                                   */

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.DELETE_NOTE = exports.UPDATE_NOTE = exports.CREATE_NOTE = undefined;
exports.createNote = createNote;
exports.updateNote = updateNote;
exports.deleteNote = deleteNote;

var _nodeUuid = require('node-uuid');

var _nodeUuid2 = _interopRequireDefault(_nodeUuid);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var CREATE_NOTE = exports.CREATE_NOTE = 'CREATE_NOTE';
function createNote(note) {
    return {
        type: CREATE_NOTE,
        note: _extends({
            id: _nodeUuid2.default.v4()
        }, note)
    };
};

var UPDATE_NOTE = exports.UPDATE_NOTE = 'UPDATE_NOTE';
function updateNote(updatedNote) {
    return _extends({
        type: UPDATE_NOTE
    }, updatedNote);
};

var DELETE_NOTE = exports.DELETE_NOTE = 'DELETE_NOTE';
function deleteNote(id) {
    return {
        type: DELETE_NOTE,
        id: id
    };
};

//# sourceMappingURL=notes-compiled.js.map