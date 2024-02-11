const options = {
  day: "numeric",
  month: "long",
  year: "numeric",
};

export default function convertToIsraeliDate(date) {
  if (!date) return;

  const correctDate = new Date(date);
  return new Intl.DateTimeFormat("he-IL", options).format(correctDate);
}
