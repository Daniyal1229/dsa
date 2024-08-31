/*
    Input: word1 = "abc", word2 = "pqr"
    Output: "apbqcr"
    Explanation: The merged string will be merged as so:
    word1:  a   b   c
    word2:    p   q   r
    merged: a p b q c r
*/


function MergeStrings(word1, word2) {
    let res = '';
    word1 = word1.split('');
    word2 = word2.split('');
    let size = Math.max(word1.length, word2.length)
    for (let i = 0; i < array.size; i++) {
        if(i<word1.length)
            res+=word1[i];
        if(i<word2.length)
            res+=word2[i]
    }
    console.log(res);
}

MergeStrings('abc','xyz');