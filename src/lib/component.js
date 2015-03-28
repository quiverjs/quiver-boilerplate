import { simpleHandler } from 'quiver/component'

export const main = simpleHandler(
  args => 'Hello World',
  'void', 'text')