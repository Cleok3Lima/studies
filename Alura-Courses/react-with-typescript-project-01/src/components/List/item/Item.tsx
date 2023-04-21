import { ListProps } from '../../../types/task';
import styles from './Item.module.scss'

interface Props extends ListProps{
  selectTask: (selectedTask: ListProps) => void
}

export default function Item(props: Props) {
  const {
    task,
    time,
    selected,
    completed,
    id,
    selectTask } = props
  
  return (
    <li
      className={`${styles.item} ${selected ? styles.selectedItem : ''} ${completed ? styles.completedItem : ''}`}
      onClick={() => !completed && selectTask({
        task,
        time,
        selected,
        completed,
        id
      })}
    >
      <h3>{task}</h3>
      <span>{time}</span>
      {completed && <span className={styles.completed} aria-label='Completed Task'></span>}
    </li>
  )
}