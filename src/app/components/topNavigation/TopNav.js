import React, { Component } from 'react';
import { NavLink, withRouter, Link } from 'react-router-dom';
import './TopNav.scss';
import { history } from '../../../assets/helper/History';
class TopNav extends Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedTab: history.location.pathname
        };
        this.handleTab = this.handleTab.bind(this);
    }
    handleTab(tab) {
        this.setState({
            selectedTab: tab
        });
    }

    render() {
        let link =[
            {path:'/',name:'All'},
            {path:'/one',name:'Company One'},
            {path:'/two',name:'Company Two'}];

        return (
            <div className="d-flex w-100 bg-dark text-white justify-content-end align-items-center primary-tab">
                {
                    link.map((item, i) => (
                    <Link key={i} to={item.path} className={this.state.selectedTab == item.path ? 'py-3 px-5 text-white active-nav' : "py-3 px-5 text-white"} onClick={() => this.handleTab(item.path)}>{item.name}</Link>
                    ))
                }
            </div>
        );
    }
}

export default TopNav;