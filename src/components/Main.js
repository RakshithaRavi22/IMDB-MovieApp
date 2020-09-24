import React, {Component} from "react";
import {Switch, Redirect, Route} from 'react-router-dom';
import Header from './Header';
import Footer from "./Footer";
import Home from "./Home";
import Movie from "./Movie";

class Main extends Component{

    render(){
        return(
            <div>
                <Header />
                <Switch>
                    <Route exact path="/" component={Home}></Route>
                    <Route path="/movie/:id" component={Movie} />
                    <Redirect path="/" />
                </Switch>
                <Footer />
            </div>
        );
    }
}

export default Main;



/*

https://imdbmovieapp.netlify.app/ 

*/