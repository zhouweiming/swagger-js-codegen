var fs = require('fs');
var CodeGen = require('../lib/codegen').CodeGen;

var file = './api.json';
const apis = require('./api.js');
var swagger = JSON.parse(fs.readFileSync(file, 'UTF-8'));
// var nodejsSourceCode = CodeGen.getNodeCode({ className: 'Test', swagger: swagger });
// var angularjsSourceCode = CodeGen.getAngularCode({ className: 'Test', swagger: swagger });
// var reactjsSourceCode = CodeGen.getReactCode({ className: 'Test', swagger: swagger });
var tsSourceCode = CodeGen.getTypescriptCode({ className: 'Test', swagger: swagger, imports: [], requestHelper: './index', apis: apis });
// console.log(nodejsSourceCode);
// console.log(angularjsSourceCode);
// console.log(reactjsSourceCode);
// console.log(tsSourceCode);
fs.writeFileSync('./test.ts', tsSourceCode);