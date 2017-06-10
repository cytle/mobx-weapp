import React from 'react'
import { observer } from 'mobx-react'
import itemr from 'store/timerView'

class TimerView extends React.Component {
  render() {
    return (
      <button onClick={this.onReset.bind(this)}>
        Seconds passed: {itemr.timer}
      </button>
    )
  }

  onReset() {
    itemr.resetTimer()
  }
}

export default observer(TimerView)
