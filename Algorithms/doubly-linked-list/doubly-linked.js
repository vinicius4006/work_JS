import { defaultEquals } from "../Linked-List/equals.js"
import { LinkedList } from "../Linked-List/LinkedList.js"
import { Node } from "../Linked-List/node.js"
class DoublyNode extends Node {
    constructor(element, next, prev){
        super(element, next)
        this.prev = prev
    }
}
class DoublyLinkedList extends LinkedList {
    constructor(equalsFn = defaultEquals){
        super(equalsFn)
        this.tail = undefined
    }

    insert(element, index){
        if(index >= 0 && index <= this.count){
            const node = new DoublyNode(element)
            let current = this.head
            if ( index === 0){
                if (this.head == null){
                    this.head = node
                    this.tail = node
                } else {
                    node.next = this.head
                    current.prev = node
                    this.head = node
                }
            } else if(index === this.count){
                current = this.tail
                current.next = node
                node.prev = current
                this.tail = node

            }else {
                const previous = this.getElementAt(index - 1)
                current = previous.next
                node.next = current
                previous.next = node
                current.prev = node
                node.prev = previous
            }
            this.count++
            return true
        }
        return false
    }
    removeAt(index){
        if(index >= 0 && index <= this.count){
            let current = this.head
            if (index === 0){
                this.head = current.next
                //se houver apenas um item, atualizamos tail também
                if (this.count === 1){
                    this.tail = undefined
                } else {
                    this.head.prev = undefined
                }
            }else if (index === this.count - 1){
                current = this.tail
                this.tail = current.prev
                this.tail.next = undefined
            } else {
                current = this.getElementAt(index)
                const previous = current.prev
                //faz a ligação de previous com o next de current -
                //pula esse elemento para removê-lo
                previous.next = current.next
                current.next.prev = previous
            }
            this.count--
            return current.element
        }
        return undefined
    }
}
const b = new DoublyLinkedList()
b.insert(1,0)
b.insert(2,1)
console.log(b.size())