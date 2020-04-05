import React, { Component } from "react";
import { connect } from "react-redux";
import Info from "../../components/Profile/Info"

class Profile extends Component {
   
   render() {
      return (
         <Info />
      )
   }
}
   
export default connect()(Profile)