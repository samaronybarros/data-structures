function LinkedList() {
    this.length = 0
    this.head = null

    let Node = (element) => ({
        element,
        next: null
    })

    this.addToLast = (element) => {
        const node = Node(element)

        if(this.head === null) {
            this.head = node
        } else {
            let currentNode = this.head

            while (currentNode.next) {
                currentNode = currentNode.next
            }

            currentNode.next = node
        }

        this.length++
    }

    this.addToHead = (element) => {
        const node = Node(element)

        if(this.head === null) {
            this.head = node
        } else {
            node.next = this.head
            this.head = node
        }

        this.length++
    }

    this.addElementAtPosition = (element, position) => {
        if (position > this.length) {
            return
        }

        if (position === 0) {
            this.addToHead(element)
            return
        }

        const node = Node(element)
        let list = this.head

        while (position--) {
            previous = list
            list = list.next
        }

        node.next = list
        previous.next = node

        this.length++
    }

    this.removeFromLast = () => {
        if (this.head === null) {
            this.head = null
            this.length = 0
            return
        } else {
            let last = this.head

            while (last.next) {
                previous = last
                last = last.next
            }

            previous.next = null
        }

        this.length--
    }

    this.removeFromHead = () => {
        if (this.length <= 1) {
            this.head = null
            this.length = 0
            return
        } else {
            let node = this.head.next
            this.head = node
        }

        this.length--
    }

    this.removeFirstElementFromList = (element) => {
        if (this.head === null) {
            this.head = null
            this.length = 0
            return
        } else {
            let list = this.head
            let previous = null

            if (list && list.element === element) {
                this.head = list.next
                this.length--
                return
            }

            while (list.next) {
                let currentNode = list
                if (currentNode && currentNode.element !== element) {
                    previous = currentNode
                }

                if (currentNode && currentNode.element === element) {
                    previous.next = currentNode.next
                    break
                }

                list = list.next
            }
        }

        this.length--
    }

    this.removeAllElementsFromList = (element) => {
        if (this.head === null) {
            this.head = null
            this.length = 0
            return
        } else {
            while (this.head && this.head.element === element) {
                this.head = this.head.next
                this.length--
            }

            let list = this.head
            let previous = null

            while (list && list.next) {
                if (list && list.element !== element) {
                    previous = list
                }

                if (previous && list && list.element === element) {
                    previous.next = list.next
                    this.length--
                }

                list = list.next
            }
        }
    }

    this.search = (element) => {
        let list = this.head
        if (list !== null) {
            let position = 0
            while(list) {
                if (list.element === element) {
                    return position
                }
                position++
                list = list.next
            }
        }
        return -1
    }

    this.reverse = () => {
        if (this.head === null) {
            return 
        }

        let list = this.head
        let backupNode = null
        let previousNode = null
        
        while (list) {
            backupNode = list.next
            list.next = previousNode
            previousNode = list
            list = backupNode
        }

        this.head = previousNode
    }

    this.sort = () => {

    }

    this.print = () => {
        let list = this.head
        
        process.stdout.write(`[${this.length}]  `)

        while(list) {
            process.stdout.write(`${list.element}  `)
            list = list.next
        }

        process.stdout.write(`\n`)
    }
}

const ll = new LinkedList()

ll.addToLast(2)
ll.addToLast(3)
ll.addToLast(4)
ll.addToLast(5)

ll.addToHead(1)
ll.addToHead(3)

// ll.removeFromLast()
// ll.removeFromLast()

// ll.removeFromHead()
// ll.removeFromHead()

ll.print()

// ll.removeAllElementsFromList(3)
// ll.addElementAtPosition(6,0)
// ll.reverse()
ll.search(11)
ll.search(1)
ll.search(3)
ll.search(5)

ll.print()