export default function Header({ query, setQuery }) {
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
