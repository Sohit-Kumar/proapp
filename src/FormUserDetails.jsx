import React, { Component } from 'react';
import { ThemeProvider as MuiThemeProvider } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import AppBar from '@material-ui/core/AppBar';
import Typography from '@material-ui/core/Typography';



export class FormUserDetails extends Component {
     
    continue = e => {
        e.preventDefault();
        this.props.nextStep();
    }
    render() {
        const { values, handleChange } = this.props;
        // this.props.values;
        
        
        return (
            <MuiThemeProvider>
                <React.Fragment>
                    <Dialog
                        open
                        fullWidth
                        maxWidth='xs'
                    >
                        <AppBar style={{ marginTop:'20px',textAlign:'center'}} >
                            <Typography variant="h3" >
                                Step-1 Personal Details
                            </Typography>
                        </AppBar>
                        <TextField
                            placeholder='Enter Your FirstName'
                            label='First Name'
                            onChange={handleChange('Firstname')}
                            defaultValue={values.Firstname}
                            margin="normal"
                            fullWidth
                            required ={true}

                        />

                        <TextField
                            placeholder='Enter Your LastName'
                            label='Last Name'
                            onChange={handleChange('Lastname')}
                            defaultValue={values.Lastname}
                            margin="normal"
                            fullWidth
                            required={true}
                        />

                        <TextField
                            placeholder='Enter Your Email'
                            label='Email'
                            onChange={handleChange('Email')}
                            defaultValue={values.Email}
                            margin="normal"
                            fullWidth
                            required={true}
                        />
                        <TextField
                            placeholder='Enter Your City'
                            label='City'
                            onChange={handleChange('City')}
                            defaultValue={values.City}
                            margin="normal"
                            fullWidth
                            required={true}
                        />
                        <TextField
                            placeholder='Enter Your State'
                            label='State'
                            onChange={handleChange('State')}
                            defaultValue={values.State}
                            margin="normal"
                            fullWidth
                            required={true}
                        />
                        <Button
                        style={{ width: '20px',marginLeft:'80%'}}
                            color='primary'
                            variant='contained'
                            onClick={this.continue}
                            size='large'
                        >Next
                    </Button>
                    </Dialog>


                </React.Fragment>
            </MuiThemeProvider>
        );
    }
}

export default FormUserDetails;
