import React, { Component } from 'react';

class Error extends Component {
    
    render() { 
        return (
            <div>
                <h1 className="error">Error 404: Movie does not exist</h1>
            </div>
          );
    }
}
 
export default Error;