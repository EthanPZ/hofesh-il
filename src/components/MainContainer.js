import Header from "./Header";

export default function MainContainer({ query, setQuery, children }) {
  return (
    <div className="main-container">
      <Header query={query} setQuery={setQuery} />
      {children}
    </div>
  );
}
