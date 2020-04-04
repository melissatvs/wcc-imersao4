import React, { Component } from "react";
import { FiHeart } from 'react-icons/fi';
import { connect } from "react-redux";
import axios from "axios";

class TimeLine extends Component {
  
  curtir = async () => {
    
    this.props.user.likes++
    
    await axios.put("http://localhost:3000/user/", this.props.user)
    .then(resposta => {
      this.props.dispatch({
        type: "PUT_USER",
        payload: resposta.data
      })
    })
  }
  
  render() {
    return (
      <div className="post">
        <header>
          <img src="https://randomuser.me/api/portraits/women/17.jpg" alt="user" />
          <div className="post-user">
          <strong>Menina da Lua</strong>
          <span>Super Lua</span>
          </div>
        </header>
        <div className="post-image">
          <img src="https://www.publicdomainpictures.net/pictures/90000/velka/mars.jpg" alt="post" />
        </div>
          <div className="post-likes" onClick={this.curtir}>
          <FiHeart />
        </div>
        <p>Waving goodbye to a spacecraft.</p>
      </div>
      );
    }
  }
  
  function mapStateToProps(state) {
    return {
      user: state.user
    };
  }
  
  export default connect(mapStateToProps)(TimeLine)
  