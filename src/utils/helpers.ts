export const formatTime = (time: number) => {
  const minutes = time % 60;
  const hours = Math.floor((time % 3600) / 60);

  if (minutes > 0 && hours == 0) return `${minutes}m`
  if (minutes == 0 && hours > 0) return `${hours}h`
  return `${hours}h ${minutes}m`;
}