'use strict';

var _regenerator = require('babel-runtime/regenerator');

var _regenerator2 = _interopRequireDefault(_regenerator);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _marked = /*#__PURE__*/_regenerator2.default.mark(genIterator);

var it = function (arr) {
    var i = 0;
    return {
        next: function next() {
            if (i < arr.length) {
                return { value: arr[i++], done: false };
            } else {
                return { value: undefined, done: true };
            }
        }
    };
}(['吃饭', '睡觉', '打豆豆']);

console.log('customize iterator:');
console.log(it.next());
console.log(it.next());
console.log(it.next());
console.log(it.next());

function genIterator(arr) {
    var i;
    return _regenerator2.default.wrap(function genIterator$(_context) {
        while (1) {
            switch (_context.prev = _context.next) {
                case 0:
                    i = 0;

                case 1:
                    if (!(i < arr.length)) {
                        _context.next = 7;
                        break;
                    }

                    _context.next = 4;
                    return arr[i];

                case 4:
                    i++;
                    _context.next = 1;
                    break;

                case 7:
                case 'end':
                    return _context.stop();
            }
        }
    }, _marked, this);
}

console.log('yield iterator:');
var it2 = genIterator(['吃饭', '睡觉', '打豆豆']);
console.log(it2.next());
console.log(it2.next());
console.log(it2.next());
console.log(it2.next());
//# sourceMappingURL=iterator.js.map