import * as chai from 'chai'
import { SortedList } from '../core/sorted-list'

const expect = chai.expect

describe('Sorted List', () => {
  describe('Add', () => {
    it('Should add to the list sorted', () => {
      const list = new SortedList()

      const arr = [4, 7, 5, 1, 6, 8, 2, 3]

      arr.forEach((el) => list.add(el))

      expect(list.search(1)).to.equal(0)
      expect(list.search(2)).to.equal(1)
      expect(list.search(3)).to.equal(2)
      expect(list.search(4)).to.equal(3)
      expect(list.search(5)).to.equal(4)
      expect(list.search(6)).to.equal(5)
      expect(list.search(7)).to.equal(6)
      expect(list.search(8)).to.equal(7)
      expect(list.getLength()).to.equal(8)
    })
  })

  describe('Remove From Last', () => {
    it('Should remove last element', () => {
      const list = new SortedList()

      list.fromArray([4, 7, 5, 1, 6, 8, 2, 3])
      list.removeFromLast()

      expect(list.search(1)).to.equal(0)
      expect(list.search(2)).to.equal(1)
      expect(list.search(3)).to.equal(2)
      expect(list.search(4)).to.equal(3)
      expect(list.search(5)).to.equal(4)
      expect(list.search(6)).to.equal(5)
      expect(list.search(7)).to.equal(6)
      expect(list.search(8)).to.equal(-1)
      expect(list.getLength()).to.equal(7)
    })

    it('Should not remove when list is null', () => {
      const list = new SortedList()

      list.removeFromLast()

      expect(list.getLength()).to.equal(0)
    })
  })

  describe('Remove From head', () => {
    it('Should remove first element', () => {
      const list = new SortedList()

      list.fromArray([4, 7, 5, 1, 6, 8, 2, 3])
      list.removeFromHead()

      expect(list.search(1)).to.equal(-1)
      expect(list.search(2)).to.equal(0)
      expect(list.search(3)).to.equal(1)
      expect(list.search(4)).to.equal(2)
      expect(list.search(5)).to.equal(3)
      expect(list.search(6)).to.equal(4)
      expect(list.search(7)).to.equal(5)
      expect(list.search(8)).to.equal(6)
      expect(list.getLength()).to.equal(7)
    })

    it('Should not remove when list is null', () => {
      const list = new SortedList()

      list.removeFromHead()

      expect(list.getLength()).to.equal(0)
    })
  })

  describe('Remove First Element Found From List', () => {
    it('Should remove element', () => {
      const list = new SortedList()

      list.fromArray([4, 7, 5, 1, 6, 8, 2, 3])
      list.removeFirstElementFoundFromList(4)

      expect(list.search(1)).to.equal(0)
      expect(list.search(2)).to.equal(1)
      expect(list.search(3)).to.equal(2)
      expect(list.search(4)).to.equal(-1)
      expect(list.search(5)).to.equal(3)
      expect(list.search(6)).to.equal(4)
      expect(list.search(7)).to.equal(5)
      expect(list.search(8)).to.equal(6)
      expect(list.getLength()).to.equal(7)
    })

    it('Should remove just the first element found', () => {
      const list = new SortedList()

      list.fromArray([4, 7, 5, 1, 6, 4, 8, 2, 3])
      list.removeFirstElementFoundFromList(4)

      expect(list.search(1)).to.equal(0)
      expect(list.search(2)).to.equal(1)
      expect(list.search(3)).to.equal(2)
      expect(list.search(4)).to.equal(3)
      expect(list.search(5)).to.equal(4)
      expect(list.search(6)).to.equal(5)
      expect(list.search(7)).to.equal(6)
      expect(list.search(8)).to.equal(7)
      expect(list.getLength()).to.equal(8)
    })

    it('Should not remove when list is null', () => {
      const list = new SortedList()

      list.removeFirstElementFoundFromList(4)

      expect(list.getLength()).to.equal(0)
    })
  })

  describe('remove All Elements From List', () => {
    it('Should remove all elements', () => {
      const list = new SortedList()

      list.fromArray([4, 7, 5, 1, 6, 8, 2, 3])
      list.removeAllElementsFromList(4)

      expect(list.search(1)).to.equal(0)
      expect(list.search(2)).to.equal(1)
      expect(list.search(3)).to.equal(2)
      expect(list.search(4)).to.equal(-1)
      expect(list.search(5)).to.equal(3)
      expect(list.search(6)).to.equal(4)
      expect(list.search(7)).to.equal(5)
      expect(list.search(8)).to.equal(6)
      expect(list.getLength()).to.equal(7)
    })

    it('Should remove all element found', () => {
      const list = new SortedList()

      list.fromArray([4, 7, 5, 1, 6, 4, 8, 2, 3])
      list.removeAllElementsFromList(4)

      expect(list.search(1)).to.equal(0)
      expect(list.search(2)).to.equal(1)
      expect(list.search(3)).to.equal(2)
      expect(list.search(4)).to.equal(-1)
      expect(list.search(5)).to.equal(3)
      expect(list.search(6)).to.equal(4)
      expect(list.search(7)).to.equal(5)
      expect(list.search(8)).to.equal(6)
      expect(list.getLength()).to.equal(7)
    })

    it('Should not remove when list is null', () => {
      const list = new SortedList()

      list.removeAllElementsFromList(4)

      expect(list.getLength()).to.equal(0)
    })
  })
})
