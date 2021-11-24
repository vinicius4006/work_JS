import {defaultEquals} from "../Linked-List/equals.js"
import { Node } from "../Linked-List/node.js"
import {LinkedList} from "../Linked-List/LinkedList.js"
class CircularLinkedList extends LinkedList{
    constructor(equalsFn = defaultEquals){
        super(equalsFn)
    }

    insert(element, index){
        if(index >= 0 && index <= this.count){
            const node = new Node(element)
            let current = this.head
            if(index === 0){
                if (this.head == null){
                    this.head = node
                    node.next = this.head
                } else {
                    node.next = current
                    current = this.getElementAt(this.size())
                    // atualiza o último elemento
                    this.head = node
                    current.next = this.head
                }
            } else { // sem alterações neste cenário
                const previous = this.getElementAt(index - 1)
                node.next = previous.next
                previous.next = node
            }
            this.count++
            return true
        }
        return false
    }
    removeAt(index){
            if (index >= 0 && index < this.count){
                let current = this.head
                if (index === 0){
                    if (this.size() === 1){
                        this.head = undefined
                    } else {
                        const removed = this.head
                        current = this.getElementAt(this.size()) // novo
                        this.head = this.head.next
                        current.next = this.head
                        current = removed
                    }
                } else {
                    // não há necessidade de atualizar o último elemento
                    // da lista circular
                    const previous = this.getElementAt(index - 1)
                    current = previous.next
                    previous.next = current.next
                }
                this.count--
                return current.element
            }
            return undefined
    }
}
const list = new CircularLinkedList()
list.insert(1,0)
list.insert(2,1)
console.log(list)