import Header from "./Header";

export default function MainContainer({ query, setQuery, onSearch, children }) {
  return (
    <div className="main-container">
      <Header query={query} setQuery={setQuery} />
      {children}
    </div>
  );
}
