module.exports.findOdd = (arr) => {
    const countMap = new Map();

    for (const num of arr) {
        countMap.set(num, (countMap.get(num) || 0) + 1);
    }

    for (const [num, count] of countMap.entries()) {
        if (count % 2 !== 0) {
            return num;
        }
    }
}
