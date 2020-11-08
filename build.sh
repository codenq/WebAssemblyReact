#!/bin/bash

set -e

echo "============================================="
echo "Compiling wasm bindings"
echo "============================================="
(
  # Compile C/C++ code
  emcc --bind bindings/SampleBindings.cpp -Icpp/ cpp/*.cpp \
  -s WASM=1 \
  -s MODULARIZE=1 -o Sample.js


)
echo "============================================="
echo "Compiling wasm bindings done"
echo "============================================="
