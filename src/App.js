import Counter from './components/counter/counter';
import Header from './containers/header/header';
import TodoApp from './containers/todo-app/todo-app';
import {useEffect, useState} from 'react'
import Horloge from './components/horloge/horloge';
import DateDuJour from './components/date/date';


function App() {

  const[display,setDisplay] = useState(true)

    const handleToggleDisplay = () => {
      setDisplay(d => !d)

    }



  return (
      <>
  <h1>demo 06 - Cycle de vie-EXO Horloge</h1>

  <Horloge />
  <DateDuJour />

  <hr />
    








    <h1>demo 06 - Cycle de vie</h1>

      <button onClick={handleToggleDisplay}>Jour/Nuit</button>
      {display && (
         <Counter />
      )}
     













    <hr />
      <Header />
    <hr />
      <TodoApp />
    </>
  );
}

export default App;