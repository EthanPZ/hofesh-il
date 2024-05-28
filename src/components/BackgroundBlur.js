import { useUI } from "../contexts/UIContext";

export default function BackgroundBlur() {
  const { handleToggleOpen: onToggleOpen, jsConfetti } = useUI();

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
