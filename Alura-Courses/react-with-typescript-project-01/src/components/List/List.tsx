import { ListProps } from '../../types/task';
import styles from './List.module.scss'
import Item from './item/Item';

interface Props {
  tasks: ListProps[],
  selectTask: (selectedTask: ListProps) => void
}

function List({tasks, selectTask}: Props) {
   
  return (
    <aside className={styles.taskList}>
      <h2>Studies of the day</h2>
      <ul>
        {tasks.map((item) => (
          <Item
            selectTask={selectTask}
            key={item.id}
            {...item}
          />
        ))}
        
      </ul>
    </aside>
  )
}

export default List;