import styles from './Watch.module.scss'

interface Props {
  time: number | undefined
}

export default function Watch({ time = 0 }: Props) {
  const minutes = Math.floor(time/60)
  const seconds = time % 60
  const [minuteTen, minuteUnit] = String(minutes).padStart(2, '0')
  const [secondsTen, secondsUnit] = String(seconds).padStart(2, '0')

  return (
    <>
      <span className={styles.watchNumbers}>{minuteTen}</span>
      <span className={styles.watchNumbers}>{minuteUnit}</span>
      <span className={styles.watchDivider}>:</span>
      <span className={styles.watchNumbers}>{secondsTen}</span>
      <span className={styles.watchNumbers}>{secondsUnit}</span>
    </>
  )
}