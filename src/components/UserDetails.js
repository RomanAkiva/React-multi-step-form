import React, { Component } from 'react';
//import materialUI styles
import ThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';

export class UserDetails extends Component {
    continue = (e) => {
        e.preventDefault();
        this.props.nextStep();
    }
    render() {
        const {values} = this.props;
        return (
            <ThemeProvider>
                <React.Fragment>
                    <AppBar title="Enter User Details" />
                    <TextField 
                        id="firstName"
                        floatingLabelText="First name"
                        onChange={this.props.handleChange} 
                        defaultValue={values.firstName}/>
                        <br />
                    <TextField 
                        id="lastName"
                        floatingLabelText="Last name"
                        onChange={this.props.handleChange} 
                        defaultValue={values.lastName}/>
                        <br />
                    <TextField 
                        id="email"
                        floatingLabelText="Email"
                        onChange={this.props.handleChange} 
                        defaultValue={values.email}/>
                        <br />
                        <RaisedButton label="Continue" primary={true} onClick={this.continue} style={styles.button}/>
                </React.Fragment>
            </ThemeProvider>
        )
    }
}

const styles = {
    button: {
        margin: 15
    }
}

export default UserDetails
