import style from './task-form.module.css';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import { useState } from 'react';

const TaskForm = (props) => {

    const [name, setName] = useState('');
    const [desc, setDesc] = useState('');
    const [prio, setPrio] = useState('normal');

    const handleSubmit = (e) => {
        e.preventDefault();

        const data = {
            name,
            desc,
            priority: prio
        };

        // Déclanchement de l'event "onNewTask"
        props.onNewTask(data);

        // Reset du formulaire
        setName('');
        setDesc('');
        setPrio('normal');
    }

    return (<>
        <h2>Nouvelle taches</h2>
        <form className={style.formTask} onSubmit={handleSubmit}>
            <div className={classNames(style.inputUser, style.inputName)}>
                <label htmlFor='nom'>Nom</label>
                <input type='text' id='nom' required
                    value={name} onChange={(e) => setName(e.target.value)}/>
            </div>
            <div className={classNames(style.inputUser, style.inputDesc)}>
                <label htmlFor='desc'>Description</label>
                <textarea id='desc'
                    value={desc} onChange={(e) => setDesc(e.target.value)} />
            </div>
            <div className={classNames(style.inputUser, style.inputPrio)}>
                <label htmlFor='prio'>Priorité</label>
                <select id='prio' value={prio} onChange={(e) => setPrio(e.target.value)}>
                    <option value='high'>Urgent</option>
                    <option value='normal'>Normal</option>
                    <option value='low'>Basse</option>
                </select>
            </div>
            <div className={style.actionSubmit}> 
                <button type='submit'>Ajouter</button>
            </div>
        </form>
    </>)
}

TaskForm.defaultProps = {
    onNewTask: () => {}      // Défini la valeur par default => noop
};

TaskForm.propTypes = {
    onNewTask: PropTypes.func // La props event "onNewTask" est de type fonction
}

export default TaskForm;