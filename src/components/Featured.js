export default function Featured({ children }) {
  return (
    <article className="holiday featured">
      <div className="featured-holiday">{children}</div>
    </article>
  );
}
