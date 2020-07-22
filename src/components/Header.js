import React, { Component } from 'react';
import { Navbar, Nav,  NavItem} from 'reactstrap';
import { NavLink } from 'react-router-dom';

class Header extends Component{
    constructor(props){
        super(props);

        this.state = {
            isNavOpen :false
        };

     //   this.toggleNav = this.toggleNav.bind(this);
    }

    // toggleNav(){
    //     this.setState({
    //         isNavOpen: !this.state.isNavOpen
    //     });
    // }
    

    render(){
        return(
            <React.Fragment>
                <Navbar dark>
                    <div className="container">
                        {/* <NavbarToggler onClick={this.toggleNav}></NavbarToggler> */}
                        {/* <NavbarBrand className="mr-auto" href="/">
                            <span className="fa fa-film image"></span> 
                        </NavbarBrand> */}
                            {/* <Collapse isOpen={this.state.isNavOpen} navbar> */}
                                <Nav navbar >
                                        <NavItem>
                                            <NavLink className="nav-link" to="/">
                                                <h3><span className="fa fa-film image"></span> Movie-Series</h3>
                                            </NavLink>
                                        </NavItem>
                                </Nav>
                            {/* </Collapse> */}
                    </div>
                </Navbar>
            </React.Fragment>
        );
    }
}

export default Header; 
