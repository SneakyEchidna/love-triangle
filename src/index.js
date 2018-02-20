/**
 * @param preferences - an array of integers. Indices of people, whom they love
 * @returns number of love triangles
 */
module.exports = function getLoveTrianglesCount(preferences = []) {
  let triangles = 0;
  let ignored = [];
  for (let i = 0; i < preferences.length; i++) {
    let firstIndex = i;
    let secondIndex = preferences[i] - 1;
    let thirdIndex = preferences[secondIndex] - 1;
    let backfire = preferences[thirdIndex] - 1;

    let first = preferences[thirdIndex];
    let second = preferences[firstIndex];
    let third = preferences[secondIndex];
    if (
      ignored.includes(first) ||
      ignored.includes(second) ||
      ignored.includes(third)
    ) {
      continue;
    }
    if (firstIndex === backfire && (first != second || second != third)) {
      triangles++;
      ignored.push(...[first, second, third]);
      // console.log(ignored);
    }
  }
  return triangles;
};
