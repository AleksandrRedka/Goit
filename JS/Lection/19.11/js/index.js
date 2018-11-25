'use strict'
const calcNumb = (function () {
    const num= [80, 45, 75, 64, 53, 82];
    const calcS = (...args) => {
        const totalS = num.reduce((acc, arg) => acc + arg, 0);
    return `Сумма ${totalS}`;
    }
    const calcR = (...args) => {
        const totalR = num.reduce((acc, arg) => acc -arg, 0);
    return `Разница ${totalR}`;
    }
    const calcU = (...args) => {
        const totalU = num.reduce((acc, arg) => acc * arg, 0);
    return `Добуток ${totalU}`;
    }
    return{
        summ: calcS,
        mult: calcU,
        avay: calcR
    }
})()
console.log(calcNumb);