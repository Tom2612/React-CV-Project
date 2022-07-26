import React, { Component } from 'react';

class WorkForm extends Component {
    constructor(props) {
        super(props)
    }
    render() {
        const { companyName, position, mainTasks, dateFrom, dateTo } = this.props;
        return (
            <form onSubmit={this.props.onSubmitWork} className="form work--form">
                <div className='form-title'>
                    <h2>Add previous work information here:</h2>
                </div>
                <div className="companyName">
                    <label>Company name</label>
                    <input 
                        type="text"
                        id="companyName"
                        name="companyName"
                        value={companyName}
                        onChange={this.props.handleChangeWork}
                    ></input>
                </div>
                <div className='position'>
                    <label htmlFor='position'>Enter your position title</label>
                    <input 
                        type="text" 
                        id="position" 
                        name="position" 
                        value={position}
                        onChange={this.props.handleChangeWork}
                    ></input>
                </div>
                <div className='main-tasks'>
                    <label htmlFor='mainTasks'>Enter your main tasks</label>
                    <textarea 
                        id="mainTasks" 
                        name="mainTasks"
                        cols="20"
                        value={mainTasks}
                        onChange={this.props.handleChangeWork}
                    ></textarea>
                </div>
                <div className='dateFrom'>
                    <label htmlFor='dateFrom'>When did you start?</label>
                    <input 
                        type="month" 
                        min="1900-01" 
                        max="2022-07"  
                        id="dateFrom" 
                        name="dateFrom" 
                        value={dateFrom}
                        onChange={this.props.handleChangeWork}
                    ></input>
                </div>
                <div className='dateTo'>
                    <label htmlFor='dateTo'>When did you finish?</label>
                    <input 
                        type="month" 
                        min="1900-01" 
                        max="2022-07" 
                        id="dateTo" 
                        name="dateTo" 
                        value={dateTo}
                        onChange={this.props.handleChangeWork}
                    ></input>
                </div>
                <button className="submit-btn" type="submit">Submit section</button>
            </form>
        )
    }
}

export default WorkForm;
