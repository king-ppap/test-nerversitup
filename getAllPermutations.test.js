const { getAllPermutations } = require("./getAllPermutations");

describe('getAllPermutations', () => {
  it('should return ["a"] for input "a"', () => {
    expect(getAllPermutations('a')).toEqual(['a']);
  });

  it('should return ["ab", "ba"] for input "ab"', () => {
    expect(getAllPermutations('ab')).toEqual(['ab', 'ba']);
  });

  it('should return ["abc", "acb", "bac", "bca", "cab", "cba"] for input "abc"', () => {
    expect(getAllPermutations('abc')).toEqual(['abc', 'acb', 'bac', 'bca', 'cab', 'cba']);
  });

  it('should return ["aabb", "abab", "abba", "baab", "baba", "bbaa"] for input "aabb"', () => {
    expect(getAllPermutations('aabb')).toEqual(['aabb', 'abab', 'abba', 'baab', 'baba', 'bbaa']);
  });
});
