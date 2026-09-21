import { useState } from 'react'

function App() {
  const [task, setTask] = useState('')
  const [tasks, setTasks] = useState([])

  function addTask() {
    if (task.trim() === '') return

    setTasks([
      ...tasks,
      {
        id: Date.now(),
        name: task,
        done: false,
      },
    ])

    setTask('')
  }

  function toggleTask(id) {
    setTasks(
      tasks.map((task) =>
        task.id === id
          ? { ...task, done: !task.done }
          : task
      )
    )
  }

  function deleteTask(id) {
    setTasks(tasks.filter((task) => task.id !== id))
  }

  return (
    <div>
      <h1>Mano rutina</h1>

      <input
        type="text"
        placeholder="Įrašyk užduotį..."
        value={task}
        onChange={(e) => setTask(e.target.value)}
      />

      <button onClick={addTask}>
        Pridėti
      </button>

      <h2>Mano užduotys</h2>

      {tasks.map((task) => (
        <div key={task.id}>
          <input
            type="checkbox"
            checked={task.done}
            onChange={() => toggleTask(task.id)}
          />

          <span>
            {task.name}
          </span>

          <button onClick={() => deleteTask(task.id)}>
            Ištrinti
          </button>
        </div>
      ))}
    </div>
  )
}

export default App