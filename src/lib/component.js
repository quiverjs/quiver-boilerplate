import { simpleHandler } from 'quiver-core/component'

export const main = simpleHandler(
  args => 'Hello World',
  'void', 'text')