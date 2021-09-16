function htmlEndTagByStartTag(startTag) {
    return `</${startTag.match(/^<(\w+)/)[1]}>`
}

let st="<button type='button' disabled>";
console.log(htmlEndTagByStartTag(st));