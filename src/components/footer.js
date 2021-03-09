import React, { Component } from 'react'
import { inject, observer } from 'mobx-react';

@inject('apples')
@observer
class Footer extends Component {
  render() {
    const { pick } = this.props.apples
    return (
      <div>
        <button onClick={pick} >摘苹果</button>
      </div>
    )
  }
}

export default Footer