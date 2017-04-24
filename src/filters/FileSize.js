// Taken straight from: https://gist.github.com/599316527/a0d1300630baa4f82aa1

var UNITS = ['B', 'KB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB'];
var STEP = 1024;

function format(value, power) {
    return (value / Math.pow(STEP, power)).toFixed(2) + UNITS[power];
}

export default function (value) {
  value = parseFloat(value, 10);
  for (var i = 0; i < UNITS.length; i++) {
      if (value < Math.pow(STEP, i)) {
          if (UNITS[i - 1]) {
              return format(value, i - 1);
          }
          return value + UNITS[i];
      }
  }
  return format(value, i - 1);
}