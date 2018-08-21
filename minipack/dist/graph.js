const graph = [
  {
    id: 0,
    filename: './example/entry.js',
    dependencies: ['./message.js'],
    code:
      '"use strict";\n\nvar _message = require("./message.js");\n\nvar _message2 = _interopRequireDefault(_message);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nconsole.log(_message2.default);',
    mapping: { './message.js': 1 }
  },
  {
    id: 1,
    filename: 'example/message.js',
    dependencies: ['./name.js'],
    code:
      '"use strict";\n\nObject.defineProperty(exports, "__esModule", {\n  value: true\n});\n\nvar _name = require("./name.js");\n\nexports.default = "hello " + _name.name + "!";',
    mapping: { './name.js': 2 }
  },
  {
    id: 2,
    filename: 'example/name.js',
    dependencies: [],
    code:
      '"use strict";\n\nObject.defineProperty(exports, "__esModule", {\n  value: true\n});\nvar name = exports.name = \'world\';',
    mapping: {}
  }
];
