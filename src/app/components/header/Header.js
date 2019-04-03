import React, { Component } from 'react';
import './Header.scss';
import hamburg from './img/hamburg.svg';
import setting from './img/settings.svg';
import notification from './img/notification.svg';
import profile from './img/profile.svg';


class Header extends Component {
  render() {
    return (
      <nav className="navbar navbar-expand-lg static-top navbar-light bg-lignt">
        <div className="container-fluid">
          <img src={hamburg} />
          <a className="navbar-brand" href="#">
            ADP Digitization Engine
                  </a>
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarResponsive">
            <ul className="navbar-nav ml-auto">
              <li className="nav-item active">
                <a className="nav-link" href="#">
                  <img src={setting} />
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  <img src={notification} />
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  <img src={profile} /></a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    );
  }
}

export default Header;