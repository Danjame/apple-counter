import React, { Component } from 'react'
import { inject, observer } from 'mobx-react';

@inject('apples')
@observer
class Header extends Component {
  render() {
    const { currentNum, currentWeight, eatenApples } = this.props.apples
    return (
        <div className="header">
          <div className="header-title">苹果篮子</div>
          <div className="header-resume">
            <div className="header-resume-current">
              <span>当前</span>
              <span>{currentNum}个，{currentWeight}克</span>
            </div>
            <div className="header-resume-eaten">
            <span>吃掉</span>
            <span>{eatenApples.num}个，{eatenApples.weight}克</span>
            </div>
          </div>
        </div>
    )
  }
}

export default Header