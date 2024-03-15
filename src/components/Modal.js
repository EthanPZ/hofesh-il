import daysLeft from "../functions/daysLeft";
import convertToIsraeliDate from "../functions/convertToIsraeliDate";
import BackgroundBlur from "./BackgroundBlur";
import JSConfetti from "js-confetti";
import { formatJewishDateInHebrew, toJewishDate } from "jewish-date";
import { useEffect } from "react";

const jsConfetti = new JSConfetti();

export default function Modal({ onToggleOpen, isOpened, selectedHoliday }) {
  if (daysLeft(selectedHoliday?.date) <= 0 && isOpened)
    jsConfetti.addConfetti({
      confettiNumber: 50,
    });

  const jewishDate = toJewishDate(new Date(selectedHoliday?.date));

  return (
    <>
      <div className={`modal ${isOpened ? "open" : "close"}`}>
        <header>
          <span
            onClick={() => {
              onToggleOpen();
              jsConfetti.clearCanvas();
            }}
          >
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
              <p>
                {convertToIsraeliDate(selectedHoliday?.date)} -{" "}
                {formatJewishDateInHebrew(jewishDate)}
              </p>
            )}
          </div>
        </header>

        {daysLeft(selectedHoliday?.date) <= 0 ? (
          <div>
            <h2 style={{ fontSize: "25px" }}>
              נראה שעברנו את המועד, עבר מהר אה?
            </h2>
          </div>
        ) : (
          <div>
            <h2>
              {daysLeft(selectedHoliday?.date) <= 0
                ? "0"
                : daysLeft(selectedHoliday?.date)}
            </h2>
            <p>ימים נותרו</p>
          </div>
        )}
      </div>

      {isOpened && (
        <BackgroundBlur onToggleOpen={onToggleOpen} jsConfetti={jsConfetti} />
      )}
    </>
  );
}
