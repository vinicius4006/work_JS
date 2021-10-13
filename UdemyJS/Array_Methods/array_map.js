const n = [9,8,7,6,5,4,3,2,1]
const n2 = n.map(n => {
    return { //neste caso em que gero um objeto, tenho que dar o retorno!
        value: n,
        isEven: n % 2 === 0
    }
})
//console.log(n2)

const txt = ["hello","maybe","shield"]
const txt2 = txt.map(item => {
    return {
        normal: item,
        upper: item.toUpperCase(),
        split: item.split(""),
        join: item.split("").join("."),
        final: item.toUpperCase().split("").join(".")
    }
})
console.log(txt2)

