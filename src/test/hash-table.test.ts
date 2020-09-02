import * as chai from 'chai'
import { HashTable } from '../core/hash-table'

const expect = chai.expect

describe('Hash Table', () => {
  describe('Insert', () => {
    it('Should add a pair to the table', () => {
      const table = new HashTable()

      table.insert('hash', 'table')

      expect(table.search('hash')).to.equal('table')
    })

    it('Should insert two pairs in different positions', () => {
      const table = new HashTable()

      table.insert('hash1', 'table1')
      table.insert('hash2', 'table2')

      expect(table.search('hash1')).to.equal('table1')
      expect(table.search('hash2')).to.equal('table2')
    })

    it('Should insert two pairs in same position', () => {
      const table = new HashTable()

      table.insert('hash1', 'table1')
      table.insert('hash1', 'table2')

      expect(table.search('hash1')).to.equal('table1')
    })
  })

  describe('Seach', () => {
    it('Should return the value', () => {
      const table = new HashTable()

      table.insert('hash', 'table')

      expect(table.search('hash')).to.equal('table')
    })

    it('Should return null for empty hash table', () => {
      const table = new HashTable()

      expect(table.search('hash')).to.be.null
    })
  })

  describe('Delete', () => {
    it('Should delete pair', () => {
      const table = new HashTable()

      table.insert('hash', 'table')
      table.delete('hash')

      expect(table.search('hash')).to.be.undefined
    })

    it('Should delete just the first element', () => {
      const table = new HashTable()

      table.insert('hash1', 'table1')
      table.insert('hash1', 'table2')
      table.delete('hash1')

      expect(table.search('hash1')).to.equal('table2')
    })

    it('Should return null for empty hash table', () => {
      const table = new HashTable()

      expect(table.search('hash')).to.be.null
    })
  })
})
