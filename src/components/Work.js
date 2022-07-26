import React, { Component } from 'react';

class Work extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        // const { companyName, position, mainTasks, dateFrom, dateTo } = this.props;
        const { allWork } = this.props;
        return(
            <div>
                { allWork.map((work) => {
                return <p>{work.companyName}</p>;
            })}
            </div>
            
            // <div className="work--cv">
            //     <h2>Company Name: {companyName}</h2>
            //     <h2>Position: {position}</h2>
            //     <h2>Main Tasks: {mainTasks}</h2>
            //     <h2>Date From: {dateFrom}</h2>
            //     <h2>Date To: {dateTo}</h2>
            //     <button>Remove work</button>
            // </div>
        )
    }
}

export default Work;
