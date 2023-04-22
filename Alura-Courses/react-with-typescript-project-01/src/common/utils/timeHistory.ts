export interface TimeInterface {
  time: number
}

const History = ({timerHistory}: {timerHistory: Array<TimeInterface>}) => {
  return (
      timerHistory.map((timer: any) => (
        timer.time
      ))
  )
}

export default History;
