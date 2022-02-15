// import TodoForm from "./components/todo-form/todo-form";
// import { useState } from 'react';
// import TodoList from "./components/todo-list/todo-list";
// import { nanoid } from "nanoid";

// function App() {

//   const [tasks, setTasks] = useState([

//     { id: 1, nom: 'Start !!!!!! ', description: 'web dev ', priorite: 'urgent ', completion: false }
//   ]);



//   const handleAddTask = (task) => {

//     const newTask = { id: nanoid(), nom: task.nom, description: task.description, priorite: task.priorite, completion: false }

//     setTasks(task => task.concat(newTask))

//   }


//   const handleRemoveTask = (id) => {

//     console.log('supprime', id);

//     const updatedList = tasks.filter((task) => task.id !== id);
//     setTasks(updatedList);


//   }




//   return (
//     <div className="App">


//       <TodoForm onNewTask={handleAddTask} />

//       <TodoList onDeleteTask={handleRemoveTask}
//         tasks={tasks}

//       />


//     </div>
//   );
// }



// export default App