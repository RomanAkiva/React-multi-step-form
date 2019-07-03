import React, { Component } from 'react';
import UserDetails from './UserDetails';
import UserPersonalDetails from './UserPersonalDetails';
import Confirm from './Confirm';
import Success from './Success';

class UserForm extends Component {
    state = {
        step: 1,
        firstName: '',
        lastName: '',
        occupation: '',
        email: '',
        city: '',
        bio: ''
    }
    //procced to next step
    nextStep = () => {
        const { step } = this.state;
        this.setState({
            step: step + 1
        })
    }
    //back to prev step
    prevStep = () => {
        const { step } = this.state;
        this.setState({
            step: step - 1
        })
    }
    //handle the input fields changes
    handleChange = (e) => {
        this.setState({
            [e.target.id]: e.target.value
        })
    }
    render () {
        const {step} = this.state;
        const {firstName, lastName, email, occupation, city, bio} = this.state;
        const values = {firstName, lastName, email, occupation, city, bio};
        
        switch(step) {
            case 1: 
                return (
                    <UserDetails 
                        nextStep={this.nextStep} 
                        handleChange={this.handleChange} 
                        values={values}/>
                )
            case 2:
                    return (
                        <UserPersonalDetails
                            nextStep={this.nextStep} 
                            prevStep={this.prevStep} 
                            handleChange={this.handleChange} 
                            values={values}/>
                    )
            case 3:
                return <Confirm 
                nextStep={this.nextStep} 
                prevStep={this.prevStep} 
                values={values}/>
            case 4:
                return <Success values={values}/>
                default:
                    return <h1>Something went wrong :(</h1>
        }
    }
}

export default UserForm;