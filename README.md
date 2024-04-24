Code from reading the [The Art of WebAssembly](https://nostarch.com/art-webassembly) book.

# Getting Started

## File formats

- WASM: WebAssembly "binary"
- WAT: WebAssembly Text
  A intermediate format meant to be a human-readable representation of WASM

## Compiling and running

- [wasmtime](https://wasmtime.dev): A VM that runs WASM like it's native
- [WABT](https://github.com/webassembly/wabt): WebAssembly Binary Toolkit
  Contains tools for compiling to WASM
  - `wat2wasm`: Compiles WAT to WASM
