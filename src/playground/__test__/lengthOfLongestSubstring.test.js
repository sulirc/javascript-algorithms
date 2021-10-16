import lengthOfLongestSubstring from '../lengthOfLongestSubstring';

describe('lengthOfLongestSubstring', () => {
  const pairs = [
    ['abcabcaa', 3],
    ['au', 2],
    ['', 0],
  ];
  pairs.forEach((pair) => {
    const input = pair[0];
    const output = pair[1];

    it(`should pass lengthOfLongestSubstring(${input}) = ${output}`, () => {
      expect(lengthOfLongestSubstring(input)).toEqual(output);
    });
  });
});
