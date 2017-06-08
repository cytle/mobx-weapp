import { extendObservable, action } from 'mobx'
import Todo from './item'

export default function todos () {
  extendObservable(this, {
    items: [],
    add: action(function(content) {
      this.items.push(new Todo(content))
    })
  })
}
