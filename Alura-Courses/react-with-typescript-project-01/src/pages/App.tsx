import React, { useState } from 'react';
import Form from '../components/Form/Form';
import List from '../components/List/List';
import styles from './App.module.scss'
import { Timer } from '../components/Timer/Timer';
import { ListProps } from '../types/task';

function App() {
  const [tasks, setTasks] = useState<ListProps[]>([])
  const [selected, setSelected] = useState<ListProps>()

  function selectTask(selectedTask: ListProps) {
    setSelected(selectedTask)
    setTasks(previousTasks => previousTasks.map(task => ({
      ...task,
      selected: task.id === selectedTask.id ? true : false
    })))
  }

  function finishTask() {
    if (selected) {
      setSelected(undefined)
      setTasks(previousTasks => previousTasks.map(task => {
        if (task.id === selected.id) {
          return {
            ...task,
            selected: false,
            completed: true
          }
        }
        return task
      }))
    }
  }

  return (
    <div className={styles.AppStyle}>
      <Form setTasks={setTasks} />
      <List
        tasks={tasks}
        selectTask={selectTask}
      />
      <Timer
        selected={selected}
        finishTask={finishTask}
      />
    </div>
  );
}

export default App;
