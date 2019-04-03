import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import LandingPage from './app/modules/landingPage/LandingPage';
import Header from './app/components/header/Header';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Footer from './app/components/footer/Footer';
import 'bootstrap/scss/bootstrap.scss';
import 'bootstrap/dist/js/bootstrap.js';
import 'font-awesome/scss/font-awesome.scss';
import './app.scss'
import './assets/scss/style.scss';
import LeftNav from './app/components/leftNavigation/LeftNav';
import TopNav from './app/components/topNavigation/TopNav';
import CompanyOne from './app/modules/companyOne/CompanyOne';
import CompanyTwo from './app/modules/companyTwo/CompanyTwo';



class App extends Component {
    render() {
        return (
            <Router>
                <div>
                    <Header />
                    <TopNav />
                    <div className="container-fluid mb">
                        <div className="row">
                            <div className="col-md-1">
                                <LeftNav />
                            </div>
                            <div className="col-md-11">
                                <Switch>
                                    <Route exact path='/' component={LandingPage} />
                                    <Route exact path='/one' component={CompanyOne} />
                                    <Route exact path='/two' component={CompanyTwo} />

                                </Switch>
                            </div>
                           
                        </div>
                    </div>
                    <Footer />
                </div>
            </Router>
        );
    }
}

ReactDOM.render(<App />,document.getElementById("root"));