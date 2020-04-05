import React, { Component } from "react";
import { connect } from "react-redux";
import Storie from "./Storie"

class Sidebar extends Component {
   
   render() {
      const { name, username } = this.props.user
      const { fotoPerfil } = this.props
      const stories = this.props.stories
      
      return (
         <div className="sidebar">
            <div className="user-info">
               <img alt="Perfil" src={fotoPerfil} />
               <div className="user-bio">
                  <strong>{name}</strong>
                  <span>{username}</span>
               </div>
            </div>
            <div className="stories">
               <h2>Stories</h2>
               {stories.map(storie => (
                  <Storie
                  key={storie.id}
                  user={storie.user}
                  userPicture={storie.userPicture}
                  time={storie.time}/>
                  ))}
            </div>
         </div>
      );
   }
}
      
function mapStateToProps(state) {
   return {
      user: state.user,
      fotoPerfil: state.perfil.userPicture,
      stories: state.stories
   };
}

export default connect(mapStateToProps)(Sidebar)