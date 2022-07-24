import React, { Component } from 'react';

class Education extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        const { schoolName, degree, startYear, endYear } = this.props;
        return(
            <div className="education--cv">
                <h2>Institute: {schoolName}</h2>
                <h2>degree: {degree}</h2>
                <h2>Start Year: {startYear}</h2>
                <h2>End Year: {endYear}</h2>
            </div>
        )
    }
}

export default Education;
