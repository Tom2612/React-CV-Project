import React, { Component } from 'react';

class EducationForm extends Component {
    constructor(props) {
        super(props);
    }
    render () {
        const { schoolName, degree, startYear, endYear } = this.props;
        return (
            <form onSubmit={this.props.onSubmitEducation} className="form education--form">
                <div className='school-name'>
                    <label htmlFor='schoolName'>Enter your school name</label>
                    <input 
                        type="text" 
                        id="schoolName" 
                        name="schoolName" 
                        value={schoolName} 
                        onChange={this.props.handleChangeEducation}
                    ></input>
                </div>  
                <div className='degree-name'>
                    <label htmlFor='titleOfStudy'>Enter your degree title</label>  
                    <input 
                        type="text" 
                        id="titleOfStudy" 
                        name="degree" 
                        value={degree} 
                        onChange={this.props.handleChangeEducation}
                    ></input>
                </div>  
                <div className='year-start'>
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
                </div>  
                <div className='year-end'>
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
                <button className="submit-btn" type="submit">Submit section</button>
            </form>
        )
    }
}

export default EducationForm;
