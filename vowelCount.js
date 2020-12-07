const getCount = str => {
    let vowelsCount = 0;
    let vowels = ['a', 'e', 'i', 'o', 'u'];

    for (i in str) {
        for (j in vowels) {
            if (str[i] === vowels[j]) {
                vowelsCount++;
                break;
            }
        }
    }

    return vowelsCount;
};

console.log(getCount('cake'));
