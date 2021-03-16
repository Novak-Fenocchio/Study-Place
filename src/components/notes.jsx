import React, { Component } from 'react'


export default class Notes extends Component {

    constructor()
    {
        super();

        this.state = 
        {
            taskClose: [],
            tasks: [],
            newTaskText : '',
            inputRefs : []
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
            tasks: tasks,
            newTaskText: ''
        }) 
        console.log(tasks);
    }

    closeTask = (id) =>
    {
        const tasks = [];
  

        console.log(tasks);

        {this.state.tasks.map(task =>
         {
            tasks.splice(tasks.length,0,task);
        })}

        console.log(tasks);
    
         this.setState({
            tasks: tasks
        }) 
        tasks.splice(id,1);
        console.log(tasks); 

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
                    <h3 ref='yeah'>Notas</h3>
                </div>

                <div className="main-notas">
                {this.state.tasks.map((task, index) =>(
                    <React.Fragment>    
                        <div key={index} onClick={(event) =>this.closeTask(index)}><div className="checkbox-notes"></div><span className='text-note'>{task}</span></div>
                        <hr/>
                    </React.Fragment>
                ))}
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
