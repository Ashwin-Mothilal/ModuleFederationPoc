var React = require("react");
var ReactDOM = require("react-dom");
var Host = require("./Host").default;

var App = React.createClass({
  render: function () {
    return <Host/>
  }
});

ReactDOM.render(<App />, document.getElementById('root'));

export default App;
