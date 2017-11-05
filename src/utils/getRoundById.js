'use strict';

// export default function getRoundById(rounds, id) {
//   return rounds.find((round) => round.id == id);
// }

module.exports = function getRoundById(rounds, id) {
  return rounds.find((round) => round.id == id);
}