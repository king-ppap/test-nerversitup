module.exports.getAllPermutations = (str) => {
    let result = [];

    function permute(current, remaining) {
        if (remaining.length === 0) {
            result.push(current);
            return;
        }

        for (let i = 0; i < remaining.length; i++) {
            let nextCurrent = current + remaining[i];
            let nextRemaining = remaining.slice(0, i) + remaining.slice(i + 1);
            permute(nextCurrent, nextRemaining);
        }
    }

    permute('', str);
    return Array.from(new Set(result));
}
