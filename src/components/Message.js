function Message({ children }) {
  return (
    <figure className="message">
      <figcaption>{children}</figcaption>
    </figure>
  );
}

export default Message;
