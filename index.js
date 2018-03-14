import React from 'react';
import ReactDOM from 'react-dom';
import Question from './components/Question';
import './index.scss';

const App = () => (
  <div className="app">
    <Question />
  </div>
);

ReactDOM.render(<App />, document.getElementById('root'));

// Hot Module Replacement
if (module.hot) {
  module.hot.accept();
}
