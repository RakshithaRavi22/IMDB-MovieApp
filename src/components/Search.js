import React, {Component} from 'react';
import {connect} from 'react-redux';
import {searchMovie, fetchMovies, setLoading} from '../actions/searchActions';
import { Jumbotron,Form,Button,Input } from 'reactstrap';

class Search extends Component{
   
    onChange = event =>{
        this.props.searchMovie(event.target.value);
    };

    onSubmit = e =>{
        e.preventDefault();
        this.props.fetchMovies(this.props.text);
        this.props.setLoading();
    };

    render() {
    return (
        <React.Fragment>
          <Jumbotron className="fluid mt-5 jumbo">
            <div className="container">
               <h1> <span className="fa fa-search"></span> Search for Movies, TV Shows...</h1>
               <br />
                <Form className="search-form" onSubmit={this.onSubmit}>
                  <Input
                  type="text" 
                  className="form"
                  name="searchText"
                  placeholder="Search movies, TV Shows..." 
                  onChange={this.onChange} />
                </Form>
                <Button className="search-button button mt-3"
                type="submit"
                value="submit" color="primary" onClick={this.onSubmit}>Search</Button> <br />
            </div>
          </Jumbotron>
        </React.Fragment>
    );
  }
}

const mapStatetoProps = state =>({
    text: state.movies.text
})

export default connect(mapStatetoProps, {searchMovie, fetchMovies, setLoading} )(Search);