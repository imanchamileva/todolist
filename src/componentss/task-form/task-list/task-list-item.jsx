import PropTypes from 'prop-types';
import classNames from 'classnames';
import style from './task-list-item.module.css';

const TaskListItem = (props) => {
    // Récuperation des données a afficher
    const {id, name, desc, priority, isFinish} = props;
    
    // Récuperation des events à envoyer
    const {onFinish, onDelete} = props;

    // Définition du style pour une tache via "classnames"
    const styleTask = classNames({
        [style.task] : true,
        [style.isDone] : isFinish
    })

    // Définition du rendu
    return (
        <div className={styleTask}>
            <div className={style.taskInfo}>
                <h3>{name} {(priority === 'high') && <span className={style.urgent}>(Urgent)</span>}</h3>
                {(desc.trim() !== '') ? (
                    <p>{desc}</p>
                ): (
                    <p>Aucunne description...</p>
                )}
            </div>
            <div className={style.taskAction}>
                <button onClick={() => onFinish(id)} disabled={isFinish}>Terminer</button>
                <button onClick={() => onDelete(id)}>Supprimer</button>
            </div>
        </div>
    )
}

TaskListItem.defaultProps = {
    onFinish: () => {},
    onDelete: () => {}
}

TaskListItem.propTypes = {
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    desc: PropTypes.string.isRequired,
    priority: PropTypes.string.isRequired,
    isFinish: PropTypes.bool.isRequired,
    onFinish: PropTypes.func,
    onDelete: PropTypes.func
}

export default TaskListItem;