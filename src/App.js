import mouseEffect from "./functions/mouseEffect";
import { useEffect, useState } from "react";
import "boxicons";
import Footer from "./components/Footer";
import Holiday from "./components/Holiday";
import HolidayDivsContainer from "./components/HolidayDivsContainer";
import MainContainer from "./components/MainContainer";
import Modal from "./components/Modal";
import Loading from "./components/Loading";

export default function App() {
  const [holidays, setHolidays] = useState([]);
  const [isOpened, setIsOpened] = useState(false);
  const [selectedHoliday, setSelectedHoliday] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  function handleToggleOpen() {
    setIsOpened((open) => !open);
  }

  useEffect(function () {
    async function fetchHolidays() {
      try {
        setIsLoading(true);
        const res = await fetch(
          "https://www.hebcal.com/hebcal/?v=1&cfg=json&maj=on&min=on&mod=on&year=now&month=x"
        );

        const data = await res.json();
        setHolidays(data?.items);
      } catch (err) {
        console.error(err);
      } finally {
        setIsLoading(false);
      }
    }

    fetchHolidays();
  }, []);

  useEffect(function () {
    if (window.innerWidth <= 1200) return;
    window.addEventListener("mousemove", (e) => mouseEffect(e));
  }, []);

  return (
    <>
      <MainContainer>
        {isLoading ? (
          <Loading />
        ) : (
          <>
            <HolidayDivsContainer>
              <div className="holidays-wrapper">
                {holidays.map((holiday, i) => (
                  <Holiday
                    holiday={holiday}
                    key={i}
                    onToggleOpen={handleToggleOpen}
                    setSelectedHoliday={setSelectedHoliday}
                  />
                ))}
              </div>
            </HolidayDivsContainer>
          </>
        )}
      </MainContainer>
      <Modal
        onToggleOpen={handleToggleOpen}
        isOpened={isOpened}
        selectedHoliday={selectedHoliday}
      />
      <Footer />
      <div className="dot"></div>
    </>
  );
}
