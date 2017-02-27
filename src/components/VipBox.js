
var React = require('react');
var VipList = require('./VipList.js');
var VipInfo = require('./VipInfo.js');
class VipBox extends React.Component{
	constructor(props) {
	    super(props);
	    this.state = {
	    	data: [
			  {author: "Pete 111", text: "This is one Vip"},
			  {author: "Jordan Walke", text: "This is *another* Vip"}
			],
			date: new Date(),
			timer: null
		};
	}
	componentDidMount() {
		this.timer = setInterval(
		  () => this.tick(),
		  1000
		);
	}

	componentWillUnmount() {
		clearInterval(this.timer);
	}

	tick() {
		this.setState({
		  date: new Date()
		});
	}
	render() {
		return (
		    <div className="VipBox">
		        <h1>Hello, world!</h1>
		        <VipInfo />
		        <VipList data={this.state.data} />
		        <h2>It is {this.state.date.toLocaleTimeString()}.</h2>
		    </div>
		);
	}
};
module.exports = VipBox;