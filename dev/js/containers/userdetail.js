import React, { Component } from 'react';
import { connect } from 'react-redux';

class UserDetails extends Component {



    render() {
        if (!this.props.users) {
            return (<h1>not selected</h1>)
        }

        return (

            <h1>{this.props.users.first} {''} {this.props.users.last}</h1>

        )

    }
}

function mapStateToProps(state) {
    return {
        users: state.activeUser
    }
}

export default connect(mapStateToProps)(UserDetails);