import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import App from './App';
import registerServiceWorker from './registerServiceWorker';

const title = React.createElement('h1', {}, 'My First React Code');

const list = React.createElement('div', {}, [
  title,
  React.createElement('p', {}, [
    'This react app is a test designed to teach me the fundamentals of how to add and removed elements within the virtual DOM',
    React.createElement('h2', {}, 'My Favorite Flavors')
  ]),
  React.createElement('ul', {}, [
    React.createElement('li', { className: 'gray' }, 'Vanilla'),
    React.createElement('li', { className: 'brown' }, 'Chocolate'),
    React.createElement('li', { className: 'red' }, 'Strawberry')
  ])
]);
const container = React.createElement('div', {}, list);

ReactDOM.render(container, document.getElementById('root'));

registerServiceWorker();
