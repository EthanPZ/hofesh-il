import { SummerHoliday } from "./SummerHoliday";

export default function HolidayDivsContainer({ children }) {
  return (
    <div className="holiday-divs-container">
      <SummerHoliday />
      {children}
    </div>
  );
}
