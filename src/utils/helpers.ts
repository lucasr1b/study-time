const getMinutes = (time: number) => { return time % 60 }
const getHours = (time: number) => { return Math.floor(((time % 3600) / 60)) }

export const formatTime = (time: number) => {
  const minutes = getMinutes(time);
  const hours = getHours(time);

  if (minutes > 0 && hours == 0) return `${minutes}m`
  if (minutes == 0 && hours > 0) return `${hours}h`
  return `${hours}h ${minutes}m`;
}

export const formatFancyTime = (time: number) => {
  const minutes = getMinutes(time);
  const hours = getHours(time);

  if (hours == 1 && minutes == 0) return `${hours} hour`
  if (hours > 1 && minutes == 0) return `${hours} hours`
  return `${hours}h ${minutes}m`
}

export const formatWeeklyProgressTime = (time: number, maxTime: number) => {
  const minutes = getMinutes(time);
  const hours = getHours(time);
  if (minutes == 0 && hours == 0) return '0 minutes completed';
  if (minutes > 0 && hours == 0) return `${minutes}m / ${formatTime(maxTime)} completed`
  if (minutes == 0 && hours > 0) return `${hours}h / ${formatTime(maxTime)} completed`
  if (time >= maxTime) return 'Weekly goal completed';
  return `${hours}h ${minutes}m / ${formatTime(maxTime)} completed`;
}
