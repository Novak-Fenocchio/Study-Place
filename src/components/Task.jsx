import React, { Component } from 'react'

export default class Task extends Component {
    render(props) {
        return (
            <div><div className="checkbox-notes" id='0' onClick={this.closeTask}></div><span className='text-note' id='task1' style={this.state.taskClose[0]}>Terminar tarea de geografía</span></div>
        )
    }
}
