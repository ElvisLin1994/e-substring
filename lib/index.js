'use strict';

function substring (string, start, end) {
  if (!string) {
    return string
  }
  var _start = string.indexOf(start);
  var _end = string.lastIndexOf(end) + end.length;
  return string.substring(_start, _end);
}

module.exports = substring;