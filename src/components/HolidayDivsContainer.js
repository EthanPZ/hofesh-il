import Featured from "./Featured";
import daysLeft from "../functions/daysLeft";
import FeaturedHoliday from "./FeaturedHoliday";

const summerDaysLeft = daysLeft(`${new Date().getFullYear()}-06-20`);
const backToSchoolDaysLeft = daysLeft(`${new Date().getFullYear()}-09-01`);

export default function HolidayDivsContainer({ children }) {
  return (
    <div className="holiday-divs-container">
      {summerDaysLeft <= 0 ? (
        <FeaturedHoliday>
          <Featured>
            <p>החזרה ללימודים</p>
          </Featured>

          <Featured>
            <p>נותרו עוד {backToSchoolDaysLeft} ימים</p>
          </Featured>
        </FeaturedHoliday>
      ) : (
        <FeaturedHoliday>
          <Featured>
            <p>החופש הגדול</p>
          </Featured>

          <Featured>
            <p>נותרו עוד {summerDaysLeft} ימים</p>
          </Featured>
        </FeaturedHoliday>
      )}
      {children}
    </div>
  );
}
