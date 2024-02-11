import daysLeft from "../functions/daysLeft";
import convertToIsraeliDate from "../functions/convertToIsraeliDate";
import BackgroundBlur from "./BackgroundBlur";

export default function Modal({ onToggleOpen, isOpened, selectedHoliday }) {
  return (
    <>
      <div className={`modal ${isOpened ? "open" : "close"}`}>
        <header>
          <span onClick={onToggleOpen}>
            <box-icon
              size="md"
              name="x"
              animation="tada-hover"
              color="rgba(255, 255, 255, 0.8)"
            ></box-icon>
          </span>

          <div>
            <h2>{selectedHoliday?.hebrew}</h2>
            {selectedHoliday && (
              <p>{convertToIsraeliDate(selectedHoliday?.date)}</p>
            )}
          </div>
        </header>

        <div>
          <h2>
            {daysLeft(selectedHoliday?.date) <= 0
              ? "0"
              : daysLeft(selectedHoliday?.date)}
          </h2>
          <p>ימים נותרו</p>
        </div>
      </div>

      {isOpened && <BackgroundBlur />}
    </>
  );
}
