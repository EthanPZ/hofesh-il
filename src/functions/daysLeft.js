export default function daysLeft(date) {
  if (!date) return;

  const oneDay = 24 * 60 * 60 * 1000;
  const firstDate = new Date(date);
  const secondDate = new Date();

  return Math.ceil((firstDate - secondDate) / oneDay);
}
