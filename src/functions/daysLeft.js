export default function daysLeft(date) {
  const oneDay = Math.round(24 * 60 * 60 * 1000);
  const firstDate = new Date(date);
  const secondDate = new Date();

  return Math.round((firstDate - secondDate) / oneDay);
}
