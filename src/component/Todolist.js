import React, { Component } from 'react'

export class Todolist extends Component {
    constructor() {
        super();
        this.state = {
            taskslist: [],
        };
    }
    addTask() {
        const task = document.getElementById('task').value;
        this.setState({
            taskslist: [...this.state.taskslist, task]
        });
        document.getElementById('task').value = '';
        console.log(this.state.taskslist);

    }
    Deletetask(index) {
        this.state.taskslist.splice(index, 1);
        this.setState({
            taskslist: this.state.taskslist
        });
    }
    Updatetask(index) {
        let update = window.prompt('Enter the updated task');
        this.state.taskslist[index] = update;
        this.setState({
            taskslist: this.state.taskslist
        });
    }
    render() {
        return (
            <div style={{backgroundColor:'grey'}}> 
                <div className='heading' >
                    <h1>Todo list</h1>
                    <h3>Add Task</h3>
                </div>
                <div id='ipfield'>
                    Enter Task Name: &nbsp;&nbsp;<input type="text" name="task" id="task" />
                    <button onClick={() => this.addTask()}> Add Task </button>
                </div>
                <br />
                <br />

                <div>
                    <h3>Todo list</h3>
                    <table border='1' style={{marginLeft:'auto',marginRight:'auto'}} >
                        <thead>
                            <tr>
                                <td>Sr. No</td>
                                <td>Task Name</td>
                                <td>Action</td>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                this.state.taskslist.map((element, index) =>
                                    <tr>
                                        <td>{index + 1}</td>
                                        <td>{element}</td>
                                        <td> <button onClick={() => this.Updatetask(index)}>Update</button> &nbsp; <button onClick={() => this.Deletetask(index)}>Delete</button> </td>
                                    </tr>
                                )
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        )
    }
}

export default Todolist;