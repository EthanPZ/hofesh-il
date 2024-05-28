import Header from "./Header";

export default function MainContainer({ children }) {
  return (
    <div className="main-container">
      <Header />
      {children}
    </div>
  );
}
