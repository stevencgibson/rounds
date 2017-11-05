'use strict';

export default function sortRoundsByDateTimeDescending(roundA, roundB) {
  return (roundB.orderedAt < roundA.orderedAt) ? -1 : ((roundB.orderedAt > roundA.orderedAt) ? 1 : 0);
}