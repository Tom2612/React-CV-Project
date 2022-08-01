import React, { Component } from 'react';
import WorkItem from './WorkItem';

class WorkList extends Component {
    render() {
        return (
            <div  className="work--list">
                {this.props.allWork.map(work => (
                    <WorkItem 
                        work={work}
                        key={work.id}
                        handleEditWork={this.props.handleEditWork}
                    />
                ))}
            </div>
        )
    }
}

export default WorkList;