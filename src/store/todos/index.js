import { extendObservable, action } from 'mobx'

export default function todos () {
  extendObservable(this, {
    start: Date.now(),
    current: Date.now(),
    get elapsedTime() {
      return (this.current - this.start) + 'seconds'
    },
    tick: action(function() {
      this.current = Date.now()
    })
  })
}
