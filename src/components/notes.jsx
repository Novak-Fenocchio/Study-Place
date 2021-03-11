import React, { Component } from 'react'


export default class Notes extends Component {

    constructor()
    {
        super();
        this.state = 
        {
            taskClose: [],
            tasks: [],
            newTaskText : ''
        }

        this.updateInput = this.updateInput.bind(this);
        this.createTask = this.createTask.bind(this);
    }

    addTask = (taskText) =>
    {
     
        const tasks = [];
  
        
       const newTask = taskText;
       tasks.splice(tasks.length,0,newTask);
        console.log(tasks);

        {this.state.tasks.map(task =>
         {
            console.log(task);
            tasks.splice(tasks.length,0,task);
        })}
        console.log(tasks);
        

 


















         this.setState({
            tasks: tasks
        }) 
        console.log(tasks);
    }
    closeTask = (e) =>
    {
        this.addTask()
    /*     const id = e.currentTarget.id;
        let styles = [];
       
        console.log(id);
        let taskClosea = {textDecoration: 'line-through', color: 'gray'};
        styles.push(taskClosea);
        console.log(styles);
  
        let taskClosea2 = {textDecoration: 'line-through', color: 'red'};
        styles.push(taskClosea2);
                                


        console.log(styles);

        this.setState({
            taskClose : styles
        }) */
    }


    updateInput(event) {
        this.setState({newTaskText: event.target.value});
    }

    createTask(event) {
        const newTaskText = this.state.newTaskText;
        event.preventDefault();
        this.addTask(newTaskText)
      }

    render() {
        return (
            <section className='section-notes'>
                <div className="header-notas">
                    <h3>Notas</h3>
                </div>

                <div className="main-notas">
                {this.state.tasks.map(task =>(
                    <React.Fragment>
                        <div><div className="checkbox-notes" id='1' onClick={this.closeTask}></div><span className='text-note' id='task2' style={this.state.taskClose[1]}>{task}</span></div>
                        <hr/>
                    </React.Fragment>
                ))}
                <hr/>
               
                <div><div className="checkbox-notes" id='1' onClick={this.closeTask}></div><span className='text-note' id='task2' style={this.state.taskClose[1]}>Terminar tarea de Matemáticas</span></div>
                        <hr/>
                </div>
                <div className="add-note-notes">
                    <form onSubmit={this.createTask}>
                    <input type="text" value={this.state.newTaskText}  placeholder='Escribe tu nota aquí' onChange={this.updateInput} />
                
                    <input type="submit" value="Añadir" />
                </form>       
                </div>
            </section>
        )
    }
}
