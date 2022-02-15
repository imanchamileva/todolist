import { useState } from 'react';
import style from './list.module.css'


const TodoList = (props) => {

    const { tasks } = props;




    // TODO Cleanup this ↓
    const tasksJSX = tasks.map(
        task => <div key={task.id}>
            <h2>{task.nom}</h2>
            <p>{task.description}</p>
            <p>{task.priorite} </p>
            <p>{task.completion}</p>
            <button >Ajouter</button>
            {/* onClick={(e) => handleRemoveTask(task.id)} */}
            <button onClick={() => props.onDeleteTask(task.id)}>Supprimer</button>
        </div>
    )


    return (
        <>
            <div className={style.principale}>
                {tasksJSX}
            </div>
        </>
    )
}


//ceinture de sécurité, marche meme sans , si on utilise pas le deletetask, plante pas
TodoList.defaultProps =
{
    onDeleteTask: () => { }
}

    
export default TodoList