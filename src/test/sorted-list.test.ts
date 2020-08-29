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
})
