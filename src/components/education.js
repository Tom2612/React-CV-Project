import React, { Component } from 'react';

class Education extends Component {
    constructor(props) {
        super(props);
    }
    render () {
        const { schoolName, degree, startYear, endYear } = this.props;
        return (
            <div>   
                <label htmlFor='schoolName'>Enter your school name</label>
                <input 
                    type="text" 
                    id="schoolName" 
                    name="schoolName" 
                    value={schoolName} 
                    onChange={this.props.handleChangeEducation}
                ></input>
                <label htmlFor='titleOfStudy'>Enter your degree title</label>  
                <input 
                    type="text" 
                    id="titleOfStudy" 
                    name="degree" 
                    value={degree} 
                    onChange={this.props.handleChangeEducation}
                ></input>
                <label htmlFor='dateOfStudyStart'>When did you start?</label>
                <input 
                    type="month" 
                    id="dateOfStudyStart" 
                    min="1900-01" 
                    max="2022-07" 
                    name="startYear" 
                    value={startYear} 
                    onChange={this.props.handleChangeEducation}
                ></input>
                <label htmlFor='dateOfStudyEnd'>When did you end?</label>
                <input 
                    type="month" 
                    id="dateOfStudyEnd" 
                    min="1901-01"
                    max="2022-07" 
                    name="endYear" 
                    value={endYear} 
                    onChange={this.props.handleChangeEducation}
                ></input>
            </div>
        )
    }
}

export default Education;