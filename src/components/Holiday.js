import daysLeft from "../functions/daysLeft";

export default function Holiday({ holiday, onToggleOpen, setSelectedHoliday }) {
  return (
    <article
      className="holiday"
      onClick={() => {
        setSelectedHoliday(holiday);
        onToggleOpen();
      }}
    >
      <p>
        {holiday?.hebrew}{" "}
        {daysLeft(holiday?.date) <= 0 && (
          <span className="side-note">(עברנו אותו)</span>
        )}
      </p>
    </article>
  );
}
