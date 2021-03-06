import React, { Component } from 'react'
import { inject, observer } from 'mobx-react';

@inject('apples')
@observer
class Footer extends Component {
  render() {
    const { pick } = this.props.apples
    return (
      <div className="footer">
        <button className="footer-btn" onClick={ pick }>ćčšć</button>
      </div>
    )
  }
}

export default Footer