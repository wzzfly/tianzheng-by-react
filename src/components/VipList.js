var React = require('react');
var VipItem = require('./VipItem.js');

class VipList extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      numbers: [
        {text:'热血长安1',playTotal:'1亿次',movieImg:'http://r1.ykimg.com/0510000058AF09BEADC0AE05530BA92C'},
        {text:'热血长安2',playTotal:'2亿次',movieImg:'http://r1.ykimg.com/0510000058AF09BEADC0AE05530BA92C'},
        {text:'热血长安3',playTotal:'3亿次',movieImg:'http://r1.ykimg.com/0510000058AF09BEADC0AE05530BA92C'}
      ],
      title:'大家都在看'
    };
  }
  render() {
    const numbers = this.state.numbers;
    const listItems = numbers.map((number, index) =>
      <VipItem key = {index} value = {number} />
    );
    return (
      <div className="VipList">
        <h2 className="commentAuthor">
          {this.state.title}
        </h2>
        <ul>
          {listItems}
        </ul>       
      </div>
    );
  }
};

module.exports = VipList;
