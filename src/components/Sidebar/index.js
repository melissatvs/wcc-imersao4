import React, { Component } from "react";
import { connect } from "react-redux";

class Sidebar extends Component {
  
  render() {
    const { name, username } = this.props.user
    const { fotoPerfil } = this.props

    return (
      <div>
        <div className="user-info">
          <img
            alt="Perfil"
            src={fotoPerfil}
          />
          <div className="user-bio">
            <strong>{name}</strong>
            <span>{username}</span>
          </div>
        </div>

        <div className="stories">
          <h2>Stories</h2>

          <div className="storie">
            <div className="storie-image">
              <img src="https://randomuser.me/api/portraits/men/10.jpg" alt="user" />
            </div>
            <div className="storie-user">
              <strong>João Bobão</strong>
              <span>há 30 horas</span>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    user: state.user,
    fotoPerfil: state.perfil.userPicture
  };
}

export default connect(mapStateToProps)(Sidebar)