import React, {Component} from "react";
import {Switch, Redirect, Route} from 'react-router-dom';
import Header from './Header';
import Footer from "./Footer";
import Landing from "./Landing";
import Movie from "./Movie";

class Main extends Component{

    render(){
        return(
            <div>
                <Header />
                <Switch>
                    <Route exact path="/" component={Landing}></Route>
                    <Route path="/movie/:id" component={Movie} />
                    <Redirect path="/" />
                </Switch>
                <Footer />
            </div>
        );
    }
}

export default Main;