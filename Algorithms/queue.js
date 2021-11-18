class Queue {
    constructor(){
        this.items = {}
        this.count = 0
        this.lowestCount = 0
    }
    enqueue(element){
        this.items[this.count] = element
        this.count++
    }
    dequeue(){
        if(!this.isEmpty()){
            let first = this.items[this.lowestCount]
            delete this.items[this.lowestCount]
            this.count--
            this.lowestCount++
            return first
        }
        return false
    }
    isEmpty(){
        return this.count === 0
    }
    peek(){
        return this.items[this.lowestCount]
    }
    size(){
        return this.count
    }
    toString(){
        if(!this.isEmpty()){
        let objString = ""
        for (let pos in this.items)
            objString += `${this.items[pos]} `
            return objString
        } return ""
    }
}

const queue = new Queue()
queue.enqueue(5)
queue.enqueue(6)
queue.enqueue(7)
//queue.dequeue()
console.log(queue.toString())