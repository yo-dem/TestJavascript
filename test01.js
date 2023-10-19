let list = [{ "name": "pino", "anni": 25, "altro": true },
{ "name": "pippo", "anni": 15, "altro": false },
{ "name": "pinno", "anni": 35, "altro": false }
]


let otherList = list.filter((elem) => {
    return elem.altro == false;
});

let otherList2 = list.map((elem) => {
    let { name, altro, ...newElem } = elem;
    return newElem;
});
console.log(otherList);
console.log(otherList2);