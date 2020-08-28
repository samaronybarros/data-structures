import * as chai from 'chai'
import { LinkedList } from '../core/linked-list'

const expect = chai.expect

describe('Linked List', () => {
  describe('Add to Last', () => {
    it('Should add to the last', () => {
      const list = new LinkedList()

      list.addToLast(1)
      list.addToLast(2)

      expect(list.search(1)).to.equal(0)
      expect(list.search(2)).to.equal(1)
      expect(list.getLength()).to.equal(2)
    })
  })

  describe('Add to Head', () => {
    it('Should add to the head', () => {
      const list = new LinkedList()

      list.addToHead(1)
      list.addToHead(2)

      expect(list.search(1)).to.equal(1)
      expect(list.search(2)).to.equal(0)
      expect(list.getLength()).to.equal(2)
    })
  })

  describe('add Element At Position', () => {
    it('Should add element', () => {
      const list = new LinkedList()

      list.fromArray([1, 2, 4, 5, 6, 7])
      list.addElementAtPosition(3, 2)

      expect(list.search(3)).to.equal(2)
      expect(list.getLength()).to.equal(7)
    })

    it('Should not add element when position is greater than list length', () => {
      const list = new LinkedList()

      list.fromArray([1, 2])
      list.addElementAtPosition(3, 8)

      expect(list.search(3)).to.equal(-1)
      expect(list.getLength()).to.equal(2)
    })
  })

  describe('remove From Last', () => {
    it('Should remove last element', () => {
      const list = new LinkedList()

      list.fromArray([1, 2, 3, 4, 5, 6, 7])
      list.removeFromLast()

      expect(list.search(7)).to.equal(-1)
      expect(list.getLength()).to.equal(6)
    })

    it('Should remove the only element', () => {
      const list = new LinkedList()

      list.addToHead(1)
      list.removeFromLast()

      expect(list.search(1)).to.equal(-1)
      expect(list.getLength()).to.equal(0)
    })

    it('Should not remove when the list is null', () => {
      const list = new LinkedList()

      list.removeFromLast()

      expect(list.getLength()).to.equal(0)
    })
  })

  describe('remove From Head', () => {
    it('Should remove first element', () => {
      const list = new LinkedList()

      list.fromArray([1, 2, 3, 4, 5, 6, 7])
      list.removeFromHead()

      expect(list.search(1)).to.equal(-1)
      expect(list.getLength()).to.equal(6)
    })

    it('Should remove the only element', () => {
      const list = new LinkedList()

      list.addToHead(1)
      list.removeFromHead()

      expect(list.search(1)).to.equal(-1)
      expect(list.getLength()).to.equal(0)
    })

    it('Should not remove when the list is null', () => {
      const list = new LinkedList()

      list.removeFromHead()

      expect(list.getLength()).to.equal(0)
    })
  })

  describe('remove First Element Found on the List', () => {
    it('Should remove First Element Found on the List', () => {
      const list = new LinkedList()

      list.fromArray([1, 2, 3, 4, 5, 6, 7])
      list.removeFirstElementFoundFromList(3)

      expect(list.search(3)).to.equal(-1)
      expect(list.getLength()).to.equal(6)
    })

    it('Should remove First Element Found on the List but not the second', () => {
      const list = new LinkedList()

      list.fromArray([1, 2, 3, 3, 4, 5, 6, 7])
      list.removeFirstElementFoundFromList(3)

      expect(list.search(3)).to.equal(2)
      expect(list.getLength()).to.equal(7)
    })

    it('Should remove First Element Found on the List when it is the first', () => {
      const list = new LinkedList()

      list.fromArray([1, 2, 3, 4, 5, 6, 7])
      list.removeFirstElementFoundFromList(1)

      expect(list.search(1)).to.equal(-1)
      expect(list.getLength()).to.equal(6)
    })

    it('Should remove First Element Found on the List when it is the last', () => {
      const list = new LinkedList()

      list.fromArray([1, 2, 3, 4, 5, 6, 7])
      list.removeFirstElementFoundFromList(7)

      expect(list.search(7)).to.equal(-1)
      expect(list.getLength()).to.equal(6)
    })
  })

  describe('remove All Elements Found on the List', () => {
    it('Should remove All Element Found on the List', () => {
      const list = new LinkedList()

      list.fromArray([1, 2, 3, 4, 5, 3, 6, 3, 7])
      list.removeAllElementsFromList(3)

      expect(list.search(3)).to.equal(-1)
      expect(list.getLength()).to.equal(6)
    })

    it('Should remove First Element Found on the List when it is the first', () => {
      const list = new LinkedList()

      list.fromArray([1, 2, 3, 4, 5, 6, 7])
      list.removeAllElementsFromList(1)

      expect(list.search(1)).to.equal(-1)
      expect(list.getLength()).to.equal(6)
    })

    it('Should remove First Element Found on the List when it is the last', () => {
      const list = new LinkedList()

      list.fromArray([1, 2, 3, 4, 5, 6, 7])
      list.removeAllElementsFromList(7)

      expect(list.search(7)).to.equal(-1)
      expect(list.getLength()).to.equal(6)
    })
  })

  describe('reverse', () => {
    it('Should reverse the list', () => {
      const list = new LinkedList()

      list.fromArray([1, 2, 3, 4, 5, 6, 7])
      list.reverse()

      expect(list.search(1)).to.equal(6)
      expect(list.search(2)).to.equal(5)
      expect(list.search(3)).to.equal(4)
      expect(list.search(4)).to.equal(3)
      expect(list.search(5)).to.equal(2)
      expect(list.search(6)).to.equal(1)
      expect(list.search(7)).to.equal(0)
      expect(list.getLength()).to.equal(7)
    })

    it('Should not reverse a list with one element', () => {
      const list = new LinkedList()

      list.addToHead(1)
      list.reverse()

      expect(list.search(1)).to.equal(0)
      expect(list.getLength()).to.equal(1)
    })

    it('Should not reverse a null list', () => {
      const list = new LinkedList()

      list.reverse()

      expect(list.getLength()).to.equal(0)
    })
  })

  describe('Empty', () => {
    it('Should return false when list is not empty', () => {
      const list = new LinkedList()

      list.fromArray([1, 2, 3, 4, 5, 6, 7])

      expect(list.isEmpty()).to.be.false
    })

    it('Should return true when list is empty', () => {
      const list = new LinkedList()

      expect(list.isEmpty()).to.be.true
    })
  })
})
