import * as chai from 'chai'
import { DoublyLinkedList } from '../core/doubly-linked-list'

const expect = chai.expect

describe('Doubly Linked List', () => {
  describe('Insert to Tail', () => {
    it('Should Insert to the tail', () => {
      const list = new DoublyLinkedList()

      list.insertToTail(1)
      list.insertToTail(2)

      expect(list.search(1)).to.equal(0)
      expect(list.search(2)).to.equal(1)
      expect(list.getLength()).to.equal(2)
    })
  })

  describe('Insert to Head', () => {
    it('Should Insert to the head', () => {
      const list = new DoublyLinkedList()

      list.insertToHead(1)
      list.insertToHead(2)

      expect(list.search(1)).to.equal(1)
      expect(list.search(2)).to.equal(0)
      expect(list.getLength()).to.equal(2)
    })
  })

  describe('insert Element At Position', () => {
    it('Should insert element', () => {
      const list = new DoublyLinkedList()

      list.fromArray([1, 2, 4, 5, 6, 7])
      list.insertAtPosition(3, 2)

      expect(list.search(3)).to.equal(2)
      expect(list.getLength()).to.equal(7)
    })

    it('Should not insert element when position is greater than list length', () => {
      const list = new DoublyLinkedList()

      list.fromArray([1, 2])
      list.insertAtPosition(3, 8)

      expect(list.search(3)).to.equal(-1)
      expect(list.getLength()).to.equal(2)
    })
  })

  describe('delete From Tail', () => {
    it('Should delete element on tail', () => {
      const list = new DoublyLinkedList()

      list.fromArray([1, 2, 3, 4, 5, 6, 7])
      list.deleteFromTail()

      expect(list.search(7)).to.equal(-1)
      expect(list.getLength()).to.equal(6)
    })

    it('Should delete the only element', () => {
      const list = new DoublyLinkedList()

      list.insertToHead(1)
      list.deleteFromTail()

      expect(list.search(1)).to.equal(-1)
      expect(list.getLength()).to.equal(0)
    })

    it('Should not delete when the list is null', () => {
      const list = new DoublyLinkedList()

      list.deleteFromTail()

      expect(list.getLength()).to.equal(0)
    })
  })

  describe('delete From Head', () => {
    it('Should delete first element', () => {
      const list = new DoublyLinkedList()

      list.fromArray([1, 2, 3, 4, 5, 6, 7])
      list.deleteFromHead()

      expect(list.search(1)).to.equal(-1)
      expect(list.getLength()).to.equal(6)
    })

    it('Should delete the only element', () => {
      const list = new DoublyLinkedList()

      list.insertToHead(1)
      list.deleteFromHead()

      expect(list.search(1)).to.equal(-1)
      expect(list.getLength()).to.equal(0)
    })

    it('Should not delete when the list is null', () => {
      const list = new DoublyLinkedList()

      list.deleteFromHead()

      expect(list.getLength()).to.equal(0)
    })
  })

  describe('delete First Element Found on the List', () => {
    it('Should delete First Element Found on the List', () => {
      const list = new DoublyLinkedList()

      list.fromArray([1, 2, 3, 4, 5, 6, 7])
      list.deleteFirstFound(3)

      expect(list.search(3)).to.equal(-1)
      expect(list.getLength()).to.equal(6)
    })

    it('Should delete First Element Found on the List but not the second', () => {
      const list = new DoublyLinkedList()

      list.fromArray([1, 2, 3, 3, 4, 5, 6, 7])
      list.deleteFirstFound(3)

      expect(list.search(3)).to.equal(2)
      expect(list.getLength()).to.equal(7)
    })

    it('Should delete First Element Found on the List when it is the first', () => {
      const list = new DoublyLinkedList()

      list.fromArray([1, 2, 3, 4, 5, 6, 7])
      list.deleteFirstFound(1)

      expect(list.search(1)).to.equal(-1)
      expect(list.getLength()).to.equal(6)
    })

    it('Should delete First Element Found on the List when it is the last', () => {
      const list = new DoublyLinkedList()

      list.fromArray([1, 2, 3, 4, 5, 6, 7])
      list.deleteFirstFound(7)

      expect(list.search(7)).to.equal(-1)
      expect(list.getLength()).to.equal(6)
    })
  })

  describe('delete All Elements Found on the List', () => {
    it('Should delete All Element Found on the List', () => {
      const list = new DoublyLinkedList()

      list.fromArray([1, 2, 3, 4, 5, 3, 6, 3, 7])
      list.deleteAllFound(3)

      expect(list.search(3)).to.equal(-1)
      expect(list.getLength()).to.equal(6)
    })

    it('Should delete First Element Found on the List when it is the first', () => {
      const list = new DoublyLinkedList()

      list.fromArray([1, 2, 3, 4, 5, 6, 7])
      list.deleteAllFound(1)

      expect(list.search(1)).to.equal(-1)
      expect(list.getLength()).to.equal(6)
    })

    it('Should delete First Element Found on the List when it is the last', () => {
      const list = new DoublyLinkedList()

      list.fromArray([1, 2, 3, 4, 5, 6, 7])
      list.deleteAllFound(7)

      expect(list.search(7)).to.equal(-1)
      expect(list.getLength()).to.equal(6)
    })
  })

  describe('Empty', () => {
    it('Should return false when list is not empty', () => {
      const list = new DoublyLinkedList()

      list.fromArray([1, 2, 3, 4, 5, 6, 7])

      expect(list.isEmpty()).to.be.false
    })

    it('Should return true when list is empty', () => {
      const list = new DoublyLinkedList()

      expect(list.isEmpty()).to.be.true
    })
  })
})
