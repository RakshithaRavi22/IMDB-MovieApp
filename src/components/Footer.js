import React from 'react';

function Footer(props){

    return(
        <div className="footer">
            <div className="container">
                <div className="row">             
                     <p className="foot"><span className="fa fa-github"></span> Created by <a className="foot" href="https://github.com/RakshithaRavi22"> Rakshitha R </a>using ReactJs.</p>
                    {/* <div className="col-12 col-sm-2" >
                        <h4 style={{color:"white"}}>Contributers:</h4>
                        <ul className="list-unstyled">
                            <li className="fs"><span className="fa fa-github"></span><a href="https://github.com/RakshithaRavi22"> Rakshitha R</a></li>
                        </ul>
                    </div> */}
                </div>
            </div>
        </div>
    );
}

export default Footer;

