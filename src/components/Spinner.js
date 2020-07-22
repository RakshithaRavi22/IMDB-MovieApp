import React from 'react';
import spinner from './spinner.gif';

export const Spinner = () => {
    return(
        <div className="spinner-style">
          <img
            src={spinner}
            style={{ width: '100px', margin: 'auto' }}
            alt="Loading..."
          />
      </div>
    );
};
