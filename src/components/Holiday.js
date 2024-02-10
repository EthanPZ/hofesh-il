export default function Holiday({ holiday, onToggleOpen, setSelectedHoliday }) {
  return (
    <article
      className="holiday"
      onClick={() => {
        setSelectedHoliday(holiday);
        onToggleOpen();
      }}
    >
      <p>{holiday.hebrew}</p>
    </article>
  );
}
