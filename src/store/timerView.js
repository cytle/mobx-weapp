import { action, observable } from 'mobx'

const appState = observable({
  timer: 1,
  resetTimer() {
    this.timer = 0
  }
})

setInterval(action(function() {
  appState.timer += 1
}), 1000)

export default appState
