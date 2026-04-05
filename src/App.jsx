import './App.css'

import Todo from './components/Todo'
import TodosTitle from './components/TodosTitle'
import Popup from './components/Popup'
import { useState, useEffect } from 'react'
import Counter from './components/Counter'

function App() {
  // return <Counter />
  const [popupOpen, setPopupOpen] = useState(false);

  function togglePopUp() {
    setPopupOpen(true);
    console.log('Parent');
  }

  function closePopUp() {
    setPopupOpen(false);
  }

  useEffect(() => {
    console.log('Only when component mounts');
  }, [])

  useEffect(() => {
    console.log(`When component mounts and ${popupOpen} changes`);
  }, [popupOpen])

  useEffect(() => {
    console.log('On every render');
  })

  return (
    <>
      <TodosTitle />
      <div>
        <input type='text' onChange={(event) => {
          console.log(event.target.value)
        }} />
        <button onClick={() => setPopupOpen(true)}>Add to do</button>
      </div>
      <Todo 
        togglePopUp = {togglePopUp}
        task="Finish React Crash Course"
      />
      <Todo 
        togglePopUp = {togglePopUp}
        task="Learn MERN stack within 3 months "
      />
      <Todo 
        togglePopUp = {togglePopUp}
        task="Build a startup"
      />
      { popupOpen && <Popup closePopUp={closePopUp} title="Are you 100% sure?" /> }
    </>
  )
}

export default App
