import React, { Component } from 'react';
//import materialUI styles
import ThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';


export class Success extends Component {
    render() {
        const {values} = this.props;
        return (
            <ThemeProvider>
                <React.Fragment>
                    <AppBar title="Success" />
                    <h1>{values.firstName} {values.lastName} Thank you for submission :)</h1>
                </React.Fragment>
            </ThemeProvider>
        )
    }
}

export default Success
