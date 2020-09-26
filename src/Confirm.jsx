import React, { Component } from 'react'
import Dialog from '@material-ui/core/Dialog';
import AppBar from '@material-ui/core/AppBar';
import { ThemeProvider as MuiThemeProvider } from '@material-ui/core/styles';
import { List, ListItem, ListItemText } from '@material-ui/core/';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

export class Confirm extends Component {
    continue = e => {
        e.preventDefault();
        //process form
        this.props.nextStep();
    }
    back = e => {
        e.preventDefault();
        this.props.prevStep();
    }
    render() {
        const {
            values: { Firstname, Lastname, Email,City,State,Country,University,College,Department,ProgrammingLanguage,Libraries,SubjectOfInterest }
        } = this.props;
        return (
            <MuiThemeProvider>
                <>
                    <Dialog
                        open
                        fullWidth
                        maxWidth='sm'
                    >
                        <AppBar style={{ marginTop:'20px',textAlign:'center'}}>
                            <Typography variant="h3" >
                                Step-4 Confirm Your Details
                            </Typography>
                        </AppBar>
                        <List>
                            <ListItem>
                                <ListItemText primary="First Name" secondary={Firstname} />
                            </ListItem>
                            <ListItem>
                                <ListItemText primary="Last Name" secondary={Lastname} />
                            </ListItem>
                            <ListItem>
                                <ListItemText primary="Email" secondary={Email} />
                            </ListItem>
                            <ListItem>
                                <ListItemText primary="City" secondary={City} />
                            </ListItem>
                            <ListItem>
                                <ListItemText primary="State" secondary={State} />
                            </ListItem>
                            <ListItem>
                                <ListItemText primary="Country" secondary={Country} />
                            </ListItem>
                            <ListItem>
                                <ListItemText primary="University" secondary={University} />
                            </ListItem>
                            <ListItem>
                                <ListItemText primary="College" secondary={College} />
                            </ListItem>
                            <ListItem>
                                <ListItemText primary="Department" secondary={Department} />
                            </ListItem>
                            <ListItem>
                                <ListItemText primary="ProgrammingLanguage" secondary={ProgrammingLanguage} />
                            </ListItem>
                            <ListItem>
                                <ListItemText primary="Libraries" secondary={Libraries} />
                            </ListItem>
                            <ListItem>
                                <ListItemText primary="SubjectOfInterest" secondary={SubjectOfInterest} />
                            </ListItem>

                        </List>
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

export default Confirm;
