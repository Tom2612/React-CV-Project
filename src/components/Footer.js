import React, { Component } from 'react';

class Footer extends Component {
    constructor(props) {
        super(props)
    }
    render () {
        return (
            <footer>
                <div className='footer--left'>
                    <h2>Tom Powell</h2>
                    <hr></hr>
                    <h4>You are viewing my footer!</h4>
                    <h4>Please check out some of my other projects, I am <a href='https://github.com/Tom2612'>Tom2612</a>.</h4>
                </div>
                <div className='footer-right'>
                    
                </div>
            </footer>
        )
    }
}

export default Footer;