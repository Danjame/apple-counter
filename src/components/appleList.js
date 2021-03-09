import React, { Component } from 'react';
import { inject, observer } from 'mobx-react';

@inject('apples')
@observer
class AppleList extends Component {
  render() {
    const { currentApples, eat } = this.props.apples
    return (
      <ul className="appleList">
        {currentApples.map((apple, index) => (
          <li className="appleList-item" key={index}>
            <span>红苹果{apple.id}号{apple.weight}克</span>
            <button className="appleList-item-btn" onClick={() => eat(index)}>吃掉</button>
          </li>
        )
        )}
      </ul>
    )
  }
}

export default AppleList