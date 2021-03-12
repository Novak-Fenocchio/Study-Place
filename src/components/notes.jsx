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
            tasks: tasks
        }) 
        console.log(tasks);
    }
    closeTask = (e) =>
    {
        const id = e.currentTarget.id;

        let styles = [];
        
        {
            this.state.taskClose.map(taskver =>
            {
             styles.splice(styles.length,0,taskver);
            })
        }


        let taskClosea = {textDecoration: 'line-through', color: 'gray'};
        styles.splice(styles.length,0,taskClosea);
        
        console.log(styles);

        this.setState({
            taskClose : styles
        }) 
    }


    updateInput(event) {
        this.setState({newTaskText: event.target.value});
    }

    createTask(event) {
        const newTaskText = this.state.newTaskText;
        event.preventDefault();
        this.addTask(newTaskText)
      }
      
    hiddenTask = (e,ref) =>
      {

      }

    focusInput = (id) => {
         
            this.state.inputRefs[0].style.textDecoration = 'line-through';
            this.state.inputRefs[0].style.color = 'gray';
        }
      setRef = (ref) =>
      {
        let temporalRefs = [];

        temporalRefs.push(ref);  
        this.setState({
            inputRefs: temporalRefs
        })
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
                        <div key={index} onClick={this.focusInput}  id={index}><div className="checkbox-notes"  onClick={this.closeTask}></div><span className='text-note' ref={this.setRef}  id={'task'+index}>{task}</span></div>
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
