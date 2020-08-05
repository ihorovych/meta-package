import {assert} from 'chai'

import proxyquire from 'proxyquire';
import { stub, resetHistory, assert as sinonAssert } from 'sinon';

describe('get items', () => {
  const axios = {get: stub()}
  const getItems = proxyquire('../src/getItems', {
    axios: axios,
  }).default

  const param = '1234'
  const items = [1,2,3,4]

  let result

  context('items exists', () => {
    before(async () => {
      axios.get.resolves(items)
      result = await getItems(param)
    })

    after(resetHistory)

    it('called axios get', () => {
      sinonAssert.calledWith(axios.get, '/items?filter=1234')
    })

    it('returned array of items', () => {
      assert.equal(result, items)
    })
  })

  context('items not exists', () => {
    before(async () => {
      axios.get.resolves([])
      result = await getItems(param)
    })

    after(resetHistory)

    it('called axios get', () => {
      sinonAssert.calledWith(axios.get, '/items?filter=1234')
    })

    it('returned empty array', () => {
      assert.deepEqual(result, [])
    })
  })



})