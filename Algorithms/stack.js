class Stack {
    constructor(){
        this.items = {}
        this.count = 0
    }

    push(element){
        this.items[this.count] = element
        this.count++
    }
    pop(){
        if(!this.isEmpty()){
            this.count--
            let last = this.items[this.count]
            delete this.items[this.count]
            return last
        }
        return false
    }
    size(){
        return this.count
    }
    peek(){
        return this.items[this.size() - 1]
    }
    isEmpty(){
        return this.size() === 0
    }
    clear(){
        return this.items = {}, this.count = 0
    }
    toString(){
        if(this.isEmpty())
            return "Empty"
        let objString = `${this.items[0]}`
        for (let i = 1; i < this.count; i++)
             objString = `${objString}, ${this.items[i]} `
        return objString
    }
}
const stack = new Stack()
stack.push(3)
stack.push(9)
stack.push(10)
console.log(stack.toString())
