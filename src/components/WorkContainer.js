import React, {Component} from 'react';
import WorkList from './WorkList';

class WorkContainer extends Component {
    render() {
        return (
            <div className="cv work--cv">
                <h2 className='section-title'>Career Summary</h2>
                <WorkList allWork={this.props.allWork} handleEditWork={this.props.handleEditWork}/>
                <section>Double click to edit individual work experiences</section>
            </div>
            
        )
    }
}

export default WorkContainer;