import React from 'react';
import { Link } from 'react-router-dom';
import '../assets/style.css';

const LoggedOutView = props => {
  if (!props.currentUser) {
    return (
      <ul className={`nav navbar-nav ${props.isActive} pull-xs-left pull-md-right`}>

        <li className="nav-item">
          <Link onClick={props.wasClicked} to="/" className="nav-link">
            Home
          </Link>
        </li>

        <li className="nav-item">
          <Link onClick={props.wasClicked} to="/login" className="nav-link">
            Sign in
          </Link>
        </li>

        <li className="nav-item">
          <Link onClick={props.wasClicked} to="/register" className="nav-link">
            Sign up
          </Link>
        </li>

      </ul>
    );
  }
  return null;
};

const LoggedInView = props => {
  if (props.currentUser) {
    return (
      <ul className={`nav navbar-nav ${props.isActive} pull-xs-left pull-md-right`}>

        <li className="nav-item">
          <Link onClick={props.wasClicked} to="/" className="nav-link">
            Home
          </Link>
        </li>

        <li className="nav-item">
          <Link onClick={props.wasClicked} to="/editor" className="nav-link">
            <i className="ion-compose"></i>&nbsp;New Post
          </Link>
        </li>

        <li className="nav-item">
          <Link onClick={props.wasClicked} to="/settings" className="nav-link">
            <i className="ion-gear-a"></i>&nbsp;Settings
          </Link>
        </li>

        <li className="nav-item">
          <Link
            onClick={props.wasClicked}
            to={`/@${props.currentUser.username}`}
            className="nav-link">
            <img src={props.currentUser.image} className="user-pic" alt={props.currentUser.username} />
            {props.currentUser.username}
          </Link>
        </li>

      </ul>
    );
  }

  return null;
};


class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = { addClass: '', showNavBar: 'content-overflow' };
  }

  toggleSideNav = () => {
    this.state.addClass === 'nav-active' ? this.setState({ addClass: '', showNavBar: 'content-overflow' }) : this.setState({ addClass: 'nav-active', showNavBar: '' });
  }

  render() {
    return (
      <nav className={`navbar navbar-light ${this.state.showNavBar}`}>
        <div className="container">
          <LoggedOutView wasClicked={this.toggleSideNav} isActive={this.state.addClass} currentUser={this.props.currentUser} />
          <LoggedInView wasClicked={this.toggleSideNav} isActive={this.state.addClass} currentUser={this.props.currentUser} />
          <Link to="/" className="navbar-brand pull-xs-right pull-md-right pull-lg-left">
            {this.props.appName.toLowerCase()}
          </Link>
          <div onClick={() => this.toggleSideNav()} className="nav-burger">
            <div></div>
            <div></div>
            <div></div>
          </div>
        </div>
      </nav>
    );
  }
}

export default Header;
