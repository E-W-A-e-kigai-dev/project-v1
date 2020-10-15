import React, {Component} from 'react';
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";

import 'bootstrap/dist/css/bootstrap.min.css';

import './App.css';

import NavbarDesktop from "./components/Navbar/NavbarDesktop/NavbarDesktop";
import NavbarMobile from "./components/Navbar/NavbarMobile/NavbarMobile";
import HeaderDesktop from "./components/Header/HeaderDesktop/HeaderDesktop";
import HeaderMobile from "./components/Header/HeaderMobile/HeaderMobile";
import Card from "./components/Card/Card";
import About from "./components/About/About";
import Homepage from "./components/Homepage/Homepage";
import NotFound from "./components/NotFound/NotFound";
import FooterMobile from "./components/Footer/FooterMobile/FooterMobile";
import FooterDesktop from "./components/Footer/FooterDesktop/FooterDesktop";
import Contact from "./components/Contact/Contact";
import LoaderPage from "./components/LoaderPage/LoaderPage";

class App extends Component {

    state = {
        loading: true
    };

    componentDidMount() {
        // this simulates an async action, after which the component will render the content
        this.demoAsyncCall().then(() => this.setState({ loading: false }));
    }

    demoAsyncCall =() => {
        return new Promise((resolve) => setTimeout(() => resolve(), 1000));
    }

  render() {
    const isMobile = window.innerWidth <= 768;
      const { loading } = this.state;

      if(loading) { // if your component doesn't have to wait for an async action, remove this block
          return <LoaderPage/>; // render null when app is not ready
      }

    return (
        <Router>
            <div className="App">
                {isMobile ? <NavbarMobile/>: <NavbarDesktop/>}
                {isMobile ? <HeaderMobile/> : <HeaderDesktop/>}
                <Switch>
                    <Route exact path="/carte" component={Card}/>
                    <Route exact path="/apropos" component={About} />
                    <Route exact path="/contact" component={Contact}/>
                    <Route exact path="/" component={Homepage} />
                    <Route path="*" component={NotFound} />
                </Switch>
                {isMobile ? <FooterMobile/> : <FooterDesktop/>}
            </div>
        </Router>
    );
  }
}

export default App;

