function longestWord(text) {
    console.log(text.match(/\b\w+\b/g));
}

let text = "Ready, steady, go!";
longestWord(text);