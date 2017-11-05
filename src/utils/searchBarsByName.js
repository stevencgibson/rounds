'use strict';

export default function searchBarsByName(searchTerm) {
  return function(bar) {
    return bar.name.toLowerCase().includes(searchTerm.toLowerCase());
  }
}