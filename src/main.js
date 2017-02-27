let React = require('react');
let ReactDOM = require('react-dom');
let Welcome = require('./components/Welcome.js');
let AppComponent = require('./components/index.js');


ReactDOM.render(
   <AppComponent />,
   document.getElementById('app')
);