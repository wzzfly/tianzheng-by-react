var React = require('react');

class VipInfo extends React.Component{
  constructor(props) {
    super(props);
    this.state = {isToggleOn: true};

    // This binding is necessary to make `this` work in the callback
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState(prevState => ({
      isToggleOn: !prevState.isToggleOn
    }));
  }
  handleClickLink(e) {
    e.preventDefault();
    alert('你还真点啊？！');
  }
  render() {
    return (
      <div className="vipInfo">
        <a href="#" onClick={this.handleClickLink}>
          你点我啊
        </a>
        <button onClick={this.handleClick}>
          {this.state.isToggleOn ? 'ON' : 'OFF'}
        </button>
      </div>
    );
  }
};
module.exports = VipInfo;