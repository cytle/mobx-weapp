import { action, observable } from 'mobx'

const appState = observable({
  timer: 1,
  sad: 10
})

setInterval(action(function tick() {
  appState.timer += 1
}), 1000)

appState.clear = action(function tick() {
  appState.timer = 0
})
appState.as = action(function tick() {
  appState.sad *= 10
})

export default appState
