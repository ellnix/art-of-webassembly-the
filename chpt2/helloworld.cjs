const fs = require('fs');
const bytes = fs.readFileSync(__dirname + '/helloworld.wasm');

let memory = new WebAssembly.Memory({initial: 1})

let import_object = {
  env: {
    buffer: memory,
    start_string: 100,
    print_string: str_len => {
      const bytes = new Uint8Array(memory.buffer, 100, str_len);
      let output = new TextDecoder('utf8').decode(bytes);
      console.log(output);
    }
  }
}

WebAssembly.instantiate(bytes, import_object)
  .then(wasm_module => wasm_module.instance.exports.helloworld());
