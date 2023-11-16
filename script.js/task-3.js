'use strict';
function getElementWidth(content, padding, border) {
    const width = content + padding + padding + border + border;
    const valueCon = content;
    const numericalCon = Number.parseFloat (valueCon);
    const valuePad = padding;
    const numericalPad = Number.parseFloat (valuePad);
    const valueBor = border;
    const numericalBor = Number.parseFloat (valueBor); 
    return width;
}

getElementWidth(Number.parseFloat("50px"), Number.parseFloat("8px"), Number.parseFloat("4px"));
console.log(getElementWidth(Number.parseFloat("50px"), Number.parseFloat("8px"), Number.parseFloat("4px")));
getElementWidth(Number.parseFloat("60px"), Number.parseFloat("12px"), Number.parseFloat("8.5px"));
console.log(getElementWidth(Number.parseFloat("60px"), Number.parseFloat("12px"), Number.parseFloat("8.5px")));
getElementWidth(Number.parseFloat("200px"), Number.parseFloat("0px"), Number.parseFloat("0px"));
console.log(getElementWidth(Number.parseFloat("200px"), Number.parseFloat("0px"), Number.parseFloat("0px")));