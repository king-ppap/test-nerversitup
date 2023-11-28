const { countSmileys } = require("./countSmileys");

test('countSmileys returns the correct count', () => {
    expect(countSmileys([':)', ';(', ';}', ':-D'])).toBe(2);
    expect(countSmileys([';D', ':-(', ':-)', ';~)'])).toBe(3);
    expect(countSmileys([';]', ':[', ';*', ':$', ';-D'])).toBe(1);
});

// Additional tests can be added
test('countSmileys returns 0 for an empty array', () => {
    expect(countSmileys([])).toBe(0);
});

test('countSmileys returns 0 for an array with no valid smiley faces', () => {
    expect(countSmileys(['abc', '123', ':-[', ';p'])).toBe(0);
});
