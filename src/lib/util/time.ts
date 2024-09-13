export const parseTime = (time: number) => {
  // seconds
  time = time * 60;
  const hours = Math.floor(time / 3600).toString().padStart(2, '0');
  const minutes = Math.floor((time % 3600) / 60).toString().padStart(2, '0');
  const seconds = Math.floor(time % 60).toString().padStart(2, '0');

  if (hours === '00') return `${minutes}:${seconds}`;
  else return `${hours}:${minutes}:${seconds}`;
}