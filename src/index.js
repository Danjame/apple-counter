import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import apples from './stores/apples';
import { Provider } from 'mobx-react';

ReactDOM.render(
  <Provider apples={ apples }><App /></Provider>,
  document.getElementById('root')
);