var React = require('react');

class VipItem extends React.Component{

  render() {
    var movieList = this.props.value;
    return (
      <li >
            <a href="#" className="img">
            <img src={movieList.movieImg}/>
            </a>
            <div className="movieInfo">     
                <h3> {movieList.text}</h3>
                <p className="playTotal"> {movieList.playTotal}</p>
            </div>
      </li>
          
    );
  }
};
module.exports = VipItem;