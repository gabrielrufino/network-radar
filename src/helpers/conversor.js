'use strict'

function bytesToBits (bytes) {
  return bytes * 8
}

function toMega (number) {
  return number / 1000000
}

module.exports = {
  bytesToBits,
  toMega
}
