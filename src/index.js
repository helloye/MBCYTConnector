import React from 'react';
import ReactDOM from 'react-dom';
import App from './MBCytconnector';
import './index.css';

ReactDOM.render(
  <App start={0} count={4}/>,
  document.getElementById('ytconnector')
);

ReactDOM.render(
  <App start={4} count={16}/>,
  document.getElementById('ytconnector-media')
);