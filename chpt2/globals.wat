(module
  (global $imported_int (import "env" "global_int") i32)
  (global $imported_float (import "env" "global_float") f32)
  (global $imported_f64 (import "env" "global_bigfloat") f64)

  (import "js_funcs" "log_i32" (func $log_i32 (param i32)))
  (import "js_funcs" "log_f32" (func $log_f32 (param f32)))
  (import "js_funcs" "log_f64" (func $log_f64 (param f64)))

  (func (export "test_globals")
    (call $log_i32 (global.get $imported_int))
    (call $log_f32 (global.get $imported_float))
    (call $log_f64 (global.get $imported_f64))
  )
)
