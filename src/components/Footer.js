import israeliFlag from "../resources/israel-flag.png";

export default function Footer() {
  return (
    <footer>
      <div>
        <p>
          אהבתם? 💘{" "}
          <a href="https://ethanpz.com/" target="_blank" rel="noreferrer">
            <span style={{ textDecoration: "underline", cursor: "pointer" }}>
              מי היוצר?
            </span>
          </a>
        </p>
      </div>

      <div>
        <img src={israeliFlag} alt="israeli flag" />
        <h2>HofeshIL</h2>
      </div>
    </footer>
  );
}
