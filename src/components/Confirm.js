import React, { Component } from 'react';
//import materialUI styles
import ThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import {List, ListItem } from 'material-ui/List';
import RaisedButton from 'material-ui/RaisedButton';

export class Confirm extends Component {
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
                    <AppBar title="Confirm Details" />
                    <List>
                        <ListItem primaryText="First Name" secondaryText={values.firstName}/>
                        <ListItem primaryText="Last Name" secondaryText={values.lastName}/>
                        <ListItem primaryText="Email" secondaryText={values.email}/>
                        <ListItem primaryText="Occupation" secondaryText={values.occupation}/>
                        <ListItem primaryText="City" secondaryText={values.city}/>
                        <ListItem primaryText="BIO" secondaryText={values.bio}/>
                    </List>
                    <br />
                    <RaisedButton label="Back" primary={true} onClick={this.back}/>
                    <RaisedButton id="form-button" label="Confirm & Continue" 
                        primary={true} onClick={this.continue} style={styles.button}/>
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

export default Confirm
