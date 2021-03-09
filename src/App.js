// import './App.css';
import AppleList from './components/appleList'
import { inject, observer } from 'mobx-react';

@inject('apples')
@observer
class App extends Component {
  render() {
      return (
        <div className="App">
          <div>
            <div>苹果篮子</div>
            <div>
              <span>当前1</span>
              <span>吃掉2</span>
            </div>
          </div>
          <AppleList />
        </div>
      )
  }
}

export default App;