import React, {Component, useState, useEffect} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faCircleCheck, faPen, fas, faTrash
} from '@fortawesome/free-solid-svg-icons';
import './App.css';




function App(){
    

    // Tasks state

    const[toDo, setToDO] = useState([ 
        // {"id" :2, "title": "Task 2", "status": false},
        // {"id" :1, "title": "Task 1", "status": false},
    ]);

    //Temp State

    const [newTask, setnewTask] = useState('');
    const [updateTask, setupdateTask] = useState('');

    //add Task

    const addTask=()=>{
        if(newTask) {
            let num =toDo.length + 1;
            let newEntry = {id: num, title: newTask, status:false};
            setToDO([...toDo, newEntry]);
            setnewTask('');
            
        }

    }

    //delete Task

    const deleteTask=(id)=>{
        let newTasks = toDo.filter
        ( task => task.id !== id);
        setToDO(newTasks);

        }

       




    // Mark Task as done or completed

    const markDone=(id)=>{
        let newTask = toDo.map(task=>{
            if(task.id===id){
                return({...task, status: !task.status})
            }

            return task
        })

        setToDO(newTask)


    }

    //Cancel update

    const cancelUpdate=()=>{
        setupdateTask('');

    }

    // Change Task for update

    const changeTask=(e)=>{
        let newEntry = {
            id: updateTask.id,
            title:e.target.value,
            status: updateTask.status ? true : false
        }

        setupdateTask(newEntry)

 
    }
    
    //update task

    const updatesTask=()=>{
        let filterRecords =  [...toDo].filter( task => task.id !== updateTask.id);
        let updateObject = [...filterRecords, updateTask]
        setToDO(updateObject);
        setupdateTask('')

    }
    

    return(
        <div className='tc' >
            <h1>To Do List App(ReactJS)</h1>
             <br></br> 

             {updateTask && updateTask ? (

                <div>
                    <div className='row'>
                        <div className='col'>
                            <input
                            value={updateTask && updateTask.title}
                            onChange={ (e) => changeTask(e)}
                            className='form-control form-control-lg'/>
                        </div>

                        <div className='col-auto'>
                            <button
                                onClick={updatesTask}
                            className='btn btn-lg btn-success mr-20'>
                                Update
                            </button>

                            <button
                            onClick={cancelUpdate}
                            className='btn btn-lg btn-warning mr-20'>
                                Cancel
                                
                            </button>
                        </div>
                    </div>
                    <br/>
                </div>

             ) : (
                <div>
                <div className='row'>
                    <div className='col'>
                        <input
                         value={newTask}
                         onChange={(e) => setnewTask(e.target.value)}
                          className='form-control form-control-lg'/>
                    </div>

                    <div className='col-auto'>
                        <button
                        onClick={addTask}
                        className='btn btn-lg btn-success'>
                            Add Task
                        </button>
                    </div>
                </div>
                <br/>
                </div>

             )}

             {/* update task */}

            
              


            {/* Add task  */}
               


             {/* {Display Todos} */}

             {toDo && toDo.length ? '' : "No Tasks..."}

            {toDo && toDo
            
            .sort((a, b) =>a.id > b.id ? 2 : -2)
            
            .map((task, index )=>{

                return(

        
                    <React.Fragment key={task.id}>
                        <div className='taskBg'>
                            <div className={task.status ? 'done' : ''}>
                            <span className='taskNumber'>{index + 1}</span>
                            <span className='taskText'>{task.title}</span>
                            </div> 
                            <div className='iconswrap'>
                                <span title='Completed / Not Completed'
                                  onClick={() => markDone(task.id)}>
                                    <FontAwesomeIcon icon={faCircleCheck}/>
                                </span>

                                {task.status ? null : (
                                        <span title='Edit'
                                            onClick={ () => setupdateTask({
                                                id: task.id,
                                                title: task.title,
                                                status: task.status ? true : false 
                                            })}>                             
                                        <FontAwesomeIcon icon={faPen}/>   
                                        </span>  
                                        )}
                              
                                <span title='delete'
                                 onClick={ () => deleteTask(task.id)}>
                                    <FontAwesomeIcon icon={faTrash}/>   
                                </span>
                            </div>
                        </div>
                           
                    </React.Fragment>
                )




            })
            
            };

             
        
        </div>
    );
}



export default App;