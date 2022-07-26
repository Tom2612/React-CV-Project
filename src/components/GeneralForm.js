import React, { Component } from 'react';

class General extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        const { name, email, phone } = this.props;
        return (
            <form onSubmit={this.props.onSubmitGeneral} className="form general--form">
                <div className='name-input'>
                    <label htmlFor='name'>Full name:</label>
                    <input 
                        type="text" 
                        id="name" 
                        name="name" 
                        value={name} 
                        onChange={this.props.handleChangeGeneral}
                    ></input>
                </div>
                <div className='email-input'>
                    <label htmlFor='email'>Email address:</label>  
                    <input 
                        type="email" 
                        id="email" 
                        name="email" 
                        value={email} 
                        onChange={this.props.handleChangeGeneral}
                    ></input>
                </div>
                <div className='phone-input'>
                    <label htmlFor='phone'>Contact number:</label>
                    <input 
                        type="text" 
                        id="number" 
                        name="phone" 
                        value={phone} 
                        onChange={this.props.handleChangeGeneral}
                    ></input>
                </div>
                <button className='submit-btn' type="submit">Submit section</button>
            </form>
        )
    }
}

export default General;
