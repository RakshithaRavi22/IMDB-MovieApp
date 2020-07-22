import React , {Component } from 'react';
import Search from './Search';
import {connect} from 'react-redux';
import {Spinner} from './Spinner';
import Movies from './Movies';

class Landing extends Component{
    render(){

        const {loading}= this.props;

        return(
            <div className="container">
                <Search />
                { loading ? <Spinner />: <Movies /> }
            </div>
        );
    }
}

const mapStatetoProps = state => ({
    loading: state.movies.loading
})

export default connect(mapStatetoProps)(Landing);
