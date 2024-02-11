export default function BackgroundBlur({ onToggleOpen, jsConfetti }) {
  return (
    <div
      className="bg-blur"
      onClick={() => {
        onToggleOpen();
        jsConfetti.clearCanvas();
      }}
    ></div>
  );
}
