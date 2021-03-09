import React, { Component } from 'react';
import { inject, observer } from 'mobx-react';

@inject('apples')
@observer
class AppleList extends Component {
  render() {
    const { currentApples, eat } = this.props.apples
    return (
      <ul>
        {currentApples.map((apple, index) => (
          <li key={index}>
            <span>红苹果{apple.id}号{apple.weight}克</span>
            <button onClick={() => eat(index)}>吃掉</button>
          </li>
        )
        )}
      </ul>
    )
  }
}

export default AppleList