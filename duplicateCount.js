function duplicateCount(text) {
    let count = 0;
    let arr = new Array(200).fill(0);
    let filter;
    let size = text.length;
    text = text.toLowerCase();
    for (i = 0; i < size; i++) {
        for (j = i + 1; j < size; j++) {

            if (text[i] === text[j]) {
                count++;
                arr[text[i].charCodeAt(0)] += 1;
                break;
            }
        }
    }
    filter = arr.filter(el => el != null && el != 0)
    // console.log(filter);
    return filter.length;
}

let text = "hello";
console.log(duplicateCount(text));