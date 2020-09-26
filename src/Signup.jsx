import React from 'react';
import { MDBContainer, MDBRow, MDBCol, MDBInput, MDBBtn, MDBCard, MDBCardBody } from 'mdbreact';
import '../node_modules/mdbreact/dist/css/mdb.css';
import 'bootstrap-css-only/css/bootstrap.min.css';
import 'mdbreact/dist/css/mdb.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
const Signup = () => {
    return (
        <>  <div className='signdiv'>
            <MDBContainer >
                <MDBRow >
                    <MDBCol md="6">
                        <MDBCard >
                            <MDBCardBody className='signcard' >
                                <form >
                                    <p className="h4 text-center py-4">Register Your Account <hr/> </p>
                                    <div className="grey-text">
                                        <MDBInput
                                            label="Your name"
                                            icon="user"
                                            group
                                            type="text"
                                            validate
                                            required
                                            error="wrong"
                                            success="right"
                                        />
                                        <MDBInput
                                            label="Your email"
                                            icon="envelope"
                                            group
                                            type="email"
                                            validate
                                            required
                                            error="wrong"
                                            success="right"
                                        />
                                        <MDBInput
                                            label="Confirm your email"
                                            icon="exclamation-triangle"
                                            group
                                            type="text"
                                            validate
                                            required
                                            error="wrong"
                                            success="right"
                                        />
                                        <MDBInput
                                            label="Your password"
                                            icon="lock"
                                            group
                                            type="password"
                                            validate
                                            required
                                        />
                                    </div>
                                    <div className="text-center py-4 mt-3">
                                        <MDBBtn  color="cyan" type="submit">
                                            Register
                  </MDBBtn>
                                    </div>
                                </form>
                            </MDBCardBody>
                        </MDBCard>
                    </MDBCol>
                </MDBRow>
            </MDBContainer>
            </div>
        </>
    );
}

export default Signup;