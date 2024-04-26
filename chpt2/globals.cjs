const fs = require('fs');
const bytes = fs.readFileSync(__dirname + '/globals.wasm');

let import_object = {
  "env": {
    global_int: 10,
    global_float: 25.0123456789,
    global_largeint: 20,
    global_bigfloat: 300.0123456789
  },
  "js_funcs": {
    log_i32: value => console.log(`i32: ${value}`),
    log_f32: value => console.log(`f32: ${value}`),
    log_f64: value => console.log(`f64: ${value}`)
  }
}

WebAssembly.instantiate(bytes, import_object)
  .then(wasm_module => wasm_module.instance.exports.test_globals());
