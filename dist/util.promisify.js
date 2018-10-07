'use strict';

var _regenerator = require('babel-runtime/regenerator');

var _regenerator2 = _interopRequireDefault(_regenerator);

var _asyncToGenerator2 = require('babel-runtime/helpers/asyncToGenerator');

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var util = require('util');
var fs = require('fs');
var readAsync = util.promisify(fs.readFile);

readAsync('../package.json').then(JSON.parse).then(function (data) {
    return console.log('promise then:', data.name);
}).catch(function (err) {
    return console.error(err);
});

(function () {
    var _ref = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee(path) {
        var data;
        return _regenerator2.default.wrap(function _callee$(_context) {
            while (1) {
                switch (_context.prev = _context.next) {
                    case 0:
                        _context.prev = 0;
                        _context.next = 3;
                        return readAsync(path);

                    case 3:
                        data = _context.sent;

                        console.log('async:', JSON.parse(data).name);
                        _context.next = 10;
                        break;

                    case 7:
                        _context.prev = 7;
                        _context.t0 = _context['catch'](0);

                        console.error(_context.t0);

                    case 10:
                    case 'end':
                        return _context.stop();
                }
            }
        }, _callee, undefined, [[0, 7]]);
    }));

    return function (_x) {
        return _ref.apply(this, arguments);
    };
})()('../package.json');
//# sourceMappingURL=util.promisify.js.map