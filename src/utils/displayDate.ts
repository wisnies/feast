export const displayDate = (date: string | Date) => {
  const newDate = new Date(date);

  return `${newDate.toLocaleTimeString('en-Us', {
    hour: '2-digit',
    minute: '2-digit',
  })} - ${newDate.toLocaleDateString('en-Us', {
    month: 'short',
  })}/${newDate.toLocaleDateString('en-Us', {
    day: '2-digit',
  })}`;
};
