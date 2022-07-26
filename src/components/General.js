import React, { Component } from 'react';

class General extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        const { name, email, phone } = this.props;
        return(
            <div className="general--cv">
                <h2>Name: {name}</h2>
                <h2>Email: {email}</h2>
                <h2>Phone: {phone}</h2>
                <button onClick={this.props.onSubmitGeneral}>Edit</button>
            </div>
        )
    }
}

export default General;
