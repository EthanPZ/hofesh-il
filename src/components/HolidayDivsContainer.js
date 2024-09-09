import Featured from "./Featured";
import daysLeft from "../functions/daysLeft";
import FeaturedHoliday from "./FeaturedHoliday";
import { useEffect } from "react";
import { useState } from "react";

export default function HolidayDivsContainer({ children }) {
  const [summer, setSummer] = useState(
    daysLeft(`${new Date().getFullYear()}-06-20`)
  );
  const [school, setSchool] = useState(
    daysLeft(`${new Date().getFullYear()}-09-01`)
  );

  useEffect(() => {
    if (summer <= 0) {
      setSummer(daysLeft(`${new Date().getFullYear() + 1}-06-20`));
    }

    if (school <= 0) {
      setSchool(daysLeft(`${new Date().getFullYear() + 1}-09-01`));
    }
  }, [summer, school]);

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
