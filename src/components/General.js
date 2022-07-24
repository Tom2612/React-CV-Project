import React, { Component } from 'react';

class General extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        const { name, email, phone } = this.props;
        return(
            <div>
                <h2>{name}</h2>
                <h2>{email}</h2>
                <h2>{phone}</h2>
            </div>
        )
    }
}

export default General;