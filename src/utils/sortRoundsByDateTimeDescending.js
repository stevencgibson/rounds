'use strict';

module.exports = function sortRoundsByDateTimeDescending(roundA, roundB) {
  return (roundB.orderedAt < roundA.orderedAt) ? -1 : ((roundB.orderedAt > roundA.orderedAt) ? 1 : 0);
}