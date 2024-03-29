import React, { Component } from 'react'
import Dialog from '@material-ui/core/Dialog';
import { ThemeProvider as MuiThemeProvider } from '@material-ui/core/styles';
import Final from './Final';

export class Success extends Component {
    continue = e => {
        this.preventDefault();
        this.props.nextStep();
    }
    back = e => {
        this.preventDefault();
        this.props.prevStep();
    }
     
    render() {
        
        return (
            <MuiThemeProvider>
                <>
                    <Dialog
                        open
                        fullWidth
                        maxWidth='sm'>
                        <h1>Thank You For Your Submission</h1>
                        <p>You will get an email with further instructions.</p>
                        <Final/>
                    </Dialog>
                </>
            </MuiThemeProvider>
        )
    }
}

export default Success;
