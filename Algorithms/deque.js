class Deque{
    constructor(){
        this.items = {}
        this.count = 0
        this.lowestCount = 0
    }
    addFront(element){
        if (this.isEmpty()){
            this.addBack(element)
        } else if(this.lowestCount > 0){
            this.lowestCount--
            this.items[this.lowestCount] = element
        } else {
        for (let i = this.count; i > 0; i--)
            this.items[i] = this.items[i - 1] 
        }
        this.count++
        this.lowestCount = 0
        this.items[0] = element
    }
    addBack(element){
        this.items[this.count] = element
        this.count++
    }
    removeFront(){
        if(!this.isEmpty()){
            let first = this.items[this.lowestCount]
            delete this.items[this.lowestCount]
            this.lowestCount++
            return first
        }   
        return false
    }

    removeBack(){
        if(!this.isEmpty()){
            let last = this.items[this.count - this.lowestCount]
            delete this.items[this.count - this.lowestCount]
            this.count--
            return last
        
        }
        return false
    }
    peekFront(){
        return this.items[this.lowestCount]
    }
    peekBack(){
        return this.items[this.count - 1]
    }
    size(){
        return this.count - this.lowestCount
    }
    isEmpty(){
        return this.size() === 0
    }
    toString(){
        if(!this.isEmpty()){
            let objString = `${this.items[this.lowestCount]}`
            for (let i = this.lowestCount + 1; i < this.size(); i++)
                objString = `${objString}, ${this.items[i]}`
                return objString
        }
    }
}

const deque = new Deque()
deque.addBack(5)
deque.addBack(6)
deque.addBack(10)
deque.addFront(15)
deque.addFront(3)

console.log(deque.items)
console.log(deque.toString())