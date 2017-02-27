var React = require('react');
var VipBox = require('./VipBox.js');


class Content extends React.Component {
  render() {
    return (
	    <div className="vipBox">
	      <VipBox />
	    </div>
	);
  }
}
module.exports = Content;