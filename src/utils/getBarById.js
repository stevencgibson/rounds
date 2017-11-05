'use strict';

// export default function getBarById(bars, id) {
//   return bars.find((bar) => bar.id == id);
// }

module.exports = function getBarById(bars, id) {
  return bars.find((bar) => bar.id == id);
}