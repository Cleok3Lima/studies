export function transformTimeToSeconds(time: string) {
  const [hours = '0', minutes = '0', seconds = '0'] = time.split(":")

  const transformHoursInSeconds = Number(hours) * 3600
  const transformMinutesInSeconds = Number(minutes) * 60
  const timeFixed = transformHoursInSeconds + transformMinutesInSeconds + Number(seconds)
  return timeFixed
}