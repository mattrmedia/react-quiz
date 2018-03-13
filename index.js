import React from 'react';
import ReactDOM from 'react-dom';
import Question from './components/Question';
import './index.css';

const App = () => (
  <div className="App">
    <Question />
  </div>
);

ReactDOM.render(<App />, document.getElementById('root'));

// Hot Module Replacement
if (module.hot) {
  module.hot.accept();
}
