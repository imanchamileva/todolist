import TaskForm from "../../componentss/task-form/task-form";
import { useState } from 'react';
import {nanoid} from 'nanoid'
import TaskList from "../../componentss/task-form/task-list/task-list";

const Todoapp = () => {

    //Définition d'un state pour contenir la liste des taches
    const[tasks, setTasks] = useState([])

    const handleNewTask = (data) => {

        const newTask = {
            ...data,
            id:nanoid(),
            isFinish : false
        }

       // ajouter la nouvelle tache dans la liste des taches
    //    taskElements= tout le tableau
    //  [newTask,...taskElements] newTask => s'ajoute comme 1er element ds le tableau puis arrive le reste(=taskElements)
       setTasks(taskElements => [newTask,...taskElements])
    }

    const handleDeleteTask = (id) => {
        // mise à jour de la liste des taches de
        //-> via le filter, on obtient la copie de la liste sans l'element ciblé
        setTasks(taskElements => taskElements.filter(t => t.id !== id))
    }

    const handleFinishTask = (id) => {

        // mise à jour de la liste des taches que
        // via le map, on transforme les donnees  pour valider le isFinish de l'element ciblé
        setTasks(taskElements => taskElements.map(task => (task.id !==id) ? task :{...task, isFinish : true}))
        // si id est bon, on decompose l'objet tache et on le modifie le

        // pour chaque element tache de taskElement, est ce que task.id est different de if, si different => envoyer le result
   
        
        
        
    }
    return (
        <main>

            <TaskForm onNewTask={handleNewTask}/> 
            <TaskList datas={tasks}
            onDeleteTask={handleDeleteTask}
            onFinishTask={handleFinishTask}/>

        </main>
    )
}




export default Todoapp;