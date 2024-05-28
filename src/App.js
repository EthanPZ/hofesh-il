import "boxicons";
import Footer from "./components/Footer";
import Holiday from "./components/Holiday";
import HolidayDivsContainer from "./components/HolidayDivsContainer";
import MainContainer from "./components/MainContainer";
import Modal from "./components/Modal";
import CurrentState from "./components/CurrentState";
import { useHolidays } from "./contexts/HolidaysContext";

export default function App() {
  const { isLoading, error, isNoResults, holidaysArr } = useHolidays();

  return (
    <>
      <MainContainer>
        {isLoading ? (
          <CurrentState>טוען...</CurrentState>
        ) : (
          <>
            {!isNoResults ? (
              <HolidayDivsContainer>
                <div className="holidays-wrapper">
                  {holidaysArr.map((holiday, i) => (
                    <Holiday holiday={holiday} key={i} />
                  ))}
                </div>
              </HolidayDivsContainer>
            ) : (
              <CurrentState>
                {error || "נסה לחפש משהו אחר, נראה שזה לא נמצא."}
              </CurrentState>
            )}
          </>
        )}
      </MainContainer>
      <Modal />
      <Footer />

      <div className="dot"></div>
      <div className="bg"></div>
    </>
  );
}
