import React, { Component } from 'react';

class Work extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        // const { companyName, position, mainTasks, dateFrom, dateTo } = this.props;
        const { allWork } = this.props;
        return(
            <div className='cv work--cv'>
                <h2 className='section-title'>Career Summary</h2>
                { allWork.map((work) => {
                return (
                    <div className="work--item" key={work.companyName}>
                        <h2>{work.position} - {work.companyName}</h2>
                        {/* <h2>Company Name: {work.companyName}</h2>
                        <h2>Position Held: {work.position}</h2> */}
                        <p>Main Tasks: {work.mainTasks}</p>
                        <h3>Date from: {work.dateFrom}</h3>
                        <h3>Date To: {work.dateTo}</h3>
                    </div>
                )
            })}
            <button onClick={this.props.onSubmitWork} className="edit-btn"><span>Edit</span></button>
            </div>
        )
    }
}

export default Work;
