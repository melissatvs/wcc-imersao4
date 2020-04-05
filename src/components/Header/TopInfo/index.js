import React, { Component } from "react";
import { FiUser, FiHeart } from "react-icons/fi";
import { connect } from "react-redux";
import { Link } from 'react-router-dom'

class TopInfo extends Component {
  
  render() {
    const { contador, user } = this.props
    
    return (
      <div className="top-info">
        <span>
          <FiHeart />
          <b>{contador}</b>
        </span>        
        <span>
          <Link to="/profile">
            <FiUser />
            {user}
          </Link>
        </span>        
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    contador: state.user.likes,
    user: state.user.name
  };
}

export default connect(mapStateToProps)(TopInfo)