var data = "as;asas" +
            "pos;asa"
var ar = csvToArray(data)

console.log(JSON.stringify(ar))
const csvToArray = item => {
    var arLines = item.split("\n")

    for(var i = 0; i< arLines.length; i++){
        var arLine = arLines[i].split(";")
        arLines[i] = arLine
    }
    return arLines
}
