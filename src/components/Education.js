import React, { Component } from 'react';

class Education extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        const { schoolName, degree, startYear, endYear } = this.props;
        return(
            <div className="cv education--cv">
                <h2 className='section-title'>Education</h2>
                <div className='information'>
                    <h3><strong>{startYear.slice(0, 4)} - {endYear.slice(0, 4)}:</strong> {schoolName} | {degree}</h3>
                </div>
                <button onClick={this.props.onSubmitEducation} className="edit-btn"><span>Edit</span></button>
            </div>
        )
    }
}

export default Education;
