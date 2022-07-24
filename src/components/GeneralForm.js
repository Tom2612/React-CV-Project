import React, { Component } from 'react';

class General extends Component {
    constructor(props) {
        super(props);
    }
    render () {
        const { name, email, phone } = this.props;
        return (
            <div>   
                <label htmlFor='name'>Enter your name</label>
                <input 
                    type="text" 
                    id="name" 
                    name="name" 
                    value={name} 
                    onChange={this.props.handleChangeGeneral}
                ></input>
                <label htmlFor='email'>Enter your email</label>  
                <input 
                    type="email" 
                    id="email" 
                    name="email" 
                    value={email} 
                    onChange={this.props.handleChangeGeneral}
                ></input>
                <label htmlFor='phone'>Enter your phone number</label>
                <input 
                    type="text" 
                    id="number" 
                    name="phone" 
                    value={phone} 
                    onChange={this.props.handleChangeGeneral}
                ></input>
            </div>
        )
    }
}

export default General;