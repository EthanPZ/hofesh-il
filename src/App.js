import "boxicons";
import Footer from "./components/Footer";
import Holiday from "./components/Holiday";
import HolidayDivsContainer from "./components/HolidayDivsContainer";
import MainContainer from "./components/MainContainer";
import Modal from "./components/Modal";
import CurrentState from "./components/CurrentState";
import { useHolidays } from "./contexts/HolidaysContext";
import Message from "./components/Message";

export default function App() {
  const { isLoading, error, isNoResults, holidaysArr } = useHolidays();

  return (
    <>
      <Message>
        <p>
          <strong>עדכון:</strong> היינו מודעים לבעיה עם התאריכים באתר, וכעת היא
          תוקנה. תודה על סבלנותכם.
        </p>
      </Message>

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
