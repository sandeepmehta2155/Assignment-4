const l = console.log;

/**
 *
 * @param {*} n
 * @returns the number of matchsticks for n houses
 */
const matchHouses = (n = 1) => 6 + 5 * (n - 1);

l(matchHouses(1));
l(matchHouses(4));
l(matchHouses(87));
