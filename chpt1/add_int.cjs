const fs = require('fs');
const bytes = fs.readFileSync(__dirname + '/add_int.wasm');

const a = parseInt(process.argv[2]);
const b = parseInt(process.argv[3]);

WebAssembly.instantiate(bytes).then(wasm_module => {
  let result = wasm_module.instance.exports.AddInt(a, b);
  console.log(result);
});
