import React, { Component } from 'react';
//import materialUI styles
import ThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';

export class UserPersonalDetails extends Component {
    continue = (e) => {
        e.preventDefault();
        this.props.nextStep();
    }
    back = (e) => {
        e.preventDefault();
        this.props.prevStep();
    }
    render() {
        const {values} = this.props;
        return (
            <ThemeProvider>
                <React.Fragment>
                    <AppBar title="Enter Personal Details" />
                    <TextField 
                        id="city"
                        floatingLabelText="City"
                        onChange={this.props.handleChange} 
                        defaultValue={values.city}/>
                        <br />
                    <TextField 
                        id="occupation"
                        floatingLabelText="Occupation"
                        onChange={this.props.handleChange} 
                        defaultValue={values.occupation}/>
                        <br />
                    <TextField 
                        id="bio"
                        floatingLabelText="Bio"
                        onChange={this.props.handleChange} 
                        defaultValue={values.bio}/>
                        <br />
                        <RaisedButton label="Back" primary={true} onClick={this.back}/>
                        <RaisedButton id="form-button" label="Continue" primary={true} 
                            onClick={this.continue} style={styles.button}/>
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

export default UserPersonalDetails
