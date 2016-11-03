import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';
import { Grid, Row ,Col, Thumbnail } from 'react-bootstrap';

class DashboardComponent extends Component{
    constructor(props){
        super(props);
        this.state= {
            role:''
        }
    }
    componentWillMount(){
       
        this.setState({ role:this.props.user.user.Role })
    }
    
    render(){
        if(this.state.role === '0'){
            return (
                 <div style={{width: 'auto', height: 'auto'}}>
                 <Grid>
                     <Row  className="show-grid">
                        <Col xs={3} md={2} lg={2}>
                            <Link to="/home/users">
                                <Thumbnail src='src/assets/images/Users.jpeg' alt='242x200'>
                                <h4 className="text-center">Users</h4>
                                </Thumbnail>
                            </Link>                
                        </Col>
                        
                        <Col xs={3} md={2} lg={2}>
                            <Link to="/home/requests">
                                <Thumbnail src='src/assets/images/request.jpg' alt='232x200'>
                                <h4 className="text-center">Requests</h4>
                                </Thumbnail>
                            </Link>
                        </Col>
                        
                        <Col xs={3} md={2} lg={2}>
                            <Link to="/home/services">
                                <Thumbnail src='src/assets/images/services.jpeg' alt='242x200'>
                                <h4 className="text-center">Services</h4>
                                </Thumbnail>
                            </Link>
                        </Col>
                        
                        <Col xs={3} md={2} lg={2}>
                            <Link to="/home/orders">
                                <Thumbnail src='src/assets/images/orders.jpg' alt='242x200'>
                                <h4 className="text-center">Orders</h4>
                                </Thumbnail>
                            </Link>
                        </Col>
                        
                        <Col xs={3} md={2} lg={2}>
                            <Link to="/home/categories">
                                <Thumbnail src='src/assets/images/categories.jpeg' alt='242x200'>
                                <h4 className="text-center">Categories</h4>
                                </Thumbnail>
                            </Link>
                        </Col>
                        
                         <Col xs={3} md={2} lg={2}>
                               <h4 className="text-center">Top 5 Earning Users</h4>
                         </Col>
                    </Row>
                 </Grid>
                </div>
            );
        }
        if(this.state.role === '1'){
            return(
                 <div style={{width: 'auto', height: 'auto'}}>
                <Grid>
                 <Row>
                                    
                    <Col xs={3} md={2} lg={2}>
                    <Link to="/home/services">
                    <Thumbnail src='src/assets/images/services.jpeg' alt='242x200'>
                    <h4 className="text-center">Services</h4>
                    </Thumbnail>
                    </Link>
                    </Col>
                
                    <Col xs={3} md={2} lg={2}>
                    <Link to="/home/orders">
                    <Thumbnail src='src/assets/images/orders.jpg' alt='242x200'>
                    <h4 className="text-center">Orders</h4>
                    </Thumbnail>
                    </Link>
                    </Col>
                    
                </Row>
                </Grid>
                </div>
            );
        }
          
    }
}

function mapStateToProps(state){
    return {
        user: state.user
    }
}

export default connect(mapStateToProps,null)(DashboardComponent);