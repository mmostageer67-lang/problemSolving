/**
 * @param {string[]} sentences
 * @return {number}
 */
var mostWordsFound = function(sentences) {
    let maxWords = 0;

    for (const sentence of sentences) {
        const words = sentence.split(" ").length;

        maxWords = Math.max(maxWords, words);
    }

    return maxWords;
};