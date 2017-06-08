import { extendObservable, action } from 'mobx'

let uuid = 0

export default function todo (content) {
  extendObservable(this, {
    start: Date.now(),
    current: Date.now(),
    id: uuid++,
    content,
    get elapsedTime() {
      return (this.current - this.start) + 'seconds'
    },
    tick: action(function() {
      this.current = Date.now()
    })
  })
}
