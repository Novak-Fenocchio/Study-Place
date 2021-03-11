import React, { Component } from 'react'


export default class Notes extends Component {

    constructor()
    {
        super();
        this.state = 
        {
            taskClose: [],
            tasks: []
        }
    }

    addTask = () =>
    {
        console.log(this.state.tasks);
        const tasks = [];
        console.log(tasks);

       const newTask = 'Terminar tarea de matematica'
        tasks.push(newTask);
        console.log(tasks);
 
        const newTask1 = 'Terminar tarea de geografia';
        tasks.splice(tasks.length,0,newTask1);

        const newTask2 = 'Terminar tarea de quimica';
        tasks.splice(tasks.length,0,newTask2);

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

    render() {
        return (
            <section className='section-notes'>
                <div className="header-notas">
                    <h3>Notas</h3>
                </div>

                <div className="main-notas">
                {this.state.tasks.map(task =>(
                    <div className="">
                        <div><div className="checkbox-notes" id='1' onClick={this.closeTask}></div><span className='text-note' id='task2' style={this.state.taskClose[1]}>{task}</span></div>
                        <hr/>
                    </div>
                ))}
                <hr/>
               
                <div><div className="checkbox-notes" id='1' onClick={this.closeTask}></div><span className='text-note' id='task2' style={this.state.taskClose[1]}>Terminar tarea de Matemáticas</span></div>
                        <hr/>
                  {/*   
                    <div><div className="checkbox-notes" id='2' onClick={this.closeTask}></div><span className='text-note' id='task3'>Terminar tarea de Historía</span></div>
                    <hr/>
                    <div><div className="checkbox-notes" id='3' onClick={this.closeTask}></div><span className='text-note' id='task4'>Terminar tarea de geografía</span></div>
                    <hr/>
                    <div><div className="checkbox-notes" id='4' onClick={this.closeTask}></div><span className='text-note' id='task5'>Terminar tarea de Matemáticas</span></div>
                    <hr/>
                    <div><div className="checkbox-notes" id='5' onClick={this.closeTask}></div><span className='text-note' id='task6'>Terminar tarea de Historía</span></div> */}
                </div>
                <div className="add-note-notes">
                    <form action="">
                        <input type="text" name="newNote" placeholder='Escribe tu nota aquí' id=""/>
                        <button>Añadir</button>
                    </form>
                </div>
            </section>
        )
    }
}
