'use strict';

export default function sortBarsByNameAscending(barA, barB) {
  return (barA.name < barB.name) ? -1 : ((barA.name > barB.name) ? 1 : 0);
}