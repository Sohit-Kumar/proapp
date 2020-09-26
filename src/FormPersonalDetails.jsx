import React, { Component } from 'react'
import Dialog from '@material-ui/core/Dialog';
import AppBar from '@material-ui/core/AppBar';
import { ThemeProvider as MuiThemeProvider } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

export class FormPersonalDetails extends Component {
    continue = e => {
        e.preventDefault();
        this.props.nextStep();
    }
    back = e => {
        e.preventDefault()
        this.props.prevStep();
    }
    render() {
        const { values, handleChange } = this.props;
        return (
            <MuiThemeProvider>
                <>
                    <Dialog
                        open
                        fullWidth
                        maxWidth='xs'
                    >
                        <AppBar style={{ marginTop:'20px',textAlign:'center'}}>
                            <Typography variant="h3" >
                                Step-2 College Details
                            </Typography>
                        </AppBar>
                        <TextField
                            placeholder='Enter Your Country Name'
                            label='Country'
                            onChange={handleChange('Country')}
                            defaultValue={values.Country}
                            margin='normal'
                            fullWidth
                        />

                        <TextField
                            placeholder="Enter Your University Name"
                            label="University"
                            onChange={handleChange('University')}
                            defaultValue={values.University}
                            margin="normal"
                            fullWidth
                        />
                        
                        <TextField
                            placeholder="Enter Your College Name"
                            label="College"
                            onChange={handleChange('College')}
                            defaultValue={values.College}
                            margin="normal"
                            fullWidth
                        />
                        <TextField
                            placeholder="Enter Your Department Name"
                            label="Department"
                            onChange={handleChange('Department')}
                            defaultValue={values.Department}
                            margin="normal"
                            fullWidth
                        />
                    

                        <Button
                            style={{ width: '20px',marginLeft:'80%',marginBottom:'-42px'}}
                            color='primary'
                            variant='contained'
                            onClick={this.continue}
                            size='large'
                        >Next</Button>

                        <Button
                            style={{ width: '20px',marginLeft:'5%' }}
                            color='secondary'
                            variant='contained'
                            onClick={this.back}
                            size='large'
                        >Prev</Button>
                    </Dialog>
                </>
            </MuiThemeProvider>
        )
    }
}

export default FormPersonalDetails
