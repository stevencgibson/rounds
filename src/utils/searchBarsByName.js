'use strict';

// export default function searchBarsByName(bars, searchTerm) {
//   return bars.filter((bar) => bar.name.toLowerCase().includes(searchTerm.toLowerCase()));
// }

module.exports = function searchBarsByName(bars, searchTerm) {
  return bars.filter((bar) => bar.name.toLowerCase().includes(searchTerm.toLowerCase()));
}