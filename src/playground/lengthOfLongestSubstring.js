/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function (s) {
  if (s.length <= 1) {
    return s.length;
  }
  const substrLens = [];

  for (let i = 0; i < s.length; i++) {
    const remember = new Set();
    let l = i;

    for (let r = l; r < s.length; r++) {
      const char = s[r];

      if (remember.has(char)) {
        substrLens.push(r - l);
        break;
      } else {
        remember.add(char);
      }
    }
  }

  return Math.max(...substrLens);
};

export default lengthOfLongestSubstring;
