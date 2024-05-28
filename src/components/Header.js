import { useHolidays } from "../contexts/HolidaysContext";

export default function Header() {
  const { query, setQuery } = useHolidays();

  return (
    <header className="header">
      <div>
        <h2>כל החגים והחופשים</h2>
        <input
          type="text"
          placeholder="חיפוש..."
          value={query}
          onChange={(e) => {
            setQuery(e.target.value);
          }}
        />
      </div>
      <hr></hr>
      <h1>HofeshIL</h1>
    </header>
  );
}
