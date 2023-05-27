import React, { Component } from 'react'
import { slide as Menu } from 'react-burger-menu'
import { Link,  useLocation, useNavigate, useParams, } from 'react-router-dom'
import './NavBar.css'

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

class NavBar extends React.Component {
    
    render () 
    {
        console.log(this.props)
        // NOTE: You also need to provide styles, see https://github.com/negomi/react-burger-menu#styling
        const { location,navigate,params } = this.props.router;

    const homeClass = location.pathname === '/' ? 'active-item' : '';
    const aboutClass = location.pathname === '/about' ? 'active-item' : '';
    const projectsClass = location.pathname === '/projects' ? 'active-item' : '';
    const skillsClass = location.pathname === '/skills' ? 'active-item' : '';
    const publicationsClass = location.pathname === '/publications' ? 'active-item': '';
    const contactClass = location.pathname === '/contact' ? 'active-item' : '';

    return (
      <Menu>
        <Link to='/' className={`menu-item ${homeClass}`}>
          Home
        </Link>
        <Link to='/about' className={`menu-item ${aboutClass}`}>
          About
        </Link>
        <Link to='/projects' className={`menu-item ${projectsClass}`}>
          Projects
        </Link>
        <Link to='/skills' className={`menu-item ${skillsClass}`}>
          Skills
        </Link>
        <Link to='/publications' className={`menu-item ${publicationsClass}`}>
          Publications
        </Link>
        <Link to='/contact' className={`menu-item ${contactClass}`}>
          Contact
        </Link>
      </Menu>
    )
  }
}

export default withRouter(NavBar)