const typedArrayNames = require("possible-typed-array-names")
const extractStringTag = require("extract-stringtag")
const callBound = require("call-bound")
const $toStr = callBound("Object.prototype.toString")
const includes = require("array-includes")

module.exports = function isTypedArray(value) {
  return includes(typedArrayNames, extractStringTag($toStr(value)))
}