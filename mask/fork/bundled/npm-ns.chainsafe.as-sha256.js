(globalThis["webpackChunkmask_network"] = globalThis["webpackChunkmask_network"] || []).push([[49],{

/***/ 30308:
/***/ ((module) => {

  var bufferView;
  var base64ReverseLookup = new Uint8Array(123/*'z'+1*/);
  for (var i = 25; i >= 0; --i) {
    base64ReverseLookup[48+i] = 52+i; // '0-9'
    base64ReverseLookup[65+i] = i; // 'A-Z'
    base64ReverseLookup[97+i] = 26+i; // 'a-z'
  }
  base64ReverseLookup[43] = 62; // '+'
  base64ReverseLookup[47] = 63; // '/'
  /** @noinline Inlining this function would mean expanding the base64 string 4x times in the source code, which Closure seems to be happy to do. */
  function base64DecodeToExistingUint8Array(uint8Array, offset, b64) {
    var b1, b2, i = 0, j = offset, bLength = b64.length, end = offset + (bLength*3>>2) - (b64[bLength-2] == '=') - (b64[bLength-1] == '=');
    for (; i < bLength; i += 4) {
      b1 = base64ReverseLookup[b64.charCodeAt(i+1)];
      b2 = base64ReverseLookup[b64.charCodeAt(i+2)];
      uint8Array[j++] = base64ReverseLookup[b64.charCodeAt(i)] << 2 | b1 >> 4;
      if (j < end) uint8Array[j++] = b1 << 4 | b2 >> 2;
      if (j < end) uint8Array[j++] = b2 << 6 | base64ReverseLookup[b64.charCodeAt(i+3)];
    }
  }
function initActiveSegments(imports) {
  base64DecodeToExistingUint8Array(bufferView, 17, "AQAAAQAAAAAAAAAAAQAAmC+KQpFEN3HP+8C1pdu16VvCVjnxEfFZpII/ktVeHKuYqgfYAVuDEr6FMSTDfQxVdF2+cv6x3oCnBtybdPGbwcFpm+SGR77vxp3BD8yhDCRvLOktqoR0StypsFzaiPl2UlE+mG3GMajIJwOwx39Zv/ML4MZHkafVUWPKBmcpKRSFCrcnOCEbLvxtLE0TDThTVHMKZbsKanYuycKBhSxykqHov6JLZhqocItLwqNRbMcZ6JLRJAaZ1oU1DvRwoGoQFsGkGQhsNx5Md0gntbywNLMMHDlKqthOT8qcW/NvLmjugo90b2OleBR4yIQIAseM+v++kOtsUKT3o/m+8nhxxg==");
  base64DecodeToExistingUint8Array(bufferView, 288, "EAAAAAEAAAADAAAAEAAAACAAAAAgAAAAAAEAAEA=");
  base64DecodeToExistingUint8Array(bufferView, 321, "AQAAAQAAAAAAAAAAAQAAmC+KwpFEN3HP+8C1pdu16VvCVjnxEfFZpII/ktVeHKuYqgfYAVuDEr6FMSTDfQxVdF2+cv6x3oCnBtybdPObwcFpm2SGR/7wxu3hD1TyDCRvNOlPvoTJbB5BuWH6iPkWUlHG8m1ajqhl/Bmwx57ZucMxEpqg6g7nKyOx/bA+NcfVumkwX22Xy48RD1r97h7cibY1CgR6C96dyvRYFltd4YY+fwCAiQg3MuoHpTeVq28QYUAX8daMDW07qs03vrvA2jthg2OjSNsx6QILp1zRb8r6GlIxhDMxlRrUbpB4Q23ykZzDvavMnuagybU8ti9TxkHH0qN+IwdoS5Wkdh0ZTA==");
  base64DecodeToExistingUint8Array(bufferView, 592, "EAAAAAEAAAADAAAAEAAAAFABAABQAQAAAAEAAEA=");
  base64DecodeToExistingUint8Array(bufferView, 624, "HAAAAAEAAAABAAAAHAAAAEkAbgB2AGEAbABpAGQAIABsAGUAbgBnAHQAaA==");
  base64DecodeToExistingUint8Array(bufferView, 672, "JgAAAAEAAAABAAAAJgAAAH4AbABpAGIALwBhAHIAcgBhAHkAYgB1AGYAZgBlAHIALgB0AHM=");
}
function wasm2js_trap() { throw new Error('abort'); }

function asmFunc(imports) {
 var buffer = new ArrayBuffer(65536);
 var HEAP8 = new Int8Array(buffer);
 var HEAP16 = new Int16Array(buffer);
 var HEAP32 = new Int32Array(buffer);
 var HEAPU8 = new Uint8Array(buffer);
 var HEAPU16 = new Uint16Array(buffer);
 var HEAPU32 = new Uint32Array(buffer);
 var HEAPF32 = new Float32Array(buffer);
 var HEAPF64 = new Float64Array(buffer);
 var Math_imul = Math.imul;
 var Math_fround = Math.fround;
 var Math_abs = Math.abs;
 var Math_clz32 = Math.clz32;
 var Math_min = Math.min;
 var Math_max = Math.max;
 var Math_floor = Math.floor;
 var Math_ceil = Math.ceil;
 var Math_trunc = Math.trunc;
 var Math_sqrt = Math.sqrt;
 var env = imports.env;
 var fimport$0 = env.abort;
 var global$0 = 512;
 var global$1 = 0;
 var global$2 = 0;
 var global$3 = 0;
 var global$4 = 0;
 var global$5 = 0;
 var global$6 = 0;
 var global$7 = 0;
 var global$8 = 0;
 var global$9 = 0;
 var global$10 = 0;
 var global$11 = 0;
 var global$12 = 0;
 var global$13 = 0;
 var global$14 = 0;
 var global$15 = 0;
 var global$16 = 0;
 var global$17 = 0;
 var global$18 = 0;
 var global$19 = 0;
 var global$20 = 0;
 var global$21 = 0;
 var global$22 = 0;
 var global$23 = 0;
 var global$24 = 0;
 var global$25 = 0;
 var global$26 = 0;
 var global$27 = 0;
 var global$28 = 0;
 var global$29 = 0;
 var global$30 = 0;
 var global$31 = 0;
 var global$32 = 0;
 var global$33 = 0;
 function $0($0_1) {
  $0_1 = $0_1 | 0;
  var $1_1 = 0, $2_1 = 0;
  $2_1 = __wasm_memory_size();
  $1_1 = $2_1 << 16 | 0;
  if ($0_1 >>> 0 > $1_1 >>> 0) {
   $1_1 = ((($0_1 - $1_1 | 0) + 65535 | 0) & -65536 | 0) >>> 16 | 0;
   if ((__wasm_memory_grow((($2_1 | 0) > ($1_1 | 0) ? $2_1 : $1_1) | 0) | 0) < (0 | 0)) {
    if ((__wasm_memory_grow($1_1 | 0) | 0) < (0 | 0)) {
     wasm2js_trap()
    }
   }
  }
  global$23 = $0_1;
 }

 function $1($0_1) {
  $0_1 = $0_1 | 0;
  var $1_1 = 0, $2_1 = 0, $3_1 = 0;
  if ($0_1 >>> 0 > 1073741808 >>> 0) {
   wasm2js_trap()
  }
  $2_1 = global$23 + 16 | 0;
  $1_1 = ($0_1 + 15 | 0) & -16 | 0;
  $3_1 = $1_1 >>> 0 > 16 >>> 0 ? $1_1 : 16;
  $0($2_1 + $3_1 | 0 | 0);
  $1_1 = $2_1 - 16 | 0;
  HEAP32[$1_1 >> 2] = $3_1;
  HEAP32[($1_1 + 4 | 0) >> 2] = 1;
  HEAP32[($1_1 + 8 | 0) >> 2] = 0;
  HEAP32[($1_1 + 12 | 0) >> 2] = $0_1;
  return $2_1 | 0;
 }

 function $2($0_1, $1_1) {
  $0_1 = $0_1 | 0;
  $1_1 = $1_1 | 0;
  var $2_1 = 0;
  label$1 : while (1) {
   if ($1_1) {
    $2_1 = $0_1;
    $0_1 = $2_1 + 1 | 0;
    HEAP8[$2_1 >> 0] = 0;
    $1_1 = $1_1 - 1 | 0;
    continue label$1;
   }
   break label$1;
  };
 }

 function $3($0_1) {
  $0_1 = $0_1 | 0;
  var $1_1 = 0;
  if ($0_1 >>> 0 > 1073741808 >>> 0) {
   fimport$0(640 | 0, 688 | 0, 54 | 0, 42 | 0);
   wasm2js_trap();
  }
  $1_1 = $1($0_1 | 0) | 0;
  $2($1_1 | 0, $0_1 | 0);
  return $1_1 | 0;
 }

 function $4() {
  global$1 = HEAP32[308 >> 2] | 0;
  global$2 = HEAP32[612 >> 2] | 0;
  global$22 = 736;
  global$23 = 736;
  global$24 = $3(64 | 0) | 0;
  global$25 = global$24;
  global$26 = $3(256 | 0) | 0;
  global$27 = global$26;
  global$28 = $3(512 | 0) | 0;
  global$29 = global$28;
  global$30 = $3(32 | 0) | 0;
  global$31 = global$30;
 }

 function $5() {
  global$3 = 1779033703;
  global$4 = -1150833019;
  global$5 = 1013904242;
  global$6 = -1521486534;
  global$7 = 1359893119;
  global$8 = -1694144372;
  global$9 = 528734635;
  global$10 = 1541459225;
  global$32 = 0;
  global$33 = 0;
 }

 function $6($0_1, $1_1, $2_1) {
  $0_1 = $0_1 | 0;
  $1_1 = $1_1 | 0;
  $2_1 = $2_1 | 0;
  var $3_1 = 0, $4_1 = 0;
  label$1 : {
   $3_1 = $2_1;
   if (($0_1 | 0) == ($1_1 | 0)) {
    break label$1
   }
   if ($0_1 >>> 0 < $1_1 >>> 0) {
    label$3 : while (1) {
     if ($3_1) {
      $2_1 = $0_1;
      $0_1 = $0_1 + 1 | 0;
      $4_1 = $1_1;
      $1_1 = $1_1 + 1 | 0;
      HEAP8[$2_1 >> 0] = HEAPU8[$4_1 >> 0] | 0;
      $3_1 = $3_1 - 1 | 0;
      continue label$3;
     }
     break label$3;
    }
   } else {
    label$6 : while (1) {
     if ($3_1) {
      $3_1 = $3_1 - 1 | 0;
      HEAP8[($3_1 + $0_1 | 0) >> 0] = HEAPU8[($1_1 + $3_1 | 0) >> 0] | 0;
      continue label$6;
     }
     break label$6;
    }
   }
  }
 }

 function $7($0_1, $1_1) {
  $0_1 = $0_1 | 0;
  $1_1 = $1_1 | 0;
  var $2_1 = 0, $51 = 0, $57 = 0, $78 = 0, $103 = 0, $108 = 0, $119 = 0, $140 = 0, $145 = 0, $146 = 0, wasm2js_i32$0 = 0, wasm2js_i32$1 = 0;
  global$11 = global$3;
  global$12 = global$4;
  global$13 = global$5;
  global$14 = global$6;
  global$15 = global$7;
  global$16 = global$8;
  global$17 = global$9;
  global$18 = global$10;
  global$19 = 0;
  label$1 : while (1) {
   if (global$19 >>> 0 < 16 >>> 0) {
    $2_1 = global$19 << 2 | 0;
    HEAP32[($0_1 + (global$19 << 2 | 0) | 0) >> 2] = (HEAPU8[($1_1 + $2_1 | 0) >> 0] | 0) << 24 | 0 | ((HEAPU8[($1_1 + ($2_1 + 1 | 0) | 0) >> 0] | 0) << 16 | 0) | 0 | ((HEAPU8[($1_1 + ($2_1 + 2 | 0) | 0) >> 0] | 0) << 8 | 0) | 0 | (HEAPU8[($1_1 + ($2_1 + 3 | 0) | 0) >> 0] | 0) | 0;
    global$19 = global$19 + 1 | 0;
    continue label$1;
   }
   break label$1;
  };
  global$19 = 16;
  label$3 : while (1) {
   if (global$19 >>> 0 < 64 >>> 0) {
    $51 = $0_1 + (global$19 << 2 | 0) | 0;
    $57 = HEAP32[($0_1 + ((global$19 - 16 | 0) << 2 | 0) | 0) >> 2] | 0;
    $1_1 = HEAP32[($0_1 + ((global$19 - 2 | 0) << 2 | 0) | 0) >> 2] | 0;
    $78 = (HEAP32[($0_1 + ((global$19 - 7 | 0) << 2 | 0) | 0) >> 2] | 0) + (((__wasm_rotr_i32($1_1 | 0, 17 | 0) | 0) ^ (__wasm_rotr_i32($1_1 | 0, 19 | 0) | 0) | 0) ^ ($1_1 >>> 10 | 0) | 0) | 0;
    $1_1 = HEAP32[($0_1 + ((global$19 - 15 | 0) << 2 | 0) | 0) >> 2] | 0;
    (wasm2js_i32$0 = $51, wasm2js_i32$1 = $57 + ($78 + (((__wasm_rotr_i32($1_1 | 0, 7 | 0) | 0) ^ (__wasm_rotr_i32($1_1 | 0, 18 | 0) | 0) | 0) ^ ($1_1 >>> 3 | 0) | 0) | 0) | 0), HEAP32[wasm2js_i32$0 >> 2] = wasm2js_i32$1;
    global$19 = global$19 + 1 | 0;
    continue label$3;
   }
   break label$3;
  };
  global$19 = 0;
  label$5 : while (1) {
   if (global$19 >>> 0 < 64 >>> 0) {
    $103 = HEAP32[($0_1 + (global$19 << 2 | 0) | 0) >> 2] | 0;
    $108 = HEAP32[(global$1 + (global$19 << 2 | 0) | 0) >> 2] | 0;
    $1_1 = global$15;
    $119 = global$18 + (((__wasm_rotr_i32($1_1 | 0, 6 | 0) | 0) ^ (__wasm_rotr_i32($1_1 | 0, 11 | 0) | 0) | 0) ^ (__wasm_rotr_i32($1_1 | 0, 25 | 0) | 0) | 0) | 0;
    $1_1 = global$15;
    global$20 = $103 + ($108 + ($119 + (($1_1 & global$16 | 0) ^ (global$17 & ($1_1 ^ -1 | 0) | 0) | 0) | 0) | 0) | 0;
    $1_1 = global$11;
    $140 = ((__wasm_rotr_i32($1_1 | 0, 2 | 0) | 0) ^ (__wasm_rotr_i32($1_1 | 0, 13 | 0) | 0) | 0) ^ (__wasm_rotr_i32($1_1 | 0, 22 | 0) | 0) | 0;
    $1_1 = global$11;
    $2_1 = global$12;
    $145 = $1_1 & $2_1 | 0;
    $146 = $1_1;
    $1_1 = global$13;
    global$21 = $140 + (($145 ^ ($146 & $1_1 | 0) | 0) ^ ($1_1 & $2_1 | 0) | 0) | 0;
    global$18 = global$17;
    global$17 = global$16;
    global$16 = global$15;
    global$15 = global$14 + global$20 | 0;
    global$14 = global$13;
    global$13 = global$12;
    global$12 = global$11;
    global$11 = global$20 + global$21 | 0;
    global$19 = global$19 + 1 | 0;
    continue label$5;
   }
   break label$5;
  };
  global$3 = global$3 + global$11 | 0;
  global$4 = global$4 + global$12 | 0;
  global$5 = global$5 + global$13 | 0;
  global$6 = global$6 + global$14 | 0;
  global$7 = global$7 + global$15 | 0;
  global$8 = global$8 + global$16 | 0;
  global$9 = global$9 + global$17 | 0;
  global$10 = global$10 + global$18 | 0;
 }

 function $8($0_1, $1_1) {
  $0_1 = $0_1 | 0;
  $1_1 = $1_1 | 0;
  var $2_1 = 0, $3_1 = 0, $57 = 0;
  global$33 = $1_1 + global$33 | 0;
  if (global$32) {
   if ((64 - global$32 | 0 | 0) <= ($1_1 | 0)) {
    $6(global$25 + global$32 | 0 | 0, $0_1 | 0, 64 - global$32 | 0 | 0);
    global$32 = global$32 + (64 - global$32 | 0) | 0;
    $2_1 = 64 - global$32 | 0;
    $1_1 = $1_1 - (64 - global$32 | 0) | 0;
    $7(global$27 | 0, global$25 | 0);
    global$32 = 0;
   } else {
    $6(global$25 + global$32 | 0 | 0, $0_1 | 0, $1_1 | 0);
    global$32 = $1_1 + global$32 | 0;
    return;
   }
  }
  label$4 : while (1) {
   if (($3_1 | 0) < (($1_1 | 0) / (64 | 0) | 0 | 0)) {
    $7(global$27 | 0, $0_1 + $2_1 | 0 | 0);
    $3_1 = $3_1 + 1 | 0;
    $2_1 = $2_1 - -64 | 0;
    continue label$4;
   }
   break label$4;
  };
  if ($1_1 & 63 | 0) {
   $57 = $0_1 + $2_1 | 0;
   $0_1 = $1_1 & 63 | 0;
   $6(global$25 + global$32 | 0 | 0, $57 | 0, $0_1 | 0);
   global$32 = $0_1 + global$32 | 0;
  }
 }

 function $9($0_1) {
  $0_1 = $0_1 | 0;
  return __wasm_rotl_i32($0_1 & -16711936 | 0 | 0, 8 | 0) | 0 | (__wasm_rotr_i32($0_1 & 16711935 | 0 | 0, 8 | 0) | 0) | 0 | 0;
 }

 function $10($0_1) {
  $0_1 = $0_1 | 0;
  var $1_1 = 0, $2_1 = 0, wasm2js_i32$0 = 0, wasm2js_i32$1 = 0;
  if ((global$33 & 63 | 0 | 0) < (63 | 0)) {
   HEAP8[(global$25 + global$32 | 0) >> 0] = 128;
   global$32 = global$32 + 1 | 0;
  }
  if ((global$33 & 63 | 0 | 0) >= (56 | 0)) {
   $1_1 = global$25 + global$32 | 0;
   $2_1 = $1_1 + (64 - global$32 | 0) | 0;
   label$3 : while (1) {
    if ($1_1 >>> 0 < $2_1 >>> 0) {
     HEAP8[$1_1 >> 0] = 0;
     $1_1 = $1_1 + 1 | 0;
     continue label$3;
    }
    break label$3;
   };
   $7(global$27 | 0, global$25 | 0);
   global$32 = 0;
  }
  if ((global$33 & 63 | 0 | 0) >= (63 | 0)) {
   HEAP8[(global$25 + global$32 | 0) >> 0] = 128;
   global$32 = global$32 + 1 | 0;
  }
  $1_1 = global$25 + global$32 | 0;
  $2_1 = $1_1 + (56 - global$32 | 0) | 0;
  label$6 : while (1) {
   if ($1_1 >>> 0 < $2_1 >>> 0) {
    HEAP8[$1_1 >> 0] = 0;
    $1_1 = $1_1 + 1 | 0;
    continue label$6;
   }
   break label$6;
  };
  (wasm2js_i32$0 = global$25 + 56 | 0, wasm2js_i32$1 = $9((global$33 | 0) / (536870912 | 0) | 0 | 0) | 0), HEAP32[wasm2js_i32$0 >> 2] = wasm2js_i32$1;
  (wasm2js_i32$0 = global$25 + 60 | 0, wasm2js_i32$1 = $9(global$33 << 3 | 0 | 0) | 0), HEAP32[wasm2js_i32$0 >> 2] = wasm2js_i32$1;
  $7(global$27 | 0, global$25 | 0);
  (wasm2js_i32$0 = $0_1, wasm2js_i32$1 = $9(global$3 | 0) | 0), HEAP32[wasm2js_i32$0 >> 2] = wasm2js_i32$1;
  (wasm2js_i32$0 = $0_1 + 4 | 0, wasm2js_i32$1 = $9(global$4 | 0) | 0), HEAP32[wasm2js_i32$0 >> 2] = wasm2js_i32$1;
  (wasm2js_i32$0 = $0_1 + 8 | 0, wasm2js_i32$1 = $9(global$5 | 0) | 0), HEAP32[wasm2js_i32$0 >> 2] = wasm2js_i32$1;
  (wasm2js_i32$0 = $0_1 + 12 | 0, wasm2js_i32$1 = $9(global$6 | 0) | 0), HEAP32[wasm2js_i32$0 >> 2] = wasm2js_i32$1;
  (wasm2js_i32$0 = $0_1 + 16 | 0, wasm2js_i32$1 = $9(global$7 | 0) | 0), HEAP32[wasm2js_i32$0 >> 2] = wasm2js_i32$1;
  (wasm2js_i32$0 = $0_1 + 20 | 0, wasm2js_i32$1 = $9(global$8 | 0) | 0), HEAP32[wasm2js_i32$0 >> 2] = wasm2js_i32$1;
  (wasm2js_i32$0 = $0_1 + 24 | 0, wasm2js_i32$1 = $9(global$9 | 0) | 0), HEAP32[wasm2js_i32$0 >> 2] = wasm2js_i32$1;
  (wasm2js_i32$0 = $0_1 + 28 | 0, wasm2js_i32$1 = $9(global$10 | 0) | 0), HEAP32[wasm2js_i32$0 >> 2] = wasm2js_i32$1;
 }

 function $11($0_1) {
  $0_1 = $0_1 | 0;
  $5();
  $8(global$29 | 0, $0_1 | 0);
  $10(global$31 | 0);
 }

 function $12($0_1) {
  $0_1 = $0_1 | 0;
  var $1_1 = 0, $2_1 = 0, $17 = 0, $28 = 0, $48 = 0, $53 = 0, $54 = 0;
  global$11 = global$3;
  global$12 = global$4;
  global$13 = global$5;
  global$14 = global$6;
  global$15 = global$7;
  global$16 = global$8;
  global$17 = global$9;
  global$18 = global$10;
  global$19 = 0;
  label$1 : while (1) {
   if (global$19 >>> 0 < 64 >>> 0) {
    $17 = HEAP32[($0_1 + (global$19 << 2 | 0) | 0) >> 2] | 0;
    $1_1 = global$15;
    $28 = global$18 + (((__wasm_rotr_i32($1_1 | 0, 6 | 0) | 0) ^ (__wasm_rotr_i32($1_1 | 0, 11 | 0) | 0) | 0) ^ (__wasm_rotr_i32($1_1 | 0, 25 | 0) | 0) | 0) | 0;
    $1_1 = global$15;
    global$20 = $17 + ($28 + (($1_1 & global$16 | 0) ^ (global$17 & ($1_1 ^ -1 | 0) | 0) | 0) | 0) | 0;
    $1_1 = global$11;
    $48 = ((__wasm_rotr_i32($1_1 | 0, 2 | 0) | 0) ^ (__wasm_rotr_i32($1_1 | 0, 13 | 0) | 0) | 0) ^ (__wasm_rotr_i32($1_1 | 0, 22 | 0) | 0) | 0;
    $1_1 = global$11;
    $2_1 = global$12;
    $53 = $1_1 & $2_1 | 0;
    $54 = $1_1;
    $1_1 = global$13;
    global$21 = $48 + (($53 ^ ($54 & $1_1 | 0) | 0) ^ ($1_1 & $2_1 | 0) | 0) | 0;
    global$18 = global$17;
    global$17 = global$16;
    global$16 = global$15;
    global$15 = global$14 + global$20 | 0;
    global$14 = global$13;
    global$13 = global$12;
    global$12 = global$11;
    global$11 = global$20 + global$21 | 0;
    global$19 = global$19 + 1 | 0;
    continue label$1;
   }
   break label$1;
  };
  global$3 = global$3 + global$11 | 0;
  global$4 = global$4 + global$12 | 0;
  global$5 = global$5 + global$13 | 0;
  global$6 = global$6 + global$14 | 0;
  global$7 = global$7 + global$15 | 0;
  global$8 = global$8 + global$16 | 0;
  global$9 = global$9 + global$17 | 0;
  global$10 = global$10 + global$18 | 0;
 }

 function $13($0_1, $1_1) {
  $0_1 = $0_1 | 0;
  $1_1 = $1_1 | 0;
  var wasm2js_i32$0 = 0, wasm2js_i32$1 = 0;
  $5();
  $7(global$27 | 0, $0_1 | 0);
  $12(global$2 | 0);
  (wasm2js_i32$0 = $1_1, wasm2js_i32$1 = $9(global$3 | 0) | 0), HEAP32[wasm2js_i32$0 >> 2] = wasm2js_i32$1;
  (wasm2js_i32$0 = $1_1 + 4 | 0, wasm2js_i32$1 = $9(global$4 | 0) | 0), HEAP32[wasm2js_i32$0 >> 2] = wasm2js_i32$1;
  (wasm2js_i32$0 = $1_1 + 8 | 0, wasm2js_i32$1 = $9(global$5 | 0) | 0), HEAP32[wasm2js_i32$0 >> 2] = wasm2js_i32$1;
  (wasm2js_i32$0 = $1_1 + 12 | 0, wasm2js_i32$1 = $9(global$6 | 0) | 0), HEAP32[wasm2js_i32$0 >> 2] = wasm2js_i32$1;
  (wasm2js_i32$0 = $1_1 + 16 | 0, wasm2js_i32$1 = $9(global$7 | 0) | 0), HEAP32[wasm2js_i32$0 >> 2] = wasm2js_i32$1;
  (wasm2js_i32$0 = $1_1 + 20 | 0, wasm2js_i32$1 = $9(global$8 | 0) | 0), HEAP32[wasm2js_i32$0 >> 2] = wasm2js_i32$1;
  (wasm2js_i32$0 = $1_1 + 24 | 0, wasm2js_i32$1 = $9(global$9 | 0) | 0), HEAP32[wasm2js_i32$0 >> 2] = wasm2js_i32$1;
  (wasm2js_i32$0 = $1_1 + 28 | 0, wasm2js_i32$1 = $9(global$10 | 0) | 0), HEAP32[wasm2js_i32$0 >> 2] = wasm2js_i32$1;
 }

 function $14() {
  $4();
 }

 function __wasm_rotl_i32(var$0, var$1) {
  var$0 = var$0 | 0;
  var$1 = var$1 | 0;
  var var$2 = 0;
  var$2 = var$1 & 31 | 0;
  var$1 = (0 - var$1 | 0) & 31 | 0;
  return ((-1 >>> var$2 | 0) & var$0 | 0) << var$2 | 0 | (((-1 << var$1 | 0) & var$0 | 0) >>> var$1 | 0) | 0 | 0;
 }

 function __wasm_rotr_i32(var$0, var$1) {
  var$0 = var$0 | 0;
  var$1 = var$1 | 0;
  var var$2 = 0;
  var$2 = var$1 & 31 | 0;
  var$1 = (0 - var$1 | 0) & 31 | 0;
  return ((-1 << var$2 | 0) & var$0 | 0) >>> var$2 | 0 | (((-1 >>> var$1 | 0) & var$0 | 0) << var$1 | 0) | 0 | 0;
 }

 bufferView = HEAPU8;
 initActiveSegments(imports);
 $14();
 function __wasm_memory_size() {
  return buffer.byteLength / 65536 | 0;
 }

 function __wasm_memory_grow(pagesToAdd) {
  pagesToAdd = pagesToAdd | 0;
  var oldPages = __wasm_memory_size() | 0;
  var newPages = oldPages + pagesToAdd | 0;
  if ((oldPages < newPages) && (newPages < 65536)) {
   var newBuffer = new ArrayBuffer(Math_imul(newPages, 65536));
   var newHEAP8 = new Int8Array(newBuffer);
   newHEAP8.set(HEAP8);
   HEAP8 = new Int8Array(newBuffer);
   HEAP16 = new Int16Array(newBuffer);
   HEAP32 = new Int32Array(newBuffer);
   HEAPU8 = new Uint8Array(newBuffer);
   HEAPU16 = new Uint16Array(newBuffer);
   HEAPU32 = new Uint32Array(newBuffer);
   HEAPF32 = new Float32Array(newBuffer);
   HEAPF64 = new Float64Array(newBuffer);
   buffer = newBuffer;
   bufferView = HEAPU8;
  }
  return oldPages;
 }

 return {
  "memory": Object.create(Object.prototype, {
   "grow": {
    "value": __wasm_memory_grow
   },
   "buffer": {
    "get": function () {
     return buffer;
    }

   }
  }),
  "INPUT_LENGTH": {
   get value() {
    return global$0;
   },
   set value(_global$0) {
    global$0 = _global$0;
   }
  },
  "input": {
   get value() {
    return global$28;
   },
   set value(_global$28) {
    global$28 = _global$28;
   }
  },
  "output": {
   get value() {
    return global$30;
   },
   set value(_global$30) {
    global$30 = _global$30;
   }
  },
  "init": $5,
  "update": $8,
  "final": $10,
  "digest": $11,
  "digest64": $13
 };
}

module.exports.newInstance = function newInstance() {
  return asmFunc({
    "env": {
      abort: function (msg, file, line, col) {
        throw Error(`abort: ${msg}:${file}:${line}:${col}`);
      }
    },
  });
}


/***/ }),

/***/ 83286:
/***/ ((__unused_webpack_module, exports) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.byteArrayToHashObject = exports.hashObjectToByteArray = void 0;
/**
 * Pass 8 numbers in an object and set that to inputArray.
 * This function contains multiple same procedures but we intentionally
 * do it step by step to improve performance a bit.
 **/
function hashObjectToByteArray(obj, byteArr, offset) {
    let tmp = obj.h0;
    byteArr[0 + offset] = tmp & 0xff;
    tmp = tmp >> 8;
    byteArr[1 + offset] = tmp & 0xff;
    tmp = tmp >> 8;
    byteArr[2 + offset] = tmp & 0xff;
    tmp = tmp >> 8;
    byteArr[3 + offset] = tmp & 0xff;
    tmp = obj.h1;
    byteArr[4 + offset] = tmp & 0xff;
    tmp = tmp >> 8;
    byteArr[5 + offset] = tmp & 0xff;
    tmp = tmp >> 8;
    byteArr[6 + offset] = tmp & 0xff;
    tmp = tmp >> 8;
    byteArr[7 + offset] = tmp & 0xff;
    tmp = obj.h2;
    byteArr[8 + offset] = tmp & 0xff;
    tmp = tmp >> 8;
    byteArr[9 + offset] = tmp & 0xff;
    tmp = tmp >> 8;
    byteArr[10 + offset] = tmp & 0xff;
    tmp = tmp >> 8;
    byteArr[11 + offset] = tmp & 0xff;
    tmp = obj.h3;
    byteArr[12 + offset] = tmp & 0xff;
    tmp = tmp >> 8;
    byteArr[13 + offset] = tmp & 0xff;
    tmp = tmp >> 8;
    byteArr[14 + offset] = tmp & 0xff;
    tmp = tmp >> 8;
    byteArr[15 + offset] = tmp & 0xff;
    tmp = obj.h4;
    byteArr[16 + offset] = tmp & 0xff;
    tmp = tmp >> 8;
    byteArr[17 + offset] = tmp & 0xff;
    tmp = tmp >> 8;
    byteArr[18 + offset] = tmp & 0xff;
    tmp = tmp >> 8;
    byteArr[19 + offset] = tmp & 0xff;
    tmp = obj.h5;
    byteArr[20 + offset] = tmp & 0xff;
    tmp = tmp >> 8;
    byteArr[21 + offset] = tmp & 0xff;
    tmp = tmp >> 8;
    byteArr[22 + offset] = tmp & 0xff;
    tmp = tmp >> 8;
    byteArr[23 + offset] = tmp & 0xff;
    tmp = obj.h6;
    byteArr[24 + offset] = tmp & 0xff;
    tmp = tmp >> 8;
    byteArr[25 + offset] = tmp & 0xff;
    tmp = tmp >> 8;
    byteArr[26 + offset] = tmp & 0xff;
    tmp = tmp >> 8;
    byteArr[27 + offset] = tmp & 0xff;
    tmp = obj.h7;
    byteArr[28 + offset] = tmp & 0xff;
    tmp = tmp >> 8;
    byteArr[29 + offset] = tmp & 0xff;
    tmp = tmp >> 8;
    byteArr[30 + offset] = tmp & 0xff;
    tmp = tmp >> 8;
    byteArr[31 + offset] = tmp & 0xff;
}
exports.hashObjectToByteArray = hashObjectToByteArray;
/**
 * Parse outputArray into an object of 8 numbers.
 * This is the order that makes Uint32Array the same to Uint8Array
 * This function contains multiple same procedures but we intentionally
 * do it step by step to improve performance a bit.
 **/
function byteArrayToHashObject(byteArr) {
    let tmp = 0;
    tmp |= byteArr[3] & 0xff;
    tmp = tmp << 8;
    tmp |= byteArr[2] & 0xff;
    tmp = tmp << 8;
    tmp |= byteArr[1] & 0xff;
    tmp = tmp << 8;
    tmp |= byteArr[0] & 0xff;
    const h0 = tmp;
    tmp = 0;
    tmp |= byteArr[7] & 0xff;
    tmp = tmp << 8;
    tmp |= byteArr[6] & 0xff;
    tmp = tmp << 8;
    tmp |= byteArr[5] & 0xff;
    tmp = tmp << 8;
    tmp |= byteArr[4] & 0xff;
    const h1 = tmp;
    tmp = 0;
    tmp |= byteArr[11] & 0xff;
    tmp = tmp << 8;
    tmp |= byteArr[10] & 0xff;
    tmp = tmp << 8;
    tmp |= byteArr[9] & 0xff;
    tmp = tmp << 8;
    tmp |= byteArr[8] & 0xff;
    const h2 = tmp;
    tmp = 0;
    tmp |= byteArr[15] & 0xff;
    tmp = tmp << 8;
    tmp |= byteArr[14] & 0xff;
    tmp = tmp << 8;
    tmp |= byteArr[13] & 0xff;
    tmp = tmp << 8;
    tmp |= byteArr[12] & 0xff;
    const h3 = tmp;
    tmp = 0;
    tmp |= byteArr[19] & 0xff;
    tmp = tmp << 8;
    tmp |= byteArr[18] & 0xff;
    tmp = tmp << 8;
    tmp |= byteArr[17] & 0xff;
    tmp = tmp << 8;
    tmp |= byteArr[16] & 0xff;
    const h4 = tmp;
    tmp = 0;
    tmp |= byteArr[23] & 0xff;
    tmp = tmp << 8;
    tmp |= byteArr[22] & 0xff;
    tmp = tmp << 8;
    tmp |= byteArr[21] & 0xff;
    tmp = tmp << 8;
    tmp |= byteArr[20] & 0xff;
    const h5 = tmp;
    tmp = 0;
    tmp |= byteArr[27] & 0xff;
    tmp = tmp << 8;
    tmp |= byteArr[26] & 0xff;
    tmp = tmp << 8;
    tmp |= byteArr[25] & 0xff;
    tmp = tmp << 8;
    tmp |= byteArr[24] & 0xff;
    const h6 = tmp;
    tmp = 0;
    tmp |= byteArr[31] & 0xff;
    tmp = tmp << 8;
    tmp |= byteArr[30] & 0xff;
    tmp = tmp << 8;
    tmp |= byteArr[29] & 0xff;
    tmp = tmp << 8;
    tmp |= byteArr[28] & 0xff;
    const h7 = tmp;
    return {
        h0,
        h1,
        h2,
        h3,
        h4,
        h5,
        h6,
        h7,
    };
}
exports.byteArrayToHashObject = byteArrayToHashObject;
//# sourceMappingURL=hashObject.js.map

/***/ }),

/***/ 44902:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.digest64HashObjects = exports.digest2Bytes32 = exports.digest64 = exports.digest = exports.SHA256 = exports.hashObjectToByteArray = exports.byteArrayToHashObject = void 0;
const wasm_1 = __webpack_require__(30308);
const hashObject_1 = __webpack_require__(83286);
Object.defineProperty(exports, "byteArrayToHashObject", ({ enumerable: true, get: function () { return hashObject_1.byteArrayToHashObject; } }));
Object.defineProperty(exports, "hashObjectToByteArray", ({ enumerable: true, get: function () { return hashObject_1.hashObjectToByteArray; } }));
const sha256_1 = __importDefault(__webpack_require__(92669));
exports.SHA256 = sha256_1.default;
const ctx = wasm_1.newInstance();
const wasmInputValue = ctx.input.value;
const wasmOutputValue = ctx.output.value;
const inputUint8Array = new Uint8Array(ctx.memory.buffer, wasmInputValue, ctx.INPUT_LENGTH.value);
const outputUint8Array = new Uint8Array(ctx.memory.buffer, wasmOutputValue, 32);
const inputUint32Array = new Uint32Array(ctx.memory.buffer, wasmInputValue, ctx.INPUT_LENGTH.value);
function digest(data) {
    if (data.length === 64) {
        return digest64(data);
    }
    if (data.length <= ctx.INPUT_LENGTH) {
        inputUint8Array.set(data);
        ctx.digest(data.length);
        const output = new Uint8Array(32);
        output.set(outputUint8Array);
        return output;
    }
    ctx.init();
    update(data);
    return final();
}
exports.digest = digest;
function digest64(data) {
    if (data.length === 64) {
        inputUint8Array.set(data);
        ctx.digest64(wasmInputValue, wasmOutputValue);
        const output = new Uint8Array(32);
        output.set(outputUint8Array);
        return output;
    }
    throw new Error("InvalidLengthForDigest64");
}
exports.digest64 = digest64;
function digest2Bytes32(bytes1, bytes2) {
    if (bytes1.length === 32 && bytes2.length === 32) {
        inputUint8Array.set(bytes1);
        inputUint8Array.set(bytes2, 32);
        ctx.digest64(wasmInputValue, wasmOutputValue);
        const output = new Uint8Array(32);
        output.set(outputUint8Array);
        return output;
    }
    throw new Error("InvalidLengthForDigest64");
}
exports.digest2Bytes32 = digest2Bytes32;
/**
 * Digest 2 objects, each has 8 properties from h0 to h7.
 * The performance is a little bit better than digest64 due to the use of Uint32Array
 * and the memory is a little bit better than digest64 due to no temporary Uint8Array.
 * @returns
 */
function digest64HashObjects(obj1, obj2) {
    // TODO: expect obj1 and obj2 as HashObject
    inputUint32Array[0] = obj1.h0;
    inputUint32Array[1] = obj1.h1;
    inputUint32Array[2] = obj1.h2;
    inputUint32Array[3] = obj1.h3;
    inputUint32Array[4] = obj1.h4;
    inputUint32Array[5] = obj1.h5;
    inputUint32Array[6] = obj1.h6;
    inputUint32Array[7] = obj1.h7;
    inputUint32Array[8] = obj2.h0;
    inputUint32Array[9] = obj2.h1;
    inputUint32Array[10] = obj2.h2;
    inputUint32Array[11] = obj2.h3;
    inputUint32Array[12] = obj2.h4;
    inputUint32Array[13] = obj2.h5;
    inputUint32Array[14] = obj2.h6;
    inputUint32Array[15] = obj2.h7;
    ctx.digest64(wasmInputValue, wasmOutputValue);
    // extracting numbers from Uint32Array causes more memory
    return hashObject_1.byteArrayToHashObject(outputUint8Array);
}
exports.digest64HashObjects = digest64HashObjects;
function update(data) {
    const INPUT_LENGTH = ctx.INPUT_LENGTH.value;
    if (data.length > INPUT_LENGTH) {
        for (let i = 0; i < data.length; i += INPUT_LENGTH) {
            const sliced = data.slice(i, i + INPUT_LENGTH);
            inputUint8Array.set(sliced);
            ctx.update(wasmInputValue, sliced.length);
        }
    }
    else {
        inputUint8Array.set(data);
        ctx.update(wasmInputValue, data.length);
    }
}
function final() {
    ctx.final(wasmOutputValue);
    const output = new Uint8Array(32);
    output.set(outputUint8Array);
    return output;
}
//# sourceMappingURL=index.js.map

/***/ }),

/***/ 92669:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
const wasm_1 = __webpack_require__(30308);
/**
 * Class based SHA256
 */
class SHA256 {
    constructor() {
        this.ctx = wasm_1.newInstance();
        this.wasmInputValue = this.ctx.input.value;
        this.wasmOutputValue = this.ctx.output.value;
        this.uint8InputArray = new Uint8Array(this.ctx.memory.buffer, this.wasmInputValue, this.ctx.INPUT_LENGTH.value);
        this.uint8OutputArray = new Uint8Array(this.ctx.memory.buffer, this.wasmOutputValue, 32);
    }
    init() {
        this.ctx.init();
        return this;
    }
    update(data) {
        const INPUT_LENGTH = this.ctx.INPUT_LENGTH.value;
        if (data.length > INPUT_LENGTH) {
            for (let i = 0; i < data.length; i += INPUT_LENGTH) {
                const sliced = data.slice(i, i + INPUT_LENGTH);
                this.uint8InputArray.set(sliced);
                this.ctx.update(this.wasmInputValue, sliced.length);
            }
        }
        else {
            this.uint8InputArray.set(data);
            this.ctx.update(this.wasmInputValue, data.length);
        }
        return this;
    }
    final() {
        this.ctx.final(this.wasmOutputValue);
        const output = new Uint8Array(32);
        output.set(this.uint8OutputArray);
        return output;
    }
}
exports["default"] = SHA256;
//# sourceMappingURL=sha256.js.map

/***/ })

}]);
//# sourceMappingURL=npm-ns.chainsafe.as-sha256.js.map