import daysLeft from "../functions/daysLeft";
import Summer from "./Summer";

export function SummerHoliday() {
  return (
    <div className="summer-holiday">
      <Summer>
        <p>החופש הגדול</p>
      </Summer>

      <Summer>
        <p>נותרו עוד {daysLeft(`${new Date().getFullYear()}-06-20`)} ימים</p>
      </Summer>
    </div>
  );
}
