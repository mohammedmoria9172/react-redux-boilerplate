import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { selectUser } from '../action/index';


class UserList extends Component {

    renderUserList() {
        console.log(this.props, '!!!!!!!!!!')
        return this.props.users.map((item, index) => {
            return (
                <li onClick={() => this.props.selectUser(item)} key={index}>{item.first}</li>
            )
        })
    }

    render() {

        return (
            <ul>
                {this.renderUserList()}
            </ul>
        )
    }
}

function mapStateToProps(state) {
    return {
        users: state.users
    }
}

function matchDispatchToProps(dispatch) {
    return bindActionCreators({ selectUser: selectUser }, dispatch)
}

export default connect(mapStateToProps, matchDispatchToProps)(UserList);