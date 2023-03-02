import React, { useState } from 'react';
import './App.css';
import UserForm from './components/UserForm';
import ElementList from './components/ElementList';

function App() {

  const [GoalList, setGoalList] = useState([{ value: 'Do all exercises!', id: 'g1' },
  { value: 'Finish the course!', id: 'g2' }]);


  const listHandler = (listValue) => {
    setGoalList((previous) => {
      return ([listValue, ...previous])
    })
    console.log(GoalList)

  }

  const deleteItemHandler = (id) => {

    setGoalList((previous) => {
      const updateList = previous.filter(goal => goal.id !== id);
      return (updateList)
    });

  }

  return (
    <div className="App">
      <header className="App-header">
        <UserForm onSubmitHandler={listHandler} />
        <ElementList items={GoalList} deleteItems={deleteItemHandler} />
      </header>
    </div>
  );
}

export default App;
