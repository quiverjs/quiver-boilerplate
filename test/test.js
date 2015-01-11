import 'quiver-core/traceur'

import { main } from '../lib/component'
import { async } from 'quiver-core/promise'

import chai from 'chai'
import chaiAsPromised from 'chai-as-promised'

chai.use(chaiAsPromised)
var should = chai.should()

describe('unit tests', () => {
  it('basic test', async(function*() {
    var handler = yield main.loadHandler({})

    yield handler({}).should.eventually.equal('Hello World')
  }))
})