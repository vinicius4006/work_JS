import { defaultEquals } from "./equals.js"
import  { Node }  from "./node.js"
export default class LinkedList {
    constructor(equalsFn = defaultEquals){
        this.count = 0
        this.head = undefined
        this.equalsFn = equalsFn
    }
    push(element){
        const node = new Node(element)
        let current
        if (this.head == null){
            this.head = node
        } else {
            current = this.head
            while (current.next != null){
                current = current.next
            }
            current.next = node
        }
        this.count++
    }
    insert(element, position){

    }
    getElementAt(index){
        if (index >= 0 && index <= this.count){
            let node = this.head
            for (let i = 0; i < index && node != null;i++){
                node = node.next
            } 
            return node
        }
        return undefined
    }
    remove(element){

    }
    indexOf(element){

    }
    removeAt(index){
        if (index >= 0 && index < this.count){
            let current = this.head
            if (index === 0){
                this.head = current.next
            } else{
                const previous = this.getElementAt(index - 1)
                    current = previous.next
                    previous.next = current.next
            }
            this.count--
        }
        return undefined
    }
    isEmpty(){
        return this.count === 0
    }
    size(){
        return this.count
    }
    toString(){

    }
}
const list = new LinkedList()
list.push(7)
list.push(8)
list.push(10)
list.push(80)
list.removeAt(0)
console.log(list.head)