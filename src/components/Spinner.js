import React from 'react';
import spinner from './spinner.gif';

export const Spinner = () => {
    return(
         <div>
        <i
          src={spinner}
          style={{ width: '200px', margin: 'auto', display: 'block' }}
          alt="Loading..."
        />
      </div>
    );
};
