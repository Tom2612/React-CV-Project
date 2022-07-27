import React, { Component } from 'react';

class General extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        const { name, email, phone } = this.props;
        return(
            <div className="cv general--cv">
                <h2 className="general--title">{name}</h2>
                <hr></hr>
                <h3>{email} | {phone}</h3>
                <button onClick={this.props.onSubmitGeneral} className="edit-btn"><span>Edit</span></button>
            </div>
        )
    }
}

export default General;
