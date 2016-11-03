import React ,{ Component } from 'react';
import {  Navbar, Nav , NavItem,MenuItem , NavDropdown } from 'react-bootstrap';
import { Link } from 'react-router';
import { connect } from 'react-redux';
 
class HeaderBarComponent extends Component{
    render(){
        return(
            <div>
                 <Navbar inverse>
                    <Navbar.Header>
                        <Navbar.Brand>
                         <Link to="/home">   Home  <span className="glyphicon glyphicon-home"> </span></Link>
                        </Navbar.Brand>
                        <Navbar.Toggle />
                    </Navbar.Header>
                    <Navbar.Collapse>
                        
                        <Nav pullRight>
                            <span className="glyphicon glyphicon-user"> </span>
                            <NavDropdown eventKey={1} title="User" id="basic-nav-dropdown">
                            <MenuItem eventKey={1.1}><Link to="/home/profile"><span className="glyphicon glyphicon-user"></span> Profile</Link></MenuItem>
                            <MenuItem eventKey={1.2}><Link to="/home/changepasswd"><span className="glyphicon glyphicon-lock"></span> Change Password</Link></MenuItem>
                            <MenuItem divider />
                            <MenuItem eventKey={1.3}><Link to="/"><span className="glyphicon glyphicon-off"></span> Log Out</Link></MenuItem>
                            </NavDropdown>
                        </Nav>
                         <Navbar.Text pullRight>
                            Welcome : { this.props.user.user.FirstName } 
                        </Navbar.Text>
                    </Navbar.Collapse>
                </Navbar>
            </div>
        );
    }
}

function mapStateToProps(state){
    return{
        user: state.user
    };
}

export default connect(mapStateToProps)(HeaderBarComponent);