import PropTypes from 'prop-types';
import TaskListItem from './task-list-item';
import style from './task-list.module.css';

const TaskList = (props) => {

    // Utilisation de la fonction "map" pour transformer l'array JS en array de JSX
    const tasksJSX = props.datas.map(
        // Utilisation du composant "item" précédement créé.
        task => <TaskListItem {...task} key={task.id} 
                onDelete={props.onDeleteTask}
                onFinish={props.onFinishTask}
                />
    );

    return (
        <div className={style.listApp}>
            <h2>La liste des taches</h2>
            <div className={style.listContent}>
                {tasksJSX}
            </div>
        </div>
    );
}

TaskList.defaultProps = {
    datas: [],
    onDeleteTask: () => {},
    onFinishTask: () => {}
};

TaskList.propTypes = {
    datas: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.string.isRequired
        // Permet de définir que l'array doit contenir au minimum l'id
    })),
    onDeleteTask: PropTypes.func,
    onFinishTask: PropTypes.func
}

export default TaskList;