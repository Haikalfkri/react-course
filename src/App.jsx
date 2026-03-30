import './App.css'

import Todo from './components/Todo'
import TodosTitle from './components/TodosTitle'
import Popup from './components/Popup'

function App() {
  return (
    <>
      <TodosTitle />
      <div>
        <input type='text' onChange={(event) => {
          console.log(event.target.value)
        }} />
        <button>Add to do</button>
      </div>
      <Todo 
        task="Finish React Crash Course"
      />
      <Todo 
        task="Learn MERN stack within 3 months "
      />
      <Todo 
        task="Build a startup"
      />
      <Popup title="Are you 100% sure?" />
    </>
  )
}

export default App
