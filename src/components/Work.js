import React, { Component } from 'react';

class Work extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        const { allWork } = this.props;
        return(
            <div className='cv work--cv'>
                <h2 className='section-title'>Career Summary</h2>
                { allWork.map((work) => {
                return (
                    <div className="work--item" key={work.companyName}>
                        <h3><strong>{work.dateFrom.slice(0, 4)} - {work.dateTo.slice(0,4)}: </strong>{work.companyName}</h3>
                        <h3 className="main-tasks">{work.position} | {work.mainTasks}</h3>
                        <button onClick={this.props.onSubmitWork} className="edit-btn"><span>Edit</span></button>
                    </div>
                )
            })}
            </div>
        )
    }
}

export default Work;
