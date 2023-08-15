import React from 'react';
import ReactDOM from 'react-dom';
import '@hotwired/turbo-rails';
import './controllers';
import App from './components/App';

const rootElement = document.getElementById('root');
const root = ReactDOM.createRoot(rootElement);

root.render(
  <App />,
);
