import { defaultEquals } from "./equals.js"
import  { Node }  from "./node.js"
export class LinkedList {
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
    insert(element, index){
        if (index >= 0 && index <= this.count){
            const node = new Node(element)
            if (index === 0){ // add na primeira posição
                const current = this.head
                node.next = current
                this.head = node
            } else {
                const previous = this.getElementAt(index - 1)
                const current = previous.next
                node.next = current
                previous.next = node
            }
            this.count++
            return true
        }
        return false
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
       const index = this.indexOf(element)
       return this.removeAt(index)
        

    }
    indexOf(element){
        let current = this.head
        for (let i = 0; i < this.count && current != null; i++){
            if (this.equalsFn(element, current.element)){
                return i
            }
            current = current.next
        }
        return -1
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
    getHead(){
        return this.head
    }
    toString(){
        if (this.head == null){
            return ""
        }
        let objString = `${this.head.element}`
        let current = this.head.next
        for (let i = 1; i < this.size() && current != null; i++){
            objString = `${objString}, ${current.element}`
            current = current.next
        }
        return objString
    }
}
/*
const list = new LinkedList()
list.push(7)
list.push(8)
list.push(10)
list.push(80)
list.insert(789,2)
list.push(3)
console.log(list.toString())/*

*/