var React = require ('react');
var ReactDom = require ('react-dom');

ReactDom.render(
  <div>
<h1>Hello world!</h1>
 <p>This is a paragraph</p>
  </div>


,document.getElementById('root'));

var h1 = document.createElement('h1');
h1.innerHTML = "hello world";
document.getElementById("root").appendChild(h1);
