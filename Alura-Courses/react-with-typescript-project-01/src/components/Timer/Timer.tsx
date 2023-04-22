import { useState, useEffect } from 'react';
import Button from "../Button/Button";
import Watch from "./Watch/Watch";
import { TimeInterface } from "../../common/utils/timeHistory";
import styles from './Timer.module.scss'
import { ListProps } from "../../types/task";
import { transformTimeToSeconds } from '../../common/utils/time';

interface Props {
  selected: ListProps | undefined
  finishTask: () => void
}

export function Timer({ selected, finishTask }: Props) {
  const [time, setTime] = useState<number>(0)
  const [run, setRun] = useState<boolean>(false)
  const [timerHistory, setTimerHistory] = useState<Array<TimeInterface>>([])

  useEffect(() => {
    if (selected?.time) {
      setTime(transformTimeToSeconds(selected.time)) 
    }
  }, [selected])

  const startTimer = () => {
    setRun(true)
  }

  const pauseTimer = () => {
    setRun(false)
  }

  const stopTimer = () => {
    setRun(false)
    setTimerHistory([...timerHistory, { time: time }])
    setTime(0)
  }

  useEffect(() => {
    let interval: number
    if (run === true) {
      interval = window.setInterval(() => {
        setTime((time) => time - 1)
      }, 1000)
    }
    if (time < 0) {
      setTime(0)
      finishTask()
    }
    return () => clearInterval(interval);
  }, [run, finishTask, time])
  
  return (
    <div className={styles.timer}>
      <p className={styles.title}>Choose a card and start the timer</p>
      <div className={styles.watchWrapper}>
        <Watch time={time} />
      </div>
      <div className={styles.buttonsWrapper}>
        <Button onClick={() => {startTimer()}} disabled={run ? true : false}>Start!</Button>
        <Button onClick={() => {pauseTimer()}}>Pause!</Button>
        <Button onClick={() => {stopTimer()}}>Stop!</Button>
      </div>
    </div>
  )
}