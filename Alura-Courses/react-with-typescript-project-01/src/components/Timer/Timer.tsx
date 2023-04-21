import { useState, useEffect } from 'react';
import Button from "../Button/Button";
import Watch from "./Watch/Watch";
import styles from './Timer.module.scss'
import { ListProps } from "../../types/task";
import { transformTimeToSeconds } from '../../common/utils/time';

interface Props {
  selected: ListProps | undefined
  finishTask: () => void
}

export function Timer({ selected, finishTask }: Props) {
  const [time, setTime] = useState<number>()

  useEffect(() => {
    if (selected?.time) {
      setTime(transformTimeToSeconds(selected.time)) 
    }
  }, [selected])
  
  function countdown(timeCount: number = 0) {
    setTimeout(() => {
      if (timeCount > 0) {
        setTime(timeCount - 1)
        return countdown(timeCount - 1)
      }
      finishTask()
    }, 1000)
  }

  return (
    <div className={styles.timer}>
      <p className={styles.title}>Choose a card and start the timer</p>
      <div className={styles.watchWrapper}>
        <Watch time={time} />
      </div>
      <Button onClick={() => countdown(time)}>Start!</Button>
    </div>
  )
}