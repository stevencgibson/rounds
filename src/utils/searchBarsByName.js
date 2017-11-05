'use strict';

// export default function searchBarsByName(bars, searchTerm) {
//   return bars.filter((bar) => bar.name.toLowerCase().includes(searchTerm.toLowerCase()));
// }

module.exports = function searchBarsByName(searchTerm) {
  return function(bar) {
    return bar.name.toLowerCase().includes(searchTerm.toLowerCase());
  }
}