import { extendObservable, action } from 'mobx'

let  uid = 0
function Todos () {
  extendObservable(this, {
    items: [],
    add: action(function(content) {
      this.items.push({
        startAt: Date.now(),
        isFinish: false,
        uid: uid++,
        content,
        toggle: action(function() {
          this.isFinish = !this.isFinish
        })
      })
    })
  })
  this.add('asd')
}

export default new Todos()

//
//
// import { extendObservable, action } from 'mobx'
// import Todo from './item'
//
// export default function todos () {
//   extendObservable(this, {
//     items: [],
//     add: action(function(content) {
//       this.items.push(new Todo(content))
//     })
//   })
// }
