class Stack {
    constructor(item){
        
        this.itemOriginal = item
        this.itemSep = {}
        for (let key in item)
            this.itemSep[key] = item.reverse()[key]
        
        
    }
    //methods
    convertOperator(){
            
        
        
    }

}
const cal = new Stack(["2","1","+","3","*"])
console.log(cal.convertOperator())