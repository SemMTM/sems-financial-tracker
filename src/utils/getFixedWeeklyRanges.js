export default function getMonthWeeklyRanges(currentDate = new Date()) {
  const year = currentDate.getFullYear();
  const month = currentDate.getMonth(); // 0-indexed
  const totalDays = new Date(year, month + 1, 0).getDate(); // Days in month

  const weeks = [];
  let start = 1;

  while (start <= totalDays) {
    const startDate = new Date(year, month, start);
    const startDay = startDate.getDay(); // 0=Sunday, 1=Monday, ..., 6=Saturday

    let end;

    if (start === 1) {
      // First week special: go to upcoming Sunday
      if (startDay === 0) {
        // If 1st is Sunday, week is only that day
        end = 1;
      } else {
        end = 7 - (startDay - 1);
        end = Math.min(end, totalDays); // Don't go beyond month
      }
    } else {
      // Middle or last weeks: Monday → Sunday
      end = start + 6;
      end = Math.min(end, totalDays);
    }

    weeks.push({ start, end });
    start = end + 1;
  }

  return weeks;
}