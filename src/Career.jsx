import React, { Component } from 'react'
import FormUserDetails from './FormUserDetails';
import FormPersonalDetails from './FormPersonalDetails';
import Confirm from './Confirm';
import Success from './Success';
import Tech from './Tech';

export class Career extends Component {
    state ={
        step:1,
        Firstname:'',
        Lastname:'',
        Email:'',
        City:'',
        State:'',
        Country:'',
        University:'',
        College:'',
        Department:'',
        ProgrammingLanguage:'',
        Libraries:'',
        SubjectOfInterest:''
    }
    //Proceed to next step
     nextStep = () =>{
       const {step} = this.state ;
       this.setState({
           step: step + 1
       });
    }
    //Proceed to prev step
     prevStep = () =>{
        const {step} = this.state ;
        this.setState({
            step: step - 1
        });
     }

     //Handle feilds change
     handleChange = input => e => {
         this.setState({[input]:e.target.value});
     }
    render() {
        const {step} =this.state;
        const {Firstname,Lastname,Email,City,State,Country,University,College,Department,ProgrammingLanguage,Libraries,SubjectOfInterest}=this.state;
        const values ={Firstname,Lastname,Email,City,State,Country,University,College,Department,ProgrammingLanguage,Libraries,SubjectOfInterest}
        
        switch(step){
            case 1:
                return(
                  <FormUserDetails
                    nextStep={this.nextStep}
                    handleChange={this.handleChange}
                    values={values}
                  />  
                )
            case 2:
                return(<FormPersonalDetails
                    nextStep={this.nextStep}
                    prevStep={this.prevStep}
                    handleChange={this.handleChange}
                    values={values}
                />
                )
            case 3:
                return(<Tech
                    nextStep={this.nextStep}
                    prevStep={this.prevStep}
                    handleChange={this.handleChange}
                    values={values}
                  />)
            case 4:
                return(<Confirm
                    nextStep={this.nextStep}
                    prevStep={this.prevStep}
                    values={values}
                  />)
            case 5:
                return(<Success/>)
            default:
                (console.log('This is a multi-step form built with React.'))
        }
        
    }
}

export default Career;
