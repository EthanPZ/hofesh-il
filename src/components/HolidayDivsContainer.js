import Featured from "./Featured";
import daysLeft from "../functions/daysLeft";
import FeaturedHoliday from "./FeaturedHoliday";
import { useEffect } from "react";
import { useState } from "react";

export default function HolidayDivsContainer({ children }) {
  const [summer, setSummer] = useState(0);
  const [school, setSchool] = useState(0);

  useEffect(() => {
    const thisYear = new Date().getFullYear();

    let summerDays = daysLeft(`${thisYear}-06-20`);
    let schoolDays = daysLeft(`${thisYear}-09-01`);

    if (summerDays <= 0) {
      schoolDays = daysLeft(`${thisYear}-09-01`);
    }

    if (schoolDays <= 0) {
      summerDays = daysLeft(`${thisYear + 1}-06-20`);
    }

    setSummer(summerDays);
    setSchool(schoolDays);
  }, []);

  return (
    <div className="holiday-divs-container">
      {summer <= 0 ? (
        <FeaturedHoliday>
          <Featured>
            <p>החזרה ללימודים</p>
          </Featured>

          <Featured>
            <p>
              {school > 1 ? `נותרו עוד ${school} ימים` : "נותר עוד יום אחד"}
            </p>
          </Featured>
        </FeaturedHoliday>
      ) : (
        <FeaturedHoliday>
          <Featured>
            <p>החופש הגדול</p>
          </Featured>

          <Featured>
            <p>
              {summer > 1 ? `נותרו עוד ${summer} ימים` : "נותר עוד יום אחד"}
            </p>
          </Featured>
        </FeaturedHoliday>
      )}
      {children}
    </div>
  );
}
