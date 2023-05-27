import React, {Component} from "react";
import { useLocation, useNavigate, useParams, } from 'react-router-dom'
import homeIconWhite from './../../assets/home_white.png';
import homeIconBlack from './../../assets/home_black.png';
import './GoHome.css'

//must have function for react version:6+
function withRouter(Component) {
  function ComponentWithRouterProp(props) {
    let location = useLocation();
    let navigate = useNavigate();
    let params = useParams();
    return (
      <Component
        {...props}
        router={{ location, navigate, params }}
      />
    );
  }

  return ComponentWithRouterProp;
}

//below component is to use programmatic navigation
class GoHome extends React.Component{
    navigateToHome=()=>{
        const { location,navigate,params } = this.props.router;
        //important update when using react version 6+ as it has no support for useHistory, so replace history.push() with navigate() 
        navigate('/')
    }

    render(){
        const {location}=this.props.router;
        const whiteBtn = location.pathname==='/';

        return (
            <button className={`go-home-btn ${
                whiteBtn ? 'white-bkg': 'gradient-bkg'
            }`} onClick={this.navigateToHome}>
                <img 
                    className="home-icon"
                    src={whiteBtn ? homeIconBlack: homeIconWhite}
                    alt='home-icon'
                />
            </button>
        )
    }
}

export default withRouter(GoHome)