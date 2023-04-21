import React, { useState } from 'react';
import Button from '../Button/Button';
import styles from './Form.module.scss';
import { ListProps } from '../../types/task';
import { v4 as uuidv4 } from 'uuid';

interface Props {
  setTasks: React.Dispatch<React.SetStateAction<ListProps[]>>
}

function Form({ setTasks }: Props) {

  const [task, setTask] = useState("")
  const [time, setTime] = useState("00:00")

  function addTask(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setTasks(oldTasks =>
      [
        ...oldTasks,
        {
          task,
          time,
          selected: false,
          completed: false,
          id: uuidv4()
        }
      ]
    )
    setTask("")
    setTime("00:00")
  }

  return (
    <form className={styles.newTask} onSubmit={addTask}>
        <div className={styles.inputContainer}>
          <label htmlFor='task'>
            Add a new study
          </label>
          <input
            type='text'
            name='task'
            id='task'
            placeholder='What do you want to study'
            value={task}
            onChange={e => setTask(e.target.value)}
            required
          />
        </div>
        <div className={styles.inputContainer}>
          <label htmlFor='time'>
            Time
          </label>
          <input
            type='time'
            step='1'
            name='time'
            id='time'
            min='00:00:00'
            max='01:30:00'
            value={time}
            onChange={e => setTime(e.target.value)}
            required
          />
        </div>
        <Button type="submit">Add</Button>
      </form>
  )
}

export default Form;
