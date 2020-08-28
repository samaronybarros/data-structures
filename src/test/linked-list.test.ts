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
    })
  })
})
