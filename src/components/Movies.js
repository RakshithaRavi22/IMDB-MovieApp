import React, { Component } from 'react';
import {connect} from 'react-redux';
import {  Card, CardImg, CardTitle, CardBody,  Button } from 'reactstrap';
import {Link} from 'react-router-dom';

class Movies extends Component {
   
    //card-body outline color="secondary"
    movieCard = ({movie}) =>(
        <div className="container mb-4 mr-2 "> 
           {/* <CardGroup> */}
            <Card className="card-style" >
               <CardImg style={{height: "20rem"}} src={movie.Poster} />
               <CardBody>
                   <CardTitle><strong>{movie.Title}-{movie.Year}</strong></CardTitle>
                   <Link to={'/movie/' + movie.imdbID}>
                        <Button className="button">Movie Details <span className="fa fa-expand"></span></Button>
                   </Link>
               </CardBody>
           </Card>
         {/* </CardGroup> */}
        </div>
    )

    render() { 

        const {movies} = this.props;
        let content = '';

        content = movies.Response === "True" ? movies.Search.map((movie, index) =>
            <div key={index} > 
                    <this.movieCard movie={movie} /> 
            </div> ) : null ; 
            if(movies.Response==='False'){
                 alert("Movie or TVShow entered does not exist");
            }
        

        return (
            <div className="row">
                {content}
            </div>
        );
    }
}
 
const mapStatetoProps = state => ({
    movies: state.movies.movies
})

export default connect(mapStatetoProps)(Movies); 