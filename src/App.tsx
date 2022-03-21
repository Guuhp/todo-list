import { useState } from "react";
import TodoTask from "./components/TodoTask/TodoTask";

import "./styles/styles.css";
import { ITask } from "./Interface";
import { ToastContainer, toast } from "react-toastify";

import "react-toastify/dist/ReactToastify.css";

function App() {
  const [task, setTask] = useState("");

  const [todoList, setTodoList] = useState<ITask[]>([]);

  function addTask(): void {
    if (task === "") {
      toast.error("Digite Alguma Tarefa");
    } else {
      const idRandom = (num: number) => Math.floor(Math.random() * num);

      console.log(idRandom(10));

      const newTask = { id: idRandom(9999999999999999999), nameTask: task };
      setTodoList([...todoList, newTask]); //armazena as novas task ecom as antigas

      toast.success("Tarefa cadastrada com sucesso");
    }
  }

  function deleteTask(DeleteTaskById: number) {
    setTodoList(todoList.filter((taskName) => taskName.id !== DeleteTaskById));
	toast.success("Tarefa deletada com sucesso");
  }

  return (
    <div className="App">
      <ToastContainer 
	  autoClose={1500}

	  pauseOnHover={false}
	  />
      <header>
        <h2>Lists</h2>

        <input
          type="text"
          autoComplete="off"
          placeholder="Escrever task..."
          name="task"
          className="input"
          value={task}
          onChange={(e) => setTask(e.target.value)}
        />

        <button type="submit" className="btn-header" onClick={addTask}>
          Adicionar Tarefa
        </button>
      </header>

      <div className="line"></div>

      {todoList.map((task, key) => (
        <div>
          <TodoTask key={task.id} task={task} deleteTask={deleteTask} />
        </div>
      ))}
    </div>
  );
}

export default App;
