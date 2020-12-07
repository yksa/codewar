const duplicateCount = text => {

    let input = text.toLowerCase().split('');

    let obj = {};

    for (i in input) {
        if (!obj[input[i]]) {
            obj[input[i]] = 1;
        } else {
            obj[input[i]] += 1;
        }
    }

    let result = 0;

    for (prop in obj) {
        if (obj[prop] > 1) {
            result++;
        }
    }

    return result;

};

console.log(duplicateCount("invisiiiibilibty"));