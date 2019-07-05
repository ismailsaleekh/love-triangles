/**
 * @param preferences - an array of integers. Indices of people, whom they love
 * @returns number of love triangles
 */
module.exports = function getLoveTrianglesCount(preferences = []) {
  return (
    preferences.filter((item, index) => index + 1 === preferences[preferences[item - 1] - 1] && preferences[item - 1] !== item).length / 3
  );
};
