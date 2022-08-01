import React, { Component } from 'react';

class WorkItem extends Component {
    state = {
        editing: false
    }
    handleEditing = () => {
        this.setState({
            editing: true
        })
    }
    handleUpdatedDone = e => {
        if (e.key === 'Enter') {
            this.setState({editing: false})
        }
    }
    render() {
        const { companyName, position, mainTasks, dateFrom, dateTo, id } = this.props.work;
        let viewMode = {};
        let editMode = {};

        if (this.state.editing) {
            viewMode.display = 'none'
        } else {
            editMode.display = 'none'
        }
        return (
            <div>
                <div onDoubleClick={this.handleEditing} style={viewMode} className="work--item">
                    <h3 className="work--item--title"><strong>{dateFrom.slice(0, 4)} - {dateTo.slice(0,4)}: </strong>{companyName}</h3>
                    <h3 className="main-tasks">{position} | {mainTasks}</h3>
                    <button className='remove-btn' style={{display: 'none'}}>Remove</button>
                </div>
                <div className='edit-form' style={editMode} onKeyDown={this.handleUpdatedDone}>
                    <input 
                        type="text" 
                        name="companyName" 
                        value={companyName} 
                        onChange={e => {
                            this.props.handleEditWork(e, id)
                        }}
                        onKeyDown={this.handleUpdatedDone}
                    />
                    <input 
                        type="text" 
                        name="position" 
                        value={position} 
                        onChange={e => {
                            this.props.handleEditWork(e, id)
                        }}
                    />
                    <textarea 
                        value={mainTasks} 
                        name="mainTasks"
                        onChange={e => {
                            this.props.handleEditWork(e, id)
                        }}
                    />
                    <input 
                        type="month" 
                        name="dateFrom"
                        value={dateFrom}
                        onChange={e => {
                            this.props.handleEditWork(e, id)
                        }}
                    />
                    <input 
                        type="month" 
                        name="dateTo"
                        value={dateTo}
                        onChange={e => {
                            this.props.handleEditWork(e, id)
                        }}
                    />
                </div>
            </div>
        )
    }
}

export default WorkItem;