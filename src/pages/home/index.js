import React, { Component } from "react";
import Sidebar from "../../components/Home/Sidebar";
import TimeLine from "../../components/Home/TimeLine";
import { connect } from "react-redux";
import axios from "axios";

class Home extends Component {

  componentDidMount = async() => {
    
    await axios.get("http://localhost:3000/user")
      .then(resposta => {
        this.props.dispatch({
          type: "GET_USER",
          payload: resposta.data
        })
      })

    await axios.get("http://localhost:3000/perfil")
      .then(resposta => {
        this.props.dispatch({
          type: "GET_PROFILE",
          payload: resposta.data
        })
    })

    await axios.get("http://localhost:3000/posts")
      .then(resposta => {
        this.props.dispatch({
          type: "GET_POSTS",
          payload: resposta.data
        })
    })

    await axios.get("http://localhost:3000/stories")
      .then(resposta => {
        this.props.dispatch({
          type: "GET_STORIES",
          payload: resposta.data
        })
    })

    
  }

  render() {
    return (
        <div className="home">
          <TimeLine />
          <Sidebar />
        </div>
    )
  }
}

export default connect()(Home)