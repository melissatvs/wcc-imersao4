import React, { Component } from "react";
import { connect } from "react-redux";

class Info extends Component {
  
  render() {
    const perfil = this.props.perfil
    
    return (
        <main className="profile-box">
            <div className="profile photo" title="Alterar foto do perfil">
                <img className="profile photo-img" alt={perfil.name} src={perfil.userPicture} />               
            </div>
            <section className="profile details">
            <h2 className="profile user-name">{this.props.user}</h2>
            <ul className="profile-datas">
                <li className="profile data">
                    <span className="profile-data-complete"><span className="profile-data-number">{perfil.posts}</span> publicações</span>
                </li>
                <li className="profile data">
                    <a className="profile-data-complete" href="/melissatvs/followers/">
                        <span className="profile-data-number" title="226">{perfil.followers}</span> seguidores
                    </a>
                </li>
                <li className="profile data">
                    <a className="profile-data-complete" href="/melissatvs/following/">
                        <span className="profile-data-number">{perfil.following}</span> seguindo
                    </a>
                </li>
            </ul>
            </section>
            <span className="profile-full-name">{perfil.name}</span>
        </main>
    );
  }
}

function mapStateToProps(state) {
  return {
    user: state.user.username,
    perfil: state.perfil
  };
}

export default connect(mapStateToProps)(Info)