import React, {Component} from 'react';
import {connect} from 'react-redux';
import {fetchMovie, setLoading} from '../actions/searchActions';
import {Link} from 'react-router-dom';
import { CardImg, Card, ListGroup,ListGroupItem, Button} from 'reactstrap';

class Movie extends Component{
    
    componentDidMount(){
        this.props.fetchMovie(this.props.match.params.id);
        this.props.setLoading();
    }

    render(){
      
      const {loading, movie} = this.props;

      let movieInfo = (
        <div>
          <h1 className="title"> {movie.Title} </h1>
          <div className="row-movie">   
              <div className=" poster">
                <Card className="movie-card" body outline color="dark">
                  <CardImg className="poster-height" src={movie.Poster}></CardImg>
                </Card>
              </div>
              <div className="detail">               
                <ListGroup>
                    <ListGroupItem className="list-group"><strong>Genre: </strong>{movie.Genre}</ListGroupItem>
                    <ListGroupItem className="list-group"><strong>Released: </strong>{movie.Released}</ListGroupItem>
                    <ListGroupItem className="list-group"><strong>Rated: </strong>{movie.Rated}</ListGroupItem>
                    <ListGroupItem className="list-group"><strong>Run Time: </strong>{movie.Runtime}</ListGroupItem>
                    <ListGroupItem className="list-group"><strong>Directed By: </strong>{movie.Director}</ListGroupItem>
                    <ListGroupItem className="list-group"><strong>Played by: </strong>{movie.Actors}</ListGroupItem>
                    <ListGroupItem className="list-group"><strong>Languages: </strong>{movie.Language}</ListGroupItem>
                    <ListGroupItem className="list-group"><strong>Plot: </strong>{movie.Plot}</ListGroupItem>
                    <ListGroupItem className="list-group"><strong>IMDB Rating: </strong>{movie.imdbRating}</ListGroupItem>
                    <ListGroupItem className="list-group"><strong>Prodcution: </strong>{movie.Production}</ListGroupItem>
                </ListGroup>
                 <br />
                <Button className="button" href={'https://www.imdb.com/title/' + movie.imdbID}> Click for more info... </Button>
              </div>
          </div>
          <div className="back-button-div">
            <Button className="back-button">
            <Link to="/" className="link-to-search">
                  <h6><span className="fa fa-caret-left"></span> Back to Search</h6>
          </Link>
          </Button>
          </div>
          
          
        </div>     
      );
      
      let content = loading ? null : movieInfo 
    
      return(
          <div>
            <div className="row"> 
              {content}
            </div>
          </div>
        );
    }
}

const mapStatetoProps = state =>({
    loading: state.movies.loading,
    movie: state.movies.movie
});

export default connect(mapStatetoProps, {fetchMovie, setLoading})(Movie);