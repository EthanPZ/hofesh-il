import { createContext, useContext, useEffect, useState } from "react";
import { useUI } from "./UIContext";

const HolidaysContext = createContext();

function HolidaysProvider({ children }) {
  const [holidays, setHolidays] = useState([]);
  const [query, setQuery] = useState("");
  const [selectedHoliday, setSelectedHoliday] = useState(null);
  const { isLoading, setIsLoading, error, setError } = useUI();

  const holidaysArr = holidays
    .slice()
    .filter(
      (holiday) =>
        holiday.hebrew.includes(query) ||
        holiday.title.toLowerCase().includes(query)
    );

  const isNoResults = holidaysArr.length <= 0;

  useEffect(
    function () {
      async function fetchHolidays() {
        try {
          setError("");
          setIsLoading(true);
          const res = await fetch(
            "https://www.hebcal.com/hebcal/?v=1&cfg=json&maj=on&min=on&mod=on&year=now&month=x"
          );

          const data = await res.json();
          setHolidays(data?.items);
        } catch (err) {
          console.error(err);
          setError(
            "יש בעיה עם המידע, נסה לבדוק את האינטרנט שלך או נסה שוב מאוחר יותר... מצטערים 🙏"
          );
        } finally {
          setIsLoading(false);
        }
      }

      fetchHolidays();
    },
    [setError, setIsLoading]
  );

  return (
    <HolidaysContext.Provider
      value={{
        holidays,
        isLoading,
        error,
        query,
        setQuery,
        holidaysArr,
        isNoResults,
        selectedHoliday,
        setSelectedHoliday,
      }}
    >
      {children}
    </HolidaysContext.Provider>
  );
}

function useHolidays() {
  return useContext(HolidaysContext);
}

export { HolidaysProvider, useHolidays };
